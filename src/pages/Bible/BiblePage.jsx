/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { PageTitle } from "../../components/Title/PageTitle";
import { NumberNavigation } from "../../components/Navigation/NumberNavigation";
import { Verse } from "../../components/Verse/Verse";
import { Navigation } from "../../components/Navigation/Navigation";
import { PageWrapper } from "../../components/PageWrapper/PageWrapper";
import { BibleContextProvider } from "../../context/bibleContext";
import {
  SelectBook,
  SelectChapter,
} from "../../components/SelectInput/SelectInputs";
import {
  ChangePageBtn,
  ChangePageContainer,
  PageContainer,
} from "./BiblePage.style";
import { Loader } from "../../components/Loader/Loader";

export function BiblePage() {
  const { book, setBook, chapterData, chapter, setChapter, qtdChapter } =
    useContext(BibleContextProvider);
  const [isDisable, setIsDisable] = useState(false);
  const [isReady, setIsReady] = useState(false);

  
  const nextChapter = () => {
    const chapterNum = Number(chapter);
    if (chapterNum === qtdChapter) {
      setIsDisable(true);
    } else {
      setChapter(chapterNum + 1);
      window.scrollTo(0, 0);
    }
    setIsDisable(false);
  };
  
  const prevChapter = () => {
    const chapterNum = Number(chapter);
    if (chapterNum - 1 < 1) {
      setIsDisable(true);
    } else {
      setChapter(chapterNum - 1);
      window.scrollTo(0, 0);
    }
    setIsDisable(false);
  };
  
  useEffect(() => {
    if (!book) setBook("gn");
  }, []);
  
  useEffect(() => {
    if(chapterData?.book !== undefined) setIsReady(true)
  }, [chapterData])

  return (
    <>
      {isReady ? (
        <>
          <PageTitle />

          <main>
            <PageContainer>
              <div>
                <div className="select-container">
                  <SelectBook />
                  <SelectChapter />
                </div>

                <PageWrapper id="start">
                  <Verse chapterData={chapterData} />
                  <ChangePageContainer>
                    <ChangePageBtn onClick={prevChapter} disabled={isDisable}>
                      Anterior
                    </ChangePageBtn>
                    <ChangePageBtn onClick={nextChapter} disabled={isDisable}>
                      Próximo
                    </ChangePageBtn>
                  </ChangePageContainer>
                </PageWrapper>
              </div>

              <div>
                <NumberNavigation title="Capítulos" />
                <Navigation primary />
              </div>
            </PageContainer>
          </main>
        </>
      ) : (
        <Loader isReady={!isReady} />
      )}
    </>
  );
}
