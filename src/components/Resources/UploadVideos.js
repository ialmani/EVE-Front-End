import React, {useState} from 'react'
import uploadImg from "../../assets/about.png"
import './UploadVideos.css'


//<img src = {}/> in line 37

import * as Requests from "../../Requests";
import { useHistory } from "react-router-dom";

const UploadVideos = () => {
    const [newVideo, setNewVideo] = useState({
        title: null,
        author: null,
        content:null
    });

    let history = useHistory();

    const uploadVideo =  e => {
        e.preventDefault();
        Requests.uploadVideo(newVideo).then((response) => {
            console.log(response.id)
            history.push('/videos/'+response.id);
        }).catch(status=>
            alert(status));
    }
    // // const readFile = (file) => {
    // //     let files = e.target.files;
    // //     let reader = new FileReader();
    // //     reader.readAsDataURL(files[0]);  
    // //     reader.onload = (file) => {
    // //     }
    // };

    return(
        <div className = "upload-video-body">
            <div className = "upload-video-container" onSubmit={uploadVideo}>
                <div className = "upload-video-wrapper">                    
                    <div className = "image"> 
                        {/* <img src = ""></img>                      */}
                    </div>
                    <div className = "content">
                        <div className = "icon"><i class = "fas fa-cloud-upload-alt"></i> </div>
                        {/* <div className = "text">No file chosen! </div>                        */}
                    </div>
                    <div id = "cancel-btn"><i className = "fas fa-times"></i></div>
                     {/* <div className = "file-name">File name here </div>  */}
                </div>
                <input id = "default-btn" type = "file" ></input>
                <button id="custom-btn" onChange={e=>setNewVideo({...newVideo, content:e.target.value})}>Upload File</button>
            </div>             
        </div>
    );
}

export default UploadVideos
