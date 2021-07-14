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
  const { setBook } = useContext(BibleContextProvider);

  useEffect(() => {
    setBook("gn");
  }, []);

  const data = {
    book: {
      abbrev: {
        pt: "sl",
        en: "ps",
      },
      name: "Salmos",
      author: "David, Moisés, Salomão",
      group: "Poéticos",
      version: "acf",
    },
    chapter: {
      number: 91,
      verses: 16,
    },
    verses: [
      {
        number: 1,
        text: "Aquele que habita no esconderijo do Altíssimo, à sombra do Onipotente descansará.",
      },
      {
        number: 2,
        text: "Direi do Senhor: Ele é o meu Deus, o meu refúgio, a minha fortaleza, e nele confiarei.",
      },
      {
        number: 3,
        text: "Porque ele te livrará do laço do passarinheiro, e da peste perniciosa.",
      },
      {
        number: 4,
        text: "Ele te cobrirá com as suas penas, e debaixo das suas asas te confiarás; a sua verdade será o teu escudo e broquel.",
      },
      {
        number: 5,
        text: "Não terás medo do terror de noite nem da seta que voa de dia,.",
      },
      {
        number: 6,
        text: "Nem da peste que anda na escuridão, nem da mortandade que assola ao meio-dia.",
      },
      {
        number: 7,
        text: "Mil cairão ao teu lado, e dez mil à tua direita, mas não chegará a ti.",
      },
      {
        number: 8,
        text: "Somente com os teus olhos contemplarás, e verás a recompensa dos ímpios.",
      },
      {
        number: 9,
        text: "Porque tu, ó Senhor, és o meu refúgio. No Altíssimo fizeste a tua habitação.",
      },
      {
        number: 10,
        text: "Nenhum mal te sucederá, nem praga alguma chegará à tua tenda.",
      },
      {
        number: 11,
        text: "Porque aos seus anjos dará ordem a teu respeito, para te guardarem em todos os teus caminhos.",
      },
      {
        number: 12,
        text: "Eles te sustentarão nas suas mãos, para que não tropeces com o teu pé em pedra.",
      },
      {
        number: 13,
        text: "Pisarás o leão e a cobra; calcarás aos pés o filho do leão e a serpente.",
      },
      {
        number: 14,
        text: "Porquanto tão encarecidamente me amou, também eu o livrarei; pô-lo-ei em retiro alto, porque conheceu o meu nome.",
      },
      {
        number: 15,
        text: "Ele me invocará, e eu lhe responderei; estarei com ele na angústia; dela o retirarei, e o glorificarei.",
      },
      {
        number: 16,
        text: "Fartá-lo-ei com longura de dias, e lhe mostrarei a minha salvação.",
      },
    ],
  };
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
          <Verse data={data} />
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
