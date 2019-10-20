import React, { useState } from "react";

const Searchbar = props => {
  return (
    <div>
      <div>{props.queryVal}</div>
      <form onSubmit={props.queryKnowledge}>
        <input
          onChange={e => props.setQuery(e.target.value)}
          type="text"
          name="query"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Searchbar;
