import React, {useState, useEffect} from 'react'
import './SponsorProfile.css'
import aboutImg from '../../assets/profilepic.png'
import { GiCrystalBars } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import * as Requests from '../../Requests'
import { ProSidebar, SidebarHeader, SidebarContent, Menu, MenuItem} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import {FaPlus} from "react-icons/fa";
import { FiSettings} from "react-icons/fi"
import 'semantic-ui-css/semantic.min.css';

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
                                <li onClick = "tabs(0)" className = "user-articles active">My Articles</li>
                                <li onClick = "tabs(1)"className = "user-videos">My Videos</li>
                              
                            </ul>
                        </div>
                        <div className = "profile-body">
                            <div className = "profile-articles tab">
                                <h1 className = "sp-h1">Your Articles</h1>
                                <div className = "sp-container">
                                {articles.map(article=>
                                <div className="card mb-4 sp-card" >
                                <div className="card-body">
 
    
                                <h5 className="prof-card-title">{article.title}</h5>
                                <p className="s-card-text">
                                {(article.content).substring(0,100)}...
                                </p>
 
                                </div>

                                </div>
                                )}
                              
                                


                                </div>
                            </div>
                        
                        </div>


                        <div className = "profile-videos">
                            <div className = "profile-articles tab">
                             
                            </div>
                        
                        </div>
                        <div className = "profile-settings">
                            <div className = "profile-articles tab">
                            
                            </div>
                        
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default SponsorProfile

