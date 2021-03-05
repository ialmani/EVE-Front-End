import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa'
import { Link, useLocation, useHistory} from "react-router-dom";
import Logo from '../../assets/eve_logo.svg';
import './Navbar.css'
import * as Requests from '../../Requests'

const Navbar = () => {
    const [user, setUser] = useState({
        username: "",
        password: "",
      });

let history = useHistory();

const logoutUser =(user)=>{
    localStorage.removeItem("token");
    history.push('/login');
    window.location.reload(false);

}
    let menu;

    if (localStorage.getItem('token') === 'undefined' || localStorage.getItem('token') === null) {
        menu = (
           
            <div className="nav-btn">
            <Link to="/signup">
                <button className="btn-link ">Sign Up</button>
                </Link >

                <Link to="/login">
                    <button className="btn-link ">Log In</button>
                </Link>

          
           

            </div>
        
        )
    } else {
        menu = (
            <div className="nav-btn">
            <Link to="/signup">
                <button className="btn-link ">Profile</button>
                </Link >

                <Link to="/login">
                    <button className="btn-link ">Log Out</button>
                </Link>

          
           

            </div>
        )
    }


    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark" style={{ background: useLocation().pathname === '/' ? 'transparent' : 'rgb(30,29,91)', marginTop: useLocation().pathname === '/' ? '-113px' : '0px'}}>
           
            <div className="nav-logo">
                    <Link to="/">
                        <img className="nav-logo" src={Logo} alt='logo' />
                    </Link>
            </div>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                
                <ul className="navbar-nav mx-auto">

                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About EVE</Link>
                    </li>

                    <li className="nav-item dropdown">
                        <div className="dropdown">
                            <Link className="nav-link" to="/resources">Resources</Link>
                            <div className="dropdown-content">
                                <a href="/articles">Articles</a>
                                <a href="/videos">Videos</a>
                                <a href="/events">Events</a>
                            </div>
                        </div>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/sponsor-packages">Sponsor Packages</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/contact-us">Ask EVE</Link>
                    </li>

                   
                </ul>
                {menu}
            </div>
    
        </nav>
    );
};

export default Navbar;
