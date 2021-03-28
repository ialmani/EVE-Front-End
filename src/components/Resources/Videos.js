import React, { useEffect, useState } from 'react'
import './Videos.css'
import * as Requests from '../../Requests'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'
import '../Button.css'

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
    <div className='videos-body'>
      <h1 className='video-h1'> Welcome to our videos page!</h1>
      {videos.map(video =>
        <div className='content'>
          <div className='vid'>
            <ReactPlayer url={video.video_url} light={true} playing control width="400px" height="200px" />
            <div className='textBox'>
              <h1 className='video-h'>{video.title}</h1>
              <p className='video-desc'>{video.description}</p>
              <Link to={'/videos/' + video.id} >
                <button className='video-btn'>view more</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Videos