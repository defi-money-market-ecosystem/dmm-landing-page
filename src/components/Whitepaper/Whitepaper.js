import React from 'react';
import Button from '@material-ui/core/Button';
import Fade from 'react-reveal/Fade';
import whitepaperSvg from '../../assets/dmm-whitepaper-svg.svg'

import './Whitepaper.css';

const Whitepaper = (props) => {
  return (
    <div className={'whitepaper'}>
      <div className={'content'}>
        <div className={'whitepaperGraphic'}>
        <img src={whitepaperSvg}/>
        </div>
        <div className={'textWrapper'}>
          <div className={'title line1'}>
            The DMM
          </div>
          <div className={'title line2'}>
            Whitepaper
          </div>
          <div className={'subtitle'}>
            The contract. The token. The Association.
          </div>
          <div className={'buttonOuter'}>
            <Button className={'buttonText'} onClick={() => window.open("http://www.google.com", "_blank")}>
              Read the whitepaper
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whitepaper;
