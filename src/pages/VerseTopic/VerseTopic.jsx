import { useContext } from "react";
import { Navigation } from "../../components/Navigation/Navigation";
import { PageWrapper } from "../../components/PageWrapper/PageWrapper";
import { PageTitle } from "../../components/Title/PageTitle";
import { Verse } from "../../components/Verse/Verse";
import { BibleContextProvider } from "../../context/bibleContext";

export function VerseTopic() {
  const { verseTopic } = useContext(BibleContextProvider);

  console.log(verseTopic);

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


  return (
    <>
      <PageTitle />

      <PageWrapper secondary>
        <div>
          <Verse chapterData={data} />
        </div>
        <Navigation />
      </PageWrapper>
    </>
  );
}
