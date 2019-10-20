import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import styled from "styled-components";
const QueryResults = props => {
  return (
    <StyledCard>
      <CardContent>
        <div>Question: {props.question}</div>
        <br />
        <div>Answer: {props.answer}</div>
      </CardContent>
    </StyledCard>
  );
};

const StyledCard = styled(Card)`
  padding: 20px;
  margin: 20px;
`;
export default QueryResults;
