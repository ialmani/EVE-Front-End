import React, {useState} from 'react'
import uploadImg from "../../assets/about.png"
import './UploadVideos.css'
import ReactPlayer from 'react-player'
import {useHistory} from "react-router-dom";
import * as Requests from "../../Requests";

//<img src = {}/> in line 37


const UploadVideos = () => {
    const [newVideo, setNewVideo] = useState({
        title: null,
        description: null,
        video_url:null
    });

    let history = useHistory();

    const createVideo = e => {
        e.preventDefault();
        Requests.createVideo(newVideo).then((response) => {
            history.push('/videos/'+response.id);


        }).catch(status=>
            alert(status));
    }

    return(
        <div className = "upload-video-body">
      
            <div  className = "upload-video-container" >
                <div className = "upload-video-wrapper">                    
                    <div className = "icon"><i className = "fas fa-cloud-upload-alt"></i> </div>
                </div>
            </div>             
            <div className = "f-container">
                   
                <form onSubmit={createVideo}>
                    <div className = "inputfield">
                    <input type = "text" className = "txt" placeholder = "title"  onChange={e=>setNewVideo({...newVideo, title:e.target.value})}/>
                    </div>

                    <div className = "inputfield1">
                        <textarea className = "txt" placeholder = "description"  onChange={e=>setNewVideo({...newVideo, description:e.target.value})}/>
                    </div>

                    <div className = "inputfield">
                        <input className = "txt" type = "url" placeholder = "https://example.com" pattern="https://.*" size="120" required onChange={e=>setNewVideo({...newVideo, video_url:e.target.value})}/>
                    </div>

                    <div className = "bttn">
                    <div className = "inner"></div>
                        <button type = "submit" >UPLOAD</button>
                    </div>

                </form>
            </div>
                      
        </div>
    );
}

export default UploadVideos
