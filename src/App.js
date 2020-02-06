import React from 'react';
import logo from './logo.svg';
import styles from './App.scss';

import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className={styles.App}>
      <Navbar/>
    </div>
  );
}

export default App;
