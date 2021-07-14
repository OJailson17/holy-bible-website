import { useContext } from "react";
import { BtnContainer } from "../../components/BtnContainer/BtnContainer";
import { Buttons } from "../../components/Buttons/Buttons";
import { Navigation } from "../../components/Navigation/Navigation";
import { PageWrapper } from "../../components/PageWrapper/PageWrapper";
import { Subtitle } from "../../components/Subtitle/Subtitle";
import { PageTitle } from "../../components/Title/PageTitle";
import { BibleContextProvider } from "../../context/bibleContext";

export function NewTestament() {
  const {newTestament} = useContext(BibleContextProvider)
  return (
    <>
      <PageTitle />

      <Subtitle>
        <h2>Novo Testamento</h2>
      </Subtitle>

      <PageWrapper>
        <BtnContainer primary>
        {newTestament?.map(livro => (
          <Buttons key={livro?.name}>{livro?.name}</Buttons>
        ))}
        </BtnContainer>
        <Navigation />
      </PageWrapper>
    </>
  );
}
