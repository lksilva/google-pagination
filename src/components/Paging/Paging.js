import React, { Component } from 'react';
import styles from './Paging.scss';
import Character from './Character.js';

class Paging extends Component {
	render() {
		return(
			<div className={styles.content}>
				<Character typeChar="gChar"/>
				<Character typeChar="oCharActive" label="1" />
				<Character typeChar="oCharDefault" label="2" />
				<Character typeChar="gleChar" label="3" />
			</div>
		);
	}
}

export default Paging;