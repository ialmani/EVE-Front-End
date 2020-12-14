import React, { Component } from 'react';
import { Button } from '../Button';
import './LandingPage.css';
import PopUpVideo from './PopUpVideo';
import {Link} from 'react-router-dom';

class LandingPage extends Component {
state = {
   seen: false
   };
  togglePop = () => {
   this.setState({
    seen: !this.state.seen
   });
  };

render() {
  return (
    <div className='landing-container'>
      <video src='/Videos/video-1.mp4' autoPlay loop muted />
       <h1>Welcome to EVE</h1>
        <p>Bringing Key Resources to Small Businesses and Entrepreneurs</p>
      <div className='landingPagebtns'>
        <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'>
          <Link to='get-started'>
          GET STARTED
        </Link>
        </Button>

        <div>
            <div className="btn" onClick={this.togglePop}>
              <Button
                buttonStyle='btn--primary'
                buttonSize='btn--medium'>WATCH TRAILER <i className='far fa-play-circle' />
              </Button>
            </div>
            {this.state.seen ? <PopUpVideo toggle={this.togglePop} /> : null}
        </div>
      </div>
    </div>
  );
}}

export default LandingPage;