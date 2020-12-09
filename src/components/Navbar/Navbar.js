import React, { Component } from 'react';
import { MenuItems } from "./MenuItems";
import logo from "../../assets/eve_logo.svg" ;
import "./Navbar.css";

import { Link } from 'react-router-dom';

class Navbar extends Component{
    state = { clicked: false}

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }



    render(){
        return(
            <nav className="navbar">
                
                <Link to = '/'>
                    <img className="navbar-logo" src={logo} alt="logo"/>
                </Link>
                <div className='nav-links'>
                <Link className="link" to='/about' >About</Link>
                <div className="dropdown">
                    <Link className="link">Resources</Link>
                    <div className="dropdown-content">
                        <a href="/articles">Articles</a>
                        <a href="/videos">Videos</a>
                        <a href="/events">Events</a>
                    </div>
                </div>
                <Link className="link" to='/contact-us'>Contact Us</Link>
                <Link className="link" to='/signup'>Sign Up</Link>
                <Link className="link" to='/login'>Login</Link>
                <Link className="link" to='/sponsor-packages'>SponsorShip Packages</Link>
                </div>

            </nav>
        )
    }
}

export default Navbar;