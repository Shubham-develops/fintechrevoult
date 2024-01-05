import React from 'react'
import Header from '../components/header'
import Footercta from '../components/footercta'
import Footersection from '../components/footersection'
import Head from 'next/head'
import { Box } from '@mui/material'
import Columnbox from '../components/columnbox'

import revoult from "../../public/revoult.svg"
import footeruk from "../../public/footer.svg"


const header={
    revoult: revoult?.src,
    home:"Home",
    news:"News",
    revoult:"Revoult",
    helpcenter:"Help Center",
    logbtn:"Log In",
    signbtn:"Sign Up",
  
  }

const footercta={
    title:"What are you waiting for?",
    subtitle:"Get the only financial super app",
    btn:"Try Revolut Now"
  }
const footer={
  
     footersection:[
      {
        title:"Essentials",
        subtitle1:"Payments",
        subtitle2:" Currency exchange",
        subtitle3:" International transfers",
        subtitle4:" Cards",
        subtitle5:" Revolut Pro",
        subtitle6:" Revolut Pro",
        subtitle7:" Open banking",
        subtitle8:"Early salary",
        subtitle9:"Revolut <18 Parents & Guardians",
        subtitle10:"Subscriptions",
        subtitle11:"Budgeting and analytics",
        subtitle12:"Products"
      },
      {footerdata:[
        {
          title:"Wealth",
          subtitle1:" Crypto",
          subtitle2:"Stocks",
          subtitle3:"Commodities",
          subtitle4:"Vaults",
          subtitle5:"Saving vaults",
        },
        {
          title:"Security",
          subtitle1:" Security",
          subtitle2:"About Fraud and Scams"
        }
      ]},
      {
        title:"Lifestyle",
        subtitle1:" Rewards",
        subtitle2:" Stays",
        subtitle3:" Pet Insurance",
        subtitle4:"  Donations",
        subtitle5:" Gifting",
        subtitle6:" Lounge & Smart delay",
        subtitle7:"Revolut Shopper",
        subtitle8:"Shops",
      },
      {footerdata:[
        {
          title:"Help",
          subtitle1:"Customer help",
          subtitle2:" System status",
          subtitle3:"Community",
          subtitle4:" Developers API",
          subtitle5:" Site Map",
          
        },
        {
          title:"Palns",
          subtitle1:"Standard",
          subtitle3:"Plus",
          subtitle2:"Premium",
          subtitle4:"Metal",
          subtitle5:"Compare Plans"
        }
      ]},
      {
        title:"Company",
        subtitle1:"About Us",
        subtitle2:"Culture",
        subtitle3:"Diversity and Inclusion",
        subtitle4:" Code of conduct",
        subtitle5:"Sustainability",
        subtitle6:"Carrier",
        subtitle7:"Benefits",
        subtitle8:"Blog",
        subtitle9:"News and Media",
        subtitle10:"Leadership",
        subtitle11:"Affiliates",
        subtitle12:"Rev-celerator Programme",
        subtitle13:"Contact",
        subtitle14:"Financial statements",
        subtitle15:"Rev-celerator Programme"
      },
    ],
    img:footeruk?.src,
    uk:"United Kingdom",
    lists:[
      {list:"Website terms"},
      {list:"Legal  Agreements"},
      {list:"Website terms"},
      {list:"Website terms"},
      {list:"Website terms"},
  
    ],
    para:"© Revolut Ltd 2023 If you would like to find out more about which Revolut entity you receive services from, or if you have any other questions, please reach out to us via the in-app chat in the Revolut app. Revolut Ltd (No. 08804411) is authorised by the Financial Conduct Authority under the Electronic Money Regulations 2011 (Firm Reference 900562). Registered address: 7 Westferry Circus, Canary Wharf, London, England, E14 4HD. Insurance related-products are arranged by Revolut Travel Ltd which is authorised by the Financial Conduct Authority to undertake insurance distribution activities (FCA No: 780586) and by Revolut Ltd, an Appointed Representative of Revolut Travel Ltd in relation to insurance distribution activities. Trading and investment products are provided by Revolut Trading Ltd (No. 832790) is wholly owned subsidiary of Revolut Ltd and is an appointed representative of Resolution Compliance Ltd which is authorised and regulated by the Financial Conduct Authority. We are also registered with the Financial Conduct Authority to offer cryptocurrency services under the Money Laundering, Terrorist Financing and Transfer of Funds (Information on the Payer) Regulations 2017. Revolut's commodities service is not regulated by the FCA.",
    data:[
          {
            data1:"Money Transfer:",
            datalist:[
              {list1:"Send money to India"},
              {list1:"Send money to the USA"},
              {list1:"Send money to Canada"},
            ]
          },
          {
            data1:"Money Transfer:",
            datalist:[
              {list1:"Send money to India"},
              {list1:"Send money to the USA"},
              {list1:"Send money to Canada"},
            ]
          },
          {
            data1:"Money Transfer:",
            datalist:[
              {list1:"Send money to India"},
              {list1:"Send money to the USA"},
              {list1:"Send money to Canada"},
            ]
          }
    ]
  }
const columnbox={
    title:"Choose your plan",
    columndata:[
      {
        coltitle:"Standard",
        colsubtitle:"Free",
        colpara:"Whether you're looking to save money spending abroad or sticking to your budget with our built-in budgeting, get more from your money with our Standard account",
  
      },
      {
        coltitle:"Plus",
        colsubtitle:"£2.99/month",
        colpara:"Give your everyday finances a boost. Get more out of your money for less than the cost of a coffee",
        
      },
      {
        coltitle:"Premium",
        colsubtitle:"£6.99/month",
        colpara:"Upgrade to a global lifestyle. Get the confidence to spend, invest, and save smarter across the globe",
        
      },
      {
        coltitle:"Metal",
        colsubtitle:"£12.99/month",
        colpara:"Unlock your money's potential. Make your money work for you with 2.76% interest paid daily on savings, cashback, low-fee crypto and much more",
        
      }
    ]
  }


const Layout = ({children,title}) => {
  return (
    <Box>
     <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.webp" />
      </Head>
    <Header data={header} />
        {children}
    <Columnbox data={columnbox}/>
    <Footercta data={footercta}/>
    <Footersection data={footer}/>
    </Box>
  )
}

export default Layout