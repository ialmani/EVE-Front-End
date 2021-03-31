import React from 'react'
import emailjs from 'emailjs-com'
import './Askeve.css'

const Askeve = () => {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_afoster', 'ask_eve_autoreply', e.target, 'user_4nj8nSwZ1kmJEp3h1kqII')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  }

  return (
    <div className='askeve-body font-roboto'>
      <div className='askeve-container'>
        <div className='askeve-heading1'>Ask EVE</div>
        <div className='askeve-heading2'>This simple form provides you with the freedom to ask the EVE team anything you would like!</div>
        <form onSubmit={sendEmail} type='text'>
          <div className='askeve-userinfocontatiner'>
            <div className='askeve-name-container'>
              <text className='askeve-label'>First, let's start by leting us know who you are.</text>
              <input type='text' className='askeve-input' name='from_name'></input>
            </div>
            <div className='askeve-email-container'>
              <text className='askeve-label'>Next, lets get your email address.</text>
              <input type='text' className='askeve-input' name='email'></input>
            </div> 
          </div>
          <div className='askeve-textarea-continer'>
            <text className='askeve-label'>Here, you can ask us anything you would like help with.</text>
            <textarea type='text' className='askeve-textarea' name='message'></textarea>
          </div>
          <text className='askeve-label'>An admin from our site will read your question(s) and will provide a response within 24 - 72 business hours.</text>
          <br></br>
          <button className='askeve-btn'> Send </button>
        </form>
      </div>
    </div>
  );
}

export default Askeve