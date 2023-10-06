import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function TableUser() {
    const [users, setUsers] = useState()
    const [key, setKey] = useState('')
    const [totalData, setTotalData] = useState(10)
    const [limit, setLimit] = useState(10)
    const [skip, setSkip] = useState(0)
    const [totalPage, setTotalPage] = useState(0)
    const [page, setPage] = useState(1)
    const [activeBtn, setActiveBtn] = useState(1)

    // useEffect(() => {
    //     getDataUser()
    // }, [])

    useEffect(() => {
        const getDataUser = async () => {
            try {
                const result = await axios({
                    method: 'GET',
                    url: `https://dummyjson.com/users/search?q=${key}&limit=${limit}&skip=${skip}`,
                })
                setUsers(result.data)
                setTotalData(result.data.total)
                setTotalPage(Math.ceil(result.data.total / limit))
            }
            catch (err) {
                console.log(err)
            }
        }
        getDataUser()
    }, [key, limit, skip])

    const handleNextPage = useCallback(() => {
        setSkip(skip + limit)
        setPage(page + 1)
        setActiveBtn(page + 1)

    }, [skip, limit, page])
    const handlePrevPage = useCallback(() => {
        if (page > 1) {
            setSkip(skip - limit);
            setPage(page - 1);
            setActiveBtn(page - 1)
        }
    }, [skip, limit, page]);

    const handleSelectPage = useCallback((page) => {
        setSkip((page - 1) * limit)
        setPage(page)
        setActiveBtn(page)
    }, [limit])

    return (
        <div className="main">
            <div className="wrapper-table bg-white m-5 p-3 rounded">
                <div className="wrapper-table-header d-flex pb-3">
                    <h3 className="col-lg-3">Clients</h3>
                    <form className="d-flex col-md-4 offset-md-5" role="search">
                        <div className="form-group wrapper-search ">
                            <i className="fa-solid fa-magnifying-glass icon-search"></i>
                            <input className="form-control me-2 text-search" type="search" placeholder="Search" aria-label="Search" onChange={(e) => {
                                setKey(e.target.value)
                            }} />
                        </div>
                    </form>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th className="table-secondary">Name</th>
                            <th className="table-secondary">Company</th>
                            <th className="table-secondary">Departement</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.users?.map((user, index) => {
                            return (
                                <tr key={index}>
                                    <td>{`${user.firstName} ${user.lastName}`}</td>
                                    <td>{`${user.company.name}`}</td>
                                    <td>{`${user.company.department}`}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        {page > 1 ? <li className="page-item" onClick={handlePrevPage}>
                            <Link className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </Link>
                        </li>
                            : <li className="page-item">
                                <Link className="page-link disabled" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </Link>
                            </li>
                        }

                        {[...Array(totalPage)].map((item, index) => (
                            <li className={`page-item ${activeBtn === index + 1 ? 'active' : ''}`} key={index}>
                                <Link className="page-link " href="#" onClick={() => handleSelectPage(index + 1)}>{index + 1}</Link></li>
                        ))}
                        {page < totalPage ?
                            <li className="page-item" onClick={handleNextPage}>
                                <Link className="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </Link>
                            </li>
                            : <li className="page-item">
                                <Link className="page-link disabled" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </Link>
                            </li>}
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default TableUser