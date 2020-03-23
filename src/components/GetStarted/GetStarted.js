import React from 'react';
import Button from '@material-ui/core/Button';

import './GetStarted.css';

const GetStarted = (props) => {
  return (
    <div className={'getStarted'}>
      <div className={'content'}>
        <div className={'leftSide'}>
          What are you waiting for?
        </div>
        <div className={'rightSide'}>
          <div className={'text'}>
            Get started with DMM in minutes!
          </div>
          <div className={'button'}>
            <Button className={'buttonText'} onClick={() => window.open("https://github.com/defi-money-market-ecosystem/protocol/wiki", "_blank")}>
              Read the docs
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
