// ====================================================
// IMPORTS
import './styles/zeroing.scss'
import './styles/style.scss'
import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { initializeApp } from './reducers/appReducer'
import Loading from './components/loading/loading'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Main from './pages/main/main'
import CurrencyList from './components/currencyList/currencyList'

// ====================================================
// Component

const App = props => {
	// variables
	const dispatch = useDispatch()

	// ====================================================
	// state
	const initialized = useSelector(state => state.app.initialized)

	// ====================================================
	// Side effects
	useEffect(() => {
		dispatch(initializeApp())
	}, [])

	// ====================================================
	// JSX
	return !initialized ? (
		<Loading />
	) : (
		<div className="body">
			<Header />
			<div className="container">
				<Switch>
					<Route path="/all" render={() => <CurrencyList />} />
					<Route path="/" render={() => <Main />} />
				</Switch>
			</div>
			<Footer />
		</div>
	)
}

// ====================================================
// Exports
export default React.memo(App)
