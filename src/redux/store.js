// @flow
import { applyMiddleware, createStore, compose } from "redux";
import { reducers } from "./reducers";
import { priceIndexMdl } from "./middlewares/priceIndex";
import { api } from "./middlewares/api";
// dev tool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let middlewares = [...priceIndexMdl, api];

if (process.env.NODE_ENV !== "production") {
	let c = require("redux-logger").createLogger;
	const logger = c({
		collapsed: (getState, action, logEntry) => !logEntry.error
	});

	middlewares.push(logger);
}

export const store = createStore(
	reducers,
	composeEnhancers(applyMiddleware(...middlewares))
);
