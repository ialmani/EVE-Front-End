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
            <nav className="NavbarItems">
                
                <Link to = '/'>
                    <img className="navbar-logo" src={logo} alt="logo"/>
                </Link>
                <Link className="nav-links" to='/about' >About</Link>
                <div className="dropdown">
                    <Link className="nav-links">Resources</Link>
                    <div className="dropdown-content">
                        <a href="/articles">Articles</a>
                        <a href="/videos">Videos</a>
                        <a href="/events">Events</a>
                    </div>
                </div>
                <Link className="nav-links" to='/contact-us'>Contact Us</Link>
                <Link className="nav-links" to='/signup'>Sign Up</Link>
                <Link className="nav-links" to='/login'>Login</Link>


            </nav>
        )
    }
}

export default Navbar;