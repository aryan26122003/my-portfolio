import React from 'react'
import './Customerreview.scss'

export default function Customerreview() {
  return (
    <>
        <div className='container-fluid' id="customer-c-f">
            <div className='container' id="customer-c">
                <div className='row'> 
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className='col'>
                            <h3>My Domain and Studies</h3>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className='col p-4' id="cust-item-wrap">
                            <div className='row' id="cust-item">
                                <div className='col-4'>
                                    <img src="https://i.pinimg.com/originals/4d/eb/fb/4debfbc87ced485231b9050729561367.png" alt="" className='d-block mx-auto'></img>
                                </div>
                                <div className='col-8'>
                                    <h6>Development</h6>
                                    <p> I've keep interest in development and with my programming skills and Experience. I can make your dream website & App into reality</p>
                                    {/* <p>I am good to go for development. with my programming skills and experience I build good web application, mobile app, chatbot etc. </p> */}
                                    {/* <p>Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.</p> */}
                                </div>
                            </div>
                        </div>  
                        <div className='col p-4' id="cust-item-wrap">
                            <div className='row' id="cust-item">
                                <div className='col-4'>
                                    <img src="https://i.pinimg.com/originals/e5/6b/1f/e56b1f6066de624e10ee85b0ec8311f3.png" alt="" className='d-block mx-auto'></img>
                                </div>
                                <div className='col-8'>
                                    <h6>UI & UX</h6>
                                    <p>UI & UX provides me with tools that help me create my creativity into reality. </p>
                                    {/* <p>I am good in UI and UX. I am good to use UI development tools. UI and UX skills provide me creativity in my development.</p> */}
                                    {/* <p>Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.</p> */}
                                </div>
                            </div>
                        </div>         
                    </div>
               
                </div>
            </div>
        </div>
    </>
  )
}
