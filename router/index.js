import { createProvider } from "render/createProvider";
import { layout } from "render/layout";
import { countriesRouter } from "router/countries";


export const Router = (app) => {
	app.get('/', (req, res) => {
		const { html, preloadedState } = createProvider(req, {});

		res.send(layout(html, preloadedState));
	});
	app.use(countriesRouter);
};
