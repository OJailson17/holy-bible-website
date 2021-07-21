import React from "react";
import { Buttons } from "../../components/Buttons/Buttons";
import { Navigation } from "../../components/Navigation/Navigation";
import { PageWrapper } from "../../components/PageWrapper/PageWrapper";
import { Subtitle } from "../../components/Subtitle/Subtitle";
import { PageTitle } from "../../components/Title/PageTitle";
import { BtnContainer} from "../../components/BtnContainer/BtnContainer";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { BibleContextProvider } from "../../context/bibleContext";
import { useHistory } from "react-router-dom";

export function Topics() {
  const [topics, setTopics] = useState([])
  const {setVerseTopic} = useContext(BibleContextProvider)
  const history = useHistory()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("TopicsData.json")
        const topicsData = await response.json()
        setTopics(topicsData)
      } catch (error) {
        console.log(error);
      }
    }
    fetchData()
  }, [])

  const handleClick = (topic) => {
    setVerseTopic(topic)

    history.push("/topics/verse")
  }
  return (
    <>
      <PageTitle />

      <Subtitle>
        <h2>Versículos para cada situação da vida</h2>
      </Subtitle>

      <PageWrapper secondary>
      <BtnContainer primary>
      {topics?.map(topic => (
          <Buttons key={topic?.title} handleClick={() => handleClick(topic)}>{topic?.title}</Buttons>
      ))}
      </BtnContainer>
      <Navigation />
      </PageWrapper>
    </>
  );
}
