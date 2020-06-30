import React from 'react';
import HuobiLogo from '../../assets/Huobi-logo.png';
import ChainlinkLogo from '../../assets/Chainlink-logo.png';
import DraperVentureNetwork from '../../assets/Draper-Venture-Network-logo.png';
import CoinbaseLogo from '../../assets/Coinbase-logo.png';
import FortmaticLogo from '../../assets/Fortmatic-logo.png';
import PortisLogo from '../../assets/Portis-logo.png';
import TrustWalletLogo from '../../assets/TrustWallet-Logo.png';
import DIFCLogo from '../../assets/DIFC-logo.png';
import GnosisLogo from '../../assets/Gnosis-logo.png';
import DXDAOLogo from '../../assets/dxDAO-logo.png';
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
                  <a href={'https://twitter.com/chainlink/status/1234496138092437504?s=20'} target="_blank"><img src={ChainlinkLogo}/></a>
                </div>
              </div>
              <div className={'publication'}>
                <div className={'partnersInner'}>
                  <a href={'https://twitter.com/DMMDAO/status/1239562607020965889?s=20'} target="_blank"><img src={DraperVentureNetwork}/></a>
                </div>
              </div>
              <div className={'publication'}>
                <div className={'partnersInner'}>
                  <a href={'https://twitter.com/DMMDAO/status/1246552061820338176?s=20'} target="_blank"><img src={CoinbaseLogo}/></a>
                </div>
              </div>
              <div className={'publication'}>
                <div className={'partnersInner'}>
                  <a href={'https://twitter.com/DMMDAO/status/1234982542429700098?s=20'} target="_blank"><img src={FortmaticLogo}/></a>
                </div>
              </div>
              <div className={'publication'}>
                <div className={'partnersInner'}>
                  <a href={'https://twitter.com/DMMDAO/status/1253798540704243712?s=20'} target="_blank"><img src={PortisLogo}/></a>
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
                  <a href={'https://twitter.com/mesa_eth/status/1275106582716612609?s=20'} target="_blank"><img className={'dxdaoLogo'} src={DXDAOLogo}/></a>
                </div>
              </div>
              <div className={'publication'}>
                <div className={'partnersInner'}>
                  <a href={'https://twitter.com/TotleCrypto/status/1234590563044904966?s=20'} target="_blank"><img src={TotleLogo}/></a>
                </div>
              </div>
              <div className={'publication'}>
                <div className={'partnersInner'}>
                  <a href={'https://twitter.com/DMMDAO/status/1234551610237444097?s=20'} target="_blank"><img src={BlocknativeLogo}/></a>
                </div>
              </div>
              <div className={'publication'}>
                <div className={'partnersInner'}>
                  <a href={'https://loopring.org/#/'} target="_blank"><img src={LoopringLogo}/></a>
                </div>
              </div>
              <div className={'publication'}>
                <div className={'partnersInner'}>
                  <a href={'https://twitter.com/DMMDAO/status/1258063889222135808?s=20'} target="_blank"><img src={ZerionLogo}/></a>
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
