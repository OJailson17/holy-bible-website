import { useContext } from "react";
import { BtnContainer } from "../../components/BtnContainer/BtnContainer";
import { Buttons } from "../../components/Buttons/Buttons";
import { Navigation } from "../../components/Navigation/Navigation";
import { PageWrapper } from "../../components/PageWrapper/PageWrapper";
import { Subtitle } from "../../components/Subtitle/Subtitle";
import { PageTitle } from "../../components/Title/PageTitle";
import { BibleContextProvider } from "../../context/bibleContext";

export function OldTestament() {
  const {oldTestament} = useContext(BibleContextProvider)

  return (
    <>
      <PageTitle />

      <Subtitle>
        <h2>Velho Testamento</h2>
      </Subtitle>

      <PageWrapper>
      <BtnContainer primary>
          {oldTestament?.map(book => (
            <Buttons key={book?.name}>{book?.name}</Buttons>
          ))}
      </BtnContainer>
      <Navigation />
      </PageWrapper>
    </>
  )
}