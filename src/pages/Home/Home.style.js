import styled from "styled-components";
// import {Link} from 'react-router-dom'

// Main Container
export const MainContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 15px;
  align-items: center;
  justify-content: center;
  margin: 0 0 50px 0;

  @media ${({ theme }) => theme.queries.big} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${({ theme }) => theme.queries.large} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${({ theme }) => theme.queries.xlarge} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

// Topic Container
export const TopicWrapper = styled.a`
  width: 90%;
  max-width: 350px;
  height: 120px;
  margin: 0 auto;
  border-radius: 10px;
  background-color: #0288d1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  text-align: center;
  color: white;

  span {
    margin-top: 5px;
  }

  @media ${({ theme }) => theme.queries.xsmall} {
    font-size: 14px;
  }

  @media ${({ theme }) => theme.queries.big } {
    flex-direction: row;

    span {
      margin-left: 20px;
    }
  }
`;

// Icons
export const IconImage = styled.img`
  width: 30px;

  @media ${({ theme }) => theme.queries.large} {
    width: 33px;
  }
`;
// Footer
export const FooterText = styled.p`
  color: black;
  text-align: center;
  margin-bottom: 20px;
  position: relative;

  a {
    color: black;
    font-weight: bold;
    text-decoration: underline;
  }

  @media ${({ theme }) => theme.queries.xsmall} {
    font-size: 14px;
  }

  @media ${({ theme }) => theme.queries.large} {
    width: 90%;
    position: absolute;
    bottom: 0;
  }
`;
