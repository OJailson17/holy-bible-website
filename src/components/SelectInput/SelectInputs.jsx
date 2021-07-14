import React from "react";
import styled from "styled-components";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { useContext } from "react";
import { BibleContextProvider } from "../../context/bibleContext";

const SelectInput = styled(Select)`
  width: 100%;
  max-width: 332px;

  @media ${({ theme }) => theme.queries.medium} {
    width: 332px;
  }
`;

const Form = styled(FormControl)`
  @media only screen and (min-width: 1024px) {
    .hidden {
      display: none;
    }
  }
`;

export function SelectBook() {
  const { books, book, setBook } = useContext(BibleContextProvider);

  const handleChange = (e) => {
    setBook(e.target.value);
  };

  return (
    <>
      <FormControl variant="outlined">
        <InputLabel id="chapter-label">Escolher livro</InputLabel>
        <SelectInput
          labelId="chapter-label"
          value={book}
          onChange={handleChange}
          label="Escolher livro"
        >
          {books?.map((book) => (
            <MenuItem value={book?.abbrev?.pt} key={book?.name}>
              {book?.name}
            </MenuItem>
          ))}
        </SelectInput>
      </FormControl>
    </>
  );
}

export function SelectChapter({ verse }) {
  const { qtdChapter, chapter, setChapter } = useContext(BibleContextProvider); 
  
  const handleChange = (e) => {
    setChapter(e.target.value);
  }

  return (
    <>
      <Form variant="outlined" verse={verse}>
        <InputLabel id="chapter-label" className="hidden">
          Escolher capítulo
        </InputLabel>
        <SelectInput
          className="hidden"
          labelId="chapter-label"
            value={chapter}
            onChange={handleChange}
          label="Escolher capítulo"
        >
          {[...Array(qtdChapter)]?.map((item, index) => (
            <MenuItem value={index + 1} key={index + 1}>
              {index + 1}
            </MenuItem>
          ))}
        </SelectInput>
      </Form>
    </>
  );
}
