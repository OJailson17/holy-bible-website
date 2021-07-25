import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { BtnContainer } from "../../components/BtnContainer/BtnContainer";
import { Buttons } from "../../components/Buttons/Buttons";
import { Navigation } from "../../components/Navigation/Navigation";
import { PageWrapper } from "../../components/PageWrapper/PageWrapper";
import { Subtitle } from "../../components/Subtitle/Subtitle";
import { PageTitle } from "../../components/Title/PageTitle";
import { BibleContextProvider } from "../../context/bibleContext";

export function NewTestament() {
  const {newTestament, setBook} = useContext(BibleContextProvider)
  const history = useHistory()

  const handleClick = (e) => {
    setBook(e.target.dataset.abbrev)
    history.push(`/bible`)
    window.scrollTo(0, 0);
  }

  return (
    <>
      <PageTitle />

      <Subtitle>
        <h2>Novo Testamento</h2>
      </Subtitle>

      <PageWrapper secondary>
        <BtnContainer primary>
        {newTestament?.map(book => (
          <Buttons key={book?.name} abbrev={book?.abbrev?.pt} handleClick={handleClick}>{book?.name}</Buttons>
        ))}
        </BtnContainer>
        <Navigation />
      </PageWrapper>
    </>
  );
}
