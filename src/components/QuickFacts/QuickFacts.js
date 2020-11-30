import React from 'react';
import Button from '@material-ui/core/Button';
import Fade from 'react-reveal/Fade';

import GraphIcon from '../../assets/Graph-Icon.svg';
import CarIcon from '../../assets/Car-Icon.svg';
import VehicleIcon from '../../assets/Vehicles-graphic-image.png';
import ChainIcon from '../../assets/Chain-Icon.svg';
import GoldIcon from '../../assets/Gold-Icon.svg';

import { withTranslations } from '../../services/Translations/Translations';

import './QuickFacts.css';

const QuickFacts = (props) => {
  return (
    <div className={'quickFacts'}>
      <div className={'content'}>
        <div className={'title'}>
          { props.excerpt('quickFacts.title', props.language) }
        </div>
        <div className={'factsList'}>
          <div className={'fact'}>
            <div className={'icon'}>
              <div className={'iconInner'}>
                <img src={GraphIcon} alt={'graph icon'}/>
              </div>
            </div>
            <div className={'factTitle'}>
              { props.excerpt('quickFacts.first.title', props.language) }
            </div>
            <div className={'underline'}/>
            <div className={'text'}>
              { props.excerpt('quickFacts.first.body', props.language) }
            </div>
          </div>
          <div className={'fact'}>
            <div className={'icon'}>
              <div className={'iconInner'}>
                <img className={'vehiclesImage'} src={VehicleIcon} alt={'vehicle icon'}/>
              </div>
            </div>
            <div className={'factTitle'}>
              { props.excerpt('quickFacts.second.title', props.language) }
            </div>
            <div className={'underline'}/>
            <div className={'text'}>
              { props.excerpt('quickFacts.second.body', props.language) }
            </div>
          </div>
          <div className={'fact'}>
            <div className={'icon'}>
              <div className={'iconInner'}>
                <img src={ChainIcon} alt={'chain icon'}/>
              </div>
            </div>
            <div className={'factTitle'}>
              { props.excerpt('quickFacts.third.title', props.language) }
            </div>
            <div className={'underline'}/>
            <div className={'text'}>
              { props.excerpt('quickFacts.third.body', props.language) }
            </div>
          </div>
          <div className={'fact gold'}>
            <div className={'icon'}>
              <div className={'iconInner'}>
                <img src={GoldIcon} alt={'gold icon'}/>
              </div>
            </div>
            <div className={'factTitle'}>
              { props.excerpt('quickFacts.fourth.title', props.language) }
            </div>
            <div className={'underline'}/>
            <div className={'text'}>
              { props.excerpt('quickFacts.fourth.body', props.language) }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withTranslations(QuickFacts);
