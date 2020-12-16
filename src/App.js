import React from 'react';
import Firebase from 'firebase';
import './App.css';

import NumberUtil, {humanize} from './utils/NumberUtil';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Governance from './components/Governance/Governance';

import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import QuickFacts from './components/QuickFacts/QuickFacts';
import Info from './components/Info/Info';
import IntegrationsAndWhitepaper from './components/IntegrationsAndWhitepaper/IntegrationsAndWhitepaper';
import Media from './components/Media/Media';
import Partners from './components/Partners/Partners';
import Team from './components/Team/Team';
import EmailList from './components/EmailList/EmailList';
import Footer from './components/Footer/Footer';
import USFlag from './assets/US-Flag.png';
import CNFlag from './assets/CN-Flag.png';

import Languages from './services/Translations/Languages';

import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';

library.add(fab);

const config = {
  apiKey: "AIzaSyAIO7wlOF5yTuo1zyqLUIABDDS3K1_k37E",
  authDomain: "dmm-landing-page.firebaseapp.com",
  databaseURL: "https://dmm-landing-page.firebaseio.com",
  projectId: "dmm-landing-page",
};

class App extends React.Component {
  constructor(props) {
    super(props);
    Firebase.initializeApp(config);

    this.state = {
      isSignedIn: false,
      userProfile: null,
      daiRate: null,
      usdcRate: null,
      ethRate: null,
      tokenList: null,
      totalLocked: null,
      language: Languages.CHINESE, // TODO - Languages.ENGLISH,
    };

    Firebase.auth().onAuthStateChanged((user) => {
      this.setState({isSignedIn: !!user, userProfile: user});
    });

    Firebase.auth().signInAnonymously().catch((error) => {
      console.error('Could not sign in anonymously with Firebase due to error ', error)
    });

    this.loadExchangeRates().then(() => {
    });

    this.totalValueLocked().then(response => {
      this.setState({ totalLocked: new NumberUtil.BN(response['total_value_locked_usd']) });
    })
  }

  componentDidMount() {
    if (window.location.href.includes('/CN')) {
      this.setState({ language: Languages.CHINESE });
    }
  }

  async totalValueLocked() {
    return await fetch(
      `http://api.defimoneymarket.com/v1/dmm/tokens/total-value-locked`,
      {headers: {'Accept': 'application/json'}},
    ).then(response => response.json()).then(response => response['data']);
    //tokenList[token].underlyingRate = new NumberUtil.BN((await response.json())["data"]["exchange_rate"]);
  }

  async populateRates(tokenList) {
    for (let token in tokenList) {
      const response = await fetch(
        `https://api.defimoneymarket.com/v1/dmm/tokens/${tokenList[token]["dmm_token_id"]}/exchange-rate`,
        {headers: {'Accept': 'application/json'}},
      );
      console.log(tokenList[token]);
      tokenList[token].underlyingRate = new NumberUtil.BN((await response.json())["data"]["exchange_rate"]);
    }

    return tokenList;
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
      token.symbol = token["symbol"];
      token.underlyingTokenAddress = token["underlying_token_address"];
      /*const response = await fetch(
        `https://api.defimoneymarket.com/v1/dmm/tokens/${token["dmm_token_id"]}/exchange-rate`,
        {headers: {'Accept': 'application/json'}},
      );
      token.underlyingRate = new NumberUtil.BN((await response.json())["data"]["exchange_rate"]);*/
      return {...map, [token.underlyingTokenAddress.toLowerCase()]: token};
    }, {});

    this.populateRates(tokenList).then(result => {
      this.setState({ tokenList: result });
    });
  }

  render() {
    return (
      <Router>
        <div className={'App'}>
          <div className={'content'}>
            <Navbar onClose={() => ''} open
                    selectedValue={'1'}
                    language={this.state.language}
            />
            <Switch>
              <Route path={'/governance'}>
                <div className={'language-selector'}>
                  { this.state.language === Languages.CHINESE ? (
                    <div className={'language'}>
                      <a href={'https://www.defimoneymarket.com'}>
                        <img src={USFlag} />English
                      </a>
                    </div>
                  ) : (
                    <div className={'language'}>
                      <a href={'https://www.defimoneymarket.com/CN'}>
                        <img src={CNFlag} />中文
                      </a>
                    </div>
                  )}
                </div>
                <Governance
                  language={this.state.language}
                />
              </Route>
              <Route path={'/'}>
                <div className={'language-selector'}>
                  { this.state.language === Languages.CHINESE ? (
                    <div className={'language'}>
                      <a href={'https://www.defimoneymarket.com'}>
                        <img src={USFlag} />English
                      </a>
                    </div>
                  ) : (
                    <div className={'language'}>
                      <a href={'https://www.defimoneymarket.com/CN'}>
                        <img src={CNFlag} />中文
                      </a>
                    </div>
                  )}
                </div>
                <Header
                  tokenList={this.state.tokenList}
                  language={this.state.language}
                  totalLocked={this.state.totalLocked}
                />
                <QuickFacts
                  tokenList={this.state.tokenList}
                  language={this.state.language}
                />
                <Info
                  onClose={() => {
                }} open selectedValue={1}
                  language={this.state.language}
                />
                <IntegrationsAndWhitepaper
                  language={this.state.language}
                />
                <Partners
                  language={this.state.language}
                />
                <Media
                  language={this.state.language}
                />
                <Team
                  language={this.state.language}
                />
                <a name="email"/>
                <EmailList
                  firebase={Firebase}
                  isSignedIn={this.state.isSignedIn}
                  userProfile={this.state.userProfile}
                  language={this.state.language}
                />
              </Route>
            </Switch>
            <Footer
              onClose={() => ''}
              open
              selectedValue={'1'}
              language={this.state.language}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
