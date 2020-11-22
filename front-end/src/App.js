import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


import Home from './components/Home/Home'
import SignIn from './components/SignIn/SignIn'
import About from './components/About/About'
import SignUp from './components/SignUp/SignUp'
import Discover from './components/Discover/Discover'
import MonthlyBlog from './components/Resources/MonthlyBlog'
import AdminSignIn from './components/SignIn/AdminSignIn'
import ForgotPassword from './components/ForgotPassword/ForgotPassword'
import SponsorPackages from './components/SponsorPackages/SponsorPackages'
import SponsorSignUp from './components/SignUp/SponsorSignUp'
import MemberSignUp from './components/SignUp/MemberSignUp'

function App() {
  return (
    <Router>
      <Switch>
         <Route path = '/' component= {Home} exact/>
         <Route path = '/signin' component= {SignIn} exact/>
         <Route path = '/about' component = {About} exact/>
         <Route path = '/signup' component = {SignUp} exact/>
         <Route path = '/discover' component = {Discover} exact/>
         <Route path = '/monthlyblog' component = {MonthlyBlog} exact/>
         <Route path = '/adminsignin' component = {AdminSignIn} exact/>
         <Route path = '/resources' component = {MonthlyBlog} exact/>
         <Route path = '/forgotpassword' component = {ForgotPassword} exact/>
         <Route path = '/sponsorpackages' component = {SponsorPackages} exact/>
         <Route path = '/sponsorsignup' component = {SponsorSignUp} exact/>
         <Route path = '/membersignup' component = {MemberSignUp} exact/>

      </Switch>
    </Router>
  );
}

export default App