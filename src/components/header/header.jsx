// ====================================================
// IMPORTS
import styles from './header.module.scss'
import React from 'react'
import Select from '../select/select'
import { useDispatch, useSelector } from 'react-redux'
import { setBaseCurrency } from '../../reducers/appReducer'
import { getLatest } from '../../reducers/dataReducer'

// ====================================================
// Component

const Header = () => {
	const dispatch = useDispatch()

	const baseCurrency = useSelector(state => state.app.baseCurrency)

	// JSX
	return (
		<header className={styles.header}>
			<div className="container">
				<div className={styles.inner}>
					<div className={styles.logo}>currency converter</div>
					<div className={styles.baseCurrencyWrap}>
						<span> Base currency</span>
						<Select
							onItemClick={currency => {
								dispatch(setBaseCurrency(currency))
								dispatch(getLatest())
							}}
							initialCurrency={baseCurrency}
						/>
					</div>
				</div>
			</div>
		</header>
	)
}

// ====================================================
// Exports

export default React.memo(Header)
