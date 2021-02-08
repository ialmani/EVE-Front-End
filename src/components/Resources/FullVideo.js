import React, {useEffect, useState} from 'react'
import './FullVideo.css'
import ReactPlayer from  'react-player'
import {useParams} from "react-router-dom";
import * as Requests from "../../Requests";


export const FullVideo = () => {
    const [video, setVideo] = useState([]);
    let {id} = useParams();


    useEffect(() => {

        Requests.getVideo(id).then(data => {
            if (data.statusCode !== 404) {
                setVideo(data)

            }
        }).catch((err) => console.log(err));
    });
    return (

        <div className="full-vid-body">
            <div className="backg">
                <div className="full-vid-container">
                    <ReactPlayer url={video.video_url} fluid={false} controls={false}/>
                </div>

                <div className="box">
                    <div className="text">
                        <h1>{video.title}</h1>
                        <h3>{video.description}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FullVideo
 