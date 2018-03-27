// @flow

type fetchPriceIndexRequest = {
	type: "FETCH_PRICE_INDEX_REQUEST",
	payload: {
		period: string,
		currency: string
	}
};
type fetchPriceIndexSuccess = { type: "FETCH_PRICE_INDEX_SUCCESS" };
type fetchPriceIndexError = { type: "FETCH_PRICE_INDEX_ERROR" };

type fetchCurrencyStatsRequest = { type: "FETCH_CURRENCY_STATS_REQUEST" };
type fetchCurrencyStatsSuccess = { type: "FETCH_CURRENCY_STATS_SUCCESS" };
type fetchCurrencyStatsError = { type: "FETCH_CURRENCY_STATS_ERROR" };

type updateCurrencyStats = { type: "UPDATE_CURRENCY_STATS" };
type updatePriceIndex = { type: "UPDATE_PRICE_INDEX" };

export type Action =
	| updateCurrencyStats
	| updatePriceIndex
	| fetchPriceIndexRequest
	| fetchPriceIndexSuccess
	| fetchPriceIndexSuccess
	| fetchPriceIndexError
	| fetchCurrencyStatsRequest
	| fetchCurrencyStatsSuccess
	| fetchCurrencyStatsError;
