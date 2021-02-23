import React, {useState} from 'react'
import Sidebar from '../Navbar&Footer/Sidebar'
import Navbar from '../Navbar&Footer/Navbar'
import LandingPage from './LandingPage'

const Home = () => {
    const[sidebar, showSidebar] = useState(false)
    const toggle = ()=> {
        showSidebar(!sidebar)
    }
    return (
        <>
        <Sidebar sidebar = {sidebar} toggle = {toggle}/>
        <Navbar  toggle = {toggle}/> 
        <LandingPage />
            
        </>
    )
}

export default Home
