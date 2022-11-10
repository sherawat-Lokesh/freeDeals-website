import "tachyons";
import SearchIcon from "@mui/icons-material/Search";
import "./searchbar.css";

const SearchBar = () => {
  return (
    <div className="flex">
      <input
        className="w-100 h2  br bb fw4"
        type={"text"}
        placeholder="Search here..."
      ></input>

      <SearchIcon
        className="search-icon h2 br bb hover-black"
        sx={{ fontSize: 30 }}
        color="action"
      />
    </div>
  );
};

export default SearchBar;