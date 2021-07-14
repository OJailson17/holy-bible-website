import React from 'react'
import { useContext } from 'react'
import styled from 'styled-components'
import { BibleContextProvider } from '../../context/bibleContext'


const VerseContainer = styled.div`

 & > div {
     margin-top: 20px;
 }

 @media ${({ theme }) => theme.queries.big} {
     width: 50%;
    }

 @media ${({ theme }) => theme.queries.large} {
     width: 50%;
    }
    
 @media ${({ theme }) => theme.queries.xlarge} {
     width: 50%;
    }
`

const VerseWrapper = styled.div`
width: 100%;
display: flex;
justify-content: flex-start;
margin-bottom: 5px;

 span {
     font-weight: bold;
     color: gray;
     font-size: 15px;
     margin-right: 5px;
 }

 p {
     padding-top: 5px;
     font-family: 'Poppins', sans-serif;
     font-size: 18px;
 }
`

export function Verse({data, versePage}) {
    const {chapterData} = useContext(BibleContextProvider)

    const {book, chapter, verses} = chapterData
    return (
        <VerseContainer>
            <h3>{book?.name} - {chapter?.number}{versePage ? `:${verses[0]?.number}` : ''}</h3>
            <div>
            {verses?.map(verse => (
                <VerseWrapper key={verse?.number}>
                <span>{verse?.number}</span>
                <p>{verse?.text}</p>
            </VerseWrapper>
            ))}
            </div>
        </VerseContainer>
    )
}

