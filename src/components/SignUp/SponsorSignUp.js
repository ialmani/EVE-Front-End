import React, { Component } from "react";
import { Button } from '../Button';
import { Link } from 'react-router-dom';

class SponsorSignUp extends Component {
  render() {
    return (
      <div>
        <div className='infoRow'>
          <div className='column1'>
            <h1>Sponsor</h1>
            <ul>
                <label htmlFor = 'for'>Sponsor Name</label>
                <input type= 'text' required/>
            </ul>
            <ul>
                <label htmlFor = 'for'>Email</label>
                <input type= 'email' required/>
            </ul>
            <ul>
                <label htmlFor = 'for'>Password</label>
                <input type= 'password' required/>
            </ul>
            <ul>
                <label htmlFor = 'for'>Confirm Password</label>
                <input type= 'password' required/>
            </ul>
            <ul>
                <label htmlFor = 'for'>NAICS Number</label>
                <input type= 'text' required/>
            </ul>
            <ul>
                <label htmlFor = 'for'>Phone Number</label>
                <input type= 'text' required/>
            </ul>
            <ul>
                <label htmlFor = 'for'>Address</label>
                <input type= 'text' required/>
            </ul>
            <Link to='login'> 
                <Button>Continue</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SponsorSignUp;