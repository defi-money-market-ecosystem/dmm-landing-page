import React from 'react';
import Button from '@material-ui/core/Button';

import styles from './Navbar.scss';

const Navbar = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.tempLogo}/>
      <div className={styles.name}>
        DMM
      </div>
      <div className={styles.appButtonWrapper}>
        <Button className={styles.appButton} onClick={() => window.open("google.com", "_blank")}>
          APP
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
