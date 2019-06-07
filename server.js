import axios from "axios";
import Express from 'express';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { Provider } from "react-redux";
import { createStore } from "redux";
import { App } from './client/App';
import { reducers } from "./client/reducers";


const app  = Express();
const port = 3000;

app.get('/robots.txt', function (req, res) {
	res.type('text/plain');
	res.send("User-agent: *\nDisallow: /");
});
app.use('/static', Express.static('static'));
app.use(handleRender);

function handleRender(req, res) {
	axios.get('http://localhost:3030/api/countries').then((response) => {
		const store = createStore(reducers, {countries: response.data});
		const html  = renderToStaticMarkup(
			<Provider store={store}>
				<App/>
			</Provider>
		);

		const preloadedState = store.getState();

		res.send(renderPage(html, preloadedState))
	});
}

function renderPage(html, preloadedState) {
	return `
    <!doctype html>
    <html lang="en">
      <head>
        <title>Redux Universal Example</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="description" content="blblghlhlh">
        <link rel="stylesheet" href="static/style.css">
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
		/</g,
		'\\\u003c'
	)}
        </script>
        <script src="static/bundle.js"></script>
      </body>
    </html>
    `
}

app.listen(port, () => console.log(`Started at http://localhost:${port}`));
