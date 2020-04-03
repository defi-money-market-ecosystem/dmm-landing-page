import React from 'react';
import Firebase from 'firebase';
import logo from './logo.svg';
import './App.css';

import NumberUtil from './utils/NumberUtil';

import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import QuickFacts from './components/QuickFacts/QuickFacts';
import Info from './components/Info/Info';
import IntegrationsAndWhitepaper from './components/IntegrationsAndWhitepaper/IntegrationsAndWhitepaper';
import GetStarted from './components/GetStarted/GetStarted';
import Media from './components/Media/Media';
import Partners from './components/Partners/Partners';
import Team from './components/Team/Team';
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
      userProfile: null,
      daiRate: null,
      usdcRate: null,
      ethRate: null,
    };

    const unregisterAuthObserver = Firebase.auth().onAuthStateChanged((user) => {
      this.setState({ isSignedIn: !!user, userProfile: user });
    });
    Firebase.auth().signInAnonymously().catch(function(error) {
      let errorCode = error.code;
      let errorMessage = error.message;
    });

    this.loadExchangeRates().then(() => {});
  }

  async loadExchangeRates() {
    const response = await fetch(
      `https://api.defimoneymarket.com/v1/dmm/tokens`,
      {headers: {'Accept': 'application/json'}},
    );
    const tokens = (await response.json())["data"];
    const tokenList = tokens.reduce((map, token) => {
      token.dmmTokenId = token["dmm_token_id"];
      token.address = token["dmm_token_address"];
      token.imageUrl = token["image_url"];
      token.underlyingTokenAddress = token["underlying_token_address"];
      return {...map, [token.underlyingTokenAddress]: token};
    }, {});
    const daiResponse = await fetch(
      `https://api.defimoneymarket.com/v1/dmm/tokens/${tokenList['0x6b175474e89094c44da98b954eedeac495271d0f'].dmmTokenId.toString(10)}/exchange-rate`,
      {headers: {'Accept': 'application/json'}},
    );
    const usdcResponse = await fetch(
      `https://api.defimoneymarket.com/v1/dmm/tokens/${tokenList['0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'].dmmTokenId.toString(10)}/exchange-rate`,
      {headers: {'Accept': 'application/json'}},
    );
    const ethResponse = await fetch(
      `https://api.defimoneymarket.com/v1/dmm/tokens/3/exchange-rate`,
      {headers: {'Accept': 'application/json'}},
    );

    const daiRate = new NumberUtil.BN((await daiResponse.json())["data"]["exchange_rate"]);
    const usdcRate = new NumberUtil.BN((await usdcResponse.json())["data"]["exchange_rate"]);
    const ethRate = new NumberUtil.BN((await ethResponse.json())["data"]["exchange_rate"]);

    this.setState({ daiRate, usdcRate, ethRate });
  }

  render() {
    return (
      <div className={'App'}>
        <div className={'content'}>
          <Navbar onClose={() => {}} open selectedValue={1} daiRate={this.state.daiRate} usdcRate={this.state.usdcRate} ethRate={this.state.ethRate}/>
          <Header/>
          <QuickFacts/>
          <Info onClose={() => {}} open selectedValue={1}/>
          <IntegrationsAndWhitepaper/>
          <Partners/>
          <Media/>
          <Team/>
          <a name="email"/>
          <EmailList
            firebase={Firebase}
            isSignedIn={this.state.isSignedIn}
            userProfile={this.state.userProfile}
          />
          <Footer onClose={() => {}} open selectedValue={1}/>
        </div>
      </div>
    );
  }
}

export default App;
