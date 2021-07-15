/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useContext } from "react";
import { PageTitle } from "../../components/Title/PageTitle";
import { Verse } from "../../components/Verse/Verse";
import { NumberNavigation } from "../../components/Navigation/NumberNavigation";
import { ExtraBtn } from "../../components/ExtraBtn/ExtraBtn";
import { PageWrapper } from "../../components/PageWrapper/PageWrapper";
import { BtnContainer } from "../../components/BtnContainer/BtnContainer";
import { useParams } from "react-router-dom";
import { BibleContextProvider } from "../../context/bibleContext";

export function VersePage() {
  const { verseNum } = useParams();
  const { chapterData, verse, setVerseNum } =
    useContext(BibleContextProvider);

  useEffect(() => {
    setVerseNum(verseNum)
  }, []);
  return (
    <>
      <PageTitle />

      <main>
        <PageWrapper secondary>
          <Verse chapterData={verse} versePage={true} />
          <NumberNavigation
            title="Versiculos"
            numbers={chapterData?.chapter?.verses}
            versePage
          />
        </PageWrapper>
        <BtnContainer>
          <ExtraBtn>Adicionar aos favoritos</ExtraBtn>
          <ExtraBtn readChapter={() => alert("Hello")}>Ler capítulo</ExtraBtn>
        </BtnContainer>
      </main>
    </>
  );
}
