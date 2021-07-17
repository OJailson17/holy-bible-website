/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { BtnContainer } from "../../components/BtnContainer/BtnContainer";
import { ExtraBtn } from "../../components/ExtraBtn/ExtraBtn";
import { addFavorite } from "../../components/helper/addFavorite";
import { checkFavoriteList } from "../../components/helper/checkFavoriteList";
import { Navigation } from "../../components/Navigation/Navigation";
import { PageWrapper } from "../../components/PageWrapper/PageWrapper";
import { PageTitle } from "../../components/Title/PageTitle";
import { Verse } from "../../components/Verse/Verse";
import { BibleContextProvider } from "../../context/bibleContext";

const SubtitleContainer = styled.div`
  width: 100%;

  @media ${({ theme }) => theme.queries.xsmall} {
    text-align: center;
    margin-top: 30px;
  }

  @media ${({ theme }) => theme.queries.small} {
    text-align: center;
    margin-top: 30px;
  }
`;

export function WordOfDay() {
  const [randomVerse, setRandomVerse] = useState({});
  const [isFavorite, setIsFavorite] = useState(false)
  const {setBook} = useContext(BibleContextProvider)

  const history = useHistory();

  const readChapter = () => {
    history.push("/bible");
  };

  const verseObj = {
    abbrev: randomVerse?.book?.abbrev?.pt,
    name: randomVerse?.book?.name,
    chapter: randomVerse?.chapter,
    verse: randomVerse?.number
  }

  const handleFavorite = () => {
    addFavorite(verseObj)
    setIsFavorite(!isFavorite)
  }

  const getVerseFromStorage = () => {
    return localStorage.getItem("verseOfDay");
  };

  const getRandomVerse = async () => {
    const response = await fetch(
      "https://www.abibliadigital.com.br/api/verses/acf/random",
      {
        headers: {
          Authorization: process.env.REACT_APP_API_TOKEN,
        },
      }
    );
    const verse = await response.json();
    setRandomVerse(verse);
    localStorage.setItem("verseOfDay", JSON.stringify(verse));
  };

  const checkDate = () => {
    const date = new Date().toLocaleDateString();
    const storageDate = localStorage.getItem("date");

    if (storageDate === date) return false;

    localStorage.setItem("date", date);
    return true;
  };

  useEffect(() => {
    if (!checkDate()) {
      setRandomVerse(JSON.parse(getVerseFromStorage()));
    } else {
      getRandomVerse();
    }
  }, []);

  useEffect(() => {
    setBook(randomVerse?.book?.abbrev?.pt)
    checkFavoriteList(verseObj) ? setIsFavorite(true) : setIsFavorite(false)
  }, [randomVerse])

  // useEffect(() => {
  // }, [randomVerse])

  
  return (
    <>
      <PageTitle />

      <SubtitleContainer>
        <h2>Palavra do dia</h2>
      </SubtitleContainer>

      <main>
        <PageWrapper secondary>
            <Verse chapterData={randomVerse} versePage={true} />
          <Navigation />  
        </PageWrapper>

        <BtnContainer>
          <ExtraBtn clickFunction={handleFavorite}>{isFavorite ? "Remover dos Favorito" : "Adicionar aos favoritos"}</ExtraBtn>
          <ExtraBtn clickFunction={readChapter}>Ler capítulo</ExtraBtn>
        </BtnContainer>
      </main>
    </>
  );
}
