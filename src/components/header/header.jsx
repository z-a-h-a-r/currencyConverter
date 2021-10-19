// ====================================================
// IMPORTS
import styles from './header.module.scss'
import React from 'react'

// ====================================================
// Component

const Header = () => {
	// JSX
	return (
		<header className={styles.header}>
			<div className="container">
				<div className={styles.inner}></div>
			</div>
		</header>
	)
}

// ====================================================
// Exports

export default React.memo(Header)
