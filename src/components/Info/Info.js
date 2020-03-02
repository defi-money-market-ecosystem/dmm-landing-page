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
              DAI or USDC are deposited in exchange for DMM tokens.
            </div>
            <div className={'subtext'} onClick={() => window.open('https://rinkeby.etherscan.io/address/0x02ee9AEbb75470D517BFf722D36762d2b231539C', "_blank")}>
              See the smart contract →
            </div>
          </div>
        </div>
        <div className={'section white'}>
          <div className={'number'}>2</div>
          <div className={'text'} id={'text2'}>
            <div className={'main'}>
              The deposited DAI and USDC are used to acquire real-world, income producing assets, all viewable on chain.
            </div>
            <div className={'subtext'}>
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
            <div className={'subtext'} onClick={() => handleClickOpen()}>
              See the accumulated interest →
            </div>
          </div>
        </div>
        <div className={'section white'}>
          <div className={'number'}>4</div>
          <div className={'text'} id={'text4'}>
            <div className={'main'}>
              DMM are freely swapped back for the original DAI/USDC deposited plus interest accrued.
            </div>
            <div className={'subtext'} onClick={() => handleClickOpen()}>
              Get your DMM →
            </div>
          </div>
        </div>
      </div>
      <div className={'flattener'}/>
      <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
        <div className={'dialogBox'}>
          Coming very soon!
        </div>
      </Dialog>
    </div>
  );
};

export default Info;
