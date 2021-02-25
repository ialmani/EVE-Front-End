import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './components/Home/LandingPage';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import About from './components/About/About';
import GetStarted from './components/GetStarted/GetStarted';
import ContactUs from './components/ContactUs/ContactUs';
import Askeve from './components/Askeve/Askeve';
import Articles from './components/Articles/Articles';
import NewArticle from './components/Articles/NewArticle';
import FullArticle from './components/Articles/FullArticle';
import SponsorPackage from './components/SponsorPackage/SponsorPackage';
import SponsorProfile from './components/SponsorProfile/SponsorProfile';
import Videos from './components/Resources/Videos';
import UploadVideo from './components/Resources/UploadVideos';
import AllResources from './components/Resources/AllResources';
import FullVideo from './components/Resources/FullVideo';
import Home from './components/Home/Home';


export const BaseRouter = () => {
  return (
    <div>
      <Switch>
        <Route path = '/' component={Home} exact/>
        <Route path = '/login' component={Login} exact/>
        <Route path = '/signup' component={SignUp} exact/>
        <Route path = '/about' component={About} exact/>
        <Route path = '/get-started' component={GetStarted} exact/>
        <Route path = '/resources' component={AllResources} exact/>
        <Route path = '/contact-us' component={ContactUs} exact/>
        <Route path = '/ask-eve' component={Askeve} exact/>
        <Route path = '/sponsor-packages' component={SponsorPackage} exact/>
        <Route path = '/sponsor-profile' component={SponsorProfile} exact/>
        <Route path = '/articles' component={Articles} exact/>
        <Route path = '/articles/create' component={NewArticle} exact />
        <Route path = '/articles/:id' component={FullArticle} exact />
        <Route path = '/videos' component={Videos} exact/>
        <Route path = '/videos/upload' component={UploadVideo} exact/>
        <Route path = '/videos/:id' component={FullVideo} exact/>
      </Switch>
    </div>
  );
};
