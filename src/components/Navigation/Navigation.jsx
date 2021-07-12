import React from "react";
import styled from "styled-components";
import useWindowDimensions from "../../middlewares/windowViewport";

const NavContainer = styled.div`
width: 400px;
& > div {
    width: 400px;
    height: 50px;
    margin-top: 24px;
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    justify-content: space-around;
    align-items: flex-start;
}
`;

const Number = styled.a`
  color: blue;
  font-size: 18px;
`;

export function Navigation({ title }) {
    const {width} = useWindowDimensions()
    const myArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

  return (
    <NavContainer hidden={width < 1024 ? "hidden" : ""}>
      <h3>{title}</h3>
      <div className="numbers">
      {myArr.map(num => (
          <Number key={num}>{num}</Number>
      ))}
      </div>
    </NavContainer>
  );
}
