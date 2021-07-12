import React from 'react'
import styled from 'styled-components'


const VerseContainer = styled.div`

 & > div {
     margin-top: 20px;
 }

 @media ${({ theme }) => theme.queries.big} {
     width: 50%;
    }

 @media ${({ theme }) => theme.queries.large} {
     width: 60%;
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
/* background-color: red; */

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

export function Verse() {
    return (
        <VerseContainer>
            <h3>Gênesis - 1</h3>
            <div>
            <VerseWrapper>
                <span>1</span>
                <p>No princípio criou Deus o céu e a terra.</p>
            </VerseWrapper>

            <VerseWrapper>
                <span>2</span>
                <p>E a terra era sem forma e vazia; e havia trevas sobre a face do abismo; e o Espírito de Deus se movia sobre a face das águas.</p>
            </VerseWrapper>

            <VerseWrapper>
                <span>3</span>
                <p>E disse Deus: Haja luz; e houve luz.</p>
            </VerseWrapper>

            <VerseWrapper>
                <span>4</span>
                <p>E viu Deus que era boa a luz; e fez Deus separação entre a luz e as trevas.</p>
            </VerseWrapper>

            <VerseWrapper>
                <span>5</span>
                <p>E Deus chamou à luz Dia; e às trevas chamou Noite. E foi a tarde e a manhã, o dia primeiro.</p>
            </VerseWrapper>
            </div>
        </VerseContainer>
    )
}

