import React from 'react'
import './header.scss'
import logo from './img/kali-logo.svg'
import hero_img from './img/kali-dragon-icon.svg'
const Header = () => {
  return (
    <>
    
    <header class="header">
        <nav class="navbar">
            <a href="" class="logo">
                <img src={logo} alt=""/>
            </a>
                <ul class="menu">
                    <li class="menu-li">
                        <a href="#" class="menu-link">Get Kali</a>
                    </li>
                    <li class="menu-li">
                        <a href="#" class="menu-link">Blog</a>
                    </li>
                    <li class="menu-li">
                        <a href="#" class="menu-link">Documentation</a>
                    </li>
                    <li class="menu-li">
                        <a href="#" class="menu-link">Community</a>
                    </li>
                    <li class="menu-li">
                        <a href="#" class="menu-link">Courses</a>
                    </li>
                    <li class="menu-li">
                        <a href="#" class="menu-link">Developers</a>
                    </li>
                    <li class="menu-li">
                        <a href="#" class="menu-link">About</a>
                    </li>
                </ul>
        </nav>
        <div class="hero">
            <div id="hero-img">
                <img src={hero_img} alt="222"/>
            </div>
            <div class="hero-text">
                <h1>The most advanced<br/>Penetration Testing Distribution</h1>
                <p>Kali Linux is an open-source, Debian-based Linux distribution geared
                    towards various information security tasks, such as Penetration Testing,
                    Security Research, Computer Forensics and ReverseEngineering.</p>
            
            <div class="hero-btn">
                <a href="" class="btn-download">Download</a>
                <a href="" class="btn-documentation">Documentation</a>
            </div>
            </div>


        </div>
    </header>
    </>
  )
}

export default Header