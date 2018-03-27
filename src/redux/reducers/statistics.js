// @flow
import { UPDATE_CURRENCY_STATS } from "../actions/priceIndex";
import type { Action } from "../../types/Action";
import type { Statistics } from "../../types/statistics";

const initialState = {
	isFetching: true,
	btc: 0,
	ltc: 0,
	eth: 0
};

const parseCurrency = (currency, data) => {
	const x = data.find(function(dd) {
		return dd.base === currency;
	});

	return parseFloat(x.amount);
};

export function statisticsReducer(
	state: Statistics = initialState,
	action: Action
) {
	switch (action.type) {
		case UPDATE_CURRENCY_STATS:
			console.log(action);
			return {
				...state,
				isFetching: false,
				btc: parseCurrency("BTC", action.payload),
				eth: parseCurrency("ETH", action.payload),
				ltc: parseCurrency("LTC", action.payload)
			};

		default:
			return state;
	}
}
