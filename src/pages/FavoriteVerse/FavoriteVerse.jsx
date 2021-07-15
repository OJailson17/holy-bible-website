import styled from 'styled-components'
import { BtnContainer } from "../../components/BtnContainer/BtnContainer";
import { Buttons } from "../../components/Buttons/Buttons";
import { Navigation } from "../../components/Navigation/Navigation";
import { PageWrapper } from "../../components/PageWrapper/PageWrapper";
import { Subtitle } from "../../components/Subtitle/Subtitle";
import { PageTitle } from "../../components/Title/PageTitle";

const FavoriteBtn = styled.div`
margin-top: 30px;
width: 100%;
height: 30px;
display: flex;
justify-content: flex-end;
align-items: center;
position: relative;

& > button {
    font-size: 16px;
    background: transparent;
    height: 30px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 5px;
    transition: .3s;
    
    i {
        color: black;
        font-size: 18px;
        margin-left: 10px;
        margin-right: 3px;
    }

    span {
        margin-left: 10px;
    }

    &:hover {
        background: black;
        color: white;

        i {
            color: white;
        }
    }

}
@media ${({theme}) => theme.queries.medium} {
    width: 95%
}

@media only screen and (min-width: 1024px) {
    justify-content: flex-start;
    div {
        flex-direction: row;

        i {
            margin-right: 10px;
        }

        span {
            margin-right: 10px;
        }
    }
}

`

export function FavoriteVerse() {
  return (
    <>
      <PageTitle />

      <main>

      <Subtitle>
        <h2>Versículos Favoritos</h2>
      </Subtitle>

      <FavoriteBtn>
      <button>
      <i className="fas fa-plus-circle"></i>
      <span>Adicionar Favorito</span>
      </button>
      </FavoriteBtn>
      <PageWrapper secondary>
        <BtnContainer primary>
          <Buttons secondary>
            <div>
              <div className="text">Salmos 15:5</div>
              <div className="deleteIcon">
                <i className="fas fa-trash"></i>
              </div>
            </div>
          </Buttons>
          <Buttons secondary>
            <div>
              <div className="text">Apocalipse 20:9</div>
              <div className="deleteIcon">
                <i className="fas fa-trash"></i>
              </div>
            </div>
          </Buttons>
          <Buttons secondary>
            <div>
              <div className="text">Salmos 15:5</div>
              <div className="deleteIcon">
                <i className="fas fa-trash"></i>
              </div>
            </div>
          </Buttons>
          <Buttons secondary>
            <div>
              <div className="text">Salmos 15:5</div>
              <div className="deleteIcon">
                <i className="fas fa-trash"></i>
              </div>
            </div>
          </Buttons>
          <Buttons secondary>
            <div>
              <div className="text">Salmos 15:5</div>
              <div className="deleteIcon">
                <i className="fas fa-trash"></i>
              </div>
            </div>
          </Buttons>
          <Buttons secondary>
            <div>
              <div className="text">Salmos 15:5</div>
              <div className="deleteIcon">
                <i className="fas fa-trash"></i>
              </div>
            </div>
          </Buttons>
          <Buttons secondary>
            <div>
              <div className="text">Salmos 15:5</div>
              <div className="deleteIcon">
                <i className="fas fa-trash"></i>
              </div>
            </div>
          </Buttons>
          <Buttons secondary>
            <div>
              <div className="text">Salmos 15:5</div>
              <div className="deleteIcon">
                <i className="fas fa-trash"></i>
              </div>
            </div>
          </Buttons>
          <Buttons secondary>
            <div>
              <div className="text">Salmos 15:5</div>
              <div className="deleteIcon">
                <i className="fas fa-trash"></i>
              </div>
            </div>
          </Buttons>
        </BtnContainer>
        <Navigation />
      </PageWrapper>
      </main>
    </>
  );
}
