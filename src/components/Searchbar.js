import React, { useState } from "react";
import axios from "axios";
const Searchbar = () => {
  const [queryVal, setQuery] = useState("");
  const [queryQuestion, setQueryQuestion] = useState("");
  const [queryAns, setQueryAns] = useState("");
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
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJvcmdJZCI6IjhiZjk5NDI1LWVkNzgtNGY5OC05MzU3LWE1NDU4Mzk1ZTMwZiIsImV4cCI6MTU3MTU0NjU3OSwiaWF0IjoxNTcxNTQyOTc5fQ.nf58KUnAiE-suVlM8xvLz21z01X0qzkjiIPvqIoEKUY",

        "cache-control": "no-cache",
        "Postman-Token": "6bcf62f6-75d6-4d42-a805-185a1b2bbbf6"
      }
    };
    axios
      .post(
        "https://cors-anywhere.herokuapp.com/https://api.genesysappliedresearch.com/v2/knowledge/knowledgebases/a758dd00-9ffe-4a9b-8aa7-54687fc9330f/search",
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
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }
  return (
    <div>
      <div>{queryVal}</div>
      <form onSubmit={queryKnowledge}>
        <input
          onChange={e => setQuery(e.target.value)}
          type="text"
          name="query"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Searchbar;
