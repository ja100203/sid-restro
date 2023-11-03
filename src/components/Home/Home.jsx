import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './homePage.css'

function Home() {
  return (
    <Box className='content'>
      <Typography component='h6' variant='h6'>Satisfy Your Cravings</Typography>
      <Typography component='h2' variant='h2'>Delicious Foods With Wonderful Eating</Typography>
      <Typography component='p'>Where Every Bite Tells a Delicious Story!</Typography>
      <Link to='/booking'>
      <Button variant='contained' type='button'>Book Table Now</Button>
      </Link>
    </Box>
  )
}

export default Home;
