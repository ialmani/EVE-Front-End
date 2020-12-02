import React, { Component } from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import ContactUs from "./components/ContactUs/ContactUs";
import GetStarted from "./components/GetStarted/GetStarted";
import MonthlyBlogs from "./components/MonthlyBlogs/MonthlyBlogs";
import Resources from "./components/Resources/Resources";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import LandingPage from "./components/LandingPage/LandingPage";

function App() {
    return (
    <Router>
          <Navbar />
          <Switch>
             <Route path = '/about' component= {About} exact/>
             <Route path = '/getStarted' component= {GetStarted} exact/>
             <Route path = '/contactUs' component= {ContactUs} exact/>
             <Route path = '/monthlyBlogs' component= {MonthlyBlogs} exact/>
             <Route path = '/resources' component= {Resources} exact/>
             <Route path = '/signUp' component= {SignUp} exact/>
             <Route path = '/login' component= {Login} exact/>
             <Route path = '/' component= {LandingPage} exact/>
          </Switch>
    </Router>
    );
}

export default App;
