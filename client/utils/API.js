import axios from "axios";


export const API = axios.create({baseURL: 'https://ivanvyakovlev.herokuapp.com/api'});

export const END_POINTS = {
	COUNTRIES: {
		FETCH: API.get('/countries')
	}
};
