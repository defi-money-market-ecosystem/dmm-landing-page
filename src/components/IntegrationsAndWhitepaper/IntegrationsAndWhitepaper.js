import React from 'react';
import Button from '@material-ui/core/Button';
import Fade from 'react-reveal/Fade';

import Integrations from '../Integrations/Integrations';
import Token from '../Token/Token';
import Whitepaper from '../Whitepaper/Whitepaper';

import './IntegrationsAndWhitepaper.css';

const IntegrationsAndWhitepaper = (props) => {
  return (
    <div className={'integrationsAndWhitepaper'}>
      <Integrations/>
      <Token/>
      <Whitepaper/>
      <div className={'whiteThing'}/>
    </div>
  );
};

export default IntegrationsAndWhitepaper;
