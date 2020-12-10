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

import './QuickFacts.css';

const QuickFacts = (props) => {
  return (
    <div className={'quickFacts'}>
      <div className={'tickerRates'}>
        <div className={'exchangeRatesWrapper usdc'}>
          <span className={'bold'}>1</span>
          <span className={'light'}>&nbsp;mUSDC =&nbsp;</span>
          <CountUp
            start={props.usdcRate ? Number.parseFloat(humanize(NumberUtil._1.mul(props.usdcRate).div(NumberUtil._1), 18)) : 0}
            end={props.usdcRate ? Number.parseFloat(humanize(NumberUtil._1.mul(props.usdcRate).div(NumberUtil._1).add(fromDecimalToBN(0.000007134703196, 18)), 18)) : 0}
            duration={60 * 60}
            separator=" "
            decimals={8}
            decimal="."
            prefix=""
            suffix=""
          />
          <span className={'light'}>&nbsp;USDC</span>
        </div>
        <div className={'exchangeRatesWrapper'}>
          <span className={'bold'}>1</span>
          <span className={'light'}>&nbsp;mETH =&nbsp;</span>
          <CountUp
            start={props.ethRate ? Number.parseFloat(humanize(NumberUtil._1.mul(props.ethRate).div(NumberUtil._1), 18)) : 0}
            end={props.ethRate ? Number.parseFloat(humanize(NumberUtil._1.mul(props.ethRate).div(NumberUtil._1).add(fromDecimalToBN(0.000007134703196, 18)), 18)) : 0}
            duration={60 * 60}
            separator=" "
            decimals={8}
            decimal="."
            prefix=""
            suffix=""
          />
          <span className={'light'}>&nbsp;ETH</span>
        </div>
        <div className={'exchangeRatesWrapper'}>
          <span className={'bold'}>1</span>
          <span className={'light'}>&nbsp;mUSDT =&nbsp;</span>
          <CountUp
            start={props.usdtRate ? Number.parseFloat(humanize(NumberUtil._1.mul(props.usdtRate).div(NumberUtil._1), 18)) : 0}
            end={props.usdtRate ? Number.parseFloat(humanize(NumberUtil._1.mul(props.usdtRate).div(NumberUtil._1).add(fromDecimalToBN(0.000007134703196, 18)), 18)) : 0}
            duration={60 * 60}
            separator=" "
            decimals={8}
            decimal="."
            prefix=""
            suffix=""
          />
          <span className={'light'}>&nbsp;USDT</span>
        </div>
        <div className={'exchangeRatesWrapper'}>
          <span className={'bold'}>1</span>
          <span className={'light'}>&nbsp;mDAI =&nbsp;</span>
          <CountUp
            start={props.daiRate ? Number.parseFloat(humanize(NumberUtil._1.mul(props.daiRate).div(NumberUtil._1), 18)) : 0}
            end={props.daiRate ? Number.parseFloat(humanize(NumberUtil._1.mul(props.daiRate).div(NumberUtil._1).add(fromDecimalToBN(0.000007134703196, 18)), 18)) : 0}
            duration={60 * 60}
            separator=" "
            decimals={8}
            decimal="."
            prefix=""
            suffix=""
          />
          <span className={'light'}>&nbsp;DAI</span>
        </div>
      </div>
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
        <div className={'videoWrapper'}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/qM0PrnzmF-w?controls=0" frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen/>
        </div>
      </div>
    </div>
  );
};

export default withTranslations(QuickFacts);
