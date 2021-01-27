import React, { Component } from 'react';
import { Link } from "react-router-dom";

class GetStarted extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to Enterprise Virtual Exchange!</h1>
        <h3>EVE is a virtual marketplace for entrepreneurs and enterprises to exchange information
            and make small business education and connections to other related resources easily
            accessible through a virtual learning platform.</h3>
        <h3>Small and micro business owners, along with supporting partner institutions, are able
            to engage with the platform as a member with an individual or organization profile.</h3> 
        <h3>To get started - use the LOGIN tab to sign-up as a Member. Through your membership,
            business owners, partners, and sponsors are able to search and view profiles of enterprises
            that offer specific tool kits and resources, the ability to build social capital and advance
            your business.</h3> 
        <h1>Do you have a membership with us?</h1>
          <Link to="/login"> Yes, I am a member </Link>
          <div></div>
          <Link to="/articles"> No, I am a guest user</Link>
      </div>
    );
  }
}

export default GetStarted;