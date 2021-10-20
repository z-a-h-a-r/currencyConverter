// ====================================================
// IMPORTS
import styles from './currencyList.module.scss'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Formik } from 'formik'
import search from '../../images/search.svg'
import { setSearchResult } from '../../reducers/dataReducer'
import Alert from '../alert/alert'

// ====================================================
// Component

const CurrencyList = props => {
	// ====================================================
	// variables

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
			<Formik
				initialValues={{ query: '' }}
				validate={values => {
					const errors = {}
					return errors
				}}
				onSubmit={(values, { setSubmitting }) => {
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
					setSubmitting(false)
				}}
			>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
					isSubmitting,
				}) => (
					<>
						<form onSubmit={handleSubmit} className={styles.form}>
							<input
								className={styles.input}
								type="text"
								name="query"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.email}
								placeholder={`Search currency`}
								className={styles.input}
								autocomplete="off"
							/>

							<button
								disabled={isSubmitting || isNotFound}
								className={styles.button}
								type="submit"
								className={styles.button}
							>
								<img src={search} alt="" />
							</button>
						</form>
					</>
				)}
			</Formik>

			<div className={styles.list}>
				{searchResult.length !== 0 ? (
					<>
						{searchResult.map(item => (
							<div key={item.name} className={styles.card}>
								<span>{item.name}</span>
								<div>
									1<span className={styles.currency}>{baseCurrency}</span>{' '}
									{' = '}
									{item.currency}
									<span className={styles.currency}>{item.name}</span>
								</div>
							</div>
						))}
					</>
				) : (
					Object.keys(latest).map(item => (
						<div key={item} className={styles.card}>
							<span>{item}</span>
							<div>
								1<span className={styles.currency}>{baseCurrency}</span> {' = '}
								{latest[item]}
								<span className={styles.currency}>{item}</span>
							</div>
						</div>
					))
				)}
			</div>

			{searchResult.length !== 0 && (
				<button
					className={styles.allCurrency}
					onClick={() => {
						dispatch(setSearchResult([]))
					}}
				>
					all currency
				</button>
			)}
		</>
	)
}

// ====================================================
// Exports

export default React.memo(CurrencyList)
