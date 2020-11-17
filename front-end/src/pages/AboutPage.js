import React from 'react'
import About from '../components/About/About'
import { aboutObjOne } from '../components/About/Data'

const AboutPage = () => {
    return (
        <>
            <About {...aboutObjOne}/>
        </>
    )
}

export default AboutPage
