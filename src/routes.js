import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Welcome from './components/WelcomeVideo/Welcome';
import LandingPage from './components/Home/LandingPage';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import About from './components/About/About';
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
import Events from './components/Resources/Events';
import Navbar from './components/Navbar&Footer/Navbar';
import Footer from './components/Navbar&Footer/Footer';


export const BaseRouter = () => {

  return (
    <div>
      <Navbar />
 
      <Switch>
        <Route path = '/' component={LandingPage} exact/>
        <Route path = '/login' component={Login} exact/>
        <Route path = '/signup' component={SignUp} exact/>
        <Route path = '/about' component={About} exact/>
        <Route path = '/resources' component={AllResources} exact/>
        <Route path = '/contact-us' component={ContactUs} exact/>
        <Route path = '/ask-eve' component={Askeve} exact/>
        <Route path = '/sponsor-packages' component={SponsorPackage} exact/>
        <Route path = '/sponsor-profile/:user_id' component={SponsorProfile} exact/>
        <Route path = '/articles' component={Articles} exact/>
        <Route path = '/articles/create' component={NewArticle} exact />
        <Route path = '/articles/:id' component={FullArticle} exact />
        <Route path = '/videos' component={Videos} exact/>
        <Route path = '/videos/upload' component={UploadVideo} exact/>
        <Route path = '/videos/:id' component={FullVideo} exact/>
        <Route path =  '/events' component={Events} exact/>
        <Route path = '/welcome' component={Welcome} exact/>
      </Switch>

      <Footer />
    </div>
  );
};
