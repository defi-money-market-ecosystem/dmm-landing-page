import React from 'react';
import Button from '@material-ui/core/Button';
import Fade from 'react-reveal/Fade';

import Integrations from '../Integrations/Integrations';
import Token from '../Token/Token';
import GovernanceInfo from '../GovernanceInfo/GovernanceInfo';
import Roadmap from '../Roadmap/Roadmap';
import Whitepaper from '../Whitepaper/Whitepaper';

import './IntegrationsAndWhitepaper.css';

const IntegrationsAndWhitepaper = (props) => {
  return (
    <div className={'integrationsAndWhitepaper'}>
      <Integrations
        language={props.language}
      />
      <Token
        language={props.language}
      />
      <GovernanceInfo
        language={props.language}
      />
      <Roadmap
        language={props.language}
      />
      <Whitepaper
        language={props.language}
      />
      <div className={'whiteThing'}/>
    </div>
  );
};

export default IntegrationsAndWhitepaper;
