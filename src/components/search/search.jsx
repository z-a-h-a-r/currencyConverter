// ====================================================
// IMPORTS
import React from 'react'
import styles from './search.module.scss'
import { Formik } from 'formik'
import search from '../../images/search.svg'

// ====================================================
// Component

const Search = props => {
	// JSX
	return (
		<Formik
			initialValues={{ query: '' }}
			validate={values => {
				const errors = {}
				return errors
			}}
			onSubmit={(values, { setSubmitting }) => {
				props.callback(values)
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
							disabled={isSubmitting || props.isNotFound}
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
	)
}

// ====================================================
// Exports

export default React.memo(Search)
