/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { useContext, useEffect } from "react";
import { Navigation } from "../../components/Navigation/Navigation";
import { PageWrapper } from "../../components/PageWrapper/PageWrapper";
import { PageTitle } from "../../components/Title/PageTitle";
import { Verse } from "../../components/Verse/Verse";
import { BibleContextProvider } from "../../context/bibleContext";
import { Loader } from "../../components/Loader/Loader";

export function VerseTopic() {
  const { verseTopic, setBook, setChapter } = useContext(BibleContextProvider);
  const [isReady, setIsReady] = useState(false)

  const data = {
    book: {
      name: verseTopic?.book?.name,
      abbrev: {
        pt: verseTopic?.book?.abbrev,
      },
    },
    chapter: {
      number: verseTopic?.chapter,
    },
    verses: verseTopic?.verses,
  };


  useEffect(() => {
    setBook(verseTopic?.book?.abbrev)
    setChapter(verseTopic?.chapter)

    if(verseTopic?.book !== undefined) setIsReady(true)
  }, [verseTopic])


  return (
    <>
      <PageTitle />

      <PageWrapper secondary>
      {isReady ? (
        <div>
          <Verse chapterData={data} versePage={false}/>
        </div>
      ) : (
        <Loader isReady={!isReady}/>
      )}
        <Navigation />
      </PageWrapper>
    </>
  );
}
