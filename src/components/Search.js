import React from "react";
import "./Search.css";
function Search({ onSearch, value, handleOnChange }) {
  return (
    <form onSubmit={onSearch}>
      <div className="form-group">
        <input
          className="form-control"
          value={value}
          placeholder="search...."
          onChange={handleOnChange}
        />
      </div>
    </form>
  );
}

export default Search;
