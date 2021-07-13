import styled from 'styled-components'

const SubtitleContainer = styled.div`
  @media ${({ theme }) => theme.queries.xsmall} {
    text-align: center;
    margin-top: 30px;
  }

  @media ${({ theme }) => theme.queries.small} {
    text-align: center;
    margin-top: 30px;
  }
`;

export function Subtitle({children}) {
    return <SubtitleContainer>{children}</SubtitleContainer>
}