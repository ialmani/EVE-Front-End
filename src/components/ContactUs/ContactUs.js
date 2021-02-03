import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "./ContactUs.css";

class ContactUs extends Component {
  render() {
    return (
      <div class="Contact-body">
        <div class="Contact-section">
          <div class="Contact-container">
            <h1>Hello, Do you want to get in contact with us?</h1>
            <h2 class="text2"> The best way to reach us is through our site assistance Ask EVE.</h2>
            <p class="text">Ask EVE is our way to answer any questions you may have about the EVE site.<br></br> You will email an admin of the site who will read your question(s) and they try to will get back to you between 24 - 72 business hours.</p>
            <Link to= '/askeve' className= 'Contact-askevebutton'>
            ASK EVE<span>&rarr;</span>
            </Link>      
          </div>
      </div>
    </div>
    );
  }
}

export default ContactUs;