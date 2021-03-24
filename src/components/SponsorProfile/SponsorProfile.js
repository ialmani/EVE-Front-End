import React, {useState, useEffect} from 'react'
import './SponsorProfile.css'
import aboutImg from '../../assets/profilepic.png'
import { Link } from 'react-router-dom';
import * as Requests from '../../Requests'
import {Menu, MenuItem} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import {FaPlus} from "react-icons/fa";
import { FiSettings} from "react-icons/fi"
import 'semantic-ui-css/semantic.min.css';
import UserArticles from './UserArticles'
import UserVideos from './UserVideos'
import '../styles.css';

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
        <div className = "sponsorprofile-body font-roboto">
            <div className = "sponsorprofile-container">
                <div className = "sponsorprofile-sidebar-body">
                    <div className = "sponsorprofile-sidebar-container">
                        <div className = "sponsorprofile-sidebar-png">
                            <img src = {aboutImg}></img>
                        </div>
                        <div className = "sponsorprofile-sidebar-name">
                            {user.username}
                        </div>
                        <div className = "sponsorprofile-sidebar-content">
                            <div className = "sponsorprofile-sidebar-menu">
                                <Link to="/articles/create" className= "sponsorprofile-sidebar-btn">Add Article</Link>
                                <Link to="/videos/upload" className= "sponsorprofile-sidebar-btn">Add Video</Link> 
                                <Link to="/settin" className= "sponsorprofile-sidebar-btn">Settings</Link> 
                            </div>
                        </div>
                    </div>
                </div>

                <div className="right-side-container">
                    <div className = "right-tabs">
                        <div onClick = {() => setTab(0)} className={`user-articles ${tab == 0 ? "active" : ""}`}>My Articles</div>
                        <div onClick = {() => setTab(1)} className={`user-videos ${tab == 1 ? "active" : ""}`}>My Videos</div>    
                    </div>
                    <div className = "right-side">
                        <div className = "right-tab-cont">
                            {tab ==0 && <UserArticles />}
                            {tab ==1 && <UserVideos/>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SponsorProfile
