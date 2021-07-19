export const checkFavoriteList = (verse) => {
    const favoriteList = JSON.parse(localStorage.getItem("favorites")) || []

    // const check = favoriteList.map((el, index) => el.name === verse.name ? [el, index] : false)
    const checkName = favoriteList.filter((el, index, arr) => el.name === verse.name ? index : '')
    const checkChapter = favoriteList.filter(el => el.chapter === verse.chapter)
    const checkVerse = favoriteList.filter(el => el.verse === verse.verse)
    console.log(checkName);

    if(checkName.length > 0 && checkChapter.length > 0 && checkVerse.length > 0) {
      return true
    } else {
      return false
    }
}