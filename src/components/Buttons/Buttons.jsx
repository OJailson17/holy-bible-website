import styled from "styled-components";

const Btn = styled.button`
  width: 100%;
  height: 50px;
  color: white;
  background-color: #0288d1;
  border: none;
  border-radius: 5px;
  margin-bottom: 10px;
  font-size: 17px;
  cursor: pointer;

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
`;

export function Buttons({ children }) {
  return <Btn>{children}</Btn>;
}
