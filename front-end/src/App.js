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
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import SponsorPackagesPage from './pages/SponsorPackagesPage'
import SponsorSignUpPage from './pages/SponsorSignUpPage'
import MemberSignUpPage from './pages/MemberSignUpPage'

function App() {
  return (
    <Router>
      <Switch>
         <Route path = '/' component= {Home} exact/>
         <Route path = '/signin' component= {SignInPage} exact/>
         <Route path = '/about' component = {AboutPage} exact/>
         <Route path = '/signup' component = {SignUpPage} exact/>
         <Route path = '/discover' component = {DiscoverPage} exact/>
         <Route path = '/monthlyblog' component = {MonthlyBlogPage} exact/>
         <Route path = '/adminsignin' component = {AdminSignInPage} exact/>
         <Route path = '/resources' component = {MonthlyBlogPage} exact/>
         <Route path = '/forgotpassword' component = {ForgotPasswordPage} exact/>
         <Route path = '/sponsorpackages' component = {SponsorPackagesPage} exact/>
         <Route path = '/sponsorsignup' component = {SponsorSignUpPage} exact/>
         <Route path = '/membersignup' component = {MemberSignUpPage} exact/>

      </Switch>
    </Router>
  );
}

export default App;
