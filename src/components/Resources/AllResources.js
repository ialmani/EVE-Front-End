import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './AllResources.css'
import articleImg from '../../assets/articles.jpg'
import liveImg from '../../assets/liveEvents.jpg'
import videoImg from '../../assets/video.jpg'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import '../Button.css'




const AllResources = () => {
      return (
        <div className = "resources-body">
          <div className = "resources">
          <div className = "resources-img">
              <img src = {articleImg}/> 
          </div>
        <div className = "resources-info">
          <h1 className = "resources-title"> ARTICLES</h1>
          <p className = "resources-text">Welcome to our collection of Articles.</p>
          <Link to = "/articles">
          <a className = "resources-cta">View Articles</a>
          </Link>
        </div>
        </div>

        <div className = "resources">
          <div className = "resources-img">
            <img src = {videoImg}/> 
          </div>
        <div className = "resources-info">
          <h1 className = "resources-title"> VIDEOS</h1>
          <p className = "resources-text">Welcome to our collection of Videos.</p>
          <Link to = "/videos">
            <a className = "resources-cta">View Videos</a>
          </Link>
        </div>
        </div>

          
        <div className = "resources">
          <div className = "resources-img">
              <img src = {liveImg}/> 
          </div>
        <div className = "resources-info">
          <h1 className = "resources-title"> Live Events</h1>
          <p className = "resources-text">Join our live events!</p>
          <Link to = "/events">
          <a  className = "resources-cta">Attend Live</a>
          </Link>
        </div>
        </div>


      </div>
   
  );
}
  
  export default AllResources;
  