import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 49%;
  height: 35px;
  background-color: transparent;
  color: black;
  border: 1px solid black;
  border-radius: 5px;
  outline: none;
  padding: 0 2px 0 2px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: black;
    color: white;
  }

  @media ${({ theme }) => theme.queries.xsmall} {
    font-size: 14px;
    width: 70%;
    height: 45px;
  }

  @media ${({ theme }) => theme.queries.medium} {
    font-size: 14px;
    width: 50%;
    height: 45px;
  }

  @media ${({ theme }) => theme.queries.big} {
    width: 60%;
    height: 45px;
  }

  @media ${({ theme }) => theme.queries.large} {
    width: 40%;
    height: 45px;
  }

  @media ${({ theme }) => theme.queries.xlarge} {
    width: 40%;
    height: 45px;
  }
`;

export function ExtraBtn({ children, clickFunction }) {
  return <Button onClick={clickFunction}>{children}</Button>;
}
