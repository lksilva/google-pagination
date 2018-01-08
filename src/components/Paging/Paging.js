import React, { Component } from 'react';
import styles from './Paging.scss';
import Character from './Character.js';

class Paging extends Component {
	state = {
		numbersPages: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		current: 1
	}

	selectPage = (number) => {
		this.setState({ current: number });
	};

	selectNext = () => {
		this.setState({ current: this.state.current + 1 })
	}

	createNumberPage = (number) => {
		const isActive = number === this.state.current;
		return <Character key={number} selectPage={() => this.selectPage(number)} typeChar={isActive ? 'oCharActive' : 'oCharDefault'} isClickable={!isActive} label={number}/>
	}
	
	createNumbersPage = (numbers) => {
		return numbers.map(this.createNumberPage)
	}

	render() {
		return (
			<div className={styles.content}>
				<Character typeChar="gChar" isClickable={false} />
				{this.createNumbersPage(this.state.numbersPages)}
				<Character selectPage={() => this.selectNext()} typeChar="gleChar" label="Próximo" isClickable />
			</div>
		);
	}
}

export default Paging;