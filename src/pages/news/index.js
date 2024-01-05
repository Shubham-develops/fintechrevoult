import Bannersection from '@/components/Bannersection'
import Layout from '@/pages/Layout'
import Newscta from '@/components/newscta'
import { Box } from '@mui/material'
import React from 'react'
import credit from "../../../public/credit.webp"
import splash from "../../../public/splash.webp"
import card from "../../../public/card.webp"
import filter from "../../../public/filter.webp"
import image1 from "../../../public/image1.webp"
import image2 from "../../../public/image2.webp"
import image3 from "../../../public/image3.webp"
import image4 from "../../../public/image4.webp"
import image5 from "../../../public/image5.webp"
import image6 from "../../../public/image6.webp"

import FilterSection from '@/components/filterSection'

const bannerdata={
    title:"What’s in the news?",
    subtitle:"News and Media",
    para:"Please write to us at media@revolut.com if you have a media enquiry. We'll do our best to get back to you as soon as possible.",
    para2:"Please note that media@revolut.com cannot respond to customer requests. If you're a customer visit our ",
    btn:"Contact Us Page",
    touchbtn:"Get in touch",
    mediabtn:"Images for media"
 
}
const newscta={
    title:"Get in touch",
    subtitle:"For media queries get in touch at SCube.co"
}
const filterSection={
  title:"Latest News",
  menudata:[
      {
        mainmenu:"All Topics",
        menuone:"Business",
        menutwo:"Professional"
      },
      {
        mainmenu:"Global News",
        menuone:"Australia",
        menutwo:"Austria",
        menuthree:"Bulgaria",
        menufour:"Denmark",
        menufive:"Global News",
        menusix:"India"
      },
      {
        mainmenu:"All Years",
        menuone:"2023",
        menutwo:"2022",
        menuthree:"2021",
        menufour:"2020",
        menufive:"2019",
        menusix:"2018",
        menuseven:"2017",
        menuEight:"2016",
        menuNine:"2015"
      }
  ],
  filter:[
    {
      image:credit?.src,
      subtitle:"Business",
      para:"Revolut secures Australian Credit Licence",
      date:"09 Feb 2022"
    },
    {
      image:splash?.src,
      subtitle:"Business",
      para:"Hair we go! Brits splash their cash as they flock to the hairdressers, the pub a...",
      date:"12 Apr 2021"
    },
    {
      image:card?.src,
      subtitle:"Business",
      para:"Revolut posts over £100m adjusted EBITDA with £26.3m profit in first full year o...",
      date:"01 Mar 2023"
    },
    {
      image:filter?.src,
      subtitle:"Business",
      para:"Revolut launches responsible Pay Later instalments product in Ireland",
      date:"20 Sept 2022"
    }
  ],
  filterdata:[
    {
      image:image1?.src,
      subtitle:"Professional",
      para:"Revolut unveils new fleet of machine learning technology that has seen a fourfol...",
      date:"17 Nov 2018"
    },
    {
      image:image2?.src,
      subtitle:"Professional",
      para:"Revolut Business launches affordable acquiring in 16 new European countries",
      date:"27 Jan 2021"
    },
    {
      image:image3?.src,
      subtitle:"Professional",
      para:"Revolut partners with Comic Relief to make donating easier and more accessible",
      date:"17 Mar 2023"
    },
    {
      image:image4?.src,
      subtitle:"Business",
      para:"Revolut is proud to announce the newest members of its  global partnership, the ...",
      date:"24 Feb 2023"
    },
    {
      image:image5?.src,
      subtitle:"Professional",
      para:"Revolut announces Ultra, a new top-tier membership",
      date:"25 Jan 2023"
    },
    {
      image:image6?.src,
      subtitle:"Business",
      para:"Christmas shopping down - Travel unharmed by December strikes, but local busines...",
      date:"09 Jan 2023"
    },
  ]
}
const News = () => {
  return (
    <Box className="newsmain">
   
        <Bannersection data={bannerdata}/>
        <FilterSection data={filterSection}/>
        <Newscta data={newscta}/>

    </Box>
  )
}

export default News

News.getLayout = (page) => <Layout  title="News and Media | Revolut">{page}</Layout>;