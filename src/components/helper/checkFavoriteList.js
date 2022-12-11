import _ from 'lodash';

/* eslint-disable eqeqeq */
export const checkFavoriteList = verse => {
	const favoriteList = JSON.parse(localStorage.getItem('favorites')) || [];

	const verseExists = favoriteList.filter(el => _.isMatch(el, verse) ?? el);

	return verseExists.length > 0 ? true : false;
};
