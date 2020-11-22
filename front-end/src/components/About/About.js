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
                
                <AboutSubtitle>WELCOME  TO EVE</AboutSubtitle>
                <AboutH1>We bring key resources to entrepreneurs enabling them to realize their visions and build social capital.</AboutH1>
                <AboutP1> Enterprise Virtual Exchange (EVE) is a state of the art user friendly platform that delivers illuminating connections between entrepreneurs, business owners,and specialized resource providers. EVE brings virtual training, networking, and special events to the entrepreneurs. Many small business owners spend the bulk of their time working their business and find it difficult to leave the shop and participate in activities that provide information and opportunities for business ideation, growth, and operational management.Therefore, we partner with small business advocates, certified Community Development Financial Instituitions, and other small business resource providers to customize knowledge fot business acumen and bring to enduser on as easily accessible platform.</AboutP1>
                <AboutH2>EVE provides a direct connection through candid, shared communication</AboutH2>
                <AboutP2>The mission of EVE is to bring wisdom, key resources, and purposeful networking to build social capital, and create space for innovative growth.</AboutP2>
                <AboutUl>EVE is a two part virtual exchange marketplace:</AboutUl>
                    <AboutLiA>Educational resource for business owners include best practives for financing, industry starndards, vendor management, orgranization ideation, and legal matters.</AboutLiA>
                    <AboutLiB>Bridge between companies, investors, peer entrepreneurs, and executive groups with the necessary resources to catapult their businesses.</AboutLiB>
                
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
