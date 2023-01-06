import React from 'react'
import './header.scss'
import logo from './img/kali-logo.svg'
import hero_img from './img/kali-dragon-icon.svg'
import Navbar from '../navbar/navbar'
import { Link } from 'react-router-dom'
import Main from '../main/main'

const Header = () => {
  return (
    <>
    
    <header className='header'>
        <Navbar/>
                <div className="hero">
                    <div className="hero-img">
                        <img src={hero_img} alt="jjj" />
                    </div>
                    <div className="hero-text">
                        <h1>The most advanced<br />Penetration Testing Distribution</h1>
                        <p>Kali Linux is an open-source, Debian-based Linux distribution geared
                            towards various information security tasks, such as Penetration Testing,
                            Security Research, Computer Forensics and Reverse Engineering.</p>

                        <div className="hero-btn">
                            <Link to="" className="btn-download"><span>Download</span><i class="ri-download-line"></i>  </Link>
                            <Link to="" className="btn-documentation"><span>Documentation</span><i class="ri-book-open-line"></i></Link>
                        </div>
                    </div>
                </div>
            </header>

            <Main/>
    </>
  )
}

export default Header