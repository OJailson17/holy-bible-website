import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 48%;
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
    width: 49%;
    height: 45px;
  }

  @media ${({ theme }) => theme.queries.medium} {
    font-size: 14px;
    width: 30%;
    height: 45px;
  }

  @media ${({ theme }) => theme.queries.big} {
    width: 40%;
    height: 45px;
  }

  @media ${({ theme }) => theme.queries.large} {
    width: 30%;
    height: 45px;
  }

  @media ${({ theme }) => theme.queries.xlarge} {
    width: 30%;
    height: 45px;
  }
`;

export function ExtraBtn({ children }) {
  return <Button>{children}</Button>;
}
