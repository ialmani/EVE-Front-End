import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa'
import {Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks, 
    NavBtn, 
    NavBtnLink} from './NavbarElements';
import {animateScroll as scroll} from 'react-scroll'; 
import Logo from '../../images/logo.svg';

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80){
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    useEffect ( () => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop()
        
    }
    return (
            <Nav scrollNav = {scrollNav}>
                <NavbarContainer>
                    <NavLogo src = {Logo} alt = 'logo' to = '/' onClick = {toggleHome}/>
         
                    <MobileIcon onClick = {toggle}> <FaBars/> </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to ='about' 
                            smooth = {true} 
                            duration={500} 
                            spy='true' 
                            exact = 'true' 
                            offset= {-80}>
                            About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to ='discover'
                            smooth = {true} 
                            duration={500} 
                            spy='true' 
                            exact = 'true' 
                            offset= {-80}>Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to ='resources' smooth = {true} 
                            duration={500} 
                            spy='true' 
                            exact = 'true' 
                            offset= {-80}>
                            Resources</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to ='signup' smooth = {true} 
                            duration={500} 
                            spy='true' 
                            exact = 'true' 
                            offset= {-80}
                            >Sign Up</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to = '/signin'>Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
    )
}

export default Navbar;
