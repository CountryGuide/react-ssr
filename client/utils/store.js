import { reducers } from "reducers";
import { applyMiddleware, compose, createStore } from "redux";
import reduxThunk from "redux-thunk";


const preloadedState = window.__PRELOADED_STATE__ || {};

delete window.__PRELOADED_STATE__;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store     = createStore(
	reducers,
	preloadedState,
	composeEnhancers(
		applyMiddleware(
			reduxThunk
		)
	)
);

