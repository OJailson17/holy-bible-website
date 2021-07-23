/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { Navigation } from "../../components/Navigation/Navigation";
import { PageWrapper } from "../../components/PageWrapper/PageWrapper";
import { PageTitle } from "../../components/Title/PageTitle";
import { Verse } from "../../components/Verse/Verse";
import { BibleContextProvider } from "../../context/bibleContext";

export function VerseTopic() {
  const { verseTopic, setBook, setChapter } = useContext(BibleContextProvider);

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
  }, [verseTopic])


  return (
    <>
      <PageTitle />

      <PageWrapper secondary>
        <div>
          <Verse chapterData={data} versePage={false}/>
        </div>
        <Navigation />
      </PageWrapper>
    </>
  );
}
