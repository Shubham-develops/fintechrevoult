import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Columnbox = (props) => {
  return (
    <Box className="columnbox" component="section">
        <Box className="section">
            <Grid container>
                <Grid item sx={12} lg={12}>
                    {props?.data?.title && <Typography variant='h4' className='title'>{props?.data?.title}</Typography>}
                            <Box className="colcontent">
                    {
                        props?.data?.columndata?.map((item,index)=>(
                            <Box className="coldata">
                             
                                <Box>
                                {item?.coltitle && <Typography className='coltitle'>{item?.coltitle}</Typography>}
                                {item?.colsubtitle && <Typography className='colsubtitle'>{item?.colsubtitle}</Typography>}
                                {item?.colpara && <Typography className='colpara'>{item?.colpara}</Typography>}
                                </Box>
                                <Box>
                                    <ArrowForwardIcon className='arrowforward'/>
                                </Box>
                          

                             </Box>
                        ))
                    }
                            </Box>
                </Grid>
            </Grid>
        </Box>
    </Box>
  )
}

export default Columnbox