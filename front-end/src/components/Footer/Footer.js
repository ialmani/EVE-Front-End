import React from 'react'
import {FooterContainer,
        FooterWrap,
        FooterLinksContainer,
        FooterLinksWrapper, 
        FooterLinkItems, 
        FooterLinkTitle, 
        FooterLink, 
        WebsiteRights} from './FooterElements'



const Footer = () => {
    return (
        <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>

                    <FooterLinkItems>

                        <FooterLinkTitle> Contact Us </FooterLinkTitle>                                
                        <FooterLink to = '/sigin'>Contact</FooterLink>
                        <FooterLink to = '/signin'>Support</FooterLink>
                        <FooterLink to = '/signin'>FAQ</FooterLink>
                        <FooterLink to = '/signin'>Sponsors</FooterLink>                            
                                                        
                    </FooterLinkItems>
                    <FooterLinkItems>
                        
                        <FooterLinkTitle> Quick Links </FooterLinkTitle>                                
                        <FooterLink to = '/sigin'>Sponsor Packages</FooterLink>
                        <FooterLink to = '/signin'>Terms of Use</FooterLink>
                        <FooterLink to = '/signin'>Videos</FooterLink>
                        <FooterLink to = '/signin'>Privacy Policy</FooterLink>                            
                                                        
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <WebsiteRights>EVE © {new Date ().getFullYear()} All rights reserved.</WebsiteRights>

       
       
        </FooterWrap>
        
    </FooterContainer>
    
    )
}

export default Footer
