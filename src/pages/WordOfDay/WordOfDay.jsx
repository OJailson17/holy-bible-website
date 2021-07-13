import styled from "styled-components";
import { ExtraBtn } from "../../components/ExtraBtn/ExtraBtn";
import { Navigation } from "../../components/Navigation/Navigation";
import { PageWrapper } from "../../components/PageWrapper/PageWrapper";
import { PageTitle } from "../../components/Title/PageTitle";
import { Verse } from "../../components/Verse/Verse";
import { BtnContainer } from "../VersePage/VersePage.style";

const SubtitleContainer = styled.div`
width: 100%;

@media ${({theme}) => theme.queries.xsmall} {
    text-align: center;
    margin-top: 30px;
}

@media ${({theme}) => theme.queries.small} {
    text-align: center;
    margin-top: 30px;
}
`

export function WordOfDay() {

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

        <SubtitleContainer>
            <h2>Palavra do dia</h2>
        </SubtitleContainer>

        <main>
            <PageWrapper>
                <Verse data={verse} versePage={true}/>
                <Navigation />
            </PageWrapper>
            <BtnContainer>
            <ExtraBtn>Adicionar aos favoritos</ExtraBtn>
            <ExtraBtn>Ler capítulo</ExtraBtn>
            </BtnContainer>
        </main>
        </>
    )
}