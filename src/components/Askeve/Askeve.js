import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Input } from 'semantic-ui-react';
import "./Askeve.css";


class Askeve extends Component {
    render() {
      return (
        <div class='Askeve-body'>
            <div class='Askeve-container'>
                <div class='Askeve-heading1'>Ask EVE</div>
                <div class='Askeve-heading2'>How can Ask EVE help you today?</div>
                    <div class="text"> First let's start by telling me who you are.
                        <Input></Input>
                        Here, you can ask us anything you would like help with.
                        <Input></Input>
                        An admin from our site will read your question(s) and will provide a response within 24 - 72 business hours.
                        <Link to= '/askeve-submission' className= 'Askeve-submission'>
                        Send my question<span>&rarr;</span>
                        </Link>
                    </div>
            </div>
        </div>
      );
    }
  }
  
export default Askeve;