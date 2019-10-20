import React from "react";
import { Card, CardContent, CardActions, Button } from "@material-ui/core/";

import styled from "styled-components";
const QueryResults = props => {
  return (
    <StyledCard>
      <CardContent>
        <div>Question: {props.question}</div>
        <br />
        <div>Answer: {props.answer}</div>
      </CardContent>
      <CardActions>
        <div>Helpfulness: {props.votes}</div>

        <Button>Upvote</Button>
        <Button>Downvote</Button>
      </CardActions>
    </StyledCard>
  );
};

const StyledCard = styled(Card)`
  padding: 20px;
  margin: 20px;
`;
export default QueryResults;
