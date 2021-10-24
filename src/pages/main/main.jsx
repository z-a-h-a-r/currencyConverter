// ====================================================
// IMPORTS
import styles from './main.module.scss'
import React from 'react'
import CurrencyList from '../../components/currencyList/currencyList'
import Select from '../../components/select/select'
import { useDispatch, useSelector } from 'react-redux'
import { setBaseCurrency } from '../../reducers/appReducer'
import { getLatest } from '../../reducers/dataReducer'
import Convert from './convert/convert'

// ====================================================
// Component

const Main = props => {
	const dispatch = useDispatch()

	const baseCurrency = useSelector(state => state.app.baseCurrency)

	// ====================================================
	// JSX

	return (
		<section className={styles.body}>
			<Convert />
			<div className={styles.currencyList}>
				<CurrencyList />
			</div>
		</section>
	)
}

// ====================================================
// Exports

export default React.memo(Main)
