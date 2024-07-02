import React from 'react'
import './Banner2.scss'
export default function Banner2(banner2title) {
  return (
    <>
       <div className="container-fluid p-0 " id="banner2-c-f">
           <div className="container-fluid" id="bn2-c-f2">
               <div className="container">
                   <h3>{banner2title.bannerName}</h3>
               </div>
           </div>
       </div>
    </>
    )
}
