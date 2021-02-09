import React, {useEffect, useState}from 'react';
import './Videos.css'
import * as Requests from '../../Requests'

import ReactPlayer from 'react-player'

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
    <div className = "videos-body">

      {videos.map(video => 
        <div className = "content">
          <h1> Welcome to our videos page!</h1>
          <div className = "vid">
          
          <ReactPlayer url= {video.url} light = {true} playing control width = "400px" height = "200px"/>
          <div className = "textBox">
          <h4>{video.title}</h4>
          <h5>{video.description}</h5>
          </div>
          <br/>
          <br/>
          
        </div>

        </div>
        )}
    </div>
  );
}

export default Videos;