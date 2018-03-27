// @flow
import { combineReducers } from "redux";
import { priceIndexReducer } from "./priceIndex";
import { statisticsReducer } from "./statistics";
const reducersData = {
	priceIndex: priceIndexReducer,
	statistics: statisticsReducer
};

export type Reducers = typeof reducersData;
export const reducers = combineReducers(reducersData);
