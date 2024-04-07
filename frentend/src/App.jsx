import React from 'react'
import './App.css';
import {  Route,Routes } from "react-router-dom";

import Homepage from './pages/Homepage';
import Connecter from './components/Connecter';
import Inscrire from './components/Inscrire';
import Adminpage from './pages/Adminpage';

const App = () => {
  return (
    <div>
    
    <Routes>

    <Route path="/" element={<Homepage/> }/>
    <Route path="inscrire" element={<Inscrire/>}/>
    <Route path="seconnecter" element={<Connecter/>}/>
    <Route path="Admin/*" element={<Adminpage/>}/>
    
    </Routes>
    
    </div>
  );
};

export default App;