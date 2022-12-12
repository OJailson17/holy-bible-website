import { checkFavoriteList } from './checkFavoriteList';

// Add verse to favorite list on local storage
export const addFavorite = verseObj => {
	let favorites = [];
	favorites = JSON.parse(localStorage.getItem('favorites')) || [];

	if (checkFavoriteList(verseObj)) {
		return;
	} else {
		favorites.push(verseObj);
	}

	localStorage.setItem('favorites', JSON.stringify(favorites));
};
