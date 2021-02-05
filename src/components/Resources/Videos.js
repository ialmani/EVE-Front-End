import React from 'react';
import './Videos.css'
import videoImg from '../../assets/pic3.png'
import playImg from '../../assets/play.png'
// import closeImg from '../../assets/close.png'
// import video from '../../assets/video.mp4'

const Videos = () => (
  <div className = "videos-body">
    <div className = "videos-container">
      <h1>Welcome to our videos page!</h1>
      <div className = "videos-row">
        <div className = "videos-col">
          <div className = "feature-img">
            <img src = {videoImg} width = "100%"/>
            <img src = {playImg} className = "play-btn1"/>
          </div>
        </div>

        <div className = "videos-col">
          <div className = "small-img-row">
            <div className = "small-img"> 
              <img src = {videoImg}></img>
              <img src = {playImg} className = "play-btn"/>
            </div>
            <p>Title <br/>This is the description. This is the description. This is the description. This is the description. This is the description</p>
          </div>
          <div className = "small-img-row">
            <div className = "small-img">
              <img src = {videoImg}/>
              <img src = {playImg} className = "play-btn"/>
            </div>
            <p>Title <br/>This is the description. This is the description. This is the description. This is the description. This is the description</p>
          </div>
          <div className = "small-img-row">
            <div className = "small-img">
              <img src = {videoImg}/>
              <img src = {playImg} className = "play-btn"/>
            </div>
            <p>Title <br/>This is the description. This is the description. This is the description. This is the description. This is the description</p>
          </div>         
        </div>
      </div>
    </div>


    {/* <div className = "video-player">
      <video width = "100%" controls autoPlay>
        <source src = {video} type = "video/mp4"></source>
      </video>
      <img src = {closeImg} className = "close-btn"></img>
    </div>
     */}
   

  </div>

);

export default Videos;