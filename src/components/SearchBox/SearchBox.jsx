import React from "react";
import s from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { setStatusFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setStatusFilter(e.target.value));
  };
  return (
    <div className={s.searchBox}>
      <label htmlFor="search-input">Find contacts by name</label>
      <input id="search-input" type="text" onChange={handleChange} />
    </div>
  );
};

export default SearchBox;
