import React, {useState} from 'react'
import {AboutContainer, 
        Icon, 
        AboutWrap, 
        AboutH1,
        AboutP1, 
        AboutSubtitle, 
        AboutH2,
        AboutP2,
        AboutUl,
        AboutLi_a, 
        AboutLi_b,
        BtnWrap, 
        ArrowForward,
        ArrowRight,
        } from './AboutElements';

import {Button} from '../ButtonElements';


const About = ({id, subtitle, heading1, para1, heading2, para2, ul, li_a, li_b}) => {
    const [hover, setHover] = useState (false)

    const onHover = ()=> {
        setHover(!hover)
    }

    return (
        <>
        <AboutContainer id = {id}>
                <AboutWrap>
                    <Icon to= '/' >EVE</Icon>
                </AboutWrap>
                
                <AboutSubtitle>{subtitle}</AboutSubtitle>
                <AboutH1>{heading1}</AboutH1>                
                <AboutP1> {para1} </AboutP1>
                <AboutH2>{heading2}</AboutH2>
                <AboutP2>{para2}</AboutP2>
                <AboutUl>{ul}</AboutUl>
                    <AboutLi_a> {li_a}
                    </AboutLi_a>
                    <AboutLi_b> {li_b}</AboutLi_b>
                
                    <BtnWrap>                                    
                            <Button to = 'discover'
                            onMouseEnter={onHover} 
                            onMouseLeave = {onHover}
                            primary ='true'
                            dark = 'true'>
                            Discover more {hover ? <ArrowForward/> : <ArrowRight/>}
                            </Button>
                            
                                    
                                    
                    </BtnWrap>
        </AboutContainer>
        </>
    )
}

export default About
