import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Fade from 'react-reveal/Fade';
import Languages from '../../services/Translations/Languages';

import { withTranslations } from '../../services/Translations/Translations';

import './GovernanceInfo.css';

const GovernanceInfo = props => {

  GovernanceInfo.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
  };

  return (
    <div className={'governanceInfo'}>
      <div className={'content'}>
        <div className={'textWrapper'}>
          <div className={'title line2'}>
            { props.excerpt('governance.title', props.language) }
          </div>
          <div className={'subtitle'}>
          </div>
          <Fade bottom cascade>
            <div className={'tokenInfo'}>
              <div className={'point'}>
                <div className={'subtitle'}>
                  { props.excerpt('governance.first.title', props.language) }
                </div>
                <div className={'border'}/>
                <div className={'subtext'}>
                  { props.excerpt('governance.first.body', props.language) }
                </div>
              </div>
              <div className={'point'}>
                <div className={'subtitle'}>
                  { props.excerpt('governance.second.title', props.language) }
                </div>
                <div className={'border'}/>
                <div className={'subtext'}>
                  { props.excerpt('governance.second.body', props.language) }
                </div>
              </div>
              <div className={'point'}>
                <div className={'subtitle'}>
                  { props.excerpt('governance.third.title', props.language) }
                </div>
                <div className={'border'}/>
                <div className={'subtext'}>
                  { props.excerpt('governance.third.body', props.language) }
                </div>
              </div>
            </div>
          </Fade>
          <div className={'buttonOuter'}>
            <Button className={'buttonText'} onClick={() => window.open('https://dao.defimoneymarket.com', "_blank")}>
              { props.excerpt('governance.button.dashboard', props.language) }
            </Button>
            { props.language === Languages.CHINESE ? (
              <Button href={"/governance/cn"} className={'buttonText secondary'}
                      onClick={() => window.open('/governance/cn', "_self")}>
                { props.excerpt('governance.button.learnMore', props.language) }
              </Button>
            ) : (
              <Button href={"/governance/en"} className={'buttonText secondary'}
                      onClick={() => window.open('/governance/en', "_self")}>
                { props.excerpt('governance.button.learnMore', props.language) }
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withTranslations(GovernanceInfo);
