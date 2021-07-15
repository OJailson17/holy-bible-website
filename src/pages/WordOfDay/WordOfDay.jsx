import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { BtnContainer } from "../../components/BtnContainer/BtnContainer";
import { ExtraBtn } from "../../components/ExtraBtn/ExtraBtn";
import { Navigation } from "../../components/Navigation/Navigation";
import { PageWrapper } from "../../components/PageWrapper/PageWrapper";
import { PageTitle } from "../../components/Title/PageTitle";
import { Verse } from "../../components/Verse/Verse";

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
  const [randomVerse, setRandomVerse] = useState({})

  const getVerseFromStorage = () => {
    return localStorage.getItem("verseOfDay")
  }

  const getRandomVerse = async () => {
    const response = await fetch('https://www.abibliadigital.com.br/api/verses/acf/random', {
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlRodSBKdWwgMDggMjAyMSAwNzowODozNCBHTVQrMDAwMC5qYXlsbHNvbnNvdXNhM0BnbWFpbC5jb20iLCJpYXQiOjE2MjU3MjgxMTR9.zhoFn6pH-aOENIf4NKUnzZiC6enc8o8a7Zl6I14n8d0",

      }
    })
    const verse = await response.json()
    setRandomVerse(verse)
    localStorage.setItem("verseOfDay", JSON.stringify(verse))
  }

  const checkDate = () => {
    const date = new Date().toLocaleDateString()
    const storageDate = localStorage.getItem("date")
    
    if(storageDate === date) return false

    localStorage.setItem("date", date)
    return true
  }

  useEffect(() => {
    if(!checkDate()) {
      setRandomVerse(JSON.parse(getVerseFromStorage()))
    } else {
      getRandomVerse()
    }
  }, [])

    return (
        <>
        <PageTitle />

        <SubtitleContainer>
            <h2>Palavra do dia</h2>
        </SubtitleContainer>

        <main>
            <PageWrapper>
                <Verse chapterData={randomVerse} versePage={true}/>
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