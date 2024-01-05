import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const CardSection = (props) => {
  return (
    <Box component="section" className='cardsection'>
        <Box className="section">
            <Grid container className='container'>
                <Grid item sx={12} className="containerdata">
                    <Box className="card">
                        <Box className="cardcontent">
                            <Box className="cardimg1">
                                <Image className='img1' src={props?.data?.card1} width={230} height={280}/>
                                <Image className='img2' src={props?.data?.card2} width={230} height={280}/>
                            </Box>
                            <Box className="cardimg2">
                                <Image className='img3' src={props?.data?.card3} width={230} height={280}/>
                                <Image className='img4' src={props?.data?.card4} width={230} height={280}/>
                            </Box>
                        </Box>
                        <Box className="cardtext">
                            {props?.data?.text && <Typography className="text">{props?.data?.text}</Typography>}
                            {props?.data?.texttitle && <Typography className="texttitle">{props?.data?.texttitle}</Typography>}
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    </Box>
  )
}

export default CardSection