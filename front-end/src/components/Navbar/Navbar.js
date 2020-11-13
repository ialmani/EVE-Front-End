import React from 'react';
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarItems';

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to = '/'>logo</NavLogo>
                    
                    <MobileIcon onClick = {toggle}> 
                       <FaBars/>
                    </MobileIcon>

                    <NavMenu>
                        <NavItem>
                            <NavLinks to ='about'>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to ='discover'>Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to ='monthlyblog'>Monthly Blog</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to ='contactus'>Contact Us</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to ='singup'>Sign Up</NavLinks>
                        </NavItem>
                    </NavMenu>

                    <NavBtn>
                        <NavBtnLink to = 'to/signin'>Sign In</NavBtnLink>
                    </NavBtn>
 
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
