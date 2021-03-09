import React from 'react';
import { Input } from 'semantic-ui-react';
import emailjs from 'emailjs-com'
import "./Askeve.css";
import '../../text_config.css'


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
        <div className= "Askeve-section">
          <text className='header'>Ask EVE</text><br></br>
          <text className='subheader'>How can Ask EVE help you today?</text><br></br><br></br>
          <div className = "Askeve-container-form">
            <form onSubmit = {sendEmail} className = "text" > 
              <text className='paragraph'>First let's start by telling me who you are. (Name)</text>
              <Input type = 'text' name = "from_name"></Input>
              <text className='paragraph'>Where should we contant you? (Email Address)</text>
              <Input type = 'text' name = "email"></Input>
              <text className='paragraph'>Here, you can ask us anything you would like help with.</text>
              <textarea name = "message"></textarea>
              <text className='paragraph'>
                An admin from our site will read your question(s) and will provide a response within 24 - 72 business hours.
              </text>
              <br></br>
              <button className = "ask-btn" >
              Send
              </button>
              
            </form> 
            </div>
          </div>   
        </div>
      </div>
  );
}


export default Askeve;