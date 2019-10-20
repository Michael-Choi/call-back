import React from "react";

import { TextField, Button } from "@material-ui/core";
import styled from "styled-components";

const Searchbar = props => {
  return (
    <div className={props.className}>
      <form>
        <StyledTextField
          onChange={e => props.setQuery(e.target.value)}
          type="text"
          name="query"
          label="Search interview questions"
        />
        <br />
        <br />
        <Button type="submit" onClick={props.queryKnowledge}>
          Submit
        </Button>
        <Button onClick={e => e.preventDefault()}>Random Question</Button>
      </form>
    </div>
  );
};
const StyledTextField = styled(TextField)`
  width: 50%;
`;

export default Searchbar;
