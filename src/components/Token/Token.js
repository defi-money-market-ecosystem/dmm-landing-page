import React from 'react';
import Button from '@material-ui/core/Button';
import Fade from 'react-reveal/Fade';

import './Token.css';

const Token = (props) => {
  return (
    <div className={'token'}>
      <div className={'content'}>
        <div className={'textWrapper'}>
          <div className={'title line1'}>
            The DMM
          </div>
          <div className={'title line2'}>
            Token
          </div>
          <div className={'subtitle'}>
            Transferable. Usable. Stable.
          </div>
          <div className={'buttonOuter'}>
            <Button className={'buttonText'} onClick={() => window.open("http://www.google.com", "_blank")}>
              Get your DMM
            </Button>
          </div>
        </div>
        <Fade bottom cascade>
          <div className={'tokenInfo'}>
            <div className={'point'}>
              <div className={'subtitle'}>
                No more gas fees
              </div>
              <div className={'border'}/>
              <div className={'subtext'}>
                By integrating delegated payments on the Ethereum network, users no longer have to pay gas fees in the form of ETH in
                order to perform transactions.
              </div>
            </div>
            <div className={'point'} style={{'height': '151px',
              'margin-bottom': '-60px'}}>
              <div className={'subtitle'}>
                ERC-20 Compliant
              </div>
              <div className={'border'}/>
              <div className={'subtext'}>
                Easily manage and transfer your DMM from any standard Ethereum wallet.
              </div>
            </div>
            <div className={'point'}>
              <div className={'subtitle'}>
                Consistent value
              </div>
              <div className={'border'}/>
              <div className={'subtext'}>
                Because DMM is backed by stablecoins and a consistent interest rate, it's value is very predictable and consistent,
                making it a dependable store of value safe from crypto volatility.
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Token;
