import React from "react";
import { Buttons } from "../../components/Buttons/Buttons";
import { Navigation } from "../../components/Navigation/Navigation";
import { PageWrapper } from "../../components/PageWrapper/PageWrapper";
import { PageTitle } from "../../components/Title/PageTitle";
import { BtnContainer, Subtitle } from "./Topics.style";

export function Topics() {
  return (
    <>
      <PageTitle />

      <Subtitle>
        <h2>Temas Bíblicos</h2>
      </Subtitle>

      <PageWrapper>
      <BtnContainer>
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
  );
}
