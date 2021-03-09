import React from 'react';
import {Link} from 'react-router-dom';
import './AllResources.css'
import articleImg from '../../assets/articles.jpg'
import liveImg from '../../assets/liveEvents.jpg'
import videoImg from '../../assets/video.jpg'
import '../../text_config.css'

const AllResources = () => {
  return (
    <div className = "resources-banner-container">
      <div className = "resources-banner-text"><text className = "banner">Resources</text></div>
              
    <div className = "resources-body">
              
        <div className = "resources">
          <div className = "resources-img"><img src = {articleImg}/> </div>
            <div className = "resources-info">
              <text className = "banner">ARTICLES</text>
                <p className = "resources-text"><text className = "subheader">Browse through our diverse library of helpful Articles.</text></p>
                  <Link to = "/articles">
                    <a className = "resources-cta">View Articles</a>
                  </Link>
            </div>
        </div>

        <div className = "resources">
          <div className = "resources-img"><img src = {videoImg}/> </div>
            <div className = "resources-info">
              <text className = "banner">VIDEOS</text>
                <p className = "resources-text"><text className = "subheader">Soak up some knowledge with our collection of Videos.</text></p>
                  <Link to = "/videos">
                    <a className = "resources-cta">View Videos</a>
                  </Link>
            </div>
        </div>

        
        <div className = "resources">
          <div className = "resources-img"><img src = {liveImg}/></div>
            <div className = "resources-info">
              <text className = "banner">Live Events</text>
                <p className = "resources-text"><text className = "subheader">Take a look at some Live Events that are happening soon!</text></p>
                  <Link to = "/events">
                  <a  className = "resources-cta">Attend Live</a>
                  </Link>
            </div>
        </div>

  </div>

  </div>
  );
  }

  export default AllResources;
