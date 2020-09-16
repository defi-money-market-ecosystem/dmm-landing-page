import React from 'react';
import Button from '@material-ui/core/Button';

import './EmailList.css';

class EmailList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      submitted: false,
      error: false
    }
  }

  validateEmail(email) {
    const emailAddressRegex = new RegExp("(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"" +
      "(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\")@(?:(?:[a-z0-9]" +
      "(?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\" +
      ".){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53" +
      "-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])"); //Regex matches valid email address format
    return emailAddressRegex.test(email);
  }

  submitEmail() {
    if (this.props.isSignedIn) {
      this.props.firebase.auth().signInAnonymously().catch((error) => {
        console.error('Found error ', error)
      });

      const email = document.getElementById('email').value;
      if (this.validateEmail(email)) { // TODO - hide the submit buttton!
        console.log("/contact/" + this.props.userProfile.uid);
        this.props.firebase.database().ref("/contact/" + this.props.userProfile.uid).set({
          email: email
        });
        this.setState({submitted: true});
      } else {
        console.log('invalid email');
        // TODO - show error
      }
    } else {
      console.log('not signed in');
      // TODO - error not signed in
    }
  }

  render() {
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
                <input type={'text'} id={'email'} placeholder={'Email'}/>
              </div>
              <div className={'buttonOuter'}>
                {this.state.submitted ? (
                  <div className={'successText'}>
                    Success!
                  </div>
                ) : (
                  <Button className={'buttonText'} onClick={() => this.submitEmail()}>
                    Join
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EmailList;
