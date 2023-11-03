import React from 'react'
import { Route,Routes } from 'react-router'
import HomePage from '../pages/HomePage'
import Signup from '../Validate/Signup'
import Login from '../Validate/Login'
import MenuPage from '../pages/MenuPage'
import Booking from '../pages/Booking'

function PageRoutes() {
  return (
    <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='home' element={<HomePage/>}/>
    <Route path='signup' element={<Signup/>}/>
    <Route path='login' element={<Login/>}/>
    <Route path='/menu' element={<MenuPage/>}/>
    <Route path='/booking' element={<Booking/>}/>

    </Routes>
  )
}

export default PageRoutes
