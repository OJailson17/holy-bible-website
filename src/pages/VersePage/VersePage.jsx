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

export function VersePage() {
  const { verseNum } = useParams();
  const { chapterData, verse, setVerseNum } =
    useContext(BibleContextProvider);
    const history = useHistory()

    const readChapter = () => {
      history.push("/bible")
    }

  useEffect(() => {
    setVerseNum(verseNum)
  }, []);


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
          <ExtraBtn>Adicionar aos favoritos</ExtraBtn>
          <ExtraBtn readChapter={readChapter}>Ler capítulo</ExtraBtn>
        </BtnContainer>
      </main>
    </>
  );
}
