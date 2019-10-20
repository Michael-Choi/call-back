import React, { useState } from "react";
import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import axios from "axios";
import styled from "styled-components";
import QueryResultList from "./components/QueryResultList";
import RandomResult from "./components/RandomResult";
function App() {
  const [queryVal, setQuery] = useState("");
  const [queryResult, setQueryResult] = useState([]);
  const [randomResult, setRandomResult] = useState([]);
  const [currentStatus, setCurrentStatus] = useState("");
  const [buttonVal, setButtonVal] = useState(true);
  function queryKnowledge(e) {
    setRandomResult([]);
    if (e) {
      e.preventDefault();
    }
    if (queryVal.length === 0) {
      setCurrentStatus("Query can not be empty");
      return;
    }
    setCurrentStatus("Loading...");
    console.log(e);
    const options = {
      headers: {
        "Content-Type": "application/json",
        organizationid: "8bf99425-ed78-4f98-9357-a5458395e30f",
        token:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJvcmdJZCI6IjhiZjk5NDI1LWVkNzgtNGY5OC05MzU3LWE1NDU4Mzk1ZTMwZiIsImV4cCI6MTU3MTU2ODQwMywiaWF0IjoxNTcxNTY0ODAzfQ.UkgE7GvR7vlpVU_Q5wl1f5-RTJVTGrEAR85Yf1rJVuY",

        "cache-control": "no-cache",
        "Postman-Token": "6bcf62f6-75d6-4d42-a805-185a1b2bbbf6"
      }
    };
    axios
      .post(
        "https://cors-anywhere.herokuapp.com/https://api.genesysappliedresearch.com/v2/knowledge/knowledgebases/61d4a545-97fd-4ab2-b2dc-403f1e80c1ec/search",
        {
          query: queryVal,
          pageSize: 5,
          pageNumber: 1,
          sortOrder: "string",
          sortBy: "string",
          languageCode: "en-US",
          documentType: "Faq"
        },
        options
      )
      .then(response => {
        console.log(response.data.results);
        setQueryResult(response.data.results);
        return response;
      })
      .then(response => {
        response.data.results.length !== 0
          ? setCurrentStatus("")
          : setCurrentStatus("Please rephrase the question");
      })
      .catch(error => console.log(error));
  }

  function randomQuery(e) {
    //onclick removes other query
    setQueryResult([]);
    setButtonVal(true);
    setRandomResult([]);
    if (e) {
      e.preventDefault();
    }
    setCurrentStatus("Loading...");
    console.log(e);
    const options = {
      headers: {
        "Content-Type": "application/json",
        organizationid: "8bf99425-ed78-4f98-9357-a5458395e30f",
        token:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJvcmdJZCI6IjhiZjk5NDI1LWVkNzgtNGY5OC05MzU3LWE1NDU4Mzk1ZTMwZiIsImV4cCI6MTU3MTU2ODQwMywiaWF0IjoxNTcxNTY0ODAzfQ.UkgE7GvR7vlpVU_Q5wl1f5-RTJVTGrEAR85Yf1rJVuY",

        "cache-control": "no-cache",
        "Postman-Token": "6bcf62f6-75d6-4d42-a805-185a1b2bbbf6"
      }
    };
    axios
      .post(
        "https://cors-anywhere.herokuapp.com/https://api.genesysappliedresearch.com/v2/knowledge/knowledgebases/61d4a545-97fd-4ab2-b2dc-403f1e80c1ec/search",
        {
          query: "What leadership skills do you possess?",
          pageSize: 30,
          pageNumber: 1,
          sortOrder: "string",
          sortBy: "string",
          languageCode: "en-US",
          documentType: "Faq"
        },
        options
      )
      .then(response => {
        let random = Math.floor(Math.random() * 20);
        setCurrentStatus("");

        console.log(response.data.results);
        setRandomResult([
          response.data.results[random].faq.question,
          response.data.results[random].faq.answer
        ]);
      })
      .catch(error => console.log(error));
  }

  return (
    <StyledHomePage className="App">
      <StyledHeader />
      <StyledSearchbar
        setQuery={setQuery}
        queryKnowledge={queryKnowledge}
        randomQuery={randomQuery}
        queryVal={queryVal}
      />
      <QueryResultList
        currentStatus={currentStatus}
        queryResult={queryResult}
      />
      {randomResult.length !== 0 && (
        <RandomResult
          buttonVal={buttonVal}
          setButtonVal={setButtonVal}
          randomResult={randomResult}
        />
      )}
    </StyledHomePage>
  );
}

const StyledHeader = styled(Header)`
  text-align: center;
`;
const StyledHomePage = styled.div`
  top: 3%;
  height: 100vh;
`;

const StyledSearchbar = styled(Searchbar)`
  top: 20%;
  text-align: center;
`;

export default App;
