import React from "react";
import "./Header.css";
import Search from "../../components/Search";
function Header({ onSearch, value, onChange }) {
  return (
    <div className="header p-3 mb-3" id="header">
      <div
        className="container d-flex justify-content-between
       align-items-center text-light"
      >
        <h1>Movies</h1>
        <Search onSearch={onSearch} value={value} handleOnChange={onChange} />
      </div>
    </div>
  );
}

export default Header;
