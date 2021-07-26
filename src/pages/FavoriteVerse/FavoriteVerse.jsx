import { useContext } from "react";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { BtnContainer } from "../../components/BtnContainer/BtnContainer";
import { Buttons } from "../../components/Buttons/Buttons";
import { Navigation } from "../../components/Navigation/Navigation";
import { PageWrapper } from "../../components/PageWrapper/PageWrapper";
import { Subtitle } from "../../components/Subtitle/Subtitle";
import { PageTitle } from "../../components/Title/PageTitle";
import { BibleContextProvider } from "../../context/bibleContext";
import { removeFavorite } from "../../components/helper/removeFavorite";

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
    align-items: center;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 5px;
    transition: 0.3s;

    i {
      color: black;
      font-size: 18px;
      margin-left: 10px;
      margin-right: 3px;
    }

    a {
      display: flex;
      flex-direction: row-reverse;
      color: black;
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

      a {
        color: white;
      }
    }
  }
  @media ${({ theme }) => theme.queries.medium} {
    width: 95%;
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
`;

export function FavoriteVerse() {
  const [favorites, setFavorites] = useState([]);
  const { setBook, setChapter } = useContext(BibleContextProvider);
  const history = useHistory();


  const getfavoriteList = () => {
    const favoriteList = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(favoriteList);
  };

  const handleClick = (e) => {
    const text = e.target.innerText;
    const splitText = text.split(" ");
    let data;
    if (splitText.length > 2) {
      data = splitText[2].split(":");
    } else if (splitText.length > 3) {
      data = splitText[3].split(":");
    } else {
      data = splitText[1].split(":");
    }
    const chapterValue = data[0];
    const verseValue = data[1];
    const bookValue = e.target.dataset.abbrev;

    setBook(bookValue);
    setChapter(chapterValue);
    history.push(
      `/bible/book/${bookValue}/chapter/${chapterValue}/verse/${verseValue}/`
    );
  };

  const deleteFavorite = (e) => {
    const base = e.target.dataset;
    const obj = {
      name: base.name,
      chapter: Number(base.chapter),
      verse: Number(base.verse),
    };

    removeFavorite(obj);
    getfavoriteList()
  };


  useEffect(() => {
    getfavoriteList()
  }, []);

  return (
    <>
      <PageTitle />

      <main>
        <Subtitle>
          <h2>Versículos Favoritos</h2>
        </Subtitle>

        <FavoriteBtn>
          <button>
            <Link to="/bible">
              <i className="fas fa-plus-circle"></i>
              <span>Adicionar Favorito</span>
            </Link>
          </button>
        </FavoriteBtn>
        <PageWrapper secondary>
          <BtnContainer primary>
            {favorites?.map((favorite) => (
              <Buttons
                secondary
                key={`${favorite?.chapter}: ${favorite?.verse}`}
              >
                <div>
                  <div
                    className="text"
                    data-abbrev={favorite.abbrev}
                    onClick={handleClick}
                  >
                    {favorite?.name} {favorite?.chapter}:{favorite?.verse}
                  </div>
                  <div
                    className="deleteIcon"
                    data-name={favorite?.name}
                    data-chapter={favorite?.chapter}
                    data-verse={favorite?.verse}
                    onClick={deleteFavorite}
                  >
                    <i
                      className="fas fa-trash"
                      data-name={favorite?.name}
                      data-chapter={favorite?.chapter}
                      data-verse={favorite?.verse}
                    ></i>
                  </div>
                </div>
              </Buttons>
            ))}
          </BtnContainer>
          <Navigation />
        </PageWrapper>
      </main>
    </>
  );
}
