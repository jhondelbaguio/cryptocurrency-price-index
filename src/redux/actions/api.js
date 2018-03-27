export const API_REQUEST = "API_REQUEST";

export const apiRequest = (method, url, body, onSuccess, onError, schema) => ({
	type: API_REQUEST,
	payload: body,
	meta: { method, url, onSuccess, onError, schema }
});
