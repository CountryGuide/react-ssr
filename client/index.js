import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from "react-redux";
import { AppRouter } from "router/AppRouter";
import { store } from "utils/store";


hydrate(
	<Provider store={store}>
		<AppRouter/>
	</Provider>,
	document.getElementById('root')
);
