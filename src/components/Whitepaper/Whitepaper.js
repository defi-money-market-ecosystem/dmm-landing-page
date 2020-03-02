import React from 'react';
import Button from '@material-ui/core/Button';
import whitepaperSvg from '../../assets/dmm-whitepaper-svg.svg'
import whitepaper from '../../assets/DMM-Ecosystem.pdf';

import './Whitepaper.css';

const Whitepaper = (props) => {
  return (
    <div className={'whitepaper'}>
      <div className={'content'}>
        <div className={'textWrapper top'}>
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
            <Button className={'buttonText'} onClick={() => window.open(process.env.PUBLIC_URL + '/DMM-Ecosystem.pdf', "_blank")}>
              Read the whitepaper
            </Button>
          </div>
        </div>
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
            <Button className={'buttonText'} onClick={() => window.open(process.env.PUBLIC_URL + '/DMM-Ecosystem.pdf', "_blank")}>
              Read the whitepaper
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whitepaper;
