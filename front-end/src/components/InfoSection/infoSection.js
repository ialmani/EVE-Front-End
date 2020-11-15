import React from 'react'
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
       
} from './InfoElements';

import AboutImg from '../../images/about.svg'




const InfoSection = ({lightBg, id, imgStart, topline, headline, darkText, lightText, buttonLabel, img, alt, description, primary, dark, dark2}) => {
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
                                    <Button to ='home' 
                                    smooth = {true}
                                    duration = {500}
                                    spy= {true}
                                    exact = 'true'
                                    offset = {-80}
                                    primary = {primary ? 1 : 0}
                                    dark = {dark ? 1 : 0}
                                    dart2 = {dark2 ? 1 : 0}
                                    >{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src = {AboutImg} alt = {alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
            
        </>
    )
}

export default InfoSection
