import React from 'react';
import Firebase from 'firebase';
import Button from '@material-ui/core/Button';
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

    const lang = navigator.language || navigator.userLanguage;

    let browserLanguage = Languages.ENGLISH;

    if (lang) {
      if (lang === 'zh-CN' || lang === 'zh') {
        browserLanguage = Languages.CHINESE;
      }
    }
    else if (props.lang) {
      if (props.lang === 'CN') {
        browserLanguage = Languages.CHINESE;
      }
    }

    this.state = {
      isSignedIn: false,
      userProfile: null,
      daiRate: null,
      usdcRate: null,
      ethRate: null,
      tokenList: null,
      totalLocked: null,
      language: browserLanguage,
      selectedLanguage: null,
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
    if (window.location.href.includes('/cn')) {
      this.setState({ language: Languages.CHINESE });
    }
    if (window.location.href.includes('/en')) {
      this.setState({ language: Languages.ENGLISH });
    }
  }

  async totalValueLocked() {
    return await fetch(
      `https://api.defimoneymarket.com/v1/dmm/tokens/total-value-locked`,
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
                    language={this.state.selectedLanguage || this.state.language}
            />
            <div className={'contentWrapper'}>
              <h1>DMM IS CEASING OPERATIONS</h1>
              <h2>mTokens can be redeemed with interest accrued to-date by following the link below.</h2>
              <h2>A process for DMG token redemption is being rolled out.</h2>

              <div className={'appButtonWrapper'}>
                <Button className={'appButton'} onClick={() => window.open('https://app.defimoneymarket.com')}>
                  Redeem mTokens
                </Button>
              </div>


              <p>
                As a result of regulatory inquiries, DMM is shutting down.  Effective immediately, mToken minting is no longer available.  mToken redemption will remain available indefinitely, though the interest rate on mTokens will drop to 0% on or about February 10th, 2021.   Capital and interest are currently available to fund redemption of all outstanding mTokens plus accrued interest.  Please redeem your mTokens as soon as possible.
              </p>
              <p>
                An additional fund of available assets is being established to facilitate redemption of DMG tokens.  Details will follow.  We’re sure that you have questions, but unfortunately we are not able to answer questions at this time.
              </p>
              <p>
                DMM regrets the necessity of this action, and would like to thank the DMM community for its support and active participation in this project.
              </p>
            </div>
            <Footer
              onClose={() => ''}
              open
              selectedValue={'1'}
              language={this.state.selectedLanguage || this.state.language}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
