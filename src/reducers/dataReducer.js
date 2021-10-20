// ====================================================
// IMPORTS

import { API } from '../api/API'

// ====================================================
// Types

const SET_LATEST = 'SET_LATEST'
const SET_SEARCH_RESULT = 'SET_SEARCH_RESULT'

// ====================================================
// Initial state

let initialState = {
	latest: { conversion_rates: {} },
	conversionResult: {},
	searchResult: [],
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

		case SET_SEARCH_RESULT: {
			return {
				...state,
				searchResult: action.payload,
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
export const setSearchResult = payload => ({
	type: SET_SEARCH_RESULT,
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
