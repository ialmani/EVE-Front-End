import React, {useState} from 'react'
import {SignUpContainer, 
    SignUpWrap, 
    Icon, 
    Column1, 
    Column2, 
    Subtitle, 
    InfoRow, 
    BtnWrap, 
    ArrowForward, 
    ArrowRight} from './SignUpElements'
import {Button} from '../../components/ButtonElements'

const ulStyle = {
  padding: "60px",
};

const SignUp = () => {
    const [hover, setHover] = useState (false)

    const onHover = ()=> {
    setHover(!hover)
    }

    return (
        <SignUpContainer >
            <SignUpWrap>
                <Icon to= '/' >logo</Icon>
            </SignUpWrap>
            
            <InfoRow>
            <Column1>
                <Subtitle>Member</Subtitle>
                <ul style={ulStyle}>
                    <li> Access information from other businesses.</li>
                    <li> Share and comment on blog posts.</li>
                </ul> 
                <BtnWrap>                
                <Button to = '/membersignup' onMouseEnter={onHover} onMouseLeave = {onHover}>
                Sign up as a Member {hover ? <ArrowForward/> : <ArrowRight/>}  
                </Button >                   
                </BtnWrap>
            </Column1>
           
            <Column2>
                <Subtitle>Sponsor</Subtitle>
                <ul style={ulStyle}>
                    <li> Able to subscribe and upload videos and blog posts .</li>
                    <li> Able to upload advertisements of your business.</li>
                </ul>
                <BtnWrap>                
                <Button to = './sponsorsignup' onMouseEnter={onHover} onMouseLeave = {onHover}>
                Sign up as a Sponsor{hover ? <ArrowForward/> : <ArrowRight/>}  
                </Button >                   
                </BtnWrap>
            </Column2>
            </InfoRow>
         </SignUpContainer>
    )
}

export default SignUp