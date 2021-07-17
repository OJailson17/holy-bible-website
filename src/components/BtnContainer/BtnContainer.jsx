import styled from "styled-components";

const BtnWrapper = styled.div`
/* background-color: red; */
  width: 100%;
  display: flex;
  flex-direction: ${({primary}) => primary ? "column" : ""};
  justify-content: space-between;

  @media ${({ theme }) => theme.queries.medium} {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media ${({ theme }) => theme.queries.big} {
    width: 60%;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media ${({ theme }) => theme.queries.large} {
    width: 75%;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media ${({ theme }) => theme.queries.xlarge} {
    width: 70%;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export function BtnContainer({children, primary}) {
    return <BtnWrapper primary={primary}>{children}</BtnWrapper>
}