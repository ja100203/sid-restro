import { Container, Typography } from '@mui/material'
import React from 'react'
import './homePage.css'

function About() {
  return (
    <Container id='About'>
      <Typography  className='first-title' component='h6' sx={{textAlign:'start'}} variant='h6'>About</Typography>
      <Typography className='second-title' component='h4' sx={{textAlign:'start'}} variant='h4'>Mariott</Typography>
      <Typography component='p'>We welcome you to sit back, unwind and appreciate the lovely sights and hints of the ocean while our best gourmet 
      expert sets you up for a scrumptious dinner utilizing the best and freshest ingredients.Mariott's legacy comes from The parent  Restaurant, 
      which was built in 1963.

     worked for people in general and has advanced into a combination of exquisite chic and contemporary fine charge.
      Enjoy our dazzling dishes and make the most of your eating background with us!
      
      </Typography>
    </Container>
  )
}

export default About
