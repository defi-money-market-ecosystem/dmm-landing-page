import React from 'react';
import Button from '@material-ui/core/Button';

import './Info.css';

const Info = (props) => {
  return (
    <div className={'info'}>
      <div className={'blueBanner'} id={'blueBanner1'}/>
      <div className={'blueBanner'} id={'blueBanner2'}/>
      <div className={'content'}>
        <div className={'title'}>
          The DeFi Money Market (DMM) Ecosystem
        </div>
        <div className={'section'}>
          <div className={'number'}>1</div>
          <div className={'text'}>
            <div className={'main'}>
              DAI or USDC are deposited in exchange for DMM tokens.
            </div>
            <div className={'subtext'}>
              See the smart contract →
            </div>
          </div>
        </div>
        <div className={'section white'}>
          <div className={'number'}>2</div>
          <div className={'text'} id={'text2'}>
            <div className={'main'}>
              The deposited DAI and USDC is used as liquiditiy for real-world, collateralized loans.
            </div>
            <div className={'subtext'}>
              Browse the loans →
            </div>
          </div>
        </div>
        <div className={'section'}>
          <div className={'number'}>3</div>
          <div className={'text'}>
            <div className={'main'}>
              The loans pay out interest, which is returned to the DMM Ecosystem.
            </div>
            <div className={'subtext'}>
              See the accumulated interest →
            </div>
          </div>
        </div>
        <div className={'section white'}>
          <div className={'number'}>4</div>
          <div className={'text'} id={'text4'}>
            <div className={'main'}>
              DMM are freely swapped back for the original DAI/USDC deposited plus interest accrued while they were deposited.
            </div>
            <div className={'subtext'}>
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
