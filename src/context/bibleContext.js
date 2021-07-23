/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from "react";
import { checkFavoriteList } from "../components/helper/checkFavoriteList";

export const BibleContextProvider = createContext();

export const BibleContext = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [chapter, setChapter] = useState("");
  const [chapterData, setChapterData] = useState({});
  const [qtdChapter, setQtdChapter] = useState("");
  const [book, setBook] = useState("");
  const [verse, setVerse] = useState({});
  const [verseNum, setVerseNum] = useState("");
  const [qtdverse, setQtdVerse] = useState("");
  const [newTestament, setNewTestament] = useState([]);
  const [oldTestament, setOldTestament] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false)
  const [verseObj, setVerseObj] = useState({});
  const [verseTopic, setVerseTopic] = useState({})


  // Get books data
  const getBooks = async () => {
    try {
      const response = await fetch(
        "https://www.abibliadigital.com.br/api/books",
        {
          headers: {
            Authorization: process.env.REACT_APP_API_TOKEN,
          },
        }
      );
      const books = await response.json();
      setBooks(books);
    } catch (error) {
      console.log(error);
    }
  };

  const getBook = async () => {
    try {
      const response = await fetch(
        `https://www.abibliadigital.com.br/api/books/${book}`,
        {
          headers: {
            Authorization: process.env.REACT_APP_API_TOKEN,
          },
        }
      );

      const bookData = await response.json();
      setQtdChapter(bookData?.chapters);
    } catch (error) {
      console.log(error);
    }
  };

  const getChapterData = async () => {
    try {
      const response = await fetch(
        `https://www.abibliadigital.com.br/api/verses/acf/${book}/${chapter}`,
        {
          headers: {
            Authorization: process.env.REACT_APP_API_TOKEN,
          },
        }
      );
      const chapterData = await response.json();
      setChapterData(chapterData);
    } catch (error) {
      console.log(error);
    }
  };

  const getVerse = async () => {
    try {
      const response = await fetch(
        `https://www.abibliadigital.com.br/api/verses/acf/${book}/${chapter}/${verseNum}`,
        {
          headers: {
            Authorization: process.env.REACT_APP_API_TOKEN,
          },
        }
      );
      const verseData = await response.json();
      setVerse(verseData);
    } catch (error) {
      console.log(error);
    }
  };

  const getTestaments = () => {
    const newTestamentBooks = books.filter((book) => book.testament === "NT");
    const oldTestamentBooks = books.filter((book) => book.testament === "VT");

    setNewTestament(newTestamentBooks);
    setOldTestament(oldTestamentBooks);
  };

  useEffect(() => {
    getBooks();
    setBook("gn");
    if(!chapter) setChapter(1);
  }, []);

  useEffect(() => {
    getChapterData();
    console.log(chapter);
  }, [chapter]);

  useEffect(() => {
    getBook();
    if(!chapter) setChapter(1);
    getChapterData();
  }, [book]);

  useEffect(() => {
    getTestaments();
  }, [books]);

  useEffect(() => {
    getVerse();
  }, [verseNum]);
  
  useEffect(() => {
    const obj = {
      abbrev: book,
      name: verse?.book?.name,
      chapter: Number(chapter),
      verse: Number(verseNum),
    }
    
    if(obj.name !== undefined) {
      setVerseObj(obj)
    }
  }, [verse || verseNum])


  useEffect(() => {
  if(checkFavoriteList(verseObj)) {
    setIsFavorite(true)
  } else {
    setIsFavorite(false)
  }
  }, [verseObj])


  return (
    <BibleContextProvider.Provider
      value={{
        books,
        setBooks,
        book,
        chapter,
        setChapter,
        setBook,
        qtdChapter,
        chapterData,
        newTestament,
        oldTestament,
        setQtdVerse,
        qtdverse,
        verse,
        setVerse,
        verseNum,
        setVerseNum,
        isFavorite,
        setIsFavorite,
        verseObj,
        setVerseObj,
        verseTopic,
        setVerseTopic
      }}
    >
      {children}
    </BibleContextProvider.Provider>
  );
};
