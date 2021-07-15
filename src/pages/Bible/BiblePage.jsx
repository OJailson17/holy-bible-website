/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import {
  SelectBook,
  SelectChapter,
} from "../../components/SelectInput/SelectInputs";
import { PageTitle } from "../../components/Title/PageTitle";
import { NumberNavigation } from "../../components/Navigation/NumberNavigation";
import {
  ChangePageBtn,
  ChangePageContainer,
  PageContainer,
} from "./BiblePage.style";
import { Verse } from "../../components/Verse/Verse";
import { Navigation } from "../../components/Navigation/Navigation";
import { PageWrapper } from "../../components/PageWrapper/PageWrapper";
import { BibleContextProvider } from "../../context/bibleContext";

export function BiblePage() {
  const { book, setBook, chapterData } = useContext(BibleContextProvider);

  useEffect(() => {
    if (!book) setBook("gn");
  }, []);

  return (
    <>
      <PageTitle />

      <main>
        <PageContainer>
          <div>
            <div className="select-container">
              <SelectBook />
              <SelectChapter />
            </div>

            <PageWrapper>
              <Verse chapterData={chapterData} />
              <ChangePageContainer>
                <ChangePageBtn>Anterior</ChangePageBtn>
                <ChangePageBtn>Próximo</ChangePageBtn>
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
  );
}
