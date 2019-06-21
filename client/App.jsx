import { fetchCountries } from "actions/countries";
import React from 'react';
import { connect } from "react-redux";


const mapStateToProps = ({ countries }) => {
	return { countries };
};


class AppComponent extends React.Component {
	componentDidMount() {
		this.props.fetchCountries();
	}

	render() {
		return (
			<div>
				{
					this.props.countries.map(c => <div key={c._id}>{c.name}</div>)
				}
			</div>
		);
	}
}


const App = connect(mapStateToProps, { fetchCountries })(AppComponent);

export { App }
