import React from 'react';
import { BaseRouter } from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

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