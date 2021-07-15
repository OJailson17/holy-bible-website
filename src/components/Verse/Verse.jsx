import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const VerseContainer = styled.div`
  & > div {
    margin-top: 20px;
  }

  @media ${({ theme }) => theme.queries.big} {
    width: 90%;
  }

  @media ${({ theme }) => theme.queries.large} {
    width: 70%;
  }

  @media ${({ theme }) => theme.queries.xlarge} {
    width: 70%;
  }
`;

const VerseWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 5px;

  span {
    font-weight: bold;
    color: gray;
    font-size: 15px;
    margin-right: 10px;
  }

  a {
    color: black;
  }

  p {
    padding-top: 5px;
    font-family: "Poppins", sans-serif;
    font-size: 18px;
  }
`;

export function Verse({ chapterData, versePage }) {
  const { book, chapter, verses } = chapterData;
  return (
    <>
      {versePage ? (
        <VerseContainer>
          <h3>
            {book?.name} - {chapterData?.chapter}:{chapterData?.number}
          </h3>
          <div>
            <VerseWrapper>
              <span>{chapterData?.number}</span>
              <Link
                to={`/bible/book/${book?.abbrev?.pt}/chapter/${chapterData?.chapter}/verse/${chapterData?.number}`}
                style={versePage ? {pointerEvents: "none"} : {}}
              >
                <p>{chapterData?.text}</p>
              </Link>
            </VerseWrapper>
          </div>
        </VerseContainer>
      ) : (
        <VerseContainer>
          <h3>
            {book?.name} - {chapter?.number}
          </h3>
          <div>
            {verses?.map((verse) => (
              <VerseWrapper key={verse?.number}>
                <span>{verse?.number}</span>
                <Link
                  to={`/bible/book/${book?.abbrev?.pt}/chapter/${chapterData?.chapter?.number}/verse/${verse?.number}`}
                >
                  <p>{verse?.text}</p>
                </Link>
              </VerseWrapper>
            ))}
          </div>
        </VerseContainer>
      )}
    </>
  );
}
