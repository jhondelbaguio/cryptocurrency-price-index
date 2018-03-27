// @flow

import {
	FETCH_PRICE_INDEX_REQUEST,
	FETCH_PRICE_INDEX_SUCCESS,
	FETCH_PRICE_INDEX_ERROR,
	FETCH_CURRENCY_STATS_REQUEST,
	FETCH_CURRENCY_STATS_SUCCESS,
	FETCH_CURRENCY_STATS_ERROR,
	updatePriceIndex,
	updateCurrencyStats
} from "../actions/priceIndex";
import _ from "lodash";
import { apiRequest } from "../actions/api";
import type { Dispatch, ThunkAction } from "../../types/Store";
import type { Action } from "../../types/Action";

const getPriceIndex = (store: ThunkAction) => (next: Dispatch) => (
	action: Action
) => {
	next(action);

	if (action.type === FETCH_PRICE_INDEX_REQUEST) {
		store.dispatch(
			apiRequest(
				"GET",
				`https://api.coinbase.com/v2/prices/${action.payload
					.currency}-USD/historic?period=${action.payload.period}`,
				null,
				FETCH_PRICE_INDEX_SUCCESS,
				FETCH_PRICE_INDEX_ERROR
			)
		);
	}
};

const processPriceIndex = (store: ThunkAction) => (next: Dispatch) => (
	action: Action
) => {
	next(action);

	if (action.type === FETCH_PRICE_INDEX_SUCCESS) {
		console.log(action);
		var dd = {
			data: _.sortBy(action.payload.data.prices, ["time"]),
			currency:
				action.payload.data.base == "BTC"
					? "Bitcoin"
					: action.payload.data.base == "ETH"
						? "Ethereum"
						: "LiteCoin"
		};

		store.dispatch(updatePriceIndex(dd));
	}
};

const getCurrencyStats = (store: ThunkAction) => (next: Dispatch) => (
	action: Action
) => {
	next(action);

	if (action.type === FETCH_CURRENCY_STATS_REQUEST) {
		store.dispatch(
			apiRequest(
				"GET",
				`https://api.coinbase.com/v2/prices/USD/spot`,
				null,
				FETCH_CURRENCY_STATS_SUCCESS,
				FETCH_CURRENCY_STATS_ERROR
			)
		);
	}
};

const processCurrencyStats = (store: ThunkAction) => (next: Dispatch) => (
	action: Action
) => {
	next(action);

	if (action.type === FETCH_CURRENCY_STATS_SUCCESS) {
		store.dispatch(updateCurrencyStats(action.payload.data));
	}
};

export const priceIndexMdl = [
	getPriceIndex,
	processPriceIndex,
	getCurrencyStats,
	processCurrencyStats
];
