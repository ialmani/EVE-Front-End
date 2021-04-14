import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './ContactUs.css'
import '../Button.css'

class ContactUs extends Component {
  render() {
    return (
      <div className='contactus-body font-roboto'>
        <div className='contactus-section'>
          <div className='contactus-container'>
            <h1 className='contactus-h1'>
              Welcome to ASK EVE. <br></br>We are here to help!
            </h1>
            <h2 className='contactus-h2'>
              The best way to reach us is through our site assistance Ask EVE.
            </h2>
            <p className='contactus-p'>
              Ask EVE is our way to answer any questions you may have about our resources and available educational content.<br></br>
              Our intuitive service will automatically email an admin of the site who will read
              your "Ask EVE" Form and will get back to you between 24 - 72 business hours.
            </p>
            <Link to='/ask-eve' className='contactus-button'>
            ASK EVE<span>&rarr;</span>
            </Link>
            <p className='contactus-h2'> 
              <br></br><br></br>
              For questions regarding website information or troubleshooting please contact us at: 
              <br></br>Phone: +1-800-555-5555
              <br></br>Email: EVE@gmail.com
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs