import React from 'react'
import Icon1 from '../../images/about.svg'
import Icon2 from '../../images/about.svg'
import Icon3 from '../../images/about.svg'
import {BlogContainer,
        BlogH1,
        BlogWrapper,
        BlogCard,
        BlogIcon,
        BlogH2,
        BlogP 
} from './BlogElements';

const Blog = () => {
    return (
        <BlogContainer id = 'monthlyblog'>
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
            
        </BlogContainer>
    )
}

export default Blog
