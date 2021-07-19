/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from "react";

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


  // Get books data
  const getBooks = async () => {
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
  };

  const getBook = async () => {
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
  };

  const getChapterData = async () => {
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
  };

  const getVerse = async () => {
    const response = await fetch(
      `https://www.abibliadigital.com.br/api/verses/acf/${book}/${chapter}/${verseNum}`,
      {
        headers: {
          Authorization: process.env.REACT_APP_API_TOKEN,
        },
      }
    );
    const verseObj = await response.json();
    setVerse(verseObj);
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
    setChapter(1);
  }, []);

  useEffect(() => {
    getChapterData();
  }, [chapter]);

  useEffect(() => {
    getBook();
    setChapter(1);
    getChapterData();
  }, [book]);

  useEffect(() => {
    getTestaments();
  }, [books]);

  useEffect(() => {
    getVerse();
  }, [verseNum]);

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
      }}
    >
      {children}
    </BibleContextProvider.Provider>
  );
};
