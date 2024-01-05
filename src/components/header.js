import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { Button } from '@mui/material';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header(props) {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [showMegaMenu, setShowMegaMenu] = React.useState(false); 

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMegaMenuClick = () => {
    setShowMegaMenu(!showMegaMenu);
  };

  return (
    <AppBar position="fixed" className='head-section'>
      <Toolbar className="header">
        <Box className="header-content">
          <Box className="header-data">
            <Box className="headerleft">
              <Image src="/revoult.svg" className='header-img' width={105} height={24}/>
              <Link href="/" className='link'><Typography className='home headertxt' >{props?.data?.home}</Typography></Link>
              <Link href="/news" className='link'><Typography className='news headertxt' >{props?.data?.news}</Typography></Link>
              <Link href="" className='link'><Typography className='revoult headertxt' >{props?.data?.revoult}</Typography></Link>
              <Link href="" className='link'><Typography className='helpcenter headertxt' >{props?.data?.helpcenter}</Typography></Link>
            </Box>
            <Box className="btn">
              <Button className='logbtn'>{props?.data?.logbtn}</Button>
              <Button className='signbtn'>{props?.data?.signbtn}</Button>
              <Box className='menubtn btn' onClick={handleMegaMenuClick}>
                <MenuIcon className='menu'/>
              </Box>
            </Box>
          </Box>
        </Box>
        {showMegaMenu && ( 
          <Box className="megamenu">
            <Box className="menudata">
              <Box className="menu">
                <Link href="" className='link'><Typography className='home headertxt' >{props?.data?.home}</Typography></Link>
                <Link href="" className='link'><Typography className='news headertxt' >{props?.data?.news}</Typography></Link>
                <Link href="" className='link'><Typography className='revoult headertxt' >{props?.data?.revoult}</Typography></Link>
                <Link href="" className='link'><Typography className='helpcenter headertxt' >{props?.data?.helpcenter}</Typography></Link>
              </Box>
              <Box className="btn">
                <Button className='logbtn'>{props?.data?.logbtn}</Button>
                <Button className='signbtn'>{props?.data?.signbtn}</Button>
              </Box>
            </Box>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
