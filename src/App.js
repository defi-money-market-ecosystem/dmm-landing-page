import React from 'react';
import Firebase from 'firebase';
import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import QuickFacts from './components/QuickFacts/QuickFacts';
import Info from './components/Info/Info';
import IntegrationsAndWhitepaper from './components/IntegrationsAndWhitepaper/IntegrationsAndWhitepaper';
import GetStarted from './components/GetStarted/GetStarted';
import EmailList from './components/EmailList/EmailList';
import Footer from './components/Footer/Footer';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

const config = {
  apiKey: "AIzaSyAIO7wlOF5yTuo1zyqLUIABDDS3K1_k37E",
  authDomain: "dmm-landing-page.firebaseapp.com",
  databaseURL: "https://dmm-landing-page.firebaseio.com",
  projectId: "dmm-landing-page",
};

class App extends React.Component {
  constructor(props){
    super(props);
    Firebase.initializeApp(config);

    this.state = {
      isSignedIn: false,
      userProfile: null
    };

    const unregisterAuthObserver = Firebase.auth().onAuthStateChanged((user) => {
      this.setState({ isSignedIn: !!user, userProfile: user });
    });
    Firebase.auth().signInAnonymously().catch(function(error) {
      let errorCode = error.code;
      let errorMessage = error.message;
    });
  }

  render() {
    return (
      <div className={'App'}>
        <div className={'content'}>
          <Navbar/>
          <Header/>
          <QuickFacts/>
          <Info/>
          <IntegrationsAndWhitepaper/>
          <a name="email"/>
          <EmailList
            firebase={Firebase}
            isSignedIn={this.state.isSignedIn}
            userProfile={this.state.userProfile}
          />
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
