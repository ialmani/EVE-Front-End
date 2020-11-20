import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


import Home from './pages/Home'
import SignInPage from './pages/SignInPage'
import AboutPage from './pages/AboutPage';
import SignUpPage from './pages/SignUpPage'
import DiscoverPage from './pages/DiscoverPage';
import MonthlyBlogPage from './pages/MonthlyBlogPage'
import AdminSignInPage from './pages/AdminSignInPage';

function App() {
  return (
    <Router>
      <Switch>
         <Route path = '/' component= {Home} exact/>
         <Route path = '/signin' component= {SignInPage} exact/>
         <Route path = '/about' component = {AboutPage} exact/>
         <Route path = '/signup' component = {SignUpPage} exact/>
         <Route path = '/discover' component = {DiscoverPage} exact/>
<<<<<<< HEAD
         <Route path = '/monthlyblog' component = {MonthlyBlogPage} exact/>
         <Route path = '/adminsignin' component = {AdminSignInPage} exact/>
=======
         <Route path = '/resources' component = {MonthlyBlogPage} exact/>
>>>>>>> 6b98c1fe6cfce86d90033b6a93bcd0456dd6d3c0
      </Switch>
    </Router>
  );
}

export default App;
