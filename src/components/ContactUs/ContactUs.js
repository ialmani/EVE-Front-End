import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FaPhone } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import './ContactUs.css'
import '../Button.css'

class ContactUs extends Component {
  render() {
    return (
      <div className='contactus-body font-roboto'>
        <div className='contactus-section'>
          <div className='contactus-container'>
            <h1 className='contactus-h1'>
              Welcome to EVE. <br></br>Thank you for visiting our website.
            </h1>
            <h2 className='contactus-h2'> 
              For questions regarding website information or troubleshooting please contact us at: 
            </h2>
            <h1 className='contactus-h1'>
            <FaPhone/> +1-800-555-5555 <br></br>
            <HiOutlineMail/> EVE@gmail.com
            </h1>
            <h2 className='contactus-h2'>Question about our resources or sponsors? </h2>
            <p className='contactus-p'>
              Ask EVE is our way to answer any questions you may have about our resources and available educational content.<br></br>
              Our intuitive service will automatically message an administrator of the site who will read
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