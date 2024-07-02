import React from 'react'
import './Slove.scss'

export default function Slove() {
  return (
    <>
       <div className="container-fluid py-5" id='slove-cf'>
        <div className="container py-5" id='slove-c'>
            <h3 className='py-4'>Problem Solving</h3>
            <div className="row ">
                <div className=" col-lg-4 col-md-6 col-sm-12 mt-3">
                    <div className="col p-0"id='slove-wrap'>
                        <div className='col-12 p-0' id="slove-item">
                            {/* <img src={window.location.origin + '/leetcode.png'} /> */}
                            <img src="https://leetcode.com/static/images/LeetCode_Sharing.png" alt=''/>
                        </div>
                        <div className='col-12 py-4 text-center' id="slove-itema">
                            {/* <h5>Research & Planning</h5> */}
                            <h5 className=''>Leetcode</h5>
                            <div className="col">
                                <a href="https://leetcode.com/Yogi1606/"><button className='btn d-block mx-auto bg-info'>Leetcode Profile</button></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" col-lg-4 col-md-6 col-sm-12 mt-3">
                    <div className="col p-0"id='slove-wrap'>
                        <div className='col-12 p-0' id="slove-item">
                            <img src="https://5.imimg.com/data5/SELLER/Default/2023/10/354785340/GA/BS/CK/63475444/hackerrank-software.png" alt=''/>
                        </div>
                        <div className='col-12 py-4 text-center' id="slove-itema">
                            {/* <h5>Research & Planning</h5> */}
                            <h5 className=''>HackerRank</h5>
                            <div className="col">
                                <a href="https://www.hackerrank.com/profile/singhnaru68"><button className='btn d-block mx-auto bg-info'>HackerRank Profile</button></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" col-lg-4 col-md-6 col-sm-12 mt-3">
                    <div className="col p-0"id='slove-wrap'>
                        <div className='col-12 p-0' id="slove-item">
                            <img src="https://miro.medium.com/v2/resize:fit:600/1*_qEyZ2IU41N3LwrWXV43qg.jpeg" alt=''/>
                        </div>
                        <div className='col-12 py-4 text-center' id="slove-itema">
                            {/* <h5>Research & Planning</h5> */}
                            <h5 className=''>HackerEarth</h5>
                            <div className="col">
                                <a href="https://www.hackerearth.com/@Yogi1606"><button className='btn d-block mx-auto bg-info'>HackerEarth Profile</button></a>
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
