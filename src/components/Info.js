import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import ImagenGitHub from '../assets/img/github_PNG15.png'

const Info = () => {
  return (
    <Box sx={{display:'flex',justifyContent:'center'}}>
        <Box>
        <picture>
            <img src={ImagenGitHub} alt='gatito'/>
        </picture>
        </Box>
        <Box component='section'>
            <Box component='div'>
                <Typography variant='h4'>Octocat</Typography>
                <Typography variant='h6'>@Octocat</Typography>
                <Typography variant='h6'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</Typography>
                <Paper>
                    <Typography>Tabla aqui</Typography>
                </Paper>
            </Box>
        </Box>
    </Box>
  )
}

export default Info