import React from 'react';
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';
import {animateScroll as scroll} from 'react-scroll'; 



const Navbar = ({toggle}) => {
   

    const toggleHome = () => {
        scroll.scrollToTop()
    }
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to = '/' onClick = {toggleHome}>logo</NavLogo>
                    
                    <MobileIcon onClick = {toggle}> 
                       <FaBars/>
                    </MobileIcon>

                    <NavMenu>
                        <NavItem>
                            <NavLinks to ='about' smooth = {true} duration={500} spy={true} exact = 'true' offset= {-80}>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to ='discover'>Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to ='monthlyblog'>Monthly Blog</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to ='signup'>Sign Up</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to ='contactus'>Contact Us</NavLinks>
                        </NavItem>
                    </NavMenu>

                    <NavBtn>
                        <NavBtnLink to = '/signin'>Sign In</NavBtnLink>
                    </NavBtn>
 
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
