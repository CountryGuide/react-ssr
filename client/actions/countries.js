import { END_POINTS } from "utils/API";


export const fetchCountries = () => async dispatch => {
	const {data} = await END_POINTS.COUNTRIES.FETCH;

	dispatch({
		type: 'COUNTRIES_FETCH',
		payload: data
	})
};
