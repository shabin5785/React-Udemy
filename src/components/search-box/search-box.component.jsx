import React from "react";
import "./search-box.styles.css";

//de structuring props
//same as props.placeholder
//second props param is a function to be invoked for onchange
export const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};
