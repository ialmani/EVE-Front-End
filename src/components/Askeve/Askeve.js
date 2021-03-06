import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Input } from 'semantic-ui-react';
import emailjs from 'emailjs-com'
import "./Askeve.css";


const Askeve = () => {

      function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('gmail', 'ask_eve', e.target, 'user_4nj8nSwZ1kmJEp3h1kqII')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }

      return (
        <div className='Askeve-body'>
          <div className='Askeve-container'>
            <div className='Askeve-heading1'>Ask EVE</div>
            <div className='Askeve-heading2'>How can Ask EVE help you today?</div>
              <form onSubmit = {sendEmail} className = "text" > 
                First let's start by telling me who you are.
                <Input type = 'text' name = "from_name"></Input>
                Where should we contant you?
                <Input type = 'text' name = "email"></Input>
                
                <div></div>
                Here, you can ask us anything you would like help with.
                <textarea name = "message"></textarea>
                <div></div>
                An admin from our site will read your question(s) and will provide a response within 24 - 72 business hours.
             
               <button className = "ask-btn" > Send </button>
             
              </form>    
            </div>
          </div>
      );
    }

  
export default Askeve;