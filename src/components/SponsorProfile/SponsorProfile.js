import React, {useState, useEffect} from 'react'
import './SponsorProfile.css'
import aboutImg from '../../assets/profilepic.png'
import { GiCrystalBars } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import * as Requests from '../../Requests'


const SponsorProfile = () => {
    //$('.right-nav ul li').click(function () { $(this).addClass("active").siblings().removeClass("active")})
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
            <div className = "profile-header">
                <div className = "profile-img">
                    <img src = {aboutImg} width = "200" alt = ""/>
                </div>
               
                <div className = "profile-nav-info">
                    <h3 className = "user-name">{user.first_name + " " + user.last_name}</h3>
                    <div className = "address">
                        <p className = "state">Indiana,</p>
                        <span className = "country">USA</span>
                    </div>
                    <Link to = "sponsor-packages">
                    <div className ="profile-option">
                        
                        <div className = "notification"/>
                        
                        <span className = "alert-message" ><GiCrystalBars /></span>
                      
                    </div>
                    </Link>

                </div>
        
            </div>
                <div className = "main-body">
                    <div className = "left-side">
                        <div className = "profile-side">
                            <p className = "mobile-no"> <i className = "fa fa-phone"></i>908553773</p>
                            <p className = "user-email"><i className = "fa fa-envelope"></i>{user.email}</p>
                            <div className = "user-bio">
                                <p className = "bio">A computer science major with an interest in web development. Favourite color is green</p>
                            </div>
                            <div className = "profile-btn">
                            <Link to= "articles/create">
                                <button className = "article-btn">
                                <i className = "fa fa-plus">Article</i>
                                </button>
                            </Link>
                            <Link to = "videos/upload">
                                <button className = "video-btn">
                                <i className = "fa fa-plus">Video</i>
                                </button>
                            </Link>
                            </div>
                        </div>
                    </div>
                    <div className = "right-side">
                        <div className = "right-nav">
                            <ul>
                                <li onClick = "tabs(0)" className = "user-articles active">User Articles</li>
                                <li onClick = "tabs(1)"className = "user-videos">User Videos</li>
                                <li onClick = "tabs(2)"className = "user-settings">User Settings</li>
                            </ul>
                        </div>
                        <div className = "profile-body">
                            <div className = "profile-articles tab">
                                <h1>Your Articles</h1>
                                <p>First Article</p>
                            </div>
                        
                        </div>
                        <div className = "profile-videos">
                            <div className = "profile-articles tab">
                                <h1>Your Videos</h1>
                                <p>videos uploaded</p>
                            </div>
                        
                        </div>
                        <div className = "profile-settings">
                            <div className = "profile-articles tab">
                                <h1>Account Settings</h1>
                                <p>settings for your account</p>
                            </div>
                        
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default SponsorProfile

