import React from "react";
import "../search.css";

function Search() {
  return (
    <form>
      <input className="ingredient-search" placeholder="Input ingredient..."></input>
      <input type="submit" />

      <input className="ingredient-search" placeholder="Input ingredient..."></input>
      <input type="submit" />

      <input className="ingredient-search" placeholder="Input ingredient..."></input>
      <input type="submit" />
    </form>
  );
}

export default Search;