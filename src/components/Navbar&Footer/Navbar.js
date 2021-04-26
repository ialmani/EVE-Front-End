import React, { useState, useEffect } from 'react'
import { Link, useLocation, useHistory } from 'react-router-dom'
import Logo from '../../assets/eve_logo.svg'
import './Navbar.css'
import * as Requests from '../../Requests'

const Navbar = () => {
    const [user, setUser] = useState({
        username: "",
        password: "",
    });

    let history = useHistory();

    const logoutUser = (e) => {
        e.preventDefault();
        Requests.loginUser(user).then((response) => {
            localStorage.removeItem("access_token");
            localStorage.removeItem("refresh_token");
            localStorage.removeItem("current_username");
            localStorage.removeItem("current_id")
            history.push('/login');
            window.location.reload(false);
        }).catch(status => {
                    if (status !== 201) {
                        alert("Something went wrong. Please try again.");
                    }
            })
    }
    let menu;

    if (localStorage.getItem('access_token') === 'undefined' || localStorage.getItem('access_token') === null) {
        menu = (
            <ul class="navbar-nav ml-auto justify-content-end">
                <li className="nav-btns">
                    <Link className="nav-link" to="/signup">Sign up</Link>
                </li>
                <li className="nav-btns">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
            </ul>
        )
    } else {
        menu = (
            <ul class="navbar-nav ml-auto justify-content-end">
                <li className="nav-btns">
                    <Link className="nav-link" to={'/sponsor-profile/'+localStorage.getItem("current_id")}>Profile</Link>
                </li>
                <li className="nav-btns">
                    <Link className="nav-link" to="/login" onClick={logoutUser}>Logout</Link>
                </li>
            </ul>
        )
    }

    return (
        <nav className='navbar sticky-top navbar-expand-xl navbar-dark' style={{ background: useLocation().pathname === '/' ? 'transparent' : 'rgb(30,29,91)', marginTop: useLocation().pathname === '/' ? '-113px' : '0px' }}>
            <div className='d-flex flex-grow-1'>
                <span className='w-100 d-lg-none d-block'></span>
                <Link to='/' className='navbar-brand' style={{ background: 'transparent' }}>
                    <img className='nav-logo' src={Logo} alt='logo' />
                </Link>
                <div className='w-100 text-right'>
                    <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#myNavbar7'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                </div>
            </div>
            <div className='collapse navbar-collapse flex-grow-1 text-right' id='myNavbar7'>
                <ul className='navbar-nav justify-content-center mx-auto flex-nowrap'>
                    <li className='nav-item'>
                        <Link className='nav-link' to='/about'>About EVE</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to='/resources'>Resources</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to='/sponsor-packages'>Sponsor Packages</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to='/contact-us'>Contact Us</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to='/ask-eve'>Ask EVE</Link>
                    </li>
                </ul>
                {menu}
            </div>
        </nav>
    );
};

export default Navbar