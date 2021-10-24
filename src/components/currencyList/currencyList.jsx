// ====================================================
// IMPORTS
import styles from './currencyList.module.scss'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchResult } from '../../reducers/dataReducer'
import Alert from '../alert/alert'
import Search from '../search/search'

// ====================================================
// Component

const CurrencyList = props => {
	// ====================================================
	// Variables

	const dispatch = useDispatch()
	const [isNotFound, setIsNotFound] = useState(false)

	// ====================================================
	// State

	const latest = useSelector(state => state.data.latest.conversion_rates)
	const searchResult = useSelector(state => state.data.searchResult)
	const baseCurrency = useSelector(state => state.app.baseCurrency)

	// ====================================================
	// Logic

	if (isNotFound) {
		setTimeout(() => {
			setIsNotFound(false)
		}, 3000)
	}

	// ====================================================
	// JSX

	return (
		<>
			{isNotFound && <Alert content={'currency not found'} />}
			<Search
				isNotFound={isNotFound}
				callback={values => {
					let suitableElements = []

					Object.keys(latest).forEach(item => {
						if (
							values.query.length !== 0 &&
							item.includes(values.query.toUpperCase())
						) {
							suitableElements.push({ name: item, currency: latest[item] })
						}
					})

					if (values.query.length !== 0 && suitableElements.length === 0) {
						setIsNotFound(true)
					}
					dispatch(setSearchResult(suitableElements))
				}}
			/>

			<div className={styles.baseCurrency}>1 {baseCurrency} =</div>

			{searchResult.length !== 0 ? (
				<>
					<div className={styles.list}>
						{searchResult.map(item => (
							<div key={item.name} className={styles.card}>
								<span className={styles.name}>{item.name}</span>
								<div>
									<span className={styles.name}>{item.currency}</span>
									<span className={styles.currency}>{item.name}</span>
								</div>
							</div>
						))}
					</div>

					<button
						className={styles.allCurrency}
						onClick={() => {
							dispatch(setSearchResult([]))
						}}
					>
						all currency
					</button>
				</>
			) : (
				<div className={styles.list}>
					{Object.keys(latest).map(item => (
						<div key={item} className={styles.card}>
							<span className={styles.name}>{item}</span>
							<div>
								<span className={styles.name}>{latest[item].toFixed(4)}</span>
								<span className={styles.currency}>{item}</span>
							</div>
						</div>
					))}
				</div>
			)}
		</>
	)
}

// ====================================================
// Exports

export default React.memo(CurrencyList)
