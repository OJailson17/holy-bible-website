export const addFavorite = (verseObj) => {

    let favorites = []
    favorites = JSON.parse(localStorage.getItem("favorites")) || []

    console.log(favorites);
    const checkName = favorites.filter(el => el.name === verseObj.name)
    const checkChapter = favorites.filter(el => el.chapter === verseObj.chapter)
    const checkVerse = favorites.filter(el => el.verse === verseObj.verse)

    if(checkName.length > 0 && checkChapter.length > 0 && checkVerse.length > 0) {
      return
    } else {
      favorites.push(verseObj)
    }

    localStorage.setItem("favorites", JSON.stringify(favorites))
}