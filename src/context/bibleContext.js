/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from "react";

export const BibleContextProvider = createContext();

export const BibleContext = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [chapter, setChapter] = useState("");
  const [chapterData, setChapterData] = useState({});
  const [qtdChapter, setQtdChapter] = useState("");
  const [book, setBook] = useState("");
  const [newTestament, setNewTestament] = useState([])
  const [oldTestament, setOldTestament] = useState([])



  
  // Get books data
  const getBooks = async () => {
    const response = await fetch(
      "https://www.abibliadigital.com.br/api/books",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlRodSBKdWwgMDggMjAyMSAwNzowODozNCBHTVQrMDAwMC5qYXlsbHNvbnNvdXNhM0BnbWFpbC5jb20iLCJpYXQiOjE2MjU3MjgxMTR9.zhoFn6pH-aOENIf4NKUnzZiC6enc8o8a7Zl6I14n8d0",
        },
      }
    );
    const books = await response.json();
    // console.log(books)
    setBooks(books);
  };


  const getBook = async () => {
    const response = await fetch(
      `https://www.abibliadigital.com.br/api/books/${book}`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlRodSBKdWwgMDggMjAyMSAwNzowODozNCBHTVQrMDAwMC5qYXlsbHNvbnNvdXNhM0BnbWFpbC5jb20iLCJpYXQiOjE2MjU3MjgxMTR9.zhoFn6pH-aOENIf4NKUnzZiC6enc8o8a7Zl6I14n8d0",
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
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlRodSBKdWwgMDggMjAyMSAwNzowODozNCBHTVQrMDAwMC5qYXlsbHNvbnNvdXNhM0BnbWFpbC5jb20iLCJpYXQiOjE2MjU3MjgxMTR9.zhoFn6pH-aOENIf4NKUnzZiC6enc8o8a7Zl6I14n8d0",
        },
      }
    );

    const chapterData = await response.json();

    setChapterData(chapterData);
  };

  const getTestaments = () => {
    const newTestamentBooks = books.filter(book => book.testament === "NT")
    const oldTestamentBooks = books.filter(book => book.testament === "VT")
    
    setNewTestament(newTestamentBooks)
    setOldTestament(oldTestamentBooks)
  }

  useEffect(() => {
    getBooks()
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
    getTestaments()
  }, [books])

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
        oldTestament
      }}
    >
      {children}
    </BibleContextProvider.Provider>
  );
};
