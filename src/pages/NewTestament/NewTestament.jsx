import { BtnContainer } from "../../components/BtnContainer/BtnContainer";
import { Buttons } from "../../components/Buttons/Buttons";
import { Navigation } from "../../components/Navigation/Navigation";
import { PageWrapper } from "../../components/PageWrapper/PageWrapper";
import { Subtitle } from "../../components/Subtitle/Subtitle";
import { PageTitle } from "../../components/Title/PageTitle";

export function NewTestament() {
  return (
    <>
      <PageTitle />

      <Subtitle>
        <h2>Novo Testamento</h2>
      </Subtitle>

      <PageWrapper>
      <BtnContainer primary>
          <Buttons>Gênesis</Buttons>
          <Buttons>Êxodo</Buttons>
          <Buttons>Salmos</Buttons>
          <Buttons>Matheus</Buttons>
          <Buttons>Apocalipse</Buttons>
          <Buttons>Provérbios</Buttons>
          <Buttons>João</Buttons>
          <Buttons>Pedro</Buttons>
      </BtnContainer>
      <Navigation />
      </PageWrapper>
    </>
  )
}