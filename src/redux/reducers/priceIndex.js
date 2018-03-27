// @flow
import { UPDATE_PRICE_INDEX } from "../actions/priceIndex";
import type { Action } from "../../types/Action";

const initUi = {
	isFetching: true,
	cryptoCurrencyPrice: [],
	timeUpdated: "",
	currency: "Bitcoin"
};

type State = {
	isFetching: boolean
};

export function priceIndexReducer(state: State = initUi, action: Action) {
	switch (action.type) {
		case UPDATE_PRICE_INDEX:
			return {
				...state,
				cryptoCurrencyPrice: [...action.payload.data],
				isFetching: false,
				currency: action.payload.currency
			};

		default:
			return state;
	}
}
