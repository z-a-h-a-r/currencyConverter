// ====================================================
// IMPORTS
import { getCodes, getLatest } from './dataReducer'

// ====================================================
// Types

const SET_INITIALIZED = 'SET_INITIALIZED'
const SET_BASE_CURRENCY = 'SET_BASE_CURRENCY'
const SET_LANGUAGE = 'SET_LANGUAGE'

// ====================================================
// Initial state

let initialState = {
	initialized: false,
	baseCurrency: 'USD',
	language: 'eng',
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

		case SET_LANGUAGE:
			return {
				...state,
				language: action.payload,
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
export const setLanguage = payload => ({
	type: SET_LANGUAGE,
	payload,
})

// ====================================================
// Thunks

export const initializeApp = () => {
	return async dispatch => {
		new Promise((resolve, reject) => {
			const language = navigator.language

			dispatch(setLanguage(language))

			if (language === 'ru') {
				resolve(dispatch(setBaseCurrency('RUB')))
			} else {
				resolve(dispatch(setBaseCurrency('USD')))
			}
		})
			.then(() => {
				return new Promise((resolve, reject) => {
					resolve(dispatch(getLatest(navigator.language)))
				})
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
