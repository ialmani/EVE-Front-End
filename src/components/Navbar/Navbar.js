import React, { Component } from 'react';
import { MenuItems } from "./MenuItems";
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
                    <h1  className="navbar-logo" >Logo<i className="fab fa-react"></i></h1>
                </Link>

                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>

                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return(
                            <li key={index}><a className={item.cName} href={item.url}>
                                                {item.title}
                                            </a>
                            </li>
                        )
                    })}
                </ul>
                <Link to='signUpPage'>
                    <button className="nav-btn"><span class="fas fa-user"></span>Sign Up</button>
                </Link>
                <Link to='login'>
                    <button className="nav-btn"><span class="fas fa-sign-in-alt"></span>Login</button>
                </Link>
            </nav>
        )
    }
}

export default Navbar;