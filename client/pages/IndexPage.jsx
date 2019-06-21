import React from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";


class IndexPageComponent extends React.Component {
	render() {
		return (
			<div>
				Index
				<Link to={'/countries'}>
					Countries
				</Link>
			</div>
		);
	}
}


const IndexPage = connect(null)(IndexPageComponent);

export { IndexPage };
