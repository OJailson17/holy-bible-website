export const checkFavoriteList = (verse) => {
    const favoriteList = JSON.parse(localStorage.getItem("favorites")) || []

    const checkName = favoriteList.filter(el => el.name === verse.name)
    const checkChapter = favoriteList.filter(el => el.chapter === verse.chapter)
    const checkVerse = favoriteList.filter(el => el.verse === verse.verse)

    if(checkName.length > 0 && checkChapter.length > 0 && checkVerse.length > 0) {
      return true
    } else {
      return false
    }
}