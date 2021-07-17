import { checkFavoriteList } from "./checkFavoriteList";

export const addFavorite = (verseObj) => {

    let favorites = []
    favorites = JSON.parse(localStorage.getItem("favorites")) || []

    if(checkFavoriteList(verseObj)) {
      return
    } else {
      favorites.push(verseObj)
    }

    localStorage.setItem("favorites", JSON.stringify(favorites))
}