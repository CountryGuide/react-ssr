import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import reduxThunk from 'redux-thunk';
import { App } from "./App";
import { reducers } from "./reducers";


const preloadedState = window.__PRELOADED_STATE__;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store            = createStore(reducers, preloadedState, composeEnhancers(applyMiddleware(reduxThunk)));

delete window.__PRELOADED_STATE__;


hydrate(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
);
