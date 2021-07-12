import React from "react";
import styled from "styled-components";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";

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
  return (
    <>
      <FormControl variant="outlined">
        <InputLabel id="chapter-label">Escolher livro</InputLabel>
        <SelectInput
          labelId="chapter-label"
          //   value={10}
          //   onChange={handleChange}
          label="Escolher livro"
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </SelectInput>
      </FormControl>
    </>
  );
}

export function SelectChapter() {
  const myArr = [1, 2, 3, 4, 5];

  return (
    <>
      <Form variant="outlined">
        <InputLabel
          id="chapter-label"
          className="hidden"
        >
          Escolher capítulo
        </InputLabel>
        <SelectInput
          className="hidden"
          labelId="chapter-label"
          //   value={10}
          //   onChange={handleChange}
          label="Escolher capítulo"
        >
          {myArr.map((item) => (
            <MenuItem value={item} key={item}>
              {item}
            </MenuItem>
          ))}
        </SelectInput>
      </Form>
    </>
  );
}
