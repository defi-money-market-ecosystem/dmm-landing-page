import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';

import './Info.css';
import Navbar from "../Navbar/Navbar";

const Info = (props) => {
  Info.propTypes = {
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
    <div className={'info'}>
      <div className={'blueBanner'} id={'blueBanner1'}/>
      <div className={'blueBanner'} id={'blueBanner2'}/>
      <div className={'content'}>
        <div className={'section'}>
          <div className={'number'}>1</div>
          <div className={'text'}>
            <div className={'main'}>
              DAI, USDC, USDT or ETH are deposited in exchange for DMM mTokens.
            </div>
            <div className={'subtext'} onClick={() => window.open('https://etherscan.io/address/0x4cb120dd1d33c9a3de8bc15620c7cd43418d77e2#tokentxns', "_blank")}>
              See the smart contract →
            </div>
          </div>
        </div>
        <div className={'section white'}>
          <div className={'number'}>2</div>
          <div className={'text'} id={'text2'}>
            <div className={'main'}>
              The deposited DAI, USDC, USDT, and ETH are used to acquire real-world, income producing assets, all viewable on chain.
            </div>
            <div className={'subtext'} onClick={() => window.open('https://explorer.defimoneymarket.com', "_blank")}>
              Browse the assets →
            </div>
          </div>
        </div>
        <div className={'section'}>
          <div className={'number'}>3</div>
          <div className={'text'}>
            <div className={'main'}>
              The assets pay out interest, which is returned to the DMM Ecosystem.
            </div>
            <div className={'subtext'} onClick={() => window.open('https://etherscan.io/token/0x3564ad35b9e95340e5ace2d6251dbfc76098669b', "_blank")}>
              See the accumulated interest →
            </div>
          </div>
        </div>
        <div className={'section white'}>
          <div className={'number'}>4</div>
          <div className={'text'} id={'text4'}>
            <div className={'main'}>
              DMM mTokens are freely swapped back for the original DAI/USDC/USDT/ETH deposited plus interest accrued.
            </div>
            <div className={'subtext'} onClick={() => window.open("https://app.defimoneymarket.com", "_blank")}>
              Get your DMM →
            </div>
          </div>
        </div>
      </div>
      <div className={'flattener'}/>
    </div>
  );
};

export default Info;
