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
    grid-template-columns: repeat(10, 1fr);
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const Number = styled.a`
  color: blue;
  font-size: 18px;
  line-height: 2;
  margin: 2px;
`;

export function NumberNavigation({ title, numbers }) {
  const { width } = useWindowDimensions();

  return (
    <NavContainer hidden={width < 1024 ? "hidden" : ""}>
      <h3>{title}</h3>
      <div className="numbers">
        {[...Array(numbers)]?.map((ArrayElement, index) => (
          <Number key={index}>{index + 1}</Number>
        ))}
      </div>
    </NavContainer>
  );
}
