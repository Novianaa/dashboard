import React from 'react'
import '../../assets/css/navbar.css'
import { Link } from 'react-router-dom'
import Flag from '../../assets/img/flag.png'
import Photo from '../../assets/img/Beared-Guy.png'

function Navbar() {
    return (
        <>
            <header className="navbar navbar-expand-lg header">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        {/* <form className="d-flex" role="search">
                            <div className="form-group wrapper-search ">
                                <i className="fa-solid fa-magnifying-glass icon-search"></i>
                                <input className="form-control me-2 text-search" type="search" placeholder="Search" aria-label="Search" />
                            </div>
                        </form> */}
                        <div className="nav-right d-lg-flex justify-content-around align-items-center col-lg-5 col-md-12 col-sm-12 " >
                            <div className="nav-item d-flex align-items-center py-2">
                                <div className="wrapper-img-flag col-md-1 text-center">
                                    <img src={Flag} alt='flag' className='W' />
                                </div>
                                <div className="flag-text d-lg-none px-3 col-md-3">English</div>
                            </div>
                            <div className="nav-item d-flex align-items-center py-2 ">
                                <i className="fa-regular fa-bell col-md-1 text-center" ></i>
                                <div className="flag-text d-lg-none px-3 col-md-3 ">Notifications</div>
                            </div>
                            <div className="nav-item d-flex align-items-center py-2">
                                <i className="fa-regular fa-envelope r col-md-1 text-center"></i>
                                <div className="flag-text d-lg-none px-3 col-md-3" >Inbox</div>
                            </div>
                            <div className="nav-item dropdown wrapper-dropdown col-lg-8">
                                <Link className="nav-link dropdown-toggle d-flex  align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <div className="wrapper-profile d-flex justify-content-between col-lg-11 col-md-5 ]">
                                        <div className="wrapper-img-profile col-md-2 text-center">
                                            <img src={Photo} alt='pprofile' className='p-1' />
                                        </div>
                                        <div className="profile-text col-md-9 align-items-center">
                                            <div className="profile-top pb-1">
                                                Austin Robertson
                                            </div>
                                            <div className="profile-bottom">
                                                Marketing Administrator
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" href="#">Setting</Link></li>
                                    <li><Link className="dropdown-item" href="#">Log Out</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar