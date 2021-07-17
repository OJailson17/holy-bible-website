/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useContext } from "react";
import { PageTitle } from "../../components/Title/PageTitle";
import { Verse } from "../../components/Verse/Verse";
import { NumberNavigation } from "../../components/Navigation/NumberNavigation";
import { ExtraBtn } from "../../components/ExtraBtn/ExtraBtn";
import { PageWrapper } from "../../components/PageWrapper/PageWrapper";
import { BtnContainer } from "../../components/BtnContainer/BtnContainer";
import { useHistory, useParams } from "react-router-dom";
import { BibleContextProvider } from "../../context/bibleContext";
import { addFavorite } from "../../components/helper/addFavorite";
import { checkFavoriteList } from "../../components/helper/checkFavoriteList";
import { useState } from "react";

export function VersePage() {
  const [isFavorite, setIsFavorite] = useState(false)
  const { verseNum, book, chapterNum } = useParams();
  const { chapterData, verse, setVerseNum } =
    useContext(BibleContextProvider);
    const history = useHistory()
    
    const readChapter = () => {
      history.push("/bible")
    }
    const verseObj = {
      abbrev: book,
      name: verse?.book?.name,
      chapter: chapterNum,
      verse: verseNum
    }

    const handleFavorite = () => {
      addFavorite(verseObj)
      setIsFavorite(!isFavorite)
    }

  useEffect(() => {
    setVerseNum(verseNum)
  }, []);

  useEffect(() => {
    checkFavoriteList(verseObj) ? setIsFavorite(true) : setIsFavorite(false)
  }, [verse])

console.log(isFavorite);
  return (
    <>
      <PageTitle />

      <main>
        <PageWrapper secondary>
        <div style={{width: "100%"}}>
          <Verse chapterData={verse} versePage={true} />
        </div>
          <NumberNavigation
            title="Versiculos"
            numbers={chapterData?.chapter?.verses}
            versePage
          />
        </PageWrapper>
        <BtnContainer>
          <ExtraBtn clickFunction={handleFavorite}>{isFavorite ? "Remover dos Favorito" : "Adicionar aos favoritos"}</ExtraBtn>
          <ExtraBtn clickFunction={readChapter}>Ler capítulo</ExtraBtn>
        </BtnContainer>
      </main>
    </>
  );
}
