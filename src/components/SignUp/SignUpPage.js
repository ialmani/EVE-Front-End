import React, { Component } from "react";
import { Button } from '../Button';

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
            <Button to = '/membersignup'> Sign up as a Member </Button >
          </div>

          <div className='column2'>
            <h1>Sponsor</h1>
            <ul>
              <li> Able to subscribe and upload videos and blog posts .</li>
              <li> Able to upload advertisements of your business.</li>
            </ul>            
            <Button to = './sponsorsignup'> Sign up as a Sponsor </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;