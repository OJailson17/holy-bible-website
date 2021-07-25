import styled, { css } from "styled-components";

const Btn = styled.button`
  width: 100%;
  height: 50px;
  color: black;
  background-color: transparent;
  border: 1px solid black;
  border-radius: 5px;
  margin-bottom: 10px;
  font-size: 17px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s;

  i {
    color: black;
  }

  a {
    color: black;
  }

  &:hover {
    color: white;
    background: black;

    i {
      color: white;
    }
  }

  @media ${({ theme }) => theme.queries.medium} {
    width: 90%;
  }
  @media ${({ theme }) => theme.queries.big} {
    width: 90%;
  }
  @media ${({ theme }) => theme.queries.large} {
    width: 80%;
  }
  @media ${({ theme }) => theme.queries.xlarge} {
    width: 70%;
  }

  ${({ secondary }) =>
    secondary &&
    css`
      font-weight: 500;
      cursor: auto;

      & > div {
        width: 90%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;

        .text {
          width: 90%;
          height: 50px;
          cursor: pointer;
          text-align: left;
          display: flex;
          align-items: center;
        }

        .deleteIcon {
          width: 10%;
          height: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }

        i {
          font-size: 18px;
          cursor: pointer;
        }
      }
    `}
`;

export function Buttons(props) {
  return (
    <Btn secondary={props.secondary} onClick={props.handleClick} data-abbrev={props.abbrev}>
      {props.children}
    </Btn>
  );
}
