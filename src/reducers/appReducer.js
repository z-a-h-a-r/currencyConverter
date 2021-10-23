// ====================================================
// IMPORTS
import { getCodes, getLatest } from './dataReducer'

// ====================================================
// Types

const SET_INITIALIZED = 'SET_INITIALIZED'
const SET_BASE_CURRENCY = 'SET_BASE_CURRENCY'

// ====================================================
// Initial state

let initialState = {
	initialized: false,
	baseCurrency: 'USD',
}

// ====================================================
// Reducer

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_INITIALIZED:
			return {
				...state,
				initialized: true,
			}

		case SET_BASE_CURRENCY:
			return {
				...state,
				baseCurrency: action.payload,
			}

		default:
			return state
	}
}

// ====================================================
// Action creators

export const initializeSuccess = payload => ({
	type: SET_INITIALIZED,
	payload,
})
export const setBaseCurrency = payload => ({
	type: SET_BASE_CURRENCY,
	payload,
})

// ====================================================
// Thunks

export const initializeApp = () => {
	return async dispatch => {
		new Promise((resolve, reject) => {
			resolve(dispatch(getLatest('USD')))
		})
			.then(() => {
				return new Promise((resolve, reject) => {
					resolve(dispatch(getCodes()))
				})
			})
			.then(() => {
				return new Promise((resolve, reject) => {
					resolve(dispatch(initializeSuccess()))
				})
			})
	}
}

// ====================================================
// Exports

export default appReducer
