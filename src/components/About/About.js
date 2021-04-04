import React from 'react'
import './About.css'
import Logo from "../../assets/logo_full.PNG"

const AboutUs = () => {
    return (
      <div className = 'about-body font-roboto'>
        <div className = "about-section">
        <img src={Logo} className='about-logo'></img>
          <div className = "about-container">
            <text className='about-subheader'>
              We bring key resources to entrepreneurs enabling them to realize their visions and build social capital.
              EVE provides our users with a driect connection through candid, shared communication.
              The mission of EVE is to bring wisdom, key resources, and purposeful content to its users.
            </text><br></br>
            <text className='about-paragraph'><br></br>
              Enterprise Virtual Exchange (EVE) is a state of the art, user friendly platform that delivers illuminating 
              connections between entrepreneurs, business owners, and specialized resources providers. EVE brings virtual
              training, networking and special events to the entrepreneurs. Many small business owners spend the bulk of
              their time working their business and find it difficult to leave the shop to participate in activities that
              provide information and opportunities for business ideation, growth, and operational management. Therefore,
              we partner with small business advocates, certified Community Development Financial Institutions, and other
              small business resource providers to customize knowledge for business acumen and bring to the end-user an
              online and easily accessible platform.
            </text>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;