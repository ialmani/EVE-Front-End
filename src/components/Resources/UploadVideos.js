import React, {useState} from 'react'
import uploadImg from "../../assets/about.png"
import './UploadVideos.css'
import ReactPlayer from 'react-player'

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
                   
                <form action = "#">
                    <div className = "data">
                    <input type = "text" placeholder = "title"/>
                    </div>

                    <div className = "data1">
                        <textarea placeholder = "description"/>
                    </div>

                    <div className = "data">
                        <input type = "url" placeholder = "https://example.com" pattern="https://.*" size="30" required/>
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
