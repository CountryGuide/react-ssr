import { NotFound } from "NotFound";
import React, { Component } from 'react';
import { Route, StaticRouter, Switch } from "react-router-dom";
import { routerConfig } from "router/routerConfig";


class ServerRouter extends Component {
	render() {
		const { location, context } = this.props;
		return (
			<StaticRouter location={location} context={context}>
				<Switch>
					{
						routerConfig.routes.map(route => {
							return <Route key={route.path} exact={route.exact} path={route.path} component={route.component}/>;
						})
					}
					<Route component={NotFound}/>
				</Switch>
			</StaticRouter>
		);
	}
}


export { ServerRouter };
