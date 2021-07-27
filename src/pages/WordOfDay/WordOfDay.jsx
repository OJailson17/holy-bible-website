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
import { removeFavorite } from "../../components/helper/removeFavorite";
import { Loader } from "../../components/Loader/Loader";
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
  const [isReady, setIsReady] = useState(false);

  const { setBook, isFavorite, setIsFavorite } =
    useContext(BibleContextProvider);

  const history = useHistory();

  const readChapter = () => {
    setIsReady(false)
    history.push("/biblia");
  };

  const verseObj = {
    abbrev: randomVerse?.book?.abbrev?.pt,
    name: randomVerse?.book?.name,
    chapter: Number(randomVerse?.chapter),
    verse: Number(randomVerse?.number),
  };

  const handleFavorite = () => {
    if (!isFavorite) {
      addFavorite(verseObj);
      setIsFavorite(true);
    } else {
      removeFavorite(verseObj);
      setIsFavorite(false);
    }
  };

  const getVerseFromStorage = () => {
    return localStorage.getItem("verseOfDay");
  };

  const getRandomVerse = async () => {
    try {
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
    } catch (error) {
      console.log(error);
    }
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
    if(randomVerse?.book !== undefined) setBook(randomVerse?.book?.abbrev?.pt);
    
    if (checkFavoriteList(verseObj)) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
    if(randomVerse?.book !== undefined) setIsReady(true)
  }, [randomVerse]);

  return (
    <>
      {isReady ? (
        <>
          <PageTitle />

          <SubtitleContainer>
            <h2>Palavra do dia</h2>
          </SubtitleContainer>

          <main>
            <PageWrapper secondary>
            <div style={{width: "100%"}}>
              <Verse chapterData={randomVerse} versePage={true} />
            </div>
              <Navigation />
            </PageWrapper>

            <BtnContainer>
              <ExtraBtn clickFunction={handleFavorite}>
                {isFavorite
                  ? "Remover dos favoritos"
                  : "Adicionar aos favoritos"}
              </ExtraBtn>
              <ExtraBtn clickFunction={readChapter}>Ler capítulo</ExtraBtn>
            </BtnContainer>
          </main>
        </>
      ) : (
        <Loader isReady={!isReady} />
      )}
    </>
  );
}
