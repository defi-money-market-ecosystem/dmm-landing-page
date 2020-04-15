import React from 'react';
import HuobiLogo from '../../assets/Huobi-logo.png';
import ChainlinkLogo from '../../assets/Chainlink-logo.png';
import DraperVentureNetwork from '../../assets/Draper-Venture-Network-logo.png';
import CoinbaseLogo from '../../assets/Coinbase-logo.png';
import FortmaticLogo from '../../assets/Fortmatic-logo.png';
import TrustWalletLogo from '../../assets/TrustWallet-Logo.png';
import DIFCLogo from '../../assets/DIFC-logo.png';
import GnosisLogo from '../../assets/Gnosis-logo.png';
import TotleLogo from '../../assets/Totle-logo.png';
import BlocknativeLogo from '../../assets/Blocknative-logo.png';
import LoopringLogo from '../../assets/Loopring-logo.png';
import ZerionLogo from '../../assets/Zerion-logo.png';

import './Partners.css';

class Partners extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={'partners'}>
        <div className={'wrapper'}>
          <div className={'content'}>
            <div className={'title'}>
              Partners
            </div>
            <div className={'partnersWrapper'}>
              <div className={'publication'}>
                <div className={'partnersInner'}>
                  <a href={'https://www.huobi.com/'} target="_blank"><img src={HuobiLogo}/></a>
                </div>
              </div>
              <div className={'publication'}>
                <div className={'partnersInner'}>
                  <a href={'https://chain.link/'} target="_blank"><img src={ChainlinkLogo}/></a>
                </div>
              </div>
              <div className={'publication'}>
                <div className={'partnersInner'}>
                  <a href={'https://drapernetwork.com/'} target="_blank"><img src={DraperVentureNetwork}/></a>
                </div>
              </div>
              <div className={'publication'}>
                <div className={'partnersInner'}>
                  <a href={'https://www.coinbase.com/'} target="_blank"><img src={CoinbaseLogo}/></a>
                </div>
              </div>
              <div className={'publication'}>
                <div className={'partnersInner'}>
                  <a href={'https://fortmatic.com/'} target="_blank"><img src={FortmaticLogo}/></a>
                </div>
              </div>
              <div className={'publication'}>
                <div className={'partnersInner'}>
                  <a href={'https://trustwallet.com/'} target="_blank"><img src={TrustWalletLogo}/></a>
                </div>
              </div>
              <div className={'publication'}>
                <div className={'partnersInner'}>
                  <a href={'https://www.difc.ae/'} target="_blank"><img src={DIFCLogo}/></a>
                </div>
              </div>
              <div className={'publication'}>
                <div className={'partnersInner'}>
                  <a href={'https://gnosis.io/'} target="_blank"><img src={GnosisLogo}/></a>
                </div>
              </div>
              <div className={'publication'}>
                <div className={'partnersInner'}>
                  <a href={'https://www.totle.com/'} target="_blank"><img src={TotleLogo}/></a>
                </div>
              </div>
              <div className={'publication'}>
                <div className={'partnersInner'}>
                  <a href={'https://www.blocknative.com/'} target="_blank"><img src={BlocknativeLogo}/></a>
                </div>
              </div>
              <div className={'publication'}>
                <div className={'partnersInner'}>
                  <a href={'https://loopring.org/#/'} target="_blank"><img src={LoopringLogo}/></a>
                </div>
              </div>
              <div className={'publication'}>
                <div className={'partnersInner'}>
                  <a href={'https://zerion.io/'} target="_blank"><img src={ZerionLogo}/></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Partners;
