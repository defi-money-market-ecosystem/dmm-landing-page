import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Fade from 'react-reveal/Fade';
import Dialog from '@material-ui/core/Dialog';

import './Token.css';
import Integrations from "../Integrations/Integrations";

const Token = (props) => {
  Token.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = value => {
    setOpen(false);
  };

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
            <Button className={'buttonText'} onClick={() => window.open('https://app.defimoneymarket.com', "_blank")}>
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
            <div className={'point short'}>
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
        <div className={'buttonOuter lower'}>
          <Button className={'buttonText'} onClick={() => window.open('https://app.defimoneymarket.com', "_blank")}>
            Get your DMM
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Token;
