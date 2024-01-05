import { Box, Button, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Herobanner = (props) => {
  return (
    <Box component="section" className='herobanner'>
      <Box className="banner">
        <Grid container>
          <Grid item sx={12} lg={12}>
          <Box className="banner-image">
        {
          props?.data?.bannerimg?.map((image, index) => (
            <Box className="bannerimage" key={index}>
              {image?.bannerimg && !image?.mobileimg && (
                <Image src={image?.bannerimg} className='bannerimg' width={1200} height={600}/>
              )}
              {!image?.bannerimg && image?.mobileimg && (
                <Image src={image?.mobileimg} className='mobileimg' width={1200} height={600}/>
              )}
            </Box>
          ))
        }
        </Box>
        <Box className="bannerdata">
            <Box className="banner-content">
                {props?.data?.preheading && <Typography variant='h5' className='preheading'>{props?.data?.preheading}</Typography>}
                        {props?.data?.heading && <Typography className='heading'>{props?.data?.heading}</Typography>}
                        {props?.data?.bannerdescription && <Typography className='bannerdescription'>{props?.data?.bannerdescription}</Typography>}
                        <Button className="btn">
                            <Link href="" className='bannerbtn'>{props?.data?.bannerbtn}</Link>
                        </Button>
             </Box>
        </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Herobanner;
