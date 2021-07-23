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
  transition: .3s;

  i {
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
          cursor: pointer;
          text-align: left;
        }

        .deleteIcon {
          width: 10%;
          cursor: pointer;
        }

        i {
          font-size: 18px;
          cursor: pointer;
        }
      }
    `}
`;

export function Buttons({ children, secondary, handleClick, dataValue }) {
  return <Btn secondary={secondary} onClick={handleClick} data-abbrev={dataValue}>{children}</Btn>;
}
