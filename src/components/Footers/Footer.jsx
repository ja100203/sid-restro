import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

function Footer() {
  return (
    <Box className='footer'>
    <Typography component='p'>
        Copyright ©2023 All rights reserved | Developed by
         <Link to="">Jahnavi Lenka</Link></Typography>
</Box>
  )
}

export default Footer
