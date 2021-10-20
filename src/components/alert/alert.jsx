// ====================================================
// IMPORTS
import styles from './alert.module.scss'
import React from 'react'

// ====================================================
// Component

const Alert = props => {
	// JSX
	return <div className={styles.body}>{props.content}</div>
}

// ====================================================
// Exports

export default React.memo(Alert)
