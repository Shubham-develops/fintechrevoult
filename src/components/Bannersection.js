import { Box, Button, Grid, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const Bannersection = (props) => {
  return (
    <Box component="section" className="bannersection" variant="h1">
        <Box className="section">
            <Grid container className='banner-container'>
                <Grid item sx={12} md={12} className='banner-item'>
                    {props?.data?.title && <Typography className='bannertitle' variant='h5'>{props?.data?.title}</Typography>}
                    {props?.data?.subtitle && <Typography className='bannersubtitle' variant="h1">{props?.data?.subtitle}</Typography>}
                    <Box className="banner-description">
                    {props?.data?.para && <Typography className='bannerpara'>{props?.data?.para}</Typography>}
                    {props?.data?.para2 && <Typography className='bannerpara2'>{props?.data?.para2}
                        <Link href="" className='banner-btn'>{props?.data?.btn}</Link>
                    </Typography>}
                    </Box>
                    <Box className="btndata">


                        {props?.data?.touchbtn && <Link href="" className='touchbtn'>{props?.data?.touchbtn}</Link>}
                  
                        {props?.data?.mediabtn && <Link href="" className='mediabtn'>{props?.data?.mediabtn}</Link>}
                    </Box>
                </Grid>
            </Grid>
        </Box>

    </Box>
  )
}

export default Bannersection