import _ from 'lodash';

// Delete the verse if it exists
export const removeFavorite = verse => {
	let favorites = [];
	favorites = JSON.parse(localStorage.getItem('favorites')) || [];

	const newFavoriteList = favorites.filter(el => !_.isMatch(el, verse));

	localStorage.setItem('favorites', JSON.stringify(newFavoriteList));
};
