import React, { Component } from 'react';
import logo from '../../logo.svg';
import styles from './Home.scss';
import Paging from '../Paging/Paging';

class Home extends Component {
  render() {
    return (
      <div className={styles.app}>
        <header className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
          <h1 className={styles.title}>Google Pagination</h1>
        </header>
        <Paging />
      </div>
    )
  }
}

export default Home;
