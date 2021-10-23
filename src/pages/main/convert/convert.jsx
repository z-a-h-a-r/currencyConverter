// ====================================================
// IMPORTS
import React, { useEffect, useState } from 'react'
import styles from './convert.module.scss'
import Select from '../../../components/select/select'
import { useDispatch, useSelector } from 'react-redux'
import { convertCurrency } from '../../../reducers/dataReducer'
import { countTheNumberOfDecimalPlaces } from '../../../utils/countTheNumberOfDecimalPlaces'
// ====================================================
// Component

const Convert = () => {
	const dispatch = useDispatch()
	let [from, setFrom] = useState('USD')
	let [to, setTo] = useState('GBP')
	useEffect(() => {
		dispatch(convertCurrency(from, to))
	}, [])
	let [fromForm, setFromForm] = useState(1)
	const conversionRate = useSelector(
		state => state.data.conversionResult.conversion_rate
	)
	// JSX
	return (
		<div className={styles.cardsWrap}>
			<div className={styles.card}>
				<Select
					onItemClick={currency => {
						setFrom((from = currency))
						dispatch(convertCurrency(from, to))
					}}
					initialCurrency={from}
				/>
				<input
					type="number"
					className={styles.input}
					onChange={e => {
						setFromForm((fromForm = Number(e.target.value)))
					}}
					value={fromForm === 0 ? '' : fromForm}
				/>
			</div>
			<div className={styles.card}>
				<Select
					onItemClick={currency => {
						setTo((to = currency))
						dispatch(convertCurrency(from, to))
					}}
					initialCurrency={to}
				/>
				<input
					type="text"
					value={
						countTheNumberOfDecimalPlaces(conversionRate * fromForm) < 4
							? conversionRate * fromForm
							: (conversionRate * fromForm).toFixed(4)
					}
					className={styles.input}
				/>
			</div>
		</div>
	)
}

// ====================================================
// Exports

export default React.memo(Convert)
