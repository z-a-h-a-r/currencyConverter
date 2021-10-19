// ====================================================
// IMPORTS
import { getLatest } from './dataReducer'

// ====================================================
// Types

const SET_INITIALIZED = 'SET_INITIALIZED'

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

// ====================================================
// Thunks

export const initializeApp = () => {
	return async dispatch => {
		new Promise((resolve, reject) => {
			resolve(dispatch(getLatest('USD')))
		}).then(() => {
			return new Promise((resolve, reject) => {
				resolve(dispatch(initializeSuccess()))
			})
		})
	}
}

// ====================================================
// Exports

export default appReducer
