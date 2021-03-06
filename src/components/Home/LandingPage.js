import React, { Component } from 'react';
import { Button } from '../Button';
import {Link} from 'react-router-dom';
import './LandingPage.css';
import Logo from '../../assets/eve_logo.svg'




const LandingPage = () => {
  return (
    <div className='landing-container'>
      <video className = "landing-video" src='/Videos/video-1.mp4' autoPlay loop muted />
     
      <h1 className = "landing-h1">EVE</h1>
      <p className = "landing-p" >Bringing Key Resources to Entreprenuers</p>

      <div className='landingPagebtns'>
     
        {/* <Button
          className="btns"
          buttonStyle='btn--outline'
          buttonSize='btn--large'>GET STARTED <i className="fas fa-arrow-right" />
        </Button> */}
        &nbsp;
        &nbsp;
        <Button 
          className="btns"
          buttonStyle='btn--outline'
          buttonSize='btn--large'> <i className='far fa-play-circle' />
          <a href= '/welcome'>WATCH TRAILER</a> 
        </Button>

      </div>
    </div>
  );
}

export default LandingPage;