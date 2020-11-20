import React, {useState} from 'react'

import {DiscoverContainer, DiscoverWrap, Icon, Column2, InfoRow, Subtitle, TextWrapper, Column1, Heading,  Ul, BtnWrap, ArrowForward, ArrowRight} from './DiscoverElements'
import {Button} from '../ButtonElements'
const Discover = () => {

    const [hover, setHover] = useState (false)

    const onHover = ()=> {
    setHover(!hover)
}
    return (
        <>  
        <DiscoverContainer >
            <DiscoverWrap>
                <Icon to= '/' >EVE</Icon>
            </DiscoverWrap>
            <InfoRow>
            <Column1>
            <TextWrapper>
                <Subtitle>Members</Subtitle>
                
                <Heading> Access Resources
                </Heading>
               
                
                <Ul>
                    <li>Members can watch unlimited videos.</li>
                    <li>Members can comment on videos and blogposts.</li>
                    <li>Member sign up is FREE.</li>

                </Ul>
    

            </TextWrapper>
            </Column1>
            <Column2>
            <TextWrapper>
                
                <Subtitle>Sponsors</Subtitle>
            
                <Heading>Become a Resource</Heading>

                <Ul>
                    <li>Sponsors can watch unlimited videos.</li>
                    <li>Sponsors can comment on videos and blogposts.</li>
                    <li>Sponsors can upload content.</li>
                    <li>Sponsors can choose from monthly sponsor packages.</li>

                </Ul>
                

            </TextWrapper>
            </Column2>
            </InfoRow>
            <BtnWrap>
                                    
                <Button to = './signup' 
                onMouseEnter={onHover} 
                onMouseLeave = {onHover}
                
                >Sign up now {hover ? <ArrowForward/> : <ArrowRight/>}  </Button > 
                                    
            </BtnWrap>
            
            
            
            
        </DiscoverContainer>
        </>
    )
}

export default Discover