import React from 'react'
import Home from '../components/Home/Home'
import About from '../components/Home/About'
import BookingBanners from '../components/Banners/BookingBanners'
import Menu from '../components/MenuCard/Menu'

function HomePage() {
  return (
    <div>
    <div className='home'>
    <Home/>
    </div>
    {/* About Page */}
    <About/>
    <BookingBanners/>
    {/* Home Page Menu */}
    <Menu/>
    </div>
  )
}

export default HomePage
