import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'

const Footercta = (props) => {
  return (
    <Box component="section" className='footercta'>
        <Box className="section">
            <Grid container>
                <Grid item sx={12} md={12} lg={12} className='container'>
                    <Box className="ctafooter">
                        {props?.data?.title && <Typography className='ctatitle'>{props?.data?.title}</Typography>}
                        {props?.data?.subtitle && <Typography className='ctasubtitle'>{props?.data?.subtitle}</Typography>}
                        <Button className="btn">{props?.data?.btn && <Typography className='ctabtn'>{props?.data?.btn}</Typography>}</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    </Box>
  )
}

export default Footercta