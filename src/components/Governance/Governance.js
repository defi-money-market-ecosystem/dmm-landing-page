import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Fade from 'react-reveal/Fade';
import Dialog from '@material-ui/core/Dialog';
import GovernanceGraphic from '../../assets/governance-graphic.svg';
import BallotBoxGraphic from '../../assets/ballot-box.svg';
import RevenueGraphic from '../../assets/revenue-graphic.svg';
import StructureGraphic from '../../assets/structure-graphic.svg';

import { withTranslations } from '../../services/Translations/Translations';

import './Governance.css';

const Governance = (props) => {

  return (
    <div className={'governance'}>
        <div className={'topSection'}>
          <div className={'governance-inner'}>
            <h2>{ props.excerpt('governancePage.title', props.language) }</h2>
            <div className={'underline large'}/>
            {/*<div className={'governanceGraphicTop'}>
              <img src={GovernanceGraphic} alt={'Governance graphic'}/>
            </div>*/}
            <p>{ props.excerpt('governancePage.subtitleOne', props.language) }
              <span className={'highlight'}><a href={'https://medium.com/dmm-dao/the-basics-of-a-decentralized-autonomous-organization-dao-23ac71b357d0'} target={'_blank'}>
                { props.excerpt('governancePage.subtitleTwo', props.language) }
              </a></span>
              { props.excerpt('governancePage.subtitleThree', props.language) }
            </p>
            <p>
              { props.excerpt('governancePage.subtitleFour', props.language) }
              <span className={'highlight'}><a href={'https://etherscan.io/token/0xEd91879919B71bB6905f23af0A68d231EcF87b14'} target={'_blank'}>
                { props.excerpt('governancePage.subtitleFive', props.language) }
              </a></span>
              { props.excerpt('governancePage.subtitleSix', props.language) }
            </p>
            <div className={'governance-buttons'}>
              <Button className={'buttonText'} onClick={() => window.open('https://dao.defimoneymarket.com', "_blank")}>
                DAO Dashboard
              </Button>
              <Button className={'buttonText secondary'} onClick={() => window.open('https://governance.defimoneymarket.com/', "_blank")}>
                Governance Forum
              </Button>
            </div>
            <div className={'governanceGraphic'}>
              <img src={GovernanceGraphic} alt={'Governance graphic'}/>
            </div>
          </div>
        </div>
        <div className={'bottomSection'}>
          <div className={'governance-inner'}>
            <div className={'section right'}>
              <div className={'textWrapper'}>
                <h3>{ props.excerpt('governancePage.paragraph.first.title', props.language) }</h3>
                <div className={'underline'}/>
                <p>
                  { props.excerpt('governancePage.paragraph.first.body.first', props.language) }
                </p>
                <p>
                  { props.excerpt('governancePage.paragraph.first.body.second', props.language) }
                </p>
                <p>
                  { props.excerpt('governancePage.paragraph.first.body.third', props.language) }
                </p>
              </div>
              <div className={'imageWrapper'}>
                <div id={'bird'}>
                  <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="700.000000pt" height="527.000000pt" viewBox="0 0 700.000000 527.000000" preserveAspectRatio="xMidYMid meet">
                    <metadata>
                      Created by potrace 1.12, written by Peter Selinger 2001-2015
                    </metadata>
                    <g transform="translate(0.000000,527.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                      <path d="M3673 4020 c-26 -11 -30 -28 -8 -36 8 -3 20 -24 27 -45 6 -22 17 -44
  25 -50 16 -14 18 -69 2 -69 -6 0 -34 26 -62 57 -127 141 -130 143 -186 143
  -58 0 -71 -14 -48 -52 8 -13 18 -36 21 -52 4 -17 17 -44 29 -60 12 -17 27 -45
  33 -62 l11 -32 -46 20 c-25 11 -53 26 -62 34 -22 20 -25 18 -64 -21 -41 -40
  -42 -48 -15 -82 11 -14 20 -33 20 -42 0 -9 20 -57 46 -105 25 -49 43 -95 40
  -102 -10 -25 -56 -16 -256 52 -25 8 -76 23 -115 33 -38 11 -83 24 -100 30 -54
  19 -129 42 -195 61 -86 25 -154 47 -215 70 -27 11 -66 23 -85 26 -19 4 -51 15
  -70 24 -19 9 -57 23 -85 29 -27 7 -57 19 -65 26 -14 12 -24 11 -74 -9 -74 -30
  -79 -36 -69 -77 11 -39 63 -74 128 -85 22 -3 59 -14 82 -24 24 -10 64 -22 90
  -26 56 -8 86 -21 78 -35 -10 -15 -158 -10 -241 8 -66 14 -84 15 -138 3 -33 -7
  -79 -16 -101 -19 -43 -7 -61 -36 -28 -48 10 -3 27 -16 38 -28 22 -25 132 -61
  212 -71 69 -8 113 -24 113 -39 0 -20 -27 -26 -152 -30 -137 -4 -172 -13 -176
  -44 -2 -13 0 -27 5 -32 4 -4 67 -15 138 -24 141 -17 205 -31 205 -44 0 -15
  -32 -23 -113 -28 -43 -3 -80 -10 -83 -14 -3 -5 12 -25 32 -46 36 -35 40 -37
  120 -41 105 -6 112 -12 96 -91 -16 -77 -16 -80 14 -91 15 -6 38 -20 53 -31 14
  -11 55 -42 90 -69 35 -28 67 -50 71 -50 9 0 123 -91 157 -124 13 -13 67 -46
  120 -73 141 -71 221 -150 365 -362 13 -18 41 -54 64 -80 22 -25 69 -82 104
  -126 35 -44 79 -96 98 -116 47 -51 142 -180 142 -194 0 -6 11 -26 25 -45 45
  -61 40 -70 -82 -170 -62 -51 -65 -52 -179 -71 -64 -10 -163 -22 -220 -25 -58
  -4 -107 -11 -111 -16 -3 -6 -1 -20 5 -31 16 -32 32 -121 32 -172 0 -48 3 -52
  119 -197 70 -88 91 -92 171 -38 14 10 50 34 80 54 30 20 66 44 80 53 14 9 56
  37 93 61 l68 45 113 -7 c62 -4 129 -11 147 -16 19 -6 74 -13 122 -17 81 -6 89
  -4 108 15 39 42 69 17 69 -56 0 -47 12 -59 76 -75 39 -10 53 -20 79 -57 17
  -25 38 -45 45 -45 8 0 19 18 25 42 20 80 72 108 100 53 12 -23 22 -30 45 -30
  36 0 47 16 26 39 -8 9 -19 33 -23 53 -5 20 -23 52 -41 72 -31 35 -35 36 -102
  36 -57 0 -74 4 -90 20 -56 56 -5 77 208 85 80 4 213 42 228 66 3 5 12 9 21 9
  16 0 52 21 186 107 37 23 97 63 135 86 37 24 93 61 126 83 32 21 68 45 80 51
  31 19 90 16 116 -5 21 -17 22 -23 14 -68 -7 -38 -5 -60 7 -97 26 -76 34 -78
  79 -27 37 43 39 48 40 113 0 68 9 90 62 152 13 15 17 42 19 114 l2 94 -49 54
  c-35 38 -73 65 -134 95 -74 37 -96 43 -164 46 -46 3 -123 -3 -187 -13 -181
  -29 -235 -14 -258 75 -8 34 -30 195 -55 420 -14 123 -6 101 -130 335 -21 38
  -54 88 -74 111 -20 23 -53 64 -72 90 -19 27 -41 55 -48 64 -8 8 -59 76 -114
  150 -131 175 -157 205 -220 252 -54 41 -150 120 -178 148 -9 9 -34 29 -55 45
  -54 40 -215 173 -287 238 -33 28 -57 32 -95 17z"></path>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div className={'section'}>
              <div className={'textWrapper'}>
                <h3>{ props.excerpt('governancePage.paragraph.second.title', props.language) }</h3>
                <div className={'underline'}/>
                <p>
                  { props.excerpt('governancePage.paragraph.second.body.first', props.language) }
                </p>
                <p>
                  { props.excerpt('governancePage.paragraph.second.body.second', props.language) }
                </p>
                <p>
                  { props.excerpt('governancePage.paragraph.second.body.third.first', props.language) }
                  <a href={'https://dao.defimoneymarket.com'}>
                    { props.excerpt('governancePage.paragraph.second.body.third.second', props.language) }
                  </a>
                  { props.excerpt('governancePage.paragraph.second.body.third.third', props.language) }
                </p>
              </div>
              <div className={'imageWrapper'}><img src={BallotBoxGraphic} alt={'Ballot Box'}/></div>
            </div>
            <div className={'section right'}>
              <div className={'textWrapper'}>
                <h3>{ props.excerpt('governancePage.paragraph.third.title', props.language) }</h3>
                <div className={'underline'}/>
                <p>
                  { props.excerpt('governancePage.paragraph.third.body.first', props.language) }
                </p>
                <p>
                  { props.excerpt('governancePage.paragraph.third.body.second', props.language) }
                </p>
                <p>
                  { props.excerpt('governancePage.paragraph.third.body.third', props.language) }
                </p>
              </div>
              <div className={'imageWrapper'}><img src={RevenueGraphic} alt={'Revenue graphic'}/></div>
            </div>
            <div className={'section'}>
              <div className={'textWrapper'}>
                <h3>{ props.excerpt('governancePage.paragraph.fourth.title', props.language) }</h3>
                <div className={'underline'}/>
                <p>
                  { props.excerpt('governancePage.paragraph.fourth.body.first', props.language) }
                </p>
                <p>
                  { props.excerpt('governancePage.paragraph.fourth.body.second', props.language) }
                </p>
              </div>
              <div className={'imageWrapper'}><img src={StructureGraphic} alt={'structure graphic'}/></div>
            </div>
            <p>
              { props.excerpt('governancePage.conclusion', props.language) }
            </p>
            <div className={'bottomLinkWrapper'}>
              <div className={'bottomLinkText'}>
                <h2>{ props.excerpt('governancePage.getStarted', props.language) }</h2>
              </div>
              <div className={'bottomButtonWrapper'}>
                <Button className={'buttonText'} onClick={() => window.open('https://dao.defimoneymarket.com', "_blank")}>
                  DAO Dashboard
                </Button>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default withTranslations(Governance);
