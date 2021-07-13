import { PageTitle } from "../../components/Title/PageTitle";
import { Verse } from "../../components/Verse/Verse";
import { BtnContainer, PageWrapper } from "./VersePage.style";
import { Navigation } from "../../components/Navigation/Navigation";
import { ExtraBtn } from "../../components/ExtraBtn/ExtraBtn";

export function VersePage() {
  const verse = {
    book: {
      name: "Gênesis",
      chapters: 28,
    },
    chapter: {
      number: 1,
      verses: 28,
    },
    verses: [
      {
        number: 2,
        text: "E a terra era sem forma e vazia; e havia trevas sobre a face do abismo; e o Espírito de Deus se movia sobre a face das águas.",
      },
    ],
  };
  return (
    <>
      <PageTitle />

      <main>
        <PageWrapper>
          <Verse data={verse} versePage={true} />
          <Navigation title="Versiculos" numbers={verse.chapter.verses} />
        </PageWrapper>
        <BtnContainer>
          <ExtraBtn>Adicionar aos favoritos</ExtraBtn>
          <ExtraBtn>Ler capítulo</ExtraBtn>
        </BtnContainer>
      </main>
    </>
  );
}
