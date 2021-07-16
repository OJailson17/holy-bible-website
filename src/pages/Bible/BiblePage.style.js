import styled from "styled-components";


export const PageContainer = styled.div`
/* background-color: yellow; */
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 32px;

  .select-container {
    width: 100%;
    height: 130px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media ${({ theme }) => theme.queries.medium} {
        flex-direction: row;
        justify-content: space-around;
        height: 60px;
    }
  }
  
      @media only screen and (min-width: 1024px) {
        margin-bottom: 0px;
      }
`;

export const ChangePageContainer = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
margin-bottom: 30px;

@media ${({ theme }) => theme.queries.big} {
     width: 88%;
    }

 @media ${({ theme }) => theme.queries.large} {
     width: 80%;
    }

 @media ${({ theme }) => theme.queries.xlarge} {
     width: 70%;
    }
`

export const ChangePageBtn = styled.button`
width: 30%;
height: 35px;
margin-top: 30px;
background: transparent;
border: 1px solid black;
border-radius: 5px;
color: black;
outline: none;
cursor: pointer;
transition: .3s;

&:hover {
  background: black;
  color: white;


}
`
