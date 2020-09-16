import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Fade from 'react-reveal/Fade';

import './GovernanceInfo.css';

const GovernanceInfo = () => {

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
            Governance
          </div>
          <div className={'subtitle'}>
          </div>
          <Fade bottom cascade>
            <div className={'tokenInfo'}>
              <div className={'point'}>
                <div className={'subtitle'}>
                  DAO Structure
                </div>
                <div className={'border'}/>
                <div className={'subtext'}>
                  The DMM Ecosystem is governed by a blockchain-based Decentralized Autonomous Organization, also known
                  as a DAO.
                </div>
              </div>
              <div className={'point'}>
                <div className={'subtitle'}>
                  Decentralized
                </div>
                <div className={'border'}/>
                <div className={'subtext'}>
                  DAO governance allows for control to be decentralized across all token holders around the world,
                  rather than in the hands of a small few.
                </div>
              </div>
              <div className={'point'}>
                <div className={'subtitle'}>
                  Community Led
                </div>
                <div className={'border'}/>
                <div className={'subtext'}>
                  Members of the ecosystem community are the ones who get to dictate the direction of the ecosystem.
                </div>
              </div>
            </div>
          </Fade>
          <div className={'buttonOuter'}>
            <Button className={'buttonText'} onClick={() => window.open('https://dao.defimoneymarket.com', "_blank")}>
              DAO Dashboard
            </Button>
            <Button href={"/governance"} className={'buttonText secondary'}
                    onClick={() => window.open('/governance', "_self")}>
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovernanceInfo;
