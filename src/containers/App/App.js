import React, { Component } from 'react';
import logo from '../../logo.svg';
import styles from './App.scss';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <header className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
          <h1 className={styles.title}>Welcome to React</h1>
          <h2>Awesome React + Sass + CSS Modules
          </h2>
        </header>
      </div>
    );
  }
}

export default App;
