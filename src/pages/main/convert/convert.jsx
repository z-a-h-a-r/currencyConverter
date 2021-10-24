// ====================================================
// IMPORTS
import React, { useEffect, useState } from 'react'
import styles from './convert.module.scss'
import Select from '../../../components/select/select'
import { useDispatch, useSelector } from 'react-redux'
import { convertCurrency } from '../../../reducers/dataReducer'
import { countTheNumberOfDecimalPlaces } from '../../../utils/countTheNumberOfDecimalPlaces'
import * as queryString from 'querystring'
import { useHistory } from 'react-router'

// ====================================================
// Component

const Convert = () => {
	const dispatch = useDispatch()
	const history = useHistory()
	let [from, setFrom] = useState('USD')
	let [to, setTo] = useState('GBP')
	let [fromForm, setFromForm] = useState(1)
	let parsedUrl = queryString.parse(history.location.search.substr(1))

	useEffect(() => {
		let fromCount = parsedUrl.fromCount
		let firstCurrency = parsedUrl.firstCurrency
		let secondCurrency = parsedUrl.secondCurrency

		if (firstCurrency) {
			setFrom((from = firstCurrency))
		}
		if (secondCurrency) {
			setTo((to = secondCurrency))
		}
		if (secondCurrency) {
			setFromForm((fromForm = fromCount))
		}

		dispatch(convertCurrency(from, to))
	}, [])
	const pushDataTUrl = () => {
		history.push({
			pathname: `/`,
			search: `firstCurrency=${from}&secondCurrency=${to}&fromCount=${fromForm}`,
		})
	}
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
						pushDataTUrl()
					}}
					initialCurrency={from}
				/>
				<input
					type="number"
					className={styles.input}
					onChange={e => {
						setFromForm((fromForm = Number(e.target.value)))
						pushDataTUrl()
					}}
					value={fromForm === 0 ? '' : fromForm}
				/>
				<div
					onClick={() => {
						setFromForm((fromForm = ''))
					}}
					className={styles.clear}
				>
					clear
				</div>
			</div>
			<div className={styles.card}>
				<Select
					onItemClick={currency => {
						setTo((to = currency))
						dispatch(convertCurrency(from, to))
						pushDataTUrl()
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
