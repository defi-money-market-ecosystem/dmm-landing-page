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
                  Gnosis Safe integration for minting/redeeming DMM mTokens
                </li>
                <li>
                  Create new governance voting contract that tracks staked DMG balances
                </li>
                <li>
                  Publish website learning materials and community-led Wiki page that showcases more “lively” information of project
                </li>
                <li>
                  Launch Chinese language support and regional communities
                </li>
                <li>
                  Finalize staking mechanics with community feedback - post for feedback will be made on the governance forum
                </li>
                <li>
                  Launch wBTC mToken pair
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
                  Launch DMG Staking
                </li>
                <li>
                  Publish preliminary research on Chainlink-based fiat tracker for movement of offchain-funds, broken down by asset introducer (and possibly per asset)
                </li>
                <li>
                  Launch Spanish language support and regional community
                </li>
                <li>
                  Launch PAX mToken pair and add corresponding Chainlink oracle
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
                  Create an open source module for the other integrated blockchain, which allows developers to fork a repository to easily offer interest to the DEX's users
                </li>
                <li>
                  Dynamic swap pool on another blockchain, where LPs earn additional interest by using mTokens
                </li>
                <li>
                  Chainlink fiat tracker - depends on published research and Chainlink's speed to roll out any necessary features
                </li>
                <li>
                  Launch additional language support and regional community
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
                  Governance proposal builder - used to allow anyone to submit a proposal via the UI on the DAO site. Will be made handy for asset introducers as well
                </li>
                <li>
                  Smart Router for mTokens that allows users to mint/redeem mTokens through the core contracts or secondary markets if there is a liquidity crunch
                </li>
                <li>
                  Voting rewards - grant DMG to users that participate in voting
                </li>
                <li>
                  Launch additional language support and regional community
                </li>
              </ul>
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
          <Button className={'buttonText'} onClick={() => window.open('https://medium.com/dmm-dao/dmm-2021-development-roadmap-104e83e5362f', "_blank")}>
            FULL ROADMAP
          </Button>
        </div>
      </div>
    );
  }
}

export default withTranslations(Roadmap);