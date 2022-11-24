import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "tachyons";
import SearchIcon from "@mui/icons-material/Search";
import "./searchbar.css";
import { useState } from "react";

const SearchBar = ({ carddata }) => {
  const [result, setResult] = useState([]);
  function searchResult(e) {
    if (e.key === "Enter") {
      carddata.filter((result) => {
        if (`${result.heading}`.toLowerCase().match(e.target.value)) {
          console.log(result);
        }
      });
    }
  }

  return (
    <div className="flex">
      <input
        onKeyDown={searchResult}
        className="search-input w-100   br bb fw4"
        type={"text"}
        placeholder="Search here..."
      ></input>

      <SearchIcon
        className="search-icon h2 br bb hover-black"
        style={{ fill: "red" }}
        sx={{ fontSize: 40 }}
      />
    </div>
  );
};

export default SearchBar;
