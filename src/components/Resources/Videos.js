import React, {useEffect, useState} from 'react';
import './Videos.css'
import * as Requests from '../../Requests'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'

import SearchBar from '../Articles/SearchBar'

const Videos = (props) => { 
  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);


  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== ""){
      const newVideoList = videos.filter((video) => {
        return Object.values(video).join(" ").toLowerCase().includes(searchTerm.toLowerCase()) ;
        
      })
      setSearchResults(newVideoList);
    }
    
    else {
      setSearchResults(videos);
    }
  };
  useEffect(() => {
    Requests.getAllVideos().then(data => {
      if (data.statusCode !== 404) {
        setVideos(data)
      }
    }).catch(() => null);
  }, []);


  const renderVideos = () => {
    if (searchTerm.length <= 0) {

    return (
      <div>
      {videos.map(video => 
        <div className = "content">
          <div className = "vid">
            <ReactPlayer url= {video.video_url} light = {true} playing control width = "400px" height = "200px"/>
            <div className = "textBox">
             
                <h1 className = "video-h">{video.title}</h1>
          
              <p className = "video-desc">{video.description}</p>
              <Link to = {'/videos/'+video.id} >
                <button className ="video-btn">view more</button>
              </Link>
            </div>
          </div>
        </div>

        )}
      </div>
    )
  }
  return (
    <div>

    {searchResults.map(video => 
      <div className = "content">
        <div className = "vid">
          <ReactPlayer url= {video.video_url} light = {true} playing control width = "400px" height = "200px"/>
          <div className = "textBox">
           
              <h1 className = "video-h">{video.title}</h1>
        
            <p className = "video-desc">{video.description}</p>
            <Link to = {'/videos/'+video.id} >
              <button className ="video-btn">view more</button>
            </Link>
          </div>
        </div>
      </div>
      )}
    </div>)
}


  return (
    <div className = "videos-body">
       <SearchBar 
          {...props}
          term = {searchTerm}
          searchKeyword = {searchHandler}

        />
      <h1 className = "video-h1"> Welcome to our videos page!</h1>

      {renderVideos()}
    </div>
  );
}

export default Videos