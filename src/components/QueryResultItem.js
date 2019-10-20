import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
const QueryResults = props => {
  return (
    <Card>
      <CardContent>
        <div>Question: {props.question}</div>
        <div>Answer: {props.answer}</div>
      </CardContent>
    </Card>
  );
};

export default QueryResults;
