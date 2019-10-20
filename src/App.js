import React, { useState } from "react";
import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import axios from "axios";
import QueryResultList from "./components/QueryResultList";

function App() {
  const [queryVal, setQuery] = useState("");
  const [queryResult, setQueryResult] = useState([]);

  function queryKnowledge(e) {
    if (e) {
      e.preventDefault();
    }
    console.log(e);
    const options = {
      headers: {
        "Content-Type": "application/json",
        organizationid: "8bf99425-ed78-4f98-9357-a5458395e30f",
        token:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJvcmdJZCI6IjhiZjk5NDI1LWVkNzgtNGY5OC05MzU3LWE1NDU4Mzk1ZTMwZiIsImV4cCI6MTU3MTU1NTQ3MSwiaWF0IjoxNTcxNTUxODcxfQ.KRXV35h4kGaGoByqS36UbAX7tv2TBJlmll7i3HmlBWA",
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
      })
      .catch(error => console.log(error));
  }

  return (
    <div className="App">
      <Header />
      <Searchbar
        setQuery={setQuery}
        queryKnowledge={queryKnowledge}
        queryVal={queryVal}
      />
      <QueryResultList queryResult={queryResult} />
    </div>
  );
}

export default App;
