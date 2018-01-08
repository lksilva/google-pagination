import React, { Component } from 'react';
import styles from './Paging.scss';
import Character from './Character.js';

class Paging extends Component {
	render() {
		return(
			<div className={styles.content}>
				<Character typeChar="gChar" isClickable={false} />
				<Character typeChar="oCharActive" label="1" isClickable={false} />
				<Character typeChar="oCharDefault" label="2" isClickable />
				<Character typeChar="gleChar" label="Próximo" isClickable />
			</div>
		);
	}
}

export default Paging;