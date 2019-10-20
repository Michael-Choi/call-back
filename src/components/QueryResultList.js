import React from "react";
import QueryResultItem from "./QueryResultItem";
import Container from "@material-ui/core/Container";

const QueryResultList = props => {
  const queryResults = props.queryResult
    .filter(element => element.confidence > 0.3)
    .map(element => {
      return (
        <QueryResultItem
          key={element.id}
          question={element.faq.question}
          answer={element.faq.answer}
        />
      );
    });
  return (
    <Container maxWidth="md">
      <br />
      {props.currentStatus ? props.currentStatus : queryResults}
    </Container>
  );
};

export default QueryResultList;
