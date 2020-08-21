import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Fade from 'react-reveal/Fade';
import Dialog from '@material-ui/core/Dialog';
import GovernanceGraphic from '../../assets/governance-graphic.svg';

import './Governance.css';

const Governance = (props) => {

  return (
    <div className={'governance'}>
        <div className={'topSection'}>
          <div className={'governance-inner'}>
            <h2>DMM Governance</h2>
            <div className={'underline large'}/>
            <p>The DeFi Money Market Ecosystem is governed by a <span className={'highlight'}>Decentralized Autonomous Organization (DAO)</span>.</p>
            <p>DAO community members can dictate the direction of the ecosystem by voting with the DMM Governance token <span className={'highlight'}>DMG</span>.</p>
            <p>This leads to <span className={'highlight'}>aligned incentives</span> - DMG token holders vote for decisions that grow the ecosystem and benefit from the success of the ecosystem.</p>
            <p>Anyone can get involved, get started by checking out the <a href={'https://dao.governance.com'}>DAO dashboard</a> or learning more about DMG below.</p>
            <Button className={'buttonText'} onClick={() => window.open('https://dao.defimoneymarket.com', "_blank")}>
              DAO Dashboard
            </Button>
            <div className={'governanceGraphic'}>
              <img src={GovernanceGraphic} alt={'Governance graphic'}/>
            </div>
          </div>
        </div>
        <div className={'bottomSection'}>
          <div className={'governance-inner'}>
            <div className={'section'}>
              <h3>Overview</h3>
              <div className={'underline'}/>
              <p>

              </p>
              <p>
                The DeFi Money Market (DMM) governance token (DMG) is an ERC-20 token that effectuates governance of the ecosystem via the DMM DAO, which has control over the Ethereum smart contracts and its adjacent assets.
              </p>
              <p>
                Ownership of DMG represents the right to govern the parameters of the DMM Protocol as well as governance over the ability and decisions surrounding the introduction of new assets to the ecosystem in regards to both asset type and asset location.
              </p>
              <p>
                Additionally, the decentralized community governing the DMM DAO can vote to modify the DMG tokenomics and utility, which could include a claim on the excess revenue generated from within the DMM ecosystem.
              </p>
              <p>
                The DMG token is a fork of Compound’s COMP governance token (featuring native delegation and vote weighting) with added capability such as meta-transaction support and a native burn function.
              </p>
            </div>
            <div className={'section right'}>
              <h3>Revenue and Growth Model</h3>
              <div className={'underline'}/>
              <p>
                The current revenue model for the DMM DAO is quite straightforward and is composed of four main areas:
                <ol>
                  <li>Excess interest revenue</li>
                  <li>Token burns, which can be initiated by a vote from the decentralized DMM DAO and done through excess interest revenue or via origination fees</li>
                  <li>Voting and staking for asset introduction, which is in the process of being decentralized and should result in a significant number of tokens being moved away from the liquid supply</li>
                  <li>If an individual or a group owns a block of DMG and reserves Principal or Affiliate membership to introduce assets into the DMME, they will also generate asset introduction or origination fees.</li>
                </ol>
                Like some of the other best token projects in the industry, we anticipate the DAO making minor tweaks to the token’s growth and revenue models as time progresses and more information about the protocol’s usage is obtained.
              </p>
            </div>
            <div className={'section'}>
              <h3>Revenue</h3>
              <div className={'underline'}/>
              <p>
                Since the DMME is overcollateralized — with real-assets yielding more in revenue than payments due to mAsset holders — the DMM DAO is the recipient of a positive income stream that can be used to fund further loans, capitalize related assets, burn DMG or otherwise grow the ecosystem.
              </p>
              <p>
                The DMM DAO is unique in that it is one of the few DAOs that is already producing revenue and has a straightforward revenue model that grows as DMM’s AUM grows.
              </p>
              <p>
                All assets introduced to the ecosystem are overcollateralized on an income production basis. Currently, the DMME generates 6.25% APY for mToken holders while the underlying assets generate in total between 8% and 12% APY. This excess interest assures that payments of 6.25% to depositors continue to be made, and any extra accrues to the DMM DAO.
              </p>
            </div>
            <div className={'section right'}>
              <h3>Uses of Revenue</h3>
              <div className={'underline'}/>
              <p>
                After payments are made to lenders, excess revenue generated by the DAO will used in accordance with how the DAO has voted, likely to grow the ecosystem and to reward DMG token holders.
              </p>
              <p>
                Once the DMM DAO vote reaches a threshold agreed upon by the DMG holders, the DAO may elect to purchase DMG tokens off the open market to burn them, increasing token demand and lowering the supply available.
              </p>
              <p>
                Token burns will be tracked on the <a href={'https://dao.defimoneymarket.com'}>governance dashboard</a> in order to provide transparency into the revenue the DMM DAO engages in and generates.
              </p>
              <p>
                As development, marketing, and maintenance becomes increasingly decentralized, we anticipate a portion of the DAO’s revenue will be used to pay for future protocol work and development.
              </p>
            </div>
            <p>
              Through the governance structure we have laid out above, it is our goal that the DMG governance token and community DAO will enable DMM to become a highly decentralized protocol removing any single point of failure. We anticipate that changes and fine-tuning to this structure will be required and we are open to any and all feedback you may have as DMM is a community driven project first and foremost.
            </p>



            {/*<div className={'section'}>
              <h3>Overview</h3>
              <div className={'underline'}/>
              <p>
                The DeFi Money Market (DMM) DAO governance token, DMG, is the tool through which the community governs and grows the DMM ecosystem and the underlying protocol. As we look to build a vibrant global community, DMG is a critical component that will engender broad participation and mitigate centralized governance risk. Specifically, DMG effectuates governance of the ecosystem via the DMM DAO, which has control over the Ethereum smart contracts and its adjacent assets.
              </p>
              <p>
                Ownership of DMG represents the right to govern the parameters of the DMM Protocol as well as governance over the ability and decisions surrounding the introduction of new assets to the ecosystem in regards to both asset type and asset location. Additionally the decentralized community governing the DMM DAO can vote to modify the DMG tokenomics and utility, which could include a claim on the excess revenue generated from within the DMM ecosystem. The DMG token is a fork of Compound’s COMP governance token (featuring native delegation and vote weighting) with added capability such as meta-transaction support and a native burn function.
              </p>
            </div>
            <div className={'section'}>
              <h3>Revenue and Growth Model</h3>
              <div className={'underline'}/>
              <p>
                The current revenue model for the DMM DAO is quite straightforward and is composed of four main areas:
                <ol>
                  <li>Excess interest revenue</li>
                  <li>Token burns, which can be initiated by a vote from the decentralized DMM DAO and done through excess interest revenue or via origination fees</li>
                  <li>Voting and staking for asset introduction, which is in the process of being decentralized and should result in a significant number of tokens being moved away from the liquid supply</li>
                  <li>If an individual or a group owns a block of DMG and reserves Principal or Affiliate membership to introduce assets into the DMME, they will also generate asset introduction or origination fees.</li>
                  Like some of the other best token projects in the industry, we anticipate the DAO making minor tweaks to the token’s growth and revenue model as time progresses and more information about the protocol’s usage is obtained.
                </ol>
              </p>
              <p>
                Ownership of DMG represents the right to govern the parameters of the DMM Protocol as well as governance over the ability and decisions surrounding the introduction of new assets to the ecosystem in regards to both asset type and asset location. Additionally the decentralized community governing the DMM DAO can vote to modify the DMG tokenomics and utility, which could include a claim on the excess revenue generated from within the DMM ecosystem. The DMG token is a fork of Compound’s COMP governance token (featuring native delegation and vote weighting) with added capability such as meta-transaction support and a native burn function.
              </p>
            </div>
            <div className={'section'}>
              <h3>Revenue</h3>
              <div className={'underline'}/>
              <p>
                Further, as the DMME is overcollateralized — with real-assets yielding more than payments due to mAsset holders — the DMM DAO is the recipient of a positive income stream that can be used to fund further loans, capitalize related assets, burn DMG or otherwise grow the ecosystem. The DMM DAO is unique in that it is one of the few DAOs that is already producing revenue and has a straightforward revenue model that grows as DMM’s AUM grows. There is currently $8.5M in car equity loans backing all current mTokens, visible on the DMM swap app.
              </p>
              <p>
                As all the assets introduced to the ecosystem are overcollateralized on an income production basis (as the DMM currently generates 6.25% interest for mTokens holders while the underlying assets generate in total between 8% — 12% interest, there is a constant generation of additional income), these excess income streams assure that 1) That payments of the 6.25% to depositors are made and 2) Excess amounts accrue to the DMM DAO. While still in its infancy, to date the DMM DAO has generated approximately 5.5% annualized revenue on an asset based basis. Just in the month of April alone, circulating mTokens grew 180% to $227k worth of user-deposited funds. Additionally to date, there have been over $670k worth of mTokens purchased in total.
              </p>
              <p>
                Revenue through rights to governance over asset introduction
              </p>
              <p>
                A certain percentage of DMG tokens are required to introduce assets into the DMME (to assure that all DMG holders interests are aligned). The first few test assets are being developed by partners working directly with the DMM Foundation. Some of these assets can include real estate, aviation, and construction equipment. More details can be found in our Chainlink article. Upon the issuance and sale of DMG, we will be rolling out over the next 12 months the fully decentralized onboarding of assets into the DMME. Below we list a high level view on how we envision this to work. While not definitive, we look forward to working with DMG holders and the community to create a unique system that can be scalable on a global basis.
              </p>
              <p>
                Revenue from % of Origination or Asset Introduction Fees for Principal and Affiliate Members: Principal or Affiliate Members (see full information on how this operates below) will contribute 5% of the Origination or Asset Introduction Fees charged to DMG holders on a pro rata basis.
              </p>
            </div>
            <div className={'section'}>
              <h3>Uses of Revenue</h3>
              <div className={'underline'}/>
              <p>
                Once the DMM DAO vote reaches a threshold agreed upon by the DMG holders, the DAO may elect to purchase DMG tokens off the open market to burn them, increasing token demand and lowering the supply available. Token burns will be tracked on a governance dashboard designed to provide transparency into the revenue the DMM DAO engages in and generates. As development, marketing, and maintenance becomes increasingly decentralized, we anticipate a portion of the DAO’s revenue will be used to pay for future protocol work and development.
              </p>
            </div>
            <p>
              Through the governance structure we have laid out above, it is our goal that the DMG governance token and community DAO will enable DMM to become a highly decentralized protocol removing any single point of failure. We anticipate that changes and fine-tuning to this structure will be required and we are open to any and all feedback you may have as DMM is a community driven project first and foremost.
            </p>*/}
          </div>
        </div>
    </div>
  );
};

export default Governance;
