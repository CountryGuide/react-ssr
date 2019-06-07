import React from 'react';
import { connect } from "react-redux";


const mapStateToProps = ({ countries }) => {
	return {countries};
};


class AppComponent extends React.Component {
	render() {
		return (
			<div>
				{this.props.countries.map(c => <div key={c._id}>{c.name}</div>)}
			</div>
		);
	}
}


const App = connect(mapStateToProps)(AppComponent);

export { App }
