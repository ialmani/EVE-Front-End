import React,{useState} from 'react'
import Icon1 from '../../images/about.svg'
import Icon2 from '../../images/about.svg'
import Icon3 from '../../images/about.svg'
import {BlogContainer,
        BlogH1,
        BlogWrapper,
        BlogCard,
        BlogIcon,
        BlogH2,
        BlogP,
        BtnWrap,
        ArrowForward,
        ArrowRight
} from './HotTopicElements';
import {Button} from '../../components/ButtonElements'

const HotTopic = () => {

    const [hover, setHover] = useState (false)

    const onHover = ()=> {
        setHover(!hover)
    }
    
    return (
        <BlogContainer id = 'resources'>
            <BlogH1>HOT TOPIC OF THE QUARTER</BlogH1>
            <BlogWrapper>
                <BlogCard>
                    <BlogIcon src = {Icon1}/>
                    <BlogH2>Marketing Strategies</BlogH2>
                    <BlogP>We help reduce your fees and overall revenue</BlogP>
                </BlogCard>
                <BlogCard>
                    <BlogIcon src = {Icon2}/>
                    <BlogH2>How To Open A Start Up</BlogH2>
                    <BlogP>We help reduce your fees and overall revenue</BlogP>
                </BlogCard>
                <BlogCard>
                    <BlogIcon src = {Icon3}/>
                    <BlogH2>Astronomy</BlogH2>
                    <BlogP>We help reduce your fees and overall revenue</BlogP>
                </BlogCard>
            </BlogWrapper>
            <BtnWrap>                                    
                <Button to = '/resources'
                onMouseEnter={onHover} 
                onMouseLeave = {onHover}
                primary ='true'
                dark = 'true'>
                Watch more videos {hover ? <ArrowForward/> : <ArrowRight/>}
                </Button>                  
            </BtnWrap>
        </BlogContainer>
    )
}

export default HotTopic
