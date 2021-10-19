// ====================================================
// IMPORTS
import styles from './currencyList.module.scss'
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { Formik } from 'formik'
import search from '../../images/search.svg'

// ====================================================
// Component

const CurrencyList = props => {
	// ====================================================
	// variables

	let [currencyList, setCurrencyList] = useState([])
	let [sortableList, setSortableList] = useState([])

	// ====================================================
	// State

	const latest = useSelector(state => state.data.latest.conversion_rates)
	const baseCurrency = useSelector(state => state.app.baseCurrency)

	// ====================================================
	// Side effects

	for (let currency in latest) {
		currencyList.push({
			name: currency,
			currency: latest[currency],
		})
	}

	// ====================================================
	// JSX

	return (
		<>
			<Formik
				initialValues={{ query: '' }}
				validate={values => {
					const errors = {}
					return errors
				}}
				onSubmit={(values, { setSubmitting }) => {
					let arr = []

					currencyList.map((item, index) => {
						if (item.name.includes(values.query.toUpperCase())) {
							arr.push(item)
							// console.log(index)
							if (index === currencyList.length) {
								console.log('111')
							}
						}
					})
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
								disabled={isSubmitting}
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
				{sortableList.length !== 0 ? (
					<>
						{sortableList.map(item => (
							<div key={item.name} className={styles.card}>
								<span>{item.name}</span>
								<div>
									{item.currency}{' '}
									<span className={styles.baseCurrency}>{baseCurrency}</span>
								</div>
							</div>
						))}{' '}
						<button>clear</button>
					</>
				) : (
					currencyList.map(item => (
						<div key={item.name} className={styles.card}>
							<span>{item.name}</span>
							<div>
								{item.currency}{' '}
								<span className={styles.baseCurrency}>{baseCurrency}</span>
							</div>
						</div>
					))
				)}
			</div>
		</>
	)
}

// ====================================================
// Exports

export default React.memo(CurrencyList)
