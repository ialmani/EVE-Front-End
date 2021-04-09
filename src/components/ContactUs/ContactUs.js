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
              Welcome to ASK EVE. We are here to help!
            </h1>
            <h2 className='contactus-h2'>
              The best way to reach us is through our site assistance Ask EVE.
            </h2>
            <p className='contactus-p'>
              Ask EVE is our way to answer any questions you may have about the EVE site<br></br>
              Our intuitive service will automatically email an admin of the site who will read<br></br>
              your "Ask EVE" Form and will get back to you between 24 - 72 business hours.
            </p>
            <Link to='/ask-eve' className='contactus-button'>
            ASK EVE<span>&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs