import React, { useState } from 'react'
import '../../assets/css/sidebar.css'
import Brand from '../../assets/img/brand.png'
import { Link } from 'react-router-dom'

function Sidebar() {
  const [showSubMenu, setShowSubMenu] = useState(false)
  const handleShow = () => {
    setShowSubMenu(!showSubMenu)
  }
  return (
    <aside className='sidebar'>
      <div className="header-sidebar d-flex p-0 m-0 justify-content-evenly align-items-center">
        <div className="wrapper-logo">
          <img src={Brand} alt='logo' />
        </div>
        <h4 className="text-header-sidebar">Hope</h4>
        {/* <h6 className="text-header-sidebar">X</h6> */}
      </div>
      <hr className='bg-warning m-0' />
      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <Link to='/' className='wrapper-text-menu d-flex' >
            <i className="me-4 fa-solid fa-grip col-lg-2 icons "></i>
            <div className="icon-text">
              Dashboard
            </div>
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to='#' className='wrapper-text-menu d-flex'>
            <i className="me-4 fa-solid fa-clipboard-list col-lg-2 icons"></i>
            <div className="icon-text">
              History
            </div>
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to='#' className='wrapper-text-menu d-flex'>
            <i className="me-4 fa-solid fa-users col-lg-2 icons "></i>
            <div className="icon-text">
              Users
            </div>
          </Link>
        </li>
        <li className='sidebar-list-item' onClick={handleShow}>
          <Link to='#' className='wrapper-text-menu d-flex'>
            <i className="me-4 fa-solid fa-sliders col-lg-2 icons"></i>
            <div className="icon-text">
              Request
            </div>
            {showSubMenu ? <i className="fa-solid fa-chevron-down col-lg-3 hidden text-end"></i> : <i className="hidden fa-solid fa-chevron-right col-lg-3  text-end"></i>}
          </Link>
          {showSubMenu && <ul id='subMenuId' className='sidebar-sub-list'>
            <li className='wrapper-sub-menu '>
              <Link to='#' className='wrapper-text-sub-menu d-flex'>
                <i className="me-4 fa-solid fa-sliders col-lg-2 icons"></i>
                <div className="icon-text">
                  Transactions
                </div>
              </Link>
            </li>
            <li className='wrapper-sub-menu'>
              <Link to='#' className='wrapper-text-sub-menu d-flex'>
                <i className="me-4 fa-solid fa-sliders col-lg-2 icons"></i>
                <div className="icon-text">
                  Acount
                </div>
              </Link>
            </li>
          </ul>
          }
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar