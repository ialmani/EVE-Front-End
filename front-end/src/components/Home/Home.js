import React, {useState} from 'react'
import HeroSection from '../HeroSection/HeroSection'
import { homeObjOne, homeObjTwo, homeObjFour} from '../InfoSection/Data'
import InfoSection from '../InfoSection/InfoSection'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import Footer from '../Footer/Footer'
import HotTopic from '../HotTopic/HotTopic'

const Home = () => {
    const[isOpen, setIsOpen] = useState(false)

    const toggle = ()=> {
        setIsOpen(!isOpen)
    }

    return (
        <>
           <Sidebar isOpen = {isOpen} toggle = {toggle}/>
           <Navbar toggle = {toggle} /> 
           <HeroSection />
           <InfoSection {...homeObjOne}/> 
           <InfoSection {...homeObjTwo}/>
           <HotTopic/>
           <InfoSection {...homeObjFour}/>
           <Footer/>
           
        </>
    )
}

export default Home