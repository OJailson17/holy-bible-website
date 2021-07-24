const mostFrequent = (arr) =>
  Object.entries(
    arr.reduce((a, v) => {
      a[v] = a[v] ? a[v] + 1 : 1;
      return a;
    }, {})
  ).reduce((a, v) => (v[1] >= a[1] ? v : a), [null, 0])[0];

export const removeFavorite = (verse) => {
  let favorites = [];
  favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  const checkName = favorites.map((el, index) =>
    el?.name === verse?.name ? index : false
  );
  const checkChapter = favorites.map((el, index) =>
    el?.chapter === verse?.chapter ? index : false
  );
  const checkVerse = favorites.map((el, index) =>
    el?.verse === verse?.verse ? index : false
  );

  const nameIndex = checkName.filter((index) => index !== false);
  const chapterIndex = checkChapter.filter((index) => index !== false);
  const verseIndex = checkVerse.filter((index) => index !== false);

  const finalArr = [...nameIndex, ...chapterIndex, ...verseIndex];

  const deletedIndex = mostFrequent(finalArr);
  favorites.splice(deletedIndex, 1);
  localStorage.setItem("favorites", JSON.stringify(favorites));

};
