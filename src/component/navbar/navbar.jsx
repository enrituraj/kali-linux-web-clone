import React from 'react'
import { Link } from 'react-router-dom'
import logo from './../header/img/kali-logo.svg'
import './navbar.scss'

const Navbar = () => {
  return (
    <>
    
    <nav className="navbar">
            <Link to="" className="logo">
                <img src={logo} alt=""/>
            </Link>
                <ul className="menu">
                    <li className="menu-li">
                        <Link to="#" className="menu-link">Get Kali</Link>
                    </li>
                    <li className="menu-li">
                        <Link to="#" className="menu-link">Blog</Link>
                    </li>
                    <li className="menu-li">
                        <Link to="#" className="menu-link">
                        <span>Documentation</span><i className="ri-arrow-down-s-line"></i>
                        </Link>
                    </li>
                    <li className="menu-li">
                        <Link to="#" className="menu-link">
                        <span>Community</span>
                            <i className="ri-arrow-down-s-line"></i>
                        </Link>
                    </li>
                    <li className="menu-li">
                        <Link to="#" className="menu-link"><span>Courses</span><i className="ri-arrow-down-s-line"></i></Link>
                    </li>
                    <li className="menu-li">
                        <Link to="#" className="menu-link"><span>Developers</span><i className="ri-arrow-down-s-line"></i></Link>
                    </li>
                    <li className="menu-li">
                        <Link to="#" className="menu-link"><span>About</span><i className="ri-arrow-down-s-line"></i></Link>
                    </li>
                </ul>
        </nav>
    
    </>
  )
}

export default Navbar