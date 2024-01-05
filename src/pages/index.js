import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import mobileimg from "../../public/home-mobile-background-image.webp"
import bannerimg from "../../public/banner.webp"
import hero1 from "../../public/hero1.jpg"
import hero2 from "../../public/hero2.jpg"
import hero3 from "../../public/hero3.jpg"
import hero4 from "../../public/hero4.jpg"
import hero5 from "../../public/hero5.jpg"

import twocolleft from "../../public/twocolleft.webp"
import startfintech from "../../public/startfintech.webp"
import cardone from "../../public/card-one.webp"
import cardtwo from "../../public/card-two.webp"
import cardthree from "../../public/card-three.webp"
import cardfour from "../../public/card-four.webp"
import marythorn from "../../public/mary-thorn.webp"
import lifestyle from "../../public/lifestyle.webp"

import Herobanner from '@/components/herobanner'

import { Box } from '@mui/material'
import CtaSection from '@/components/Ctasection'
import TwocolCard from '@/components/twocol'
import HeroSection from '@/components/herosection'
import CardSection from '@/components/cardSection'
import Columncard from '@/components/twocolumncard'
import Header from '@/components/header'
import Columnbox from '@/components/columnbox'
import Footercta from '@/components/footercta'
import Footersection from '@/components/footersection'
import Layout from '@/pages/Layout'

const inter = Inter({ subsets: ['latin'] })


const herobanner={
  bannerimg:[
    {bannerimg:bannerimg?.src}, 
    {mobileimg:mobileimg?.src}
  ],
 
   preheading:"Payments Scube",
   heading:"Putting the FUN back into sending funds",
   bannerdescription:"Save valuable seconds, when sending money with Revolut",
   bannerbtn:"Get started"
  
}
const herosection=[
  {herotitle:"Sending money, easy by default",
  herosubtitle:"Moving money should never take more than a few taps. Transfers are always free between Revolut friends (and you can even add a gif, apparently the kids love it these days)",
  btn:"Try It Out",
  image:hero1?.src
},
{herotitle:"Request money in any combo",
  herosubtitle:"Choose your way to ask for money: send payment links, try ‘near me’ or flash QR codes, so there’s no escape from paying you back",
  btn:"Get Started",
  image:hero2?.src
},
{herotitle:"Make money chats less ~awk~",
  herosubtitle:"Use our encrypted Chat to settle up, swap gifs, and send reminders so you’ll never have to text your old flatmate, or ex, again",
  btn:"Learn More",
  image:hero3?.src
},
{herotitle:"Split and settle bills without the stress",
  herosubtitle:"From restaurant tabs to rent, split bills with anyone, even if they’re not on Revolut. Just tell us and we’ll do the maths",
  btn:"Try It Out",
  image:hero4?.src
},
{herotitle:"Share your @Revtag for easy social payments",
  herosubtitle:"Choose your unique username and generate a shareable URL to collect money from friends, family or anyone else, privately and securely. No bank details needed",
  btn:"Learn More",
  image:hero5?.src
}
]
const twocoldata={
    lefttitle:"Exchange money instantly in 29 currencies",
    leftsubtitle:"Learn more about Currency Exchange",
    colleftimg:twocolleft?.src,
    colrightimg:startfintech?.src,
    righttitle:"Send instant personal cash gifts or gift cards to loved ones",
    rightsubtitle:"Go to Gifting"
    
  }

const cardsection=
  {
    card1:cardone?.src,
    card1text:"Sending money has never been easierello",
    card2:cardtwo?.src,
    card2text:"Hello",
 
    card3:cardthree?.src,
    card3text:"Hello",
    card4:cardfour?.src,
    card4text:"Hello",

    text:"Don’t just take our word for it",
    texttitle:"Moving money couldn’t be easier"
  }

const twoColumnCard={
  title:"Payments and beyond",
  subtitle:"Here’s how Payments connect to the rest of Revolut",
  colcard:[
    {coltitle:"Spend abroad like a local with excellent exchange rates",
    coltext:"Learn more about Currency Exchange",
   colimage:lifestyle?.src},

  
    {coltitle:"Wire internationally at excellent exchange rates",
    coltext:"Check out International Payments",
   colimage:marythorn?.src}
  ]
}
const ctaSection={
  title:"What are you waiting for?",
  subtitle:"Start making easy transfers now",
  ctabtn:" Try Revolut Now"
}

export default function Home() {
  
  return (
    <>
     
      <Box className="main">  
          <Herobanner data={herobanner}/>
          <HeroSection data={herosection}/>
          <CardSection data={cardsection}/>
          <Columncard data={twoColumnCard}/>
          <TwocolCard data={twocoldata}/>
          <CtaSection data={ctaSection}/> 
      </Box>
    </>
  )
}

Home.getLayout = (page) => <Layout  title="One app, all things money | Revolut">{page}</Layout>;

