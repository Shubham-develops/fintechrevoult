import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Image from 'next/image';
import Link from 'next/link';

const Footersection = (props) => {
  return (
    <Box component="section" className="footersection">
      <Box className="section">
        <Grid container>
          <Grid item sx={12} md={12} lg={12}>
            <Box className="footerdata">
              {props?.data?.footersection?.map((item, index) => (
                <Box className="footercontent" key={index}>
                  {item?.title && <Typography className='title'>{item?.title}</Typography>}
                  {Object.prototype.hasOwnProperty.call(item, 'footerdata') && (
                    
                    item.footerdata.map((footerItem, footerIndex) => (
                      <Box key={`footerdata_${footerIndex}`}>
                        {footerItem?.title && <Typography className='title'>{footerItem?.title}</Typography>}
                        <Box className="subtitledata">
                        {footerItem?.subtitle1 && <Typography className='subtitle'>{footerItem?.subtitle1}</Typography>}
                        {footerItem?.subtitle2 && <Typography className='subtitle'>{footerItem?.subtitle2}</Typography>}
                        {footerItem?.subtitle3 && <Typography className='subtitle'>{footerItem?.subtitle3}</Typography>}
                            {footerItem?.subtitle4 && <Typography className='subtitle'>{footerItem?.subtitle4}</Typography>}
                            {footerItem?.subtitle5 && <Typography className='subtitle'>{footerItem?.subtitle5}</Typography>}
                               
                        </Box>          
                      </Box>
                    ))
                  )}
                  <Box className="subtitledata">
                  {item?.subtitle1 && <Typography className='subtitle'>{item?.subtitle1}</Typography>}
                  {item?.subtitle2 && <Typography className='subtitle'>{item?.subtitle2}</Typography>}
                {item?.subtitle3 && <Typography className='subtitle'>{item?.subtitle3}</Typography>}
                {item?.subtitle4 && <Typography className='subtitle'>{item?.subtitle4}</Typography>}
                {item?.subtitle5 && <Typography className='subtitle'>{item?.subtitle5}</Typography>}
                {item?.subtitle6 && <Typography className='subtitle'>{item?.subtitle6}</Typography>}
                {item?.subtitle7 && <Typography className='subtitle'>{item?.subtitle7}</Typography>}
                {item?.subtitle8 && <Typography className='subtitle'>{item?.subtitle8}</Typography>}
                {item?.subtitle9 && <Typography className='subtitle'>{item?.subtitle9}</Typography>}
                {item?.subtitle10 && <Typography className='subtitle'>{item?.subtitle10}</Typography>}
                {item?.subtitle11 && <Typography className='subtitle'>{item?.subtitle11}</Typography>}
                {item?.subtitle12 && <Typography className='subtitle'>{item?.subtitle12}</Typography>}
                {item?.subtitle13 && <Typography className='subtitle'>{item?.subtitle13}</Typography>}
                {item?.subtitle14 && <Typography className='subtitle'>{item?.subtitle14}</Typography>}
                {item?.subtitle15 && <Typography className='subtitle'>{item?.subtitle15}</Typography>}
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid item sx={12} lg={12} className="footerbtm">
            <Box className="footerbottom" >
                <Link href=""><Image src="/footer-logo.png" width={76} height={18}/></Link>
            <Box className="footericon">
                <FacebookRoundedIcon className="icon"/>
                <TwitterIcon className="icon"/>
                <LinkedInIcon className="icon"/>
                <InstagramIcon className="icon"/>
            </Box>
            </Box>
          </Grid>
          <Grid item sx={12} md={12} lg={12}>
            {/* {props?.data?.map((footeritem,index)=>(
              <Box>
                <Box>
                  <Image src={footeritem?.img} width={50} height={50} className='imguk'/>
                </Box>
              </Box>
            ))} */}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footersection;
