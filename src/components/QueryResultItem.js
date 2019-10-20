import React from "react";

const QueryResults = props => {
  return (
    <li>
      <div>Question: {props.question}</div>
      <div>Answer: {props.answer}</div>
    </li>
  );
};

export default QueryResults;
