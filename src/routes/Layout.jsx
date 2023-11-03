import React from 'react'
import NavBar from '../components/Header/Navbar'
import Footer from '../components/Footers/Footer'
import PageRoutes from './PageRoutes'

function Layout() {
  return (
    <div>
      <NavBar/>
      <PageRoutes/>
      <Footer/>
    </div>
  )
}

export default Layout
