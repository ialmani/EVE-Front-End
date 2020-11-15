import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


import Home from './pages/Home'
import SignIn from './pages/SignIn'

function App() {
  return (
    <Router>
      <Switch>
         <Route path = '/' component= {Home} exact/>
         <Route path = '/' component= {SignIn} exact/>
      </Switch>
    </Router>
  );
}

export default App;
