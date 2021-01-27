import React, { Component } from 'react';
import { Link } from "react-router-dom";

class AllResources extends Component {
    render() {
      return (
        <div>
          <h1>Welcome to our collection of resources to help you learn!</h1>
          <h2>What would you like to see?</h2>
            <Link to="/articles"> Show me articles</Link>
            <div></div>
            <Link to="/videos"> Show me videos</Link>
            <div></div>
            <Link to="/events"> Show me events</Link>
        </div>
      );
    }
  }
  
  export default AllResources;