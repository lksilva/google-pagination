import React, { Component } from 'react';
import styles from './Paging.scss';

class Character extends Component {
  render() {
    const { label, typeChar } = this.props;
    const styleChar = styles[typeChar];

    return (
      <div className={styles.containerChar}>
        <span className={`${styles.googleChar} ${styleChar}`}></span>
        {label}
      </div>
    )
  }
}

export default Character;