import { Box, Button, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const HeroSection = (props) => {
  return (
    <Box className="herosection" component="section">
      <Box className="section">
        <Grid container>
          <Grid item sx={12} md={12} className='herocard'>
            {props?.data?.map((item, index) => (
              <Box className="herodata" key={index}>
                {index % 2 === 0 ? ( // Check if index is even for alternating left and right
                  <>
                    <Box className="heroleft">
                      <Box className="herolefttop">
                        {item?.herotitle && (
                          <Typography variant='h1' className='herotitle'>
                            {item?.herotitle}
                          </Typography>
                        )}
                        {item?.herosubtitle && (
                          <Typography variant='h1' className='herosubtitle'>
                            {item?.herosubtitle}
                          </Typography>
                        )}
                      </Box>
                      <Button className="heroleftbottom">
                        {item?.btn && <Link href="" className='herobtn'>{item?.btn}</Link>}
                        <ArrowForwardIcon className='arrowicon'/>
                      </Button>
                    </Box>
                    <Box className="heroright">
                      {item?.image && <Image className='image' src={item?.image} width={460} height={450}/>}
                    </Box>
                  </>
                ) : (
                  <>
                    <Box className="heroright">
                      {item?.image && <Image className='image' src={item?.image} width={460} height={450}/>}
                    </Box>
                    <Box className="heroleft">
                      <Box className="herolefttop">
                        {item?.herotitle && (
                          <Typography variant='h1' className='herotitle'>
                            {item?.herotitle}
                          </Typography>
                        )}
                        {item?.herosubtitle && (
                          <Typography variant='h1' className='herosubtitle'>
                            {item?.herosubtitle}
                          </Typography>
                        )}
                      </Box>
                      <Box className="heroleftbottom">
                        {item?.btn && <Link href="" className='herobtn'>{item?.btn}</Link>}
                        <ArrowForwardIcon className='arrowicon'/>
                      </Box>
                    </Box>
                  </>
                )}
              </Box>
            ))}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default HeroSection;
