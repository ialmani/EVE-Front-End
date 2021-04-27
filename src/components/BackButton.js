import React from 'react';
import {  useHistory } from 'react-router-dom';
import './Button.css'

const BackButton = () => {
    let history = useHistory()
    return (
        <button className = "backbutton" onClick={() => history.goBack()}> &larr; Back </button>
    );
};

export default BackButton;