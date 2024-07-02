import React from 'react'
import Nav from '../Component/Nav/Nav'
import Banner2 from '../Component/Banner/Banner2'
import About1 from '../Component/About/About'
import Footer from '../Component/Footer/Footer'
import Research from '../Component/Research/Research'
import Analysis from '../Component/Analysis/Analysis'
import Customerreview from '../Component/Customerreview/Customerreview'

export default function About() {
  return (
     <>
       <Nav/>
       <Banner2 bannerName="About Us"/>
       <About1/>
       <Research/>
       <Analysis/>
       <Customerreview/>
       <Footer/>
      </>
    )
}
