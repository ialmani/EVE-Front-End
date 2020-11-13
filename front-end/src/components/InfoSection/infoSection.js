import React from 'react'
import {Button} from 'react-scroll'
import {InfoContainer, 
        InfoWrapper, 
        InfoRow, 
        Column1,
        Column2,
        TextWrapper,
        TopLine,
        Heading,
        Subtitle,
        BtnWrap,
        ImgWrap,
        Img

    } from './InfoElements';

const InfoSection = () => {
    return (
        <>
            <InfoContainer >
                <InfoWrapper>
                    <InfoRow>
                        <Column1> 
                        <TextWrapper>
                            <TopLine> Top line</TopLine>
                            <Heading>Heading</Heading>
                            <Subtitle>Subtitle</Subtitle>
                            <btnWrap>
                                <Button to ='home'/>
                            </btnWrap>

                        </TextWrapper>
                        </Column1>
                        <Column2>
                         <ImgWrap>
                         <Img/>
                         </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
            
        </>
    )
}

export default InfoSection
