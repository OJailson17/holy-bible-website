import styled from "styled-components";

const Header = styled.header`
  @media ${({ theme }) => theme.queries.exception} {
    .hidden {
      display: ${({home}) => home ? 'flex' : 'none'};
    }
  }
`;

export const Title = styled.div`  
  width: 90%;
  text-align: center;
  font-size: 25px;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 116px;

  a {
    color: black;
  }

  @media ${({ theme }) => theme.queries.xsmall} {
    font-size: 25px;
  }
`;

export function PageTitle({home}) {
  return (
    <Header home={home}>
          <div className="hidden">
      <Title>
        <h1>
          <a href="/" style={{ fontFamily: "'Prata', serif" }}>Bíblia Sagrada</a>
        </h1>
      </Title>
      </div>
    </Header>
  );
}
