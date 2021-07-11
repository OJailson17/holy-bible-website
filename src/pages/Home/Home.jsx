import React from "react";
import { PageTitle } from "../../components/Title/PageTitle";
import {
  FooterText,
  IconImage,
  MainContainer,
  TopicWrapper,
} from "./Home.style";
import grain from "../../images/grain.png";
import commandments from "../../images/ten-commandments.png";

export function Home() {
  return (
    <>
    <header>
      <PageTitle />
    </header>

    <main>
      <MainContainer>
        <TopicWrapper>
          <i className="fas fa-bible"></i>
          <span>A Bíblia</span>
        </TopicWrapper>

        <TopicWrapper>
          <i className="far fa-comment"></i>
          <span>Palavra do dia</span>
        </TopicWrapper>

        <TopicWrapper>
          <i className="fas fa-star"></i>
          <span>Versículos Favoritos</span>
        </TopicWrapper>

        <TopicWrapper>
          <i className="far fa-list-alt"></i>
          <span>Temas</span>
        </TopicWrapper>

        <TopicWrapper>
          <IconImage src={commandments} alt="commandments icon" />
          <span>Velho Testamento</span>
        </TopicWrapper>

        <TopicWrapper>
          <IconImage src={grain} alt="grain icon" />
          <span>Novo Testamento</span>
        </TopicWrapper>
      </MainContainer>
    </main>
    <footer>
      <FooterText>
        Desenvolvido por ❤️{" "}
        <a href="https://github.com/OJailson17">Jailson de Oliveira</a>
      </FooterText>
    </footer>
    </>
  );
}
