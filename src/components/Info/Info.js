import React from 'react';
import PropTypes from 'prop-types';

import { withTranslations } from '../../services/Translations/Translations';

import './Info.css';

const Info = props => {

  Info.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
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
              { props.excerpt('info.first.title', props.language) }
            </div>
            <div className={'subtext'}
                 onClick={() => window.open('https://etherscan.io/address/0x4cb120dd1d33c9a3de8bc15620c7cd43418d77e2#tokentxns', "_blank")}>
              { props.excerpt('info.first.body', props.language) }
            </div>
          </div>
        </div>
        <div className={'section white'}>
          <div className={'number'}>2</div>
          <div className={'text'} id={'text2'}>
            <div className={'main'}>
              { props.excerpt('info.second.title', props.language) }
            </div>
            <div className={'subtext'} onClick={() => window.open('https://explorer.defimoneymarket.com', "_blank")}>
              { props.excerpt('info.second.body', props.language) }
            </div>
          </div>
        </div>
        <div className={'section'}>
          <div className={'number'}>3</div>
          <div className={'text'}>
            <div className={'main'}>
              { props.excerpt('info.third.title', props.language) }
            </div>
            <div className={'subtext'}
                 onClick={() => window.open('https://etherscan.io/token/0x3564ad35b9e95340e5ace2d6251dbfc76098669b', "_blank")}>
              { props.excerpt('info.third.body', props.language) }
            </div>
          </div>
        </div>
        <div className={'section white'}>
          <div className={'number'}>4</div>
          <div className={'text'} id={'text4'}>
            <div className={'main'}>
              { props.excerpt('info.fourth.title', props.language) }
            </div>
            <div className={'subtext'} onClick={() => window.open("https://app.defimoneymarket.com", "_blank")}>
              { props.excerpt('info.fourth.body', props.language) }
            </div>
          </div>
        </div>
      </div>
      <div className={'flattener'}/>
    </div>
  );
};

export default withTranslations(Info);
