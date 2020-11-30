import React from 'react';
import Derek from '../../assets/derek-acree.jpeg';
import Greg from '../../assets/greg-keough.jpeg';
import Corey from '../../assets/corey-caplan.jpeg';
import Adam from '../../assets/adam-knuckey.jpeg';
import Matt from '../../assets/matthew-finestone.jpeg';
import Zach from '../../assets/zach-rynes.jpeg';
import Javier from '../../assets/Javier-Keough.jpeg';
import Tim from '../../assets/tim-draper.jpg';
import Stephen from '../../assets/stephen-mckeon.jpeg';
import Alon from '../../assets/alon-goren.jpeg';
import Josef from '../../assets/josef-holm.jpeg';
import Maria from '../../assets/Maria-Teresa-Siman-Herrera.jpeg';
import Carlos from '../../assets/Carlos-Ernesto-S.jpeg';
import Isabel from '../../assets/Maria-Isabel-Siman-Bravo.jpeg';
import WikipediaIcon from '../../assets/wikipedia-icon.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { withTranslations } from '../../services/Translations/Translations';

import './Team.css';

class Team extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={'team'}>
        <div className={'wrapper'}>
          <div className={'content'}>
            <div className={'title'}>
              { this.props.excerpt('team.title', this.props.language) }
            </div>
            <div className={'subtitle'}>
              { this.props.excerpt('team.subtitle', this.props.language) }
            </div>
            <div className={'teamMember'}>
              <div className={'image'}>
                <img src={Greg}/>
              </div>
              <div className={'name'}>
                Gregory Keough
              </div>
              <div className={'role'}>
                { this.props.excerpt('team.member', this.props.language) }
              </div>
              <div className={'linkedIn'}>
                <a href={'https://www.linkedin.com/in/gregorykeough/'} target={'_blank'}><FontAwesomeIcon icon={['fab', 'linkedin']} /></a><a href="https://www.linkedin.com/in/gregorykeough/" target={'_blank'}>{ this.props.excerpt('team.linkedIn', this.props.language) }</a>
              </div>
            </div>
            <div className={'teamMember'}>
              <div className={'image'}>
                <img src={Derek}/>
              </div>
              <div className={'name'}>
                Derek Acree
              </div>
              <div className={'role'}>
                { this.props.excerpt('team.member', this.props.language) }
              </div>
              <div className={'linkedIn'}>
                <a href={'https://www.linkedin.com/in/derekacree/'} target={'_blank'}><FontAwesomeIcon icon={['fab', 'linkedin']} /></a><a href="https://www.linkedin.com/in/derekacree/" target={'_blank'}>{ this.props.excerpt('team.linkedIn', this.props.language) }</a>
              </div>
            </div>
            <div className={'teamMember'}>
              <div className={'image'}>
                <img src={Corey}/>
              </div>
              <div className={'name'}>
                Corey Caplan
              </div>
              <div className={'role'}>
                { this.props.excerpt('team.member', this.props.language) }
              </div>
              <div className={'linkedIn'}>
                <a href={'https://www.linkedin.com/in/corey-caplan/'} target={'_blank'}><FontAwesomeIcon icon={['fab', 'linkedin']} /></a><a href="https://www.linkedin.com/in/corey-caplan/" target={'_blank'}>{ this.props.excerpt('team.linkedIn', this.props.language) }</a>
              </div>
            </div>
            <div className={'teamMember'}>
              <div className={'image'}>
                <img src={Adam}/>
              </div>
              <div className={'name'}>
                Adam Knuckey
              </div>
              <div className={'role'}>
                { this.props.excerpt('team.member', this.props.language) }
              </div>
              <div className={'linkedIn'}>
                <a href={'https://www.linkedin.com/in/adam-knuckey-720612108/'} target={'_blank'}><FontAwesomeIcon icon={['fab', 'linkedin']} /></a><a href="https://www.linkedin.com/in/adam-knuckey-720612108/" target={'_blank'}>{ this.props.excerpt('team.linkedIn', this.props.language) }</a>
              </div>
            </div>
            <div className={'teamMember'}>
              <div className={'image'}>
                <img src={Matt}/>
              </div>
              <div className={'name'}>
                Matthew Finestone
              </div>
              <div className={'role'}>
                { this.props.excerpt('team.advisor', this.props.language) }
              </div>
              <div className={'linkedIn'}>
                <a href={'https://www.linkedin.com/in/matthew-finestone-cfa-7bb8ba51/'} target={'_blank'}><FontAwesomeIcon icon={['fab', 'linkedin']} /></a><a href="https://www.linkedin.com/in/matthew-finestone-cfa-7bb8ba51/" target={'_blank'}>{ this.props.excerpt('team.linkedIn', this.props.language) }</a>
              </div>
            </div>
            <div className={'teamMember'}>
              <div className={'image'}>
                <img src={Zach}/>
              </div>
              <div className={'name'}>
                Zachary Rynes
              </div>
              <div className={'role'}>
                { this.props.excerpt('team.member', this.props.language) }
              </div>
              <div className={'linkedIn'}>
                <a href={'https://www.linkedin.com/in/zachary-rynes-a98417173/'} target={'_blank'}><FontAwesomeIcon icon={['fab', 'linkedin']} /></a><a href="https://www.linkedin.com/in/zachary-rynes-a98417173/" target={'_blank'}>{ this.props.excerpt('team.linkedIn', this.props.language) }</a>
              </div>
            </div>
            <div className={'teamMember'}>
              <div className={'image'}>
                <img src={Javier}/>
              </div>
              <div className={'name'}>
                Javier Keough
              </div>
              <div className={'role'}>
                { this.props.excerpt('team.member', this.props.language) }
              </div>
              <div className={'linkedIn'}>
                <a href={'https://www.linkedin.com/in/javier-keough-4549951a8/'} target={'_blank'}><FontAwesomeIcon icon={['fab', 'linkedin']} /></a><a href="https://www.linkedin.com/in/javier-keough-4549951a8/" target={'_blank'}>{ this.props.excerpt('team.linkedIn', this.props.language) }</a>
              </div>
            </div>
            <div className={'teamMember'}>
              <div className={'image'}>
                <img src={Maria}/>
              </div>
              <div className={'name'}>
                Maria Teresa Simán Herrera
              </div>
              <div className={'role'}>
                { this.props.excerpt('team.member', this.props.language) }
              </div>
              <div className={'linkedIn'}>
                <a href={'https://www.linkedin.com/in/maria-teresa-sim%C3%A1n-herrera-0850b1143/'} target={'_blank'}><FontAwesomeIcon icon={['fab', 'linkedin']} /></a><a href="https://www.linkedin.com/in/maria-teresa-sim%C3%A1n-herrera-0850b1143/" target={'_blank'}>{ this.props.excerpt('team.linkedIn', this.props.language) }</a>
              </div>
            </div>
            <div className={'teamMember'}>
              <div className={'image'}>
                <img src={Carlos}/>
              </div>
              <div className={'name'}>
                Carlos Ernesto S.
              </div>
              <div className={'role'}>
                { this.props.excerpt('team.member', this.props.language) }
              </div>
              <div className={'linkedIn'}>
                <a href={'https://www.linkedin.com/in/cesanchezr/'} target={'_blank'}><FontAwesomeIcon icon={['fab', 'linkedin']} /></a><a href="https://www.linkedin.com/in/cesanchezr/" target={'_blank'}>{ this.props.excerpt('team.linkedIn', this.props.language) }</a>
              </div>
            </div>
            <div className={'teamMember'}>
              <div className={'image'}>
                <img src={Isabel}/>
              </div>
              <div className={'name'}>
                Maria Isabel Siman Bravo
              </div>
              <div className={'role'}>
                { this.props.excerpt('team.member', this.props.language) }
              </div>
              <div className={'linkedIn'}>
                <a href={'https://www.linkedin.com/in/maria-isabel-siman-bravo-3a056aa4/'} target={'_blank'}><FontAwesomeIcon icon={['fab', 'linkedin']} /></a><a href="https://www.linkedin.com/in/maria-isabel-siman-bravo-3a056aa4/" target={'_blank'}>{ this.props.excerpt('team.linkedIn', this.props.language) }</a>
              </div>
            </div>
            <div className={'title investors'}>
              { this.props.excerpt('investors.title', this.props.language) }
            </div>
            <div className={'teamMember'}>
              <div className={'image'}>
                <img src={Tim}/>
              </div>
              <div className={'name'}>
                Tim Draper
              </div>
              <div className={'role'}>
                { this.props.excerpt('investors.investor', this.props.language) }
              </div>
              <div className={'linkedIn'}>
                <a href={'https://en.wikipedia.org/wiki/Tim_Draper'} target={'_blank'}><img src={WikipediaIcon}/></a><a href="https://en.wikipedia.org/wiki/Tim_Draper" target={'_blank'}>{ this.props.excerpt('investors.wikipedia', this.props.language) }</a>
              </div>
              <div className={'linkedIn'}>
                <a href={'https://www.linkedin.com/in/timothydraper/'} target={'_blank'}><FontAwesomeIcon icon={['fab', 'linkedin']} /></a><a href="https://www.linkedin.com/in/timothydraper/" target={'_blank'}>{ this.props.excerpt('investors.linkedIn', this.props.language) }</a>
              </div>
            </div>
            <div className={'teamMember'}>
              <div className={'image'}>
                <img src={Stephen}/>
              </div>
              <div className={'name'}>
               Stephen McKeon
              </div>
              <div className={'role'}>
                { this.props.excerpt('investors.investor', this.props.language) }
              </div>
              <div className={'linkedIn'}>
                <a href={'https://www.linkedin.com/in/smckeon/'} target={'_blank'}><FontAwesomeIcon icon={['fab', 'linkedin']} /></a><a href="https://www.linkedin.com/in/smckeon/" target={'_blank'}>{ this.props.excerpt('investors.linkedIn', this.props.language) }</a>
              </div>
            </div>
            <div className={'teamMember'}>
              <div className={'image'}>
                <img src={Alon}/>
              </div>
              <div className={'name'}>
                Alon Goren
              </div>
              <div className={'role'}>
                { this.props.excerpt('investors.investor', this.props.language) }
              </div>
              <div className={'linkedIn'}>
                <a href={'https://www.linkedin.com/in/alongoren/'} target={'_blank'}><FontAwesomeIcon icon={['fab', 'linkedin']} /></a><a href="https://www.linkedin.com/in/alongoren/" target={'_blank'}>{ this.props.excerpt('investors.linkedIn', this.props.language) }</a>
              </div>
            </div>
            <div className={'teamMember'}>
              <div className={'image'}>
                <img src={Josef}/>
              </div>
              <div className={'name'}>
                Josef Holm
              </div>
              <div className={'role'}>
                { this.props.excerpt('investors.investor', this.props.language) }
              </div>
              <div className={'linkedIn'}>
                <a href={'https://www.linkedin.com/in/josefholm/'} target={'_blank'}><FontAwesomeIcon icon={['fab', 'linkedin']} /></a><a href="https://www.linkedin.com/in/josefholm/" target={'_blank'}>{ this.props.excerpt('investors.linkedIn', this.props.language) }</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslations(Team);
