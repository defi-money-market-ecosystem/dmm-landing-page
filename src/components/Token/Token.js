import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Fade from 'react-reveal/Fade';

import { withTranslations } from '../../services/Translations/Translations';

import './Token.css';

const Token = props => {
  Token.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
  };

  return (
    <div className={'token'}>
      <div className={'content'}>
        <div className={'textWrapper'}>
          <div className={'title line1'}>
            { props.excerpt('token.title.lineOne', props.language) }
          </div>
          <div className={'title line2'}>
            { props.excerpt('token.title.lineTwo', props.language) }
          </div>
          <div className={'subtitle'}>
            { props.excerpt('token.subtitle', props.language) }
          </div>
          <div className={'buttonOuter'}>
            <Button className={'buttonText'} onClick={() => window.open('https://app.defimoneymarket.com', "_blank")}>
              { props.excerpt('token.button', props.language) }
            </Button>
          </div>
        </div>
        <Fade bottom cascade>
          <div className={'tokenInfo'}>
            <div className={'point'}>
              <div className={'subtitle'}>
                { props.excerpt('token.info.first.title', props.language) }
              </div>
              <div className={'border'}/>
              <div className={'subtext'}>
                { props.excerpt('token.info.first.body', props.language) }
              </div>
            </div>
            <div className={'point short'}>
              <div className={'subtitle'}>
                { props.excerpt('token.info.second.title', props.language) }
              </div>
              <div className={'border'}/>
              <div className={'subtext'}>
                { props.excerpt('token.info.second.body', props.language) }
              </div>
            </div>
            <div className={'point'}>
              <div className={'subtitle'}>
                { props.excerpt('token.info.third.title', props.language) }
              </div>
              <div className={'border'}/>
              <div className={'subtext'}>
                { props.excerpt('token.info.third.body', props.language) }
              </div>
            </div>
          </div>
        </Fade>
        <div className={'buttonOuter lower'}>
          <Button className={'buttonText'} onClick={() => window.open('https://app.defimoneymarket.com', "_blank")}>
            { props.excerpt('token.button', props.language) }
          </Button>
        </div>
      </div>
    </div>
  );
};

export default withTranslations(Token);
