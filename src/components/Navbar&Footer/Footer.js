import React, { useState, useEffect } from 'react';
import { Link, useLocation, useHistory} from "react-router-dom";
import Logo from '../../assets/eve_logo.svg';
import './Footer.css';

const Footer = () => {

    return (
        <nav className="navbar" style={{background: 'rgb(30,29,91)'}}>
            <div className="footer mr-auto" style={{color: 'white'}}>
                &copy; {new Date().getFullYear()} Copyright: <a href="http://localhost:3000/"> EVE.com </a>
            </div>

            <Link className="nav-link" to="/contact-us">Ask EVE</Link>

            <Link className="nav-link" to="/resources">Resources</Link>

            <Link className="nav-link" to="/sponsor-packages">Sponsor Packages</Link>


        </nav>
    );
}

export default Footer;