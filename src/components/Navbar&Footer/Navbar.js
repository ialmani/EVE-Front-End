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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">

                <li className="nav-item" >
                    <Link className="nav-link" to="/about">About EVE</Link>
                </li>

                <li className="nav-item">
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

                <li className="nav-item">
                    <div className="login-signup-btns">
                        <Link className="nav-link" to="/signup">Sign Up</Link>
                    </div>
                </li>
                <li className="nav-item">
                    <div className="login-signup-btns">
                        <Link className="nav-link" to="/login">Login</Link>
                    </div>
                </li>
            </ul>
        </div>
        )
    } else {
        menu = (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">

                <li className="nav-item" >
                    <Link className="nav-link" to="/about">About EVE</Link>
                </li>

                <li className="nav-item">
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

                <li className="nav-item">
                    <Link className="nav-link" to="/sponsor-profile">Profile</Link>
                </li>

                <li className="nav-item">
                    <div className="login-signup-btns">
                        <Link className="nav-link" to="/login" onClick={logoutUser}>Logout</Link>
                    </div>
                </li>
            </ul>
        </div>
        )
    }


    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark">
            <Link to="/" className="navbar-brand">
                <img className="nav-logo" src={Logo} alt='logo' />
            </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

                {menu}

        </nav>
    );
};

export default Navbar;
