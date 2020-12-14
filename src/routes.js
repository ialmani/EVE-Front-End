import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import About from './components/About/About';
import GetStarted from './components/GetStarted/GetStarted';
import ContactUs from './components/ContactUs/ContactUs';
import Articles from './components/Articles/Articles';
import NewArticle from './components/Articles/NewArticle';
import FullArticle from './components/Articles/FullArticle';
import SponsorPackage from './components/SponsorPackage/SponsorPackage';
import SponsorProfile from './components/SponsorProfile/SponsorProfile';
import Videos from './components/Resources/Videos';
import UploadVideo from './components/Resources/UploadVideos';
//import Layout from './components/Navbar&Footer/Layout';

export const BaseRouter = () => {
  return (
    <div>
      <Switch>
        <Route path = '/' component={LandingPage} exact/>
        <Route path = '/login' component={Login} exact/>
        <Route path = '/signup' component={SignUp} exact/>
        <Route path = '/about' component={About} exact/>
        <Route path = '/get-started' component={GetStarted} exact/>
        <Route path = '/contact-us' component={ContactUs} exact/>
        <Route path = '/sponsor-packages' component={SponsorPackage} exact/>
        <Route path = '/sponsor-profile' component={SponsorProfile} exact/>
        <Route path = '/articles' component={Articles} exact/>
        <Route path = '/article/create' component={NewArticle} exact />
        <Route path = '/article/view' component={FullArticle} exact />
        <Route path = '/videos' component={Videos} exact/>
        <Route path = '/videos/upload' component={UploadVideo} exact/>
      </Switch>
    </div>
  );
};
