import React from "react";
import s from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={s.searchBox}>
      <label htmlFor="search-input">Find contacts by name</label>
      <input id="search-input" type="text" value={value} onChange={onChange} />
    </div>
  );
};

export default SearchBox;
