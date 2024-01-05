import { Box, Grid, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const CtaSection = (props) => {
  return (
    <Box className="ctasection" component="section">
        <Box className="ctacontent">
            <Grid container>
                <Grid item sx={12} lg={12} className='ctadescription'>
                    <Box className="ctadata">
                    {props?.data?.title && <Typography variant="h1" className='ctatitle'>{props?.data?.title}</Typography>}
                    {props?.data?.subtitle && <Typography variant="body1" className='ctasubtitle'>{props?.data?.subtitle}</Typography>}
                    <Box component="btnbox">
                    {props?.data?.ctabtn && <Link href="" className='ctabutton'>{props?.data?.ctabtn}</Link>}
                    </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    </Box>
  )
}

export default CtaSection