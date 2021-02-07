import React, {useState} from 'react'
import uploadImg from "../../assets/about.png"
import './UploadVideos.css'
import ReactPlayer from 'react-player'
import { useHistory } from "react-router-dom";
import * as Requests from '../../Requests'
//<img src = {}/> in line 37


const UploadVideos = () => {
    return(
        <div className = "upload-video-body">
      
            <div  className = "upload-video-container" >
                <div className = "upload-video-wrapper">                    
                    <div className = "icon"><i class = "fas fa-cloud-upload-alt"></i> </div>
                </div>
            </div>             
            <div className = "f-container">
                   
                <form onSubmit={uploadVideo}>
                    <div className = "input-field">
                    <input type = "text" placeholder = "title" className = "input" onChange={e=>setNewVideo({...newVideo, title:e.target.value})}/>
                    </div>

                    <div className = "input-field">
                        <textarea placeholder = "description" className="input" onChange={e=>setNewVideo({...newVideo, description:e.target.value})}/>
                    </div>

                    <div className = "input-field">
                        <input type = "url" placeholder = "https://example.com" pattern="https://.*" size="30" required onChange={e=>setNewVideo({...newVideo, URL:e.target.value})}/>
                    </div>

                    <div className = "button">
                    <div className = "inner"></div>
                        <button type = "submit" >UPLOAD</button>
                    </div>

                </form>
            </div>
                      
        </div>
    );
}

export default UploadVideos
