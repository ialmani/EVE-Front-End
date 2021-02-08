import React, {useEffect, useState} from 'react';
import './Videos.css'
import videoImg from '../../assets/pic3.png'
import playImg from '../../assets/play.png'
import ReactPlayer from  'react-player'
import * as Requests from "../../Requests";
// import closeImg from '../../assets/close.png'
// import video from '../../assets/video.mp4'


const Videos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    Requests.getAllVideos().then(data => {
      if (data.statusCode !== 404) {
        setVideos(data)
      }
    }).catch(() => null);
  }, []);

  return (
      <div>
      <div className = "videos-body">
        <div className = "videos-container">
          <h1>Welcome to our videos page!</h1>
      <div className = "videos-col">

        {videos.map(video =>
            <div>
            <div>
            <p>{video.title} <br/>{video.description}</p>
            </div>
          <div className = "small-img-row">
          <div className = "small-img">
            <ReactPlayer
                url={video.video_url}
                light = {true}
                playing
                controls/>
          </div>
          </div>
          </div>





        )}
      </div>
        </div>
      </div>
      </div>
      
  )
}


export default Videos;