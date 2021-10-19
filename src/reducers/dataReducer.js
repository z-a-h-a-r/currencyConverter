// ====================================================
// IMPORTS

import { API } from '../api/API'

// ====================================================
// Types
const SET_LATEST = 'SET_LATEST'
// ====================================================
// Initial state

let initialState = {
	latest: { conversion_rates: {} },
	conversionResult: {},
}

// ====================================================
// Reducer

const dataReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_LATEST: {
			return {
				...state,
				latest: action.payload,
			}
		}
		default:
			return state
	}
}

// ====================================================
// Action creators

export const getLatestSuccess = payload => ({
	type: SET_LATEST,
	payload,
})

// ====================================================
// Thunks

export const getLatest = () => {
	return async (dispatch, getState) => {
		const state = getState()
		const baseCurrency = state.app.baseCurrency

		API.getLatest(baseCurrency).then(data => {
			dispatch(getLatestSuccess(data))
		})
	}
}

// ====================================================
// Exports

export default dataReducer
