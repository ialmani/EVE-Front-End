import React, {useState} from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import { homeObjOne, homeObjTwo, homeObjFour} from '../components/InfoSection/Data'
import InfoSection from '../components/InfoSection/InfoSection'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import Blog from '../components/MonthlyBlog/Blog'

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
           <Blog/>
           <InfoSection {...homeObjFour}/>
           
        </>
    )
}

export default Home
