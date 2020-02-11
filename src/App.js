import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Info from './components/Info/Info';
import IntegrationsAndWhitepaper from './components/IntegrationsAndWhitepaper/IntegrationsAndWhitepaper';
import GetStarted from './components/GetStarted/GetStarted';
import EmailList from './components/EmailList/EmailList';
import Footer from './components/Footer/Footer';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

function App() {
  return (
    <div className={'App'}>
      <div className={'content'}>
        <Navbar/>
        <Header/>
        <Info/>
        <IntegrationsAndWhitepaper/>
        <EmailList/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
