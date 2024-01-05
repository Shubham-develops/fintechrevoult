import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react'

const Columncard = (props) => {
  return (
    <Box className="columncard" component="section">
        <Box className="section">
        <Box className="colsection">
        {props?.data?.title && <Typography variant="h1" className='twocolcardtitle'>{props?.data?.title}</Typography>}
        {props?.data?.subtitle &&  <Typography variant="h1" className='twocolcardsubtitle'>{props?.data?.subtitle}</Typography>}
                <Grid container>
                    <Grid item sx={12} lg={12} className="cardgroup">
        {
             props?.data?.colcard?.map((item,index)=>(
                                <Box className={`twocolcard ${
                  index % 2 === 0 ? 'blackBackground' : 'blueBackground'
                }`} >
                                    {item?.coltitle && <Typography variant="h6" className='coltitle'>{item?.coltitle}</Typography>}
                                    {item?.coltext && <Typography variant="h6" className='coltext'>{item?.coltext}</Typography>}
                                    <Box className="colimage">
                                    {item?.colimage &&  <Image className='colcardimg' src={item?.colimage} width={400} height={400}/>}
                                    </Box>
                                </Box>
             ))
        }
                    </Grid>
                </Grid>
        </Box>
        </Box>
    </Box>
  )
}

export default Columncard;