import React from 'react';
import Button from '@material-ui/core/Button';
import Fade from 'react-reveal/Fade';

import GraphIcon from '../../assets/Graph-Icon.svg';
import CarIcon from '../../assets/Car-Icon.svg';
import VehicleIcon from '../../assets/Vehicles-graphic-image.png';
import ChainIcon from '../../assets/Chain-Icon.svg';
import GoldIcon from '../../assets/Gold-Icon.svg';
import CountUp from 'react-countup';

import NumberUtil, {fromDecimalToBN, humanize} from '../../utils/NumberUtil';
import { withTranslations } from '../../services/Translations/Translations';

import Languages from '../../services/Translations/Languages';

import './QuickFacts.css';

const QuickFacts = (props) => {
  return (
    <div className={'quickFacts'}>
      <div className={'tickerRates'}>
        {props.tokenList && Object.keys(props.tokenList).map((key,index) =>
          <div className={`exchangeRatesWrapper ${props.tokenList[key].symbol.replace('m','').toLowerCase()}`}>
            <span className={'bold'}>1</span>
            <span className={'light'}>&nbsp;{props.tokenList[key].symbol} =&nbsp;</span>
            <CountUp
              start={props.tokenList[key].underlyingRate ? Number.parseFloat(humanize(NumberUtil._1.mul(props.tokenList[key].underlyingRate).div(NumberUtil._1), 18)) : 0}
              end={props.tokenList[key].underlyingRate ? Number.parseFloat(humanize(NumberUtil._1.mul(props.tokenList[key].underlyingRate).div(NumberUtil._1).add(fromDecimalToBN(0.000007134703196, 18)), 18)) : 0}
              duration={60 * 60}
              separator=" "
              decimals={8}
              decimal="."
              prefix=""
              suffix=""
            />
            <span className={'light'}>&nbsp;{props.tokenList[key].symbol.replace('m','')}</span>
          </div>
        )}
      </div>
      <div className={'content'}>
        <div className={'videoWrapperTop'}>
          { props.language === Languages.CHINESE ? (
            <iframe width="560" height="315" src="https://www.youtube.com/embed/T_3HSS18XjQ" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen/>
          ) : (
            <iframe width="560" height="315" src="https://www.youtube.com/embed/qM0PrnzmF-w?controls=0" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen/>
          )}
        </div>
        <div className={'title'}>
          { props.excerpt('quickFacts.title', props.language) }
        </div>
        <div className={'factsList'}>
          <div className={'factsSectionOne'}>
            <div className={'fact'}>
              <div className={'icon'}>
                <div className={'iconInner'}>
                  <img src={GraphIcon} alt={'graph icon'}/>
                </div>
              </div>
              <div className={'factDetails'}>
                <div className={'factTitle'}>
                  { props.excerpt('quickFacts.first.title', props.language) }
                </div>
                <div className={'underline'}/>
                <div className={'text'}>
                  { props.excerpt('quickFacts.first.body', props.language) }
                </div>
              </div>
            </div>
            <div className={'fact'}>
              <div className={'icon'}>
                <div className={'iconInner'}>
                  <img className={'vehiclesImage'} src={VehicleIcon} alt={'vehicle icon'}/>
                </div>
              </div>
              <div className={'factDetails'}>
                <div className={'factTitle'}>
                  { props.excerpt('quickFacts.second.title', props.language) }
                </div>
                <div className={'underline'}/>
                <div className={'text'}>
                  { props.excerpt('quickFacts.second.body', props.language) }
                </div>
              </div>
            </div>
          </div>
          <div className={'videoWrapper'}>
            { props.language === Languages.CHINESE ? (
              <iframe width="560" height="315" src="https://www.youtube.com/embed/T_3HSS18XjQ" frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen/>
            ) : (
              <iframe width="560" height="315" src="https://www.youtube.com/embed/qM0PrnzmF-w?controls=0" frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen/>
            )}
          </div>
          <div className={'factsSectionTwo'}>
            <div className={'fact'}>
              <div className={'icon'}>
                <div className={'iconInner'}>
                  <img src={ChainIcon} alt={'chain icon'}/>
                </div>
              </div>
              <div className={'factDetails'}>
                <div className={'factTitle'}>
                  { props.excerpt('quickFacts.third.title', props.language) }
                </div>
                <div className={'underline'}/>
                <div className={'text'}>
                  { props.excerpt('quickFacts.third.body', props.language) }
                </div>
              </div>
            </div>
            <div className={'fact gold'}>
              <div className={'icon'}>
                <div className={'iconInner'}>
                  <img src={GoldIcon} alt={'gold icon'}/>
                </div>
              </div>
              <div className={'factDetails'}>
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
      </div>
    </div>
  );
};

export default withTranslations(QuickFacts);
