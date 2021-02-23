import React, { useState } from 'react';
import './App.css';
import { BaseRouter } from './routes';
import Navbar from './components/Navbar&Footer/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Navbar&Footer/Sidebar';

const App = () => {

  const[sidebar, showSidebar] = useState(false)

  const toggle = ()=> {
      showSidebar(!sidebar)
  }
    return (
      <div>
        <Router>

          <Sidebar sidebar = {sidebar} toggle = {toggle}/>
          <Navbar  toggle = {toggle}/> 
          <BaseRouter />

        </Router>
      </div>
    );

}

export default App;
