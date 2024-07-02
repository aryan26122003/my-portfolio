import React from 'react'
import './Work.scss'
export default function Work() {
  return (
    <>
       <div className='container-fluid' id="work-c-f">
            <div className='container' id="work-c">
                {/* <h3 className='text-center'>Our Work</h3> */}
                <h3 className='text-center'>My Projects</h3>
                <div className='row'>
                    
                    <div className='col-lg-4 col-md-6 col-sm-12' id="work-item-wrap">
                        <div className='col p-0' id="work-item">
                            <img src="https://i.pinimg.com/564x/4d/2c/73/4d2c73d8d33f2a7b4fa9ae44668e66e9.jpg" alt=""></img>
                            <p><b>Weather forecasting via c++ </b></p>
                            <button className="btn btn-info"><a href="https://github.com/aryan26122003/cpp-weather-forecasting" target='blank' className='text-white'>Click Here</a></button>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12' id="work-item-wrap">
                        <div className='col p-0' id="work-item">
                            <img src="https://i.pinimg.com/564x/d5/c1/c5/d5c1c568905cce5f31f3bdc774c2bcff.jpg" alt=""></img>
                            <p><b>Hotel Management</b></p>
                            <button className="btn btn-info"><a href="https://github.com/aryan26122003/Stay-in-hotel---hotel-management-system"className='text-white' target='blank'>Click Here</a></button>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12' id="work-item-wrap">
                        <div className='col p-0' id="work-item">
                            <img src="https://i.pinimg.com/564x/9f/9f/67/9f9f675fb305b55960da1af999bbdc6f.jpg" alt=""></img>
                            <p><b>Quiz game </b></p>
                            <button className="btn btn-info"><a href="https://github.com/aryan26122003/quiz-game"className='text-white' target='blank'>Click Here</a></button>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12' id="work-item-wrap">
                        <div className='col p-0' id="work-item">
                            <img src="https://i.pinimg.com/564x/fe/83/01/fe8301e75f5f216be07014e1d27cc1ff.jpg" alt=""></img>
                            <p><b>Voice Assistant</b></p>
                            <button className="btn btn-info"><a href="https://github.com/16Yogi/JarvisMyVoiceAssistance"className='text-white' target='blank'>Click Here</a></button>
                        </div>
                    </div>
                    
                    <div className='col-lg-4 col-md-6 col-sm-12' id="work-item-wrap">
                        <div className='col p-0' id="work-item">
                            <img src="https://i.pinimg.com/originals/9b/99/c8/9b99c895f2ffeab8fbe5d355c6f8ad62.jpg" alt=""></img>
                            <p><b>My Portfolio</b></p>
                            <button className="btn btn-info"><a href="https://yogendrameravi.netlify.app/" className='text-white' target='blank'>Click Here</a></button>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    </>
    )
}
