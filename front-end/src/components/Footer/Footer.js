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
                        <FooterLinkTitle> Quick Links </FooterLinkTitle>                                
                        <FooterLink to = '/sponsorpackages'>Sponsor Packages</FooterLink>
                        <FooterLink to = '/contact'>Contact</FooterLink>
                        <FooterLink to = '/resources'>Monthly Blog</FooterLink>
                        <FooterLink to = '/faq'>FAQ</FooterLink>                                               
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <WebsiteRights>EVE © {new Date ().getFullYear()} All rights reserved.</WebsiteRights>
        </FooterWrap>
    </FooterContainer>
    )
}

export default Footer