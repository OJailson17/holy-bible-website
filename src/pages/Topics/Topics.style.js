import styled from "styled-components";

export const Subtitle = styled.div`
  @media ${({ theme }) => theme.queries.xsmall} {
    text-align: center;
    margin-top: 30px;
  }

  @media ${({ theme }) => theme.queries.small} {
    text-align: center;
    margin-top: 30px;
  }
`;

export const BtnContainer = styled.div`
  width: 100%;

  @media ${({ theme }) => theme.queries.medium} {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media ${({ theme }) => theme.queries.big} {
    width: 70%;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media ${({ theme }) => theme.queries.large} {
    width: 70%;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media ${({ theme }) => theme.queries.xlarge} {
    width: 80%;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;
