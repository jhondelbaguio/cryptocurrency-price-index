import { API_REQUEST } from "../actions/api";
import { normalize } from "normalizr";
// this middleware care only for API calls
export const api = ({ dispatch }) => next => action => {
	if (action.type === API_REQUEST) {
		const { method, url, onSuccess, onError, schema } = action.meta;

		fetch(url, {
			method
		})
			.then(response => response.json())
			.then(data => {
				if (schema) {
					data = normalize(data, schema);
				}
				dispatch({ type: onSuccess, payload: data });
			})
			.catch(error => dispatch({ type: onError, payload: error }));
	}
	return next(action);
};
