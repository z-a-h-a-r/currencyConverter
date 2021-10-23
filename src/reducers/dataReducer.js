// ====================================================
// IMPORTS

import { API } from '../api/API'

// ====================================================
// Types

const SET_LATEST = 'SET_LATEST'
const SET_SEARCH_RESULT = 'SET_SEARCH_RESULT'
const SET_CONVERSION_RESULT = 'SET_CONVERSION_RESULT'
const SET_CODES = 'SET_CODES'

// ====================================================
// Initial state

let initialState = {
	latest: { conversion_rates: {} },
	conversionResult: {},
	searchResult: [],
	codes: [],
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

		case SET_CONVERSION_RESULT: {
			return {
				...state,
				conversionResult: action.payload,
			}
		}

		case SET_CODES: {
			return {
				...state,
				codes: action.payload,
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
export const convertSuccess = payload => ({
	type: SET_CONVERSION_RESULT,
	payload,
})
export const getCodesSuccess = payload => ({
	type: SET_CODES,
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
export const getCodes = () => {
	return async (dispatch, getState) => {
		API.getCodes().then(data => {
			dispatch(getCodesSuccess(data))
		})
	}
}
export const convertCurrency = (from, to) => {
	return async (dispatch, getState) => {
		API.convertCurrency(from, to).then(data => {
			dispatch(convertSuccess(data))
		})
	}
}

// ====================================================
// Exports

export default dataReducer
