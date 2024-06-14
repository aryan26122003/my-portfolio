import React from 'react'
import './Nav.scss'
import { Link } from 'react-router-dom'
// import { TypeAnimation } from 'react-type-animation';
export default function Nav() {
  return (
    <>
       <div className='container-fluid position-sticky fixed-top' id="nav-co-f">
           <div className='container p-3'>
                <nav className="navbar navbar-expand-md navbar-dark">
                    <a className="navbar-brand " href="/">
                        <h1>Aryan<span className='text-info'>Gupta</span></h1>
                    </a>
                    <button className="navbar-toggler bg-dark" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item p-2">
                                <Link to="/Home" className='nav-link'>Home</Link>
                            </li> 
                            <li className="nav-item p-2">
                                <Link to="/About" className='nav-link'>About</Link>
                            </li> 
                            <li className="nav-item p-2">
                                <Link to="/skills" className='nav-link'>Skills</Link>
                            </li> 
                            <li className="nav-item p-2">
                                <Link to="/Servive" className='nav-link'>Achievements</Link>
                            </li>
                            <li className="nav-item p-2">
                                <Link to="/Project" className='nav-link'>Projects</Link>
                            </li>
                            {/* <li className="nav-item p-2">
                                <Link to="/problemsloving" className='nav-link'>Problem Solving</Link>
                            </li>  */}
                            <li className="nav-item p-2">
                                <Link to="/Contact" className='nav-link'>Hire me</Link>
                            </li>    
                        </ul>
                    </div>  
                </nav>
           </div>
       </div>
    </>
    )
}
