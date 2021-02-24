import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './AllResources.css'
import articleImg from '../../assets/articles.jpg'
import liveImg from '../../assets/liveEvents.jpg'
import videoImg from '../../assets/video.jpg'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'




const AllResources = () => {
      return (
        <div className = "resources-body">
          <div className = "page-container"> 
          <div className = "heading-r">
            <h1>Welcome to our Resources Page!</h1>
          
          </div>

          
        <div className = "card-container">
          <Card style={{ width: '25rem'}}>
          <Card.Img src= {articleImg}/>
          <Card.Body>
          <Card.Title>Articles</Card.Title>
          <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">View Articles</Button>
  </Card.Body>
    </Card>
   

         <Card style={{ width: '25rem'}}>
        <Card.Img src= {videoImg}/>
        <Card.Body>
    <Card.Title>Videos</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Watch Videos</Button>
  </Card.Body>
    </Card>
  
         <Card style={{ width: '25rem'}}>
        <Card.Img src= {liveImg}/>
        <Card.Body>
    <Card.Title>Live Events</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Attend Live</Button>
  </Card.Body>
    </Card>
    </div>
      </div>

    </div>
   
  );
}
  
  export default AllResources;
  