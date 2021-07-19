import React from "react";
import { Buttons } from "../../components/Buttons/Buttons";
import { Navigation } from "../../components/Navigation/Navigation";
import { PageWrapper } from "../../components/PageWrapper/PageWrapper";
import { Subtitle } from "../../components/Subtitle/Subtitle";
import { PageTitle } from "../../components/Title/PageTitle";
import { BtnContainer} from "../../components/BtnContainer/BtnContainer";

export function Topics() {
  const topics = [
    "Amor",
  ].sort()
  return (
    <>
      <PageTitle />

      <Subtitle>
        <h2>Temas Bíblicos</h2>
      </Subtitle>

      <PageWrapper secondary>
      <BtnContainer primary>
      {topics.map(topic => (
          <Buttons key={topic}>{topic}</Buttons>
      ))}
      </BtnContainer>
      <Navigation />
      </PageWrapper>
    </>
  );
}
