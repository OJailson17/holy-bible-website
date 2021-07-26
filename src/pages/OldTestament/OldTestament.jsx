import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { BtnContainer } from "../../components/BtnContainer/BtnContainer";
import { Buttons } from "../../components/Buttons/Buttons";
import { Navigation } from "../../components/Navigation/Navigation";
import { PageWrapper } from "../../components/PageWrapper/PageWrapper";
import { Subtitle } from "../../components/Subtitle/Subtitle";
import { PageTitle } from "../../components/Title/PageTitle";
import { BibleContextProvider } from "../../context/bibleContext";
import {Loader} from '../../components/Loader/Loader'

export function OldTestament() {
  const [isReady, setIsReady] = useState(false)
  const {oldTestament, setBook} = useContext(BibleContextProvider)
  const history = useHistory()

const handleClick = (e) => {
  setBook(e.target.dataset.abbrev)
  history.push(`/bible`)
  window.scrollTo(0, 0);
}

useEffect(() => {
    if(oldTestament.length > 0) setIsReady(true)
  }, [oldTestament])

  return (
    <>
      <PageTitle />

      <Subtitle>
        <h2>Velho Testamento</h2>
      </Subtitle>

      <PageWrapper secondary>
      {isReady ? (
        <BtnContainer primary>
          {oldTestament?.map(book => (
            <Buttons key={book?.name} abbrev={book?.abbrev?.pt} handleClick={handleClick}>{book?.name}</Buttons>
          ))}
      </BtnContainer>
      ) : (
        <Loader isReady={!isReady} />
      )}
      <Navigation />
      </PageWrapper>
    </>
  )
}