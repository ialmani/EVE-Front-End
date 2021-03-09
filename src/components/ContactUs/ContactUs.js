import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "./ContactUs.css";

class ContactUs extends Component {
  render() {
    return (
      <div className = "contactus-body">
        <div className = "contactus-section">
          <div className = "contactus-container">
                <text className = "header">
                  We are here to help!</text>
                <div className = "subheader">
                    The best way to reach us is through our site assistance Ask EVE.
                    Ask EVE is our way to answer any questions you may have about the EVE site.</div>
                <div className = "paragraph">
                 You will email an admin of the site who will read your question(s) and they try to will get back to you between 24 - 72 business hours.</div>
                 <Link to= '/ask-eve' className= 'contact-button'>
            <div className = "contactus-button-container"><text className = "banner">ASK EVE<span>&rarr;</span></text></div>
          </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;