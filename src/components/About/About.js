import React from 'react';
import './About.css';
import '../../text_config.css'

const AboutUs = () => {
    return (
      <div className = "about-body">
        <div className = "about-section">
              <div className = "about-header">
              <text className = "banner">About Us</text>
              </div>
        <div className = "about-container">
              <text className = "header">
                We bring key resources to entrepreneurs enabling them to realize their visions and build social capital.</text>
              <div className = "subheader">
                  EVE provides a driect connection through candid, shared communication.
                  The mission of EVE is to bring wisdom, key resources, and purposeful content to its users.</div>
              <div className = "paragraph">
                Enterprise Virtual Exchange (EVE) is a state of the art, user friendly platform that delivers illuminating 
                connections between entrepreneurs, business owners, and specialized resources providers. EVE brings virtual
                training, networking and special events to the entrepreneurs. Many small business owners spend the bulk of
                their time working their business and find it difficult to leave the shop to participate in activities that
                provide information and opportunities for business ideation, growth, and operational management. Therefore,
                we partner with small business advocates, certified Community Development Financial Institutions, and other
                small business resource providers to customize knowledge for business acumen and bring to the end-user an
                online and easily accessible platform.</div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;