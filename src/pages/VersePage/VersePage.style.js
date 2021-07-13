import styled from "styled-components";

// export const PageWrapper = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-top: 32px;
//   margin-bottom: 60px;
// `;

export const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media ${({ theme }) => theme.queries.big} {
    width: 50%;
    /* justify-content: space-around; */
  }

  @media ${({ theme }) => theme.queries.large} {
    width: 50%;
    /* justify-content: space-around; */
  }

  @media ${({ theme }) => theme.queries.xlarge} {
    width: 50%;
    /* justify-content: space-around; */
  }
`;
