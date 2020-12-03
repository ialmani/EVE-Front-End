//import React, { Component } from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AboutUs from "./components/AboutUs/AboutUs";
import SponsorPackage from "./components/SponsorPackage/SponsorPackage";
import ContactUs from "./components/ContactUs/ContactUs";
import GetStarted from "./components/GetStarted/GetStarted";
import MonthlyBlogs from "./components/MonthlyBlogs/MonthlyBlogs";
import Resources from "./components/Resources/Resources";
import SignUpPage from "./components/SignUp/SignUpPage";
import MemberSignUp from "./components/SignUp/MemberSignUp"
import SponsorSignUp from "./components/SignUp/SponsorSignUp"
import Login from "./components/Login/Login";
import LandingPage from "./components/LandingPage/LandingPage";

function App() {
    return (
    <Router>
          <Navbar />
          <Switch>
             <Route path = '/about' component= {AboutUs} exact/>
             <Route path = '/getStarted' component= {GetStarted} exact/>
             <Route path = '/contactUs' component= {ContactUs} exact/>
             <Route path = '/monthlyBlogs' component= {MonthlyBlogs} exact/>
             <Route path = '/resources' component= {Resources} exact/>
             <Route path = '/sponsorPackage' component= {SponsorPackage} exact/>
             <Route path = '/signUpPage' component= {SignUpPage} exact/>
             <Route path = '/memberSignUp' component= {MemberSignUp} exact/>
             <Route path = '/sponsorSignUp' component= {SponsorSignUp} exact/>
             <Route path = '/login' component= {Login} exact/>
             <Route path = '/' component= {LandingPage} exact/>
          </Switch>
    </Router>
    );
}

export default App;
