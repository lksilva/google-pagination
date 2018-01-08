import React, { Component } from 'react';
import styles from './Paging.scss';

class Character extends Component {
  render() {
    const { label, typeChar, isClickable } = this.props;
    const styleChar = styles[typeChar];

    return (
      <div className={styles.containerChar} style={isClickable ? {cursor: 'pointer'} : {color: 'rgba(0,0,0,0.87)'} }>
        <span className={`${styles.googleChar} ${styleChar}`}></span>
        {label}
      </div>
    )
  }
}

export default Character;