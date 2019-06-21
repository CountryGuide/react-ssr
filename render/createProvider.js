import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { Provider } from "react-redux";
import { reducers } from "reducers";
import { createStore } from "redux";
import { ServerRouter } from "router/ServerRouter";


export function createProvider(req, state) {
	const store   = createStore(reducers, state);
	const preloadedState = store.getState();
	const context = {};
	const html    = renderToStaticMarkup(
		<Provider store={store}>
			<ServerRouter location={req.path} context={context}/>
		</Provider>
	);

	return { html, preloadedState };
}
