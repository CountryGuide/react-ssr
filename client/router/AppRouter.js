import { NotFound } from "NotFound";
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { routerConfig } from "router/routerConfig";


class AppRouter extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					{
						routerConfig.routes.map(route => {
							return <Route key={route.path} exact={route.exact} path={route.path} component={route.component}/>;
						})
					}
					<Route component={NotFound}/>
				</Switch>
			</BrowserRouter>
		);
	}
}


export { AppRouter };
