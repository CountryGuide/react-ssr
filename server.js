import axios from "axios";
import compression from "compression";
import Express from 'express';
import createError from 'http-errors';
import React from 'react';
import { createProvider } from "render/createProvider";
import { layout } from "render/layout";
import {Router} from "router";


const app  = Express();
const port = 3000;

app.get('/robots.txt', function (req, res) {
	res.type('text/plain');
	res.send("User-agent: *\nDisallow: /");
});
app.use(compression());
app.use('/static', Express.static('static'));

Router(app);

// app.use(handleRender);
//
// function handleRender(req, res, next) {
// 	axios.get('https://ivanvyakovlev.herokuapp.com/api/countries')
// 		.then(response => {
// 			const { html, preloadedState } = createProvider(req, { countries: response.data });
//
// 			res.send(layout(html, preloadedState))
// 		})
// 		.catch(err => {
// 			return next(createError(500, err));
// 		});
// }

app.listen(port, () => console.log(`Started at http://localhost:${port}`));
