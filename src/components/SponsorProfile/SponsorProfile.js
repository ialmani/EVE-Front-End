import React, {useState, useEffect} from 'react'
import './SponsorProfile.css'
import aboutImg from '../../assets/profilepic.png'
import { Link } from 'react-router-dom';
import * as Requests from '../../Requests'
import { ProSidebar, SidebarHeader, SidebarContent, Menu, MenuItem} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import {FaPlus} from "react-icons/fa";
import { FiSettings} from "react-icons/fi"
import 'semantic-ui-css/semantic.min.css';
import UserArticles from './UserArticles'
import UserVideos from './UserVideos'

const SponsorProfile = () => {
    const [articles, setArticles] = useState([]);

    useEffect(()=>{
        Requests.getAllArticles().then(data=>{
            if(data.statusCode !== 404) {
                setArticles(data)
            }
        }).catch(() => null);
    },[]);
   
    const [user, setUser] = useState({
        username: "",
        password: "",
      });

      useEffect(()=>{
        Requests.getUserDetails().then(data=>{
            setUser(data);
            console.log(data);
        }).catch(() => null);
    },[]);

    const[tab, setTab] = useState(0);
    
    

    return (
        <div className = "sponsor-container">
            <div className = "main-body">
            <div className = "prof-sidebar">
            <ProSidebar >
            <SidebarHeader className = "sidebar-header">
            <div className = "prof-img"><img src = {aboutImg}></img></div>
            </SidebarHeader>
            <SidebarContent>
            <div className = "emp-content">  {user.first_name + " " + user.last_name}</div>
            
            <Menu className = "prof-menu" iconShape="square">

                <MenuItem icon={<FaPlus/>}>Add Article</MenuItem>
                <MenuItem icon={<FaPlus />} >Add Video</MenuItem> 
                <MenuItem icon={<FiSettings />} >Settings</MenuItem> 
            </Menu>
            </SidebarContent>
            </ProSidebar>
                
            </div>
            <div className = "right-side">
                <div className = "right-nav">
                <ul>
                    <li onClick = {() => setTab(0)}  className={`user-articles ${tab == 0 ? "active" : ""}` }>My Articles</li>
                    <li onClick = {() => setTab(1)}  className={`user-videos ${tab == 1 ? "active" : ""}` }>My Videos</li>
                      
                </ul>
                </div>

            <div className = "profile-body">

            {tab == 0 && <UserArticles/>}
            {tab ==1 && <UserVideos/>}
            
        </div>
        </div>
        </div>
        </div>

    )
}

export default SponsorProfile

