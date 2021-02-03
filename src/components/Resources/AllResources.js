import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './AllResources.css'
import articleImg from '../../assets/articles.jpg'
import liveImg from '../../assets/liveEvents.jpg'
import videoImg from '../../assets/video.jpg'

const AllResources = () => {
      return (
        <div className = "resources-body">
          <div className = "heading"><h1>Welcome to our collection of resources to help you learn!</h1></div>
          <div className = "grid">

            <div className = "grid-item">
              <div className = "card">
                <img className = "card-img" src = {articleImg}/> 
                <div className = "card-content">                  
                  <p className = "card-text"> Now you can access articles with just one click</p>
                  <button className = "card-btn"><Link to= '/articles'> View Articles</Link></button>
                </div>
              </div>
            </div>

            <div className = "grid-item">
              <div className = "card">
                <img className = "card-img" src = {videoImg}></img>            
                <div className = "card-content">                 
                  <p className = "card-text"> Tons of categories for you to pick videos from</p>
                  <button className = "card-btn"><Link> View Videos</Link></button>
                </div>
              </div>
            </div>

            <div className = "grid-item">
              <div className = "card">
                <img className = "card-img" src = {liveImg}></img>
                <div className = "card-content">                 
                  <p className = "card-text"> Don't forget to check the live events going on</p>
                  <button className = "card-btn"><Link> View Events</Link></button>
                </div>
              </div>             
            </div>
            
          </div>
        </div>
      );
  }
  
  export default AllResources;