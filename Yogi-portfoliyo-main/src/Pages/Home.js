import React from 'react'
import Nav from '../Component/Nav/Nav'
import Banner from '../Component/Banner/Banner'
import About from '../Component/About/About'
import Service from '../Component/Service/Service'
// import Research from '../Component/Research/Research'
import Analysis from '../Component/Analysis/Analysis'
import Work from '../Component/Work/Work'
import Customerreview from '../Component/Customerreview/Customerreview'
// import Workstogether from '../Component/Worktogether/Workstogether'
import Footer from '../Component/Footer/Footer'
// import Admin from '../Component/Admin/Admin'

export default function Home() {
  return (
    <>
       <Nav/>
       <Banner/>
       <About/>
       <Service/>
       {/* <Research/> */}
       <Analysis/>
       <Work/>
       <Customerreview/>
       {/* <Workstogether/> */}
       <Footer/>
       {/* <Admin/> */}
    </>
    )
}
