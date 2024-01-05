import { Box, Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const TwocolCard = (props) => {
  return (
    <Box className="twocolcard" component="section">
        <Box className="colcard">
            <Grid container className='cardcontainer'>
                <Grid item sx={12} md={8} className="carddata carddataleft">
                    <Box className="cardleft">
                            <Card className='leftcard'>
                                <CardContent className='cardcontent'>
                                    {props?.data?.lefttitle && <Typography className='leftcardtitle' variant="h1">{props?.data?.lefttitle}</Typography>}
                                    <Box className="subtitleleft">{props?.data?.leftsubtitle && <Link href="" className='cardleftsubtitle'>{props?.data?.leftsubtitle}</Link>}</Box>
                                    <Box>
                                        {props?.data?.colleftimg && <Image className='colleftimg' src={props?.data?.colleftimg} width={500} height={500}/>}
                                    </Box>
                                </CardContent>
                            </Card>
                    </Box>
                </Grid>
                <Grid item sx={12} md={4} className="carddata carddataright">
                    <Box className="cardleft">
                            <Card className='leftcard rightcard'>
                                <CardContent className='cardcontent'>
                                    <Box >
                                        {props?.data?.colrightimg && <Image className='colrightimg' src={props?.data?.colrightimg} width={40} height={40}/>}
                                    {props?.data?.righttitle && <Typography className='leftcardtitle righttitle' variant="h1">{props?.data?.righttitle}</Typography>}
                                    </Box>
                                    <Box className="subtitleleft">{props?.data?.rightsubtitle && <Link href="" className='cardleftsubtitle'>{props?.data?.rightsubtitle}</Link>}</Box>
                                </CardContent>
                            </Card>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    </Box>
  )
}

export default TwocolCard