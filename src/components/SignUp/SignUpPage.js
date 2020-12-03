import React, { Component } from "react";
import { Button } from '../Button';
import { Link } from 'react-router-dom';

class SignUp extends Component {
  render() {
    return (
      <div>
        <div className='infoRow'>
          <div className='column1'>
            <h1>Member</h1>
            <ul>
                <li> Access information from other businesses.</li>
                <li> Share and comment on blog posts.</li>
            </ul>           
            <Link to='memberSignUp'> 
            <Button> Sign up as a Member</Button>
            </Link>
          </div>

          <div className='column2'>
            <h1>Sponsor</h1>
            <ul>
              <li> Able to subscribe and upload videos and blog posts .</li>
              <li> Able to upload advertisements of your business.</li>
            </ul>
            <Link to='sponsorSignUp'> 
            <Button> Sign up as a Sponsor</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;