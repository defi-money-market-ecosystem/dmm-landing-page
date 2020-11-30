import React from 'react';
import Button from '@material-ui/core/Button';
import whitepaperSvg from '../../assets/dmm-whitepaper-svg.svg';
import Languages from '../../services/Translations/Languages';

import { withTranslations } from '../../services/Translations/Translations';

import './Whitepaper.css';

const Whitepaper = props => {
  return (
    <div className={'whitepaper'}>
      <div className={'content'}>
        <div className={'textWrapper top'}>
          <div className={'title line1'}>
            { props.excerpt('whitepaper.title.lineOne', props.language) }
          </div>
          <div className={'title line2'}>
            { props.excerpt('whitepaper.title.lineTwo', props.language) }
          </div>
          <div className={'subtitle'}>
            { props.excerpt('whitepaper.subtitle', props.language) }
          </div>
          <div className={'buttonOuter'}>
            <Button className={'buttonText'} onClick={() => {
              if (props.language === Languages.CHINESE) {
                window.open('/DMM-Ecosystem-CN.pdf', "_blank")
              }
              else {
                window.open('/DMM-Ecosystem.pdf', "_blank")
              }
            }}>
              { props.excerpt('whitepaper.button', props.language) }
            </Button>
          </div>
        </div>
        <div className={'whitepaperGraphic'}>
          <img src={whitepaperSvg}/>
        </div>
        <div className={'textWrapper'}>
          <div className={'title line1'}>
            { props.excerpt('whitepaper.title.lineOne', props.language) }
          </div>
          <div className={'title line2'}>
            { props.excerpt('whitepaper.title.lineTwo', props.language) }
          </div>
          <div className={'subtitle'}>
            { props.excerpt('whitepaper.subtitle', props.language) }
          </div>
          <div className={'buttonOuter'}>
            <Button className={'buttonText'} onClick={() => {
              if (props.language === Languages.CHINESE) {
                window.open(process.env.PUBLIC_URL + '/DMM-Ecosystem-CN.pdf', "_blank")
              }
              else {
                window.open(process.env.PUBLIC_URL + '/DMM-Ecosystem.pdf', "_blank")
              }
            }}>
              { props.excerpt('whitepaper.button', props.language) }
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withTranslations(Whitepaper);
