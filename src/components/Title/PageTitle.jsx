import styled from 'styled-components'

export const Title = styled.div`
width: 90%;
text-align: center;
font-size: 25px;
margin: 0 auto;
margin-top: 30px;
margin-bottom: 116px;

@media ${({ theme }) => theme.queries.xsmall} {
    font-size: 25px;
  }
`

export function PageTitle() {
    return <Title>
        <h1 style={{fontFamily: "'Prata', serif"}}>Bíblia Sagrada</h1>
    </Title>
}