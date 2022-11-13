import "tachyons";
import SearchIcon from "@mui/icons-material/Search";
import "./searchbar.css";

const SearchBar = () => {
  return (
    <div className="flex">
      <input
        className="w-100   br bb fw4"
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
