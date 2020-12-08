//import React, { Component } from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AboutUs from "./components/AboutUs/AboutUs";
import SponsorPackage from "./components/SponsorPackage/SponsorPackages";
import ContactUs from "./components/ContactUs/ContactUs";
import GetStarted from "./components/GetStarted/GetStarted";
import NewArticle from "./components/Articles/NewArticle";
import Videos from "./components/Resources/Videos";
import SignUpPage from "./components/SignUp/SignUpPage";
import MemberSignUp from "./components/SignUp/MemberSignUp"
import SponsorSignUp from "./components/SignUp/SponsorSignUp"
import Login from "./components/Login/Login";
import LandingPage from "./components/LandingPage/LandingPage";
import Articles from './components/Articles/Articles';
import FullArticle from './components/Articles/FullArticle';
import UploadVideo from './components/Resources/UploadVideos'

function App() {
    return (
    <Router>
          <Navbar />
          <Switch>
             <Route path = '/about' component= {AboutUs} exact/>
             <Route path = '/get-started' component= {GetStarted} exact/>
             <Route path = '/contact-us' component= {ContactUs} exact/>
             <Route path = '/articles' component= {Articles} exact/>
              <Route path = '/article/:id' component= {FullArticle} exact/>
             <Route path = '/videos' component= {Videos} exact/>
             <Route path = '/sponsor-packages' component= {SponsorPackage} exact/>
             <Route path = '/signup' component= {SignUpPage} exact/>
             <Route path = '/signup/member' component= {MemberSignUp} exact/>
             <Route path = '/signup/sponsor' component= {SponsorSignUp} exact/>
             <Route path = '/login' component= {Login} exact/>
             <Route path = '/' component= {LandingPage} exact/>
             <Route path = '/article-new' component= {NewArticle} exact/>
             <Route path = '/videos/upload' component= {UploadVideo} exact />

          </Switch>
    </Router>
    );
}

export default App;
