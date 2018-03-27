// @flow
export const FETCH_PRICE_INDEX_REQUEST = "FETCH_PRICE_INDEX_REQUEST";
export const FETCH_PRICE_INDEX_SUCCESS = "FETCH_PRICE_INDEX_SUCCESS";
export const FETCH_PRICE_INDEX_ERROR = "FETCH_PRICE_INDEX_ERROR";
export const UPDATE_PRICE_INDEX = "UPDATE_PRICE_INDEX";
export const FETCH_CURRENCY_STATS_REQUEST = "FETCH_CURRENCY_STATS_REQUEST";
export const FETCH_CURRENCY_STATS_SUCCESS = "FETCH_CURRENCY_STATS_SUCCESS";
export const FETCH_CURRENCY_STATS_ERROR = "FETCH_CURRENCY_STATS_ERROR";
export const UPDATE_CURRENCY_STATS = "UPDATE_CURRENCY_STATS";

export const getPriceIndex = (payload: string) => ({
	type: FETCH_PRICE_INDEX_REQUEST,
	payload
});

export const getCurrencyStats = () => ({
	type: FETCH_CURRENCY_STATS_REQUEST
});

export const updatePriceIndex = payload => ({
	type: UPDATE_PRICE_INDEX,
	payload
});

export const updateCurrencyStats = payload => ({
	type: UPDATE_CURRENCY_STATS,
	payload
});
