import { App } from "App";
import { IndexPage } from "pages/IndexPage";


export const routerConfig = {
	routes: [
		{
			path: '/',
			exact: true,
			component: IndexPage
		},
		{
			path: '/countries',
			component: App
		}
	]
};
