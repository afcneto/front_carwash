import React from 'react';
import './App.css';

import logo from './assets/logo.png';
import TechList from './components/TechList';

function App() {
    return (
        <>
            <TechList />
            <img width="500" src={logo}></img>
        </>
    ) 
         
}

export default App;
