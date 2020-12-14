import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./components/About/About";
import ContactUs from "./components/ContactUs/ContactUs";
import GetStarted from "./components/GetStarted/GetStarted";
import LandingPage from "./components/LandingPage/LandingPage";
import Login from "./components/Login/Login";
import Layout from "./components/Navbar&Footer/Layout";
import UploadVideo from './components/Resources/UploadVideos';
import Videos from "./components/Resources/Videos";
import SignUp from "./components/SignUp/SignUp";
import SponsorPackage from "./components/SponsorPackage/SponsorPackage";
import SponsorProfile from './components/SponsorProfile/SponsorProfile';
import Articles from "./components/Articles/Articles";
import NewArticle from "./components/Articles/NewArticle";

export const BaseRouter = () => {
  return (
    <div>
      <Switch>
        <Route path="/" component={LandingPage} exact/>
        <Route path="/about" component={About} exact/>
        <Route path="/articles" component={Articles} exact/>
        <Route path="/login" component={Login} exact/>
        <Route path="/signup" component={SignUp} exact/>
        <Route path = "/get-started" component= {GetStarted} exact/>
        <Route path = "/contact-us" component= {ContactUs} exact/>
        <Route path = '/videos' component= {Videos} exact/>
        <Route path = '/sponsor-packages' component= {SponsorPackage} exact/>
        <Route path = '/videos/upload' component= {UploadVideo} exact/>
        <Route path = '/sponsor-profile' component = {SponsorProfile} exact/>
        <Route path = '/article/new' component = {NewArticle} exact />
      </Switch>
    </div>
  );
};
