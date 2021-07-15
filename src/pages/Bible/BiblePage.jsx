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
  const { setBook, chapterData } = useContext(BibleContextProvider);

  useEffect(() => {
    setBook("gn");
  }, []);

  return (
    <>
      <PageTitle />

      <main>
        <PageContainer>
          <div className="select-container">
            <SelectBook />
            <SelectChapter />
          </div>
          <div>
            <NumberNavigation title="Capítulos" />
          </div>
        </PageContainer>

        <PageWrapper>
          <Verse chapterData={chapterData} />
          <Navigation primary />
        </PageWrapper>

        <ChangePageContainer>
          <ChangePageBtn>Anterior</ChangePageBtn>
          <ChangePageBtn>Próximo</ChangePageBtn>
        </ChangePageContainer>
      </main>
    </>
  );
}
