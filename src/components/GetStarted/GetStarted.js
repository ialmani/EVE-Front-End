import React, { Component } from 'react';
import { Link } from "react-router-dom";

class GetStarted extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to Enterprise Virtual Exchange!</h1>
        <h2>Do you have a membership with us?</h2>
          <Link to="/login"> Yes, I am a member </Link>
          <div></div>
          <Link to="/articles"> No, I am a guest user</Link>
      </div>
    );
  }
}

export default GetStarted;