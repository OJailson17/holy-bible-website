import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import { BibleContextProvider } from "../../context/bibleContext";
import useWindowDimensions from "../../middlewares/windowViewport";

const NavContainer = styled.div`
  width: 400px;
  & > div {
    width: 400px;
    height: 50px;
    margin-top: 24px;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const Number = styled.p`
  color: blue;
  font-size: 18px;
  line-height: 2;
  margin: 2px;
  cursor: pointer;
`;

export function NumberNavigation({ title, versePage }) {
  const {qtdChapter, setChapter, chapterData, setVerseNum} = useContext(BibleContextProvider)
  const { width } = useWindowDimensions();

  const handleClick = (e) => {
    setChapter(e.target.innerText)
  }

  const selectVerses = (e) => {
    setVerseNum(e.target.innerText)
  }

  const setQtdValue = () => {
    if(versePage) {
      return chapterData?.chapter?.verses
    } else {
      return qtdChapter
    }
  }

  return (
    <NavContainer hidden={width < 1024 ? "hidden" : ""}>
      <h3>{title}</h3>
      <div className="numbers">
        {[...Array(setQtdValue())]?.map((ArrayElement, index) => (
          <Number key={index} onClick={versePage ? selectVerses : handleClick}>{index + 1}</Number>
        ))}
      </div>
    </NavContainer>
  );
}
