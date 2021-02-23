import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa'
import { Link, useLocation } from "react-router-dom";
import Logo from '../../assets/eve_logo.svg';
import './Navbar.css'

const Navbar = ({ toggle }) => {
    return (
        <nav className="Nav" style={{ background: useLocation().pathname === '/' ? 'transparent' : 'rgb(30,29,91)' }}>

            <div className="NavbarContainer">
                <div className="nav-logo">
                    <Link to="/">
                        <img className="nav-logo" src={Logo} alt='logo' />
                    </Link>
                </div>

                <div className="mobile-icon" onClick={toggle}> <FaBars /> </div>

                <div className="nav-menu">
                    <div className="nav-item" >
                        <Link to="/about">
                            <div className="nav-link">About EVE </div>
                        </Link>
                    </div >

                    <div className="nav-item">
                        <div className="dropdown">
                            <Link to="/resources">
                                <div className="nav-link">Resources </div>
                            </Link>
                            <div className="dropdown-content">
                                <a href="/articles">Articles</a>
                                <a href="/videos">Videos</a>
                                <a href="/events">Events</a>
                            </div>
                        </div>
                    </div>

                    <div className="nav-item">
                        <Link to="/sponsor-packages">
                            <div className="nav-link">Sponsor Packages </div>
                        </Link>
                    </div>

                    <div className="nav-item">
                        <Link to="/contact-us">

                            <div className="nav-link">Ask EVE</div>
                        </Link>
                    </div>



                </div>
                <div className="nav-btn">
                    <Link to="/signup">
                        <button className="btn-link ">Sign Up</button>
                        <Link />

                        <Link to="/login">
                            <button className="btn-link ">Log In</button>
                        </Link>

                    </Link>


                </div>


            </div>
        </nav>
    )
}

export default Navbar;
