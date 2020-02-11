import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import './EmailList.css';

const EmailList = (props) => {
  return (
    <div className={'emailList'}>
      <div className={'wrapper'}>
        <div className={'content'}>
          <div className={'title'}>
            Stay up to Date
          </div>
          <div className={'subtitles'}>
            <div className={'subtitle'}>
              Join our email list to receive important updates about the DMM Ecosystem.
            </div>
            <div className={'subtitle'}>
              Don't worry, we never spam or share your email!
            </div>
          </div>
          <div className={'inputWrapper'}>
            <div className={'emailInput'}>
              <input type={'text'} placeholder={'Email'}/>
            </div>
            <div className={'buttonOuter'}>
              <Button className={'buttonText'} onClick={() => window.open("http://www.google.com", "_blank")}>
                Join
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailList;
