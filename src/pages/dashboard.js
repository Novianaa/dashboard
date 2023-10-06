import React from 'react'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'
import Metatags from '../components/Metatags'
import TableUser from '../components/tableUser'
import '../assets/css/dashboard.css'

function dashboard() {
  return (
    <div className='grid-container'>
      <Metatags title={'Dashboard'} />
      <Sidebar />
      <Navbar />
      <TableUser />
    </div>
  )
}

export default dashboard