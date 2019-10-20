import React from "react";
import QueryResultItem from "./QueryResultItem";

const QueryResultList = props => {
  const queryResults = props.queryResult
    .filter(element => element.confidence > 0.2)
    .map(element => {
      return (
        <QueryResultItem
          question={element.faq.question}
          answer={element.faq.answer}
        />
      );
    });
  return <ul>{props.currentStatus ? props.currentStatus : queryResults}</ul>;
};

export default QueryResultList;
