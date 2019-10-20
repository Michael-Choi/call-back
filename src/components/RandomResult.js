import React from "react";
import { Button, Card, CardContent, Container } from "@material-ui/core";

const RandomResult = props => {
  return (
    <Container maxWidth="md">
      <br />
      <Card>
        <CardContent>
          <div>Question: {props.randomResult[0]}</div>
          <br />
          {props.buttonVal ? (
            <Button
              variant="outlined"
              onClick={() => props.setButtonVal(false)}
            >
              View Answer
            </Button>
          ) : (
            <div>Answer: {props.randomResult[1]}</div>
          )}
        </CardContent>
      </Card>
    </Container>
  );
};

export default RandomResult;
