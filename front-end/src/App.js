import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'

function App() {
  return (
    <Router>
    <Home/>
    
    </Router>
  );
}

export default App;
