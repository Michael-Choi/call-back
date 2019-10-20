import React, { useState } from "react";
import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import axios from "axios";
import styled from "styled-components";
import QueryResultList from "./components/QueryResultList";

function App() {
  const [queryVal, setQuery] = useState("");
  const [queryResult, setQueryResult] = useState([]);
  const [currentStatus, setCurrentStatus] = useState("");
  function queryKnowledge(e) {
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
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJvcmdJZCI6IjhiZjk5NDI1LWVkNzgtNGY5OC05MzU3LWE1NDU4Mzk1ZTMwZiIsImV4cCI6MTU3MTU1OTE4MywiaWF0IjoxNTcxNTU1NTgzfQ.erg1S1THIjBS8rLdQOoDmj0DOM9E9NqGGD5hQL5gTMQ",

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

  return (
    <StyledHomePage className="App">
      <StyledHeader />
      <StyledSearchbar
        setQuery={setQuery}
        queryKnowledge={queryKnowledge}
        queryVal={queryVal}
      />
      <QueryResultList
        currentStatus={currentStatus}
        queryResult={queryResult}
      />
    </StyledHomePage>
  );
}

const StyledHeader = styled(Header)`
  text-align: center;
`;
const StyledHomePage = styled.div`
  height: 100vh;
`;

const StyledSearchbar = styled(Searchbar)`
  top: 20%;
  text-align: center;
`;

export default App;
