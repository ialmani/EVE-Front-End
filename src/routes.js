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

export const BaseRouter = () => {
  return (
    <div>
      <Switch>
        <Route path="/" component={LandingPage} />
        <Route path="/about" component={About} />
        <Route path="/articles" component={Articles} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path = "/get-started" component= {GetStarted} />
        <Route path = "/contact-us" component= {ContactUs} />
        <Route path = '/videos' component= {Videos} exact/>
        <Route path = '/sponsor-packages' component= {SponsorPackage} />
        <Route path = '/videos/upload' component= {UploadVideo} />
        <Route path = '/sponsor-profile' component = {SponsorProfile} />
      </Switch>
    </div>
  );
};
