import React, { Component } from 'react';
import styles from './Paging.scss';
import Character from './Character.js';

class Paging extends Component {
	state = {
		numbersPages: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		current: 1
	}

	selectPage = (number) => {
		this.setState({ current: number }, () => this.checkToModifyPages());
	};

	checkToModifyPages = () => {
		const maxInterval = this.state.numbersPages.length / 2;
		const positionCurrentPage = this.state.numbersPages.indexOf(this.state.current);
		if(positionCurrentPage > 5) {
			const isNecessaryIncrement = positionCurrentPage > maxInterval;
			if (isNecessaryIncrement) {
				const diference = positionCurrentPage - maxInterval;
				this.modifyPages(diference);
			}
		} else if(this.state.current > 5) {
			const isNecessaryDecrement = positionCurrentPage < maxInterval; 
			if (isNecessaryDecrement) {
				const diference = positionCurrentPage - maxInterval;
				this.modifyPages(diference);
			}
		}
	}

	modifyPages = (diference) => {
		const incrementedPages = this.state.numbersPages.map(item => item + diference);
		this.setState({ numbersPages: incrementedPages });
	}

	selectNext = () => {
		this.selectPage(this.state.current + 1);
	}

	selectPrevious = () => {
		this.selectPage(this.state.current + -1);
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
				{this.state.current > 1 ? 
					<Character selectPage={() => this.selectPrevious()} typeChar="gCharWithPrevius" label="Anterior" isClickable />
					:
					<Character typeChar="gChar" isClickable={false} />
				}
				{this.createNumbersPage(this.state.numbersPages)}
				<Character selectPage={() => this.selectNext()} typeChar="gleChar" label="Próximo" isClickable />
			</div>
		);
	}
}

export default Paging;