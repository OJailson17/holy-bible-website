import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import useWindowDimensions from "../../middlewares/windowViewport";

const LinkList = styled.ul`
  width: 20%;
  font-size: 18px;
  line-height: 1.8;
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
      margin-top: 200px;
      width: 29%;
    `}
`;

export function Navigation({ primary }) {
  const { width } = useWindowDimensions();

  return (
    <>
      <LinkList hidden={width < 1024 ? "hidden" : ""} primary={primary}>
        <li>
          <Link to="/topics">Temas</Link>
        </li>
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
      </LinkList>
    </>
  );
}
