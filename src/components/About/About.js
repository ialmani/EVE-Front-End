import React, { Component } from 'react';
import './About.css';

class AboutUs extends Component {
  render() {
    return (
      <div className = "about-body">
        <div className = "about-section">
          <div className = "inner-container">
            <h1>About Us</h1>
            <h3 className = "text2">
            We bring key resources to entrepreneurs enabling them to realize their visions and build social capital.</h3>
            
            
            <h3 className = "text2"> EVE provides a driect connection through candid, shared communication.</h3>
            <h3 className= "text2">The mission of EVE is to bring wisdom, key resources, and purposeful content to its users.</h3>
            <h4 className = "text">Enterprise Virtual Exchange (EVE) is a state of the art, user friendly platform that delivers illuminating 
            connections between entrepreneurs, business owners, and specialized resources providers. EVE brings virtual
            training, networking and special events to the entrepreneurs. Many small business owners spend the bulk of
            their time working their business and find it difficult to leave the shop to participate in activities that
            provide information and opportunities for business ideation, growth, and operational management. Therefore,
            we partner with small business advocates, certified Community Development Financial Institutions, and other
            small business resource providers to customize knowledge for business acumen and bring to the end-user an
            online and easily accessible platform.</h4>
            
          </div>

        </div>
      </div>
    );
  }
}

export default AboutUs;