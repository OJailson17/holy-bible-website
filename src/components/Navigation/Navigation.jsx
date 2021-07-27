import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import useWindowDimensions from "../../middlewares/windowViewport";

const LinkList = styled.ul`
  width: 30%;
  height: 200px;
  font-size: 18px;
  line-height: 1.8;
  margin-bottom: 50px;
  li a {
    color: black;

    &:hover {
      color: blue;
      text-decoration: underline;
    }
  }

  ${({ primary }) =>
    primary &&
    css`
      margin-top: 30px;
      width: 50%;
    `}
`;

export function Navigation({ primary }) {
  const { width } = useWindowDimensions();

  return (
    <>
      <LinkList hidden={width < 1024 ? "hidden" : ""} primary={primary}>
        <li>
          <Link to="/wordofday">Palavra do dia</Link>
        </li>
        <li>
          <Link to="/bible">Bíblia completa</Link>
        </li>
        <li>
          <Link to="/oldtestament">Velho Testamento</Link>
        </li>
        <li>
          <Link to="/newtestament">Novo Testamento</Link>
        </li>
        <li>
          <Link to="/favorites">Versículos Favoritos</Link>
        </li>
        <li>
          <Link to="/topics">Versículos para vida</Link>
        </li>
      </LinkList>
    </>
  );
}
