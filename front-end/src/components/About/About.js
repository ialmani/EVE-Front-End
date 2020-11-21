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
        AboutLiA, 
        AboutLiB,
        BtnWrap, 
        ArrowForward,
        ArrowRight,
        } from './AboutElements';
import {Button} from '../ButtonElements';


const About = ({id, subtitle, heading1, para1, heading2, para2, ul, LiA, LiB}) => {
    const [hover, setHover] = useState (false)

    const onHover = ()=> {
        setHover(!hover)
    }

    return (
        <AboutContainer id = {id}>
                <AboutWrap>
                    <Icon to= '/' >logo</Icon>
                </AboutWrap>
                
                <AboutSubtitle>{subtitle}</AboutSubtitle>
                <AboutH1>{heading1}</AboutH1>                
                <AboutP1> {para1} </AboutP1>
                <AboutH2>{heading2}</AboutH2>
                <AboutP2>{para2}</AboutP2>
                <AboutUl>{ul}</AboutUl>
                    <AboutLiA> {LiA}</AboutLiA>
                    <AboutLiB> {LiB}</AboutLiB>
                
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
    )
}

export default About
