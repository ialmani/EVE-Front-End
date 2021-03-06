import React from 'react';
import './App.css';
import { BaseRouter } from './routes';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {

    return (
      <div>
        <Router>

          <BaseRouter />

        </Router>
      </div>
    );

}

export default App;
