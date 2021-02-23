import React from 'react';
import {Link} from 'react-router-dom'
import './Sidebar.css'

const Sidebar = ({sidebar, toggle}) => {
    return (
        <div className = {sidebar ? 'sidebar-container' : 'sidebar-inactive'} onClick ={toggle} >
            <div className = "sidebar-icon" onClick ={toggle}> <i id = "x" className = "fas fa-times"/> </div>
            <div className = "sidebar-wrapper">
                <div className = "sidebar-menu">
                <Link to = "/about">
                    <div className = "sidebar-links" onClick ={toggle}>
                     About EVE
                    </div>
                </Link>
                <Link to = "/resources">
                    <div className = "sidebar-links" onClick ={toggle}>
                    Resources
                    </div>
                </Link>
                <Link to = "/sponsor-packages">
                    <div className = "sidebar-links" onClick ={toggle}>
                    Sponsor Packages
                    </div>
                </Link>
                <Link to = "/contact-us">
                    <div className = "sidebar-links"  onClick ={toggle}>
                    Ask EVE
                    </div>
                </Link>

                </div>
                
                <div className = "sidebar-btn">
                <Link to = "/signup">
                    <div className = "side-btn-links" >Sign Up</div>
                </Link>    
                </div>
                
                <div className = "sidebar-btn">
                <Link to = "/login">
                    <div className = "side-btn-links">Log In</div>
                </Link>
                    
                </div>
            </div>
        </div>
    )
}

export default Sidebar

       