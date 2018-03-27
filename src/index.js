// @flow
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import History from "./History";
import "./assets/styles/App.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const root = document.getElementById("root");
if (!root) throw new Error("Root Element not found");

ReactDOM.render(
	<Router history={History}>
		<Provider store={store}>
			<Route component={App} />
		</Provider>
	</Router>,
	root
);
registerServiceWorker();
