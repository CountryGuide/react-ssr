export function countries(state=[], action) {
	switch (action.type) {
		case 'COUNTRIES_FETCH':
			return [...action.payload];
		default:
			return state;
	}
}
