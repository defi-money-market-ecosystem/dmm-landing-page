import * as React from 'react';
import HorizontalTimeline from 'react-horizontal-timeline';
import Button from '@material-ui/core/Button';

import { withTranslations } from '../../services/Translations/Translations';

import './Roadmap.css';

// 0                  1               2               3               4
const VALUES = [ "2021-01-01",   "2021-04-02",     "2021-07-02",     "2021-10-01", ];
const TITLES = [ "Q1 2021",      "Q2 2021",      "Q3 2021",      "Q4 2021" ];

class Roadmap extends React.Component {
  state = { value: Roadmap.getCurrentIndex(), previous: 0 };

  static getCurrentIndex() {
    const today = new Date();
    for (let i=0; i<VALUES.length-1; i++) {
      if (today < (new Date(VALUES[i+1]))) {
        return i;
      }
    }
    return 0;
  }

  static getSlide(slideNum) {
    switch(slideNum) {
      case 0: return (
        <div className={"roadmapItemWrapper"}>
          <div className={"roadmapItemTitle"}>
            Quarter 1, 2020
          </div>
          <div className={"roadmapItemDate"}>
            January - March
          </div>
          <div className={"roadmapItemBody"}>
            <div className={"roadmapItemBodyText"}>
              <ul>
                <li>
                  Gnosis safe integration for minting/redeeming DMM mTokens
                </li>
                <li>
                  Create new governance voting contract that tracks staked DMG balances
                </li>
                <li>
                  Add burning interface and DMG locked stats to the Explorer, for tracking the deflationary properties of DMG
                </li>
                <li>
                  Add asset introducer breakdowns on the Explorer, allowing the community to analyze each asset introducer’s performance and health
                  <ul>
                    <li>
                      Showcases amount of DMG being staked per asset introducer, and other basic stats
                    </li>
                  </ul>
                </li>
                <li>
                  Consolidate UX of web application to use the DAO site
                  <ul>
                    <li>
                      Move the minting/redemption capabilities to the DAO site and clean our site’s navigation experience
                    </li>
                  </ul>
                </li>
                <li>
                  Publish website learning materials and community-led Wiki page that showcases more “lively” information of project
                </li>
                <li>
                  Launch additional language/regional communities
                  <ul>
                    <li>
                      Start with China
                    </li>
                  </ul>
                </li>
                <li>
                  Finish staking mechanics with community feedback - governance post on forum
                </li>
                <li>
                  Open Sea official launch with verified contracts
                  <ul>
                    <li>
                      Perform first secondary market purchase for El Salvador (if person willing to sell)
                    </li>
                  </ul>
                </li>
                <li>
                  Launch WBTC mToken pair
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
      case 1: return (
        <div className={"roadmapItemWrapper"}>
          <div className={"roadmapItemTitle"}>
            Quarter 2, 2020
          </div>
          <div className={"roadmapItemDate"}>
            April - June
          </div>
          <div className={"roadmapItemBody"}>
            <div className={"roadmapItemBodyText"}>
              <ul>
                <li>
                  Integrate DMM Protocol with another blockchain for scalability and community expansion
                </li>
                <li>
                  Staking - see below (really done in Q2)
                </li>
                <li>
                  DeFi SDK Interactive Adapter
                </li>
                <li>
                  mToken CRV LP Pool with yield farming - this doubles as a partnership
                </li>
                <li>
                  Quality of life updates to the DAO site to see vote ranking, delegate to other wallets, view NFTs, and more.
                </li>
                <li>
                  Publish preliminary research/article on Chainlink-based fiat tracker for movement of offchain-funds, broken down by asset introducer (and possible per asset)
                </li>
                <li>
                  Launch additional language/regional communities
                </li>
                <li>
                  Security and Health page
                  <ul>
                    <li>
                      Discusses security audits with links
                    </li>
                    <li>
                      Discusses fiat tracker, once it’s out
                    </li>
                    <li>
                      Showcases collateralization ratios and reserve ratios
                    </li>
                  </ul>
                </li>
                <li>
                  Voting rewards - grant DMG to users that participate in voting
                </li>
                <li>
                  Launch PAX mToken pair; needs Chainlink oracle
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
      case 2: return (
        <div className={"roadmapItemWrapper"}>
          <div className={"roadmapItemTitle"}>
            Quarter 3, 2020
          </div>
          <div className={"roadmapItemDate"}>
            July - September
          </div>
          <div className={"roadmapItemBody"}>
            <div className={"roadmapItemBodyText"}>
              <ul>
                <li>
                  Create an open source module for other blockchain, that allows users that fork the repository to offer interest to the DEX’s users
                </li>
                <li>
                  Dynamic swap pool on another blockchain, where LPs earn additional interest by using mTokens
                </li>
                <li>
                  Chainlink fiat tracker - depends on research and Chainlink
                </li>
                <li>
                  Launch additional language/regional communities
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
      case 3: return (
        <div className={"roadmapItemWrapper"}>
          <div className={"roadmapItemTitle"}>
            Quarter 4, 2020
          </div>
          <div className={"roadmapItemDate"}>
            October - December
          </div>
          <div className={"roadmapItemBody"}>
            <div className={"roadmapItemBodyText"}>
              <ul>
                <li>
                  Governance proposal builder
                  <ul>
                    <li>
                      For anyone to submit a proposal via the UI on the DAO site
                    </li>
                  </ul>
                </li>
                <li>
                  Smart Router for mTokens that allows users to mint/redeem mTokens through the core contracts or secondary markets if there is a liquidity crunch
                </li>
                <li>
                  Launch additional language/regional communities
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
      case 4: return (
        <div className={"roadmapItemWrapper"}>
          <div className={"roadmapItemTitle"}>
            Full release of Slate market API
          </div>
          <div className={"roadmapItemDate"}>
            February 2019
          </div>
          <div className={"roadmapItemBody"}>
            <div className={"roadmapItemBodyText"}>
              Dolomite's Slate market API service is opened up to the public. Everyone can now tap
              into the comprehensive market tools powering Dolomite for their own project.
            </div>
          </div>
        </div>
      );
    }
  }

  static dateString(date) {
    const monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];

    let dateObj = new Date(date);
    return TITLES[VALUES.indexOf(date)]/* + ' ' + monthNames[dateObj.getMonth()] + ' ' + dateObj.getFullYear()*/;
  }

  render() {
    return (
      <div className={"roadmap"}>
        <div className={"title"}>
          Roadmap
        </div>
        <div style={{ width: '80%', height: '140px', maxWidth: '800px', margin: '0 auto' }}>
          <HorizontalTimeline
            index={this.state.value}
            indexClick={(index) => {
              this.setState({ value: index, previous: this.state.value });
            }}
            values={ VALUES }
            labelWidth={100}
            styles={{background: '#deeefe', foreground: '#327ccb', outline: '#ffffff'}}
            getLabel={Roadmap.dateString}
          />
        </div>
        <div className='text-center'>
          {/* any arbitrary component can go here */}
          <div className={"roadmapSectionWrapper"}>
            {Roadmap.getSlide(this.state.value)}
          </div>
        </div>
        <div className={'buttonOuter'}>
          {/* TODO - ADD LINK TO MEDIUM ARTICLE HERE */}
          <Button className={'buttonText'} onClick={() => window.open('https://www.defimoneymarket.com', "_blank")}>
            READ MORE
          </Button>
        </div>
      </div>
    );
  }
}

export default withTranslations(Roadmap);