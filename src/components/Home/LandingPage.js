import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './LandingPage.css'
import '../Button.css'

const LandingPage = () => {
  return (
    <div className='landing-container'>
      <video className='landing-video' src='/Videos/video-1.mp4' autoPlay loop muted />
      <h1 className='landing-h1'>EVE</h1>
      <p className='landing-p'>Bringing Key Resources to Entreprenuers</p>
        <Link to='/welcome' className='landingpage-btn'><i className='far fa-play-circle'/> WATCH TRAILER</Link> 
    </div>
  );
}

export default LandingPage