import React from 'react'
import Nav from '../Component/Nav/Nav'
import Banner2 from '../Component/Banner/Banner2'
import Myskills from '../Component/Myskills/Myskills'
import Footer from '../Component/Footer/Footer'
// import Customerreview from '../Component/Customerreview/Customerreview'

export default function Skills() {
  return (
    <>
       <Nav/>
       <Banner2 bannerName="My Skills"/>
       <Myskills/>
       {/* <Customerreview/> */}
       <Footer/>
    </>
  )
}
