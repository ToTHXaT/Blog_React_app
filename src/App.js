import React from 'react';

import './App.css';

import Filler from './Components/Filler';
import SideBar from './Components/SideBar';
import MainContent from './Components/MainContent';
import Header from './Components/Header';
import Footer from './Components/Footer';


const App = () => {
  return (
    <div className='App'>
      <Header/>

      <SideBar/>

      <MainContent/>

      <Filler/>

      <Footer/>
    </div>
  );
}

export default App;
