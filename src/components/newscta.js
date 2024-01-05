import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const Newscta = (props) => {
  return (
    <Box component="section" className='newscta'>
        <Box className="section">
            <Grid container className="newscontainer">
                <Grid item sx={12} md={12} className="newsitem">
                    {props?.data?.title && <Typography className='newstitle' variant="h2">{props?.data?.title}</Typography>}
                    {props?.data?.subtitle && <Typography className='newssubtitle'>{props?.data?.subtitle}</Typography>}
                </Grid>
            </Grid>
        </Box>

    </Box>
  )
}

export default Newscta