import { checkFavoriteList } from "./checkFavoriteList"

export const removeFavorite = (verse) => {
    
    let favorites = []
    favorites = JSON.parse(localStorage.getItem("favorites")) || []

    // const checkName = favorites.map((el, index) => el.name === verse.name ? index : false)
    // const checkChapter = favorites.map((el, index) => el.chapter === verse.chapter ? index : false)
    // const checkVerse = favorites.map((el, index) => el.verse === verse.verse ? index : false)

    // const nameIndex = checkName.filter(index => index !== false)
    // const chapterIndex = checkChapter.filter(index => index !== false)
    // const verseIndex = checkVerse.filter(index => index !== false)

    // if(checkFavoriteList(verse)) console.log(verse);

    // console.log(favorites.map(el => el === verse));

}