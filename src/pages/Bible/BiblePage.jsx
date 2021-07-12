import React from "react";
import { SelectBook, SelectChapter } from "../../components/SelectInput/SelectInputs";
import {PageTitle} from '../../components/Title/PageTitle'
import { Navigation } from "../../components/Navigation/Navigation";
import { ChangePageBtn, ChangePageContainer, Header, PageContainer } from "./BiblePage.style";
import { Verse } from "../../components/Verse/Verse";

export function BiblePage() {

  return (
      <>
      <Header >
      <div className="hidden">
          <PageTitle />
      </div>
      </Header>

      <main>
      <PageContainer>
      <div className="select-container">
      <SelectBook />
      <SelectChapter />
      </div>
      <Navigation title="Capítulos"/> 
      </PageContainer>

      <Verse />
      <ChangePageContainer>
        <ChangePageBtn>Anterior</ChangePageBtn>
        <ChangePageBtn>Próximo</ChangePageBtn>
      </ChangePageContainer>
      </main>
      </>
  );
}
