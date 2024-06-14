import React from 'react'
import './Analysis.scss'

export default function Analysis() {
  return (
    <>
       <div className='container-fluid' id="analysis-c-f">
           <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className='col' id="analysis-item">
                            {/* <img src="" alt=""></img> */}
                            <img src="https://i.pinimg.com/originals/b2/68/5f/b2685fd5b513247d459c1884fcbae514.png" alt=""></img>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className='col' id="analysis-item">
                            <h3>Experience in Development</h3>
                            <p>I have 2.5 year Experience in development.</p>
                            <p><b>Email:</b> Garyan4563@gmail.com</p>
                            <a href="mailto:garyan4563@gmail.com" target='blank'><button className='btn btn-info'><i class="fa-solid fa-envelope"></i> Send me</button></a>
                        </div>
                    </div>
                </div>
           </div>
       </div>
    </>
    )
}
