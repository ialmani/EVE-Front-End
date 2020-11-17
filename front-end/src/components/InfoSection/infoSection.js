import React, {useState} from 'react'
import {Button} from '../ButtonElements'
import {InfoContainer, 
        InfoWrapper, 
        InfoRow, 
        Column1,
        Column2,
        TextWrapper,
        TopLine,
        Heading,
        ImgWrap,
        Img,
        Subtitle,
        BtnWrap,
        ArrowForward,
        ArrowRight
       
} from './InfoElements';


import img from '../../images/about.svg'



const InfoSection = ({lightBg, id, imgStart, pageId, topline, headline, darkText, lightText, buttonLabel,  alt, description, primary, dark, dark2}) => {

const [hover, setHover] = useState (false)

const onHover = ()=> {
    setHover(!hover)
}
    return (
        <>
            <InfoContainer lightBg = {lightBg} id = {id}>
                <InfoWrapper>
                    <InfoRow imgStart = {imgStart}>
                        <Column1> 
                            <TextWrapper>
                                <TopLine> {topline}</TopLine>
                                <Heading lightText = {lightText}> {headline}</Heading>
                                <Subtitle darkText = {darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    
                                    <Button to = {pageId}
                                    smooth = {true}
                                    duration = {500}
                                    spy= {true}
                                    exact = 'true'
                                    offset = {-80}
                                    onMouseEnter={onHover} 
                                    onMouseLeave = {onHover}
                                    primary = {primary ? 1 : 0}
                                    dark = {dark ? 1 : 0}
                                    dart2 = {dark2 ? 1 : 0}
                                    >{buttonLabel}{hover ? <ArrowForward/> : <ArrowRight/>}  
                                    </Button >
                                    
                                </BtnWrap>
                               
                              
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src = {img} alt = {alt}/>
                                
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
            
        </>
    )
}

export default InfoSection
