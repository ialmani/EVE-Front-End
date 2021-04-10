import React, {useState, useEffect} from 'react'
import aboutImg from '../../assets/profilepic.png'
import {Link, useParams} from 'react-router-dom'
import * as Requests from '../../Requests'
import UserArticles from './UserArticles'
import UserVideos from './UserVideos'
import 'react-pro-sidebar/dist/css/styles.css'
import 'semantic-ui-css/semantic.min.css'
import './SponsorProfile.css'
import '../styles.css'
import '../Button.css'

const SponsorProfile = () => {
    const [articles, setArticles] = useState([]);
    let {user_id} = useParams();
   
    const [user, setUser] = useState({
        username: "",
        password: "",
      });

      useEffect(()=>{
          console.log(user_id)
        Requests.getUser(user_id).then(data=>{
            setUser(data);
            console.log(data);
        }).catch(() => null);
    },[]);

    useEffect(()=>{
        Requests.getAllArticles().then(data=>{
            if(data.statusCode !== 404) {
                const newArticles = data.filter((article) => {article.user_id === user.id})
                setArticles(newArticles)
            }
        }).catch(() => null);
    },[]);

    const[tab, setTab] = useState(0);
    
    return (
        <div className='sponsorprofile-body font-roboto'>
            <div className='sponsorprofile-container'>
                <div className='sponsorprofile-sidebar-body'>
                    <div className='sponsorprofile-sidebar-container'>
                        <div className='sponsorprofile-sidebar-png'>
                            <img src = {aboutImg}></img>
                        </div>
                        <div className='sponsorprofile-sidebar-name'>
                            {user.first_name +" "+ user.last_name}
                        </div>
                        <div className='sponsorprofile-sidebar-content'>
                            <div className='sponsorprofile-sidebar-menu'>
                                <Link to='/articles/create' className='sponsorprofile-sidebar-btn'>Add Article</Link>
                                <Link to='/videos/upload' className='sponsorprofile-sidebar-btn'>Add Video</Link> 
                                <Link to='/settings' className='sponsorprofile-sidebar-btn'>Settings</Link> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className='right-side-container'>
                    <div className='right-tabs'>
                        <Link onClick={() => setTab(0)} className={`user-articles ${tab == 0 ? "active" : ""}`}>My Articles</Link>
                        <Link onClick={() => setTab(1)} className={`user-videos ${tab == 1 ? "active" : ""}`}>My Videos</Link>
                    </div>
                    <div className='right-side'>
                        <div className='right-tab-cont'>
                            {tab ==0 && <UserArticles articles={articles}/>}
                            {tab ==1 && <UserVideos/>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SponsorProfile