import React, { Component } from 'react';
import './AllResources.css'
import articleImg from '../../assets/articles.jpg'
import liveImg from '../../assets/liveEvents.jpg'
import videoImg from '../../assets/video.jpg'

class AllResources extends Component {
    render() {
      return (
        <div className = "resources-body">
          <div className = "heading">
            <h1>Welcome to our collection of resources to help you learn!</h1>
          </div>       
          <div className = "grid">
            <div className = "grid-item">
              <div className = "card">
                <img className = "card-img" src = {articleImg}/> 
                <div className = "card-content">                  
                  <p className = "card-text"> Now you can access articles with just one click</p>
                  <button className = "card-btn"> View Articles <span>&rarr;</span></button>
                </div>
              </div>
            </div>
            <div className = "grid-item">
              <div className = "card">
                <img className = "card-img" src = {videoImg}></img>            
                <div className = "card-content">                 
                  <p className = "card-text"> Watch the latest videos and don't forget to add them to your favorites</p>
                  <button className = "card-btn"> View Videos <span>&rarr;</span></button>
                </div>
              </div>
            </div>
            <div className = "grid-item">
              <div className = "card">
                <img className = "card-img" src = {liveImg}></img>
                <div className = "card-content">                 
                  <p className = "card-text"> Don't forget to check the live events going on</p>
                  <button className = "card-btn"> View Events <span>&rarr;</span></button>
                </div>
              </div>             
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default AllResources;