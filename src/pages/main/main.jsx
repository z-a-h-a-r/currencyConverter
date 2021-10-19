// ====================================================
// IMPORTS
import styles from './main.module.scss'
import React from 'react'
import CurrencyList from '../../components/currencyList/currencyList'

// ====================================================
// Component

const Main = props => {
	// ====================================================
	// JSX

	return (
		<section className={styles.body}>
			<CurrencyList />
		</section>
	)
}

// ====================================================
// Exports

export default React.memo(Main)
