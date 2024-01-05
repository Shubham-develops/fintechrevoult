import { Box, Button, FormControl, Grid, InputLabel, NativeSelect, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const FilterSection = (props) => {
  return (
    <Box component="section" className='filterSection'>
        <Box className="section">
          {props?.data?.title && <Typography variant='h2' className='title'>{props?.data?.title}</Typography>}
          <Box className="menu">
            {
              props?.data?.menudata?.map((menuitem,index)=>(
                <Box className="menudata">
                  <FormControl key={index} className='formcontrol'>
                    <NativeSelect inputProps={{
                        name: 'age',
                        id: 'uncontrolled-native',
                      }}
                      className='menucontent'
                    >
                    {menuitem?.mainmenu && <option  className='menucont'>{menuitem?.mainmenu}</option>}
                    {menuitem?.menuone && <option className='menucont'>{menuitem?.menuone}</option>}
                    {menuitem?.menutwo &&  <option className='menucont'>{menuitem?.menutwo}</option>}
                    {menuitem?.menuthree &&  <option>{menuitem?.menuthree}</option>}
                    {menuitem?.menufour && <option>{menuitem?.menufour}</option>}
                    {menuitem?.menufive && <option>{menuitem?.menufive}</option>}
                    {menuitem?.menusix && <option>{menuitem?.menusix}</option>}
                    {menuitem?.menuseven && <option>{menuitem?.menuseven}</option>}
                    {menuitem?.menuEight && <option>{menuitem?.menuEight}</option>}
                    {menuitem?.menuNine && <option>{menuitem?.menuNine}</option>}
                    
                </NativeSelect>
                  </FormControl>
                </Box>
              ))
            }
            
          </Box>
          <Grid container className='filterContainer'>
                  <Grid className='filteritem' item sx={12} md={12} lg={12}>
                      <Box className="filtercontent">
                        {
                          props?.data?.filter.map((item,index)=>(
                            <Box key={index} className="filterdata">
                                <Box className="filter-box">
                                  <Box className="filter-image">
                                    {item?.image && <Image className='filterimg' src={item?.image} width={400} height={400}/>}
                                  </Box>
                                  <Box className="data">
                                    {item?.subtitle && <Typography className="subtitle" variant="h5">{item?.subtitle}</Typography>}
                                    {item?.para && <Typography className="para" variant="h2">{item?.para}</Typography>}
                                    {item?.date && <Typography className="date">{item?.date}</Typography>}
                                  </Box>
                                </Box>
                            </Box>
                          ))
                        }
                        {
                          props?.data?.filterdata.map((item,index)=>(
                            <Box key={index} className="filterdata filtertwo">
                                <Box className="filter-box">
                                  <Box className="filter-image">
                                    {item?.image && <Image className='filterimg filterimgtwo' src={item?.image} width={600} height={600}/>}
                                  </Box>
                                  <Box className="data">
                                    {item?.subtitle && <Typography className="subtitle" variant="h5">{item?.subtitle}</Typography>}
                                    {item?.para && <Typography className="para" variant="h2">{item?.para}</Typography>}
                                    {item?.date && <Typography className="date">{item?.date}</Typography>}
                                  </Box>
                                </Box>
                            </Box>
                          ))
                        }
                      </Box>
                  </Grid>
          </Grid>
          <Box className="menudatamore">
                
                  <Button className='btnmore'>
                    View More
                  </Button>
          </Box>
        
        </Box>  
    </Box>
  )
}

export default FilterSection