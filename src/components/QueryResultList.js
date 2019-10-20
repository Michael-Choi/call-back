import React from "react";
import QueryResultItem from "./QueryResultItem";

const QueryResultList = props => {
  const queryResults = props.queryResult.map(element => {
    return (
      <QueryResultItem
        question={element.faq.question}
        answer={element.faq.answer}
      />
    );
  });
  return <ul>{queryResults}</ul>;
};

export default QueryResultList;
