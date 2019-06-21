import { Router } from 'express';
import { createProvider } from "render/createProvider";
import { layout } from "render/layout";
import { END_POINTS } from "client/utils/API";


const countriesRouter = Router();

countriesRouter.get('/countries', async (req, res) => {
	const response = await END_POINTS.COUNTRIES.FETCH;
	const { html, preloadedState } = createProvider(req, { countries: response.data });

	res.send(layout(html, preloadedState));
});

export {countriesRouter};
