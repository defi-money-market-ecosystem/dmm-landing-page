import React from 'react';
import HuobiLogo from '../../assets/Huobi-logo.png';
import ChainlinkLogo from '../../assets/Chainlink-logo.png';
import DraperVentureNetwork from '../../assets/Draper-Venture-Network-logo.png';
import FortmaticLogo from '../../assets/Fortmatic-logo.png';
import DIFCLogo from '../../assets/DIFC-logo.png';
import GnosisLogo from '../../assets/Gnosis-logo.png';
import TotleLogo from '../../assets/Totle-logo.png';
import BlocknativeLogo from '../../assets/Blocknative-logo.png';
import LoopringLogo from '../../assets/Loopring-logo.png';

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
                  <img src={HuobiLogo}/>
                </div>
              </div>
              <div className={'publication'}>
                <div className={'partnersInner'}>
                  <img src={ChainlinkLogo}/>
                </div>
              </div>
              <div className={'publication'}>
                <div className={'partnersInner'}>
                  <img src={DraperVentureNetwork}/>
                </div>
              </div>
              <div className={'publication'}>
                <div className={'partnersInner'}>
                  <img src={FortmaticLogo}/>
                </div>
              </div>
              <div className={'publication'}>
                <div className={'partnersInner'}>
                  <img src={DIFCLogo}/>
                </div>
              </div>
              <div className={'publication'}>
                <div className={'partnersInner'}>
                  <img src={GnosisLogo}/>
                </div>
              </div>
              <div className={'publication'}>
                <div className={'partnersInner'}>
                  <img src={TotleLogo}/>
                </div>
              </div>
              <div className={'publication'}>
                <div className={'partnersInner'}>
                  <img src={BlocknativeLogo}/>
                </div>
              </div>
              <div className={'publication'}>
                <div className={'partnersInner'}>
                  <img src={LoopringLogo}/>
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
