import SearchIcon from "@mui/icons-material/Search";
import "tachyons";
import "./searchbar.css";
import {  useNavigate } from "react-router-dom";


const SearchBar = ({ carddata,onChangeSet}) => {
  
  const navigate=useNavigate();
  let arr = [];
  
function searchResult(e) {    
    if (e.key === "Enter") {
      if (e.target.value === "") return;
          arr = [];
          if(window.location.pathname!=='/SearchResult') navigate('/SearchResult')
            carddata.filter((result) => {
              if (`${result.heading}`.toLowerCase().match(e.target.value)) {
                  arr.push(result);
                    onChangeSet([...arr])
                }   
            });
    }
  }



  return (
    <div className="flex">
      <input onKeyDown={searchResult} className="search-input w-100   br bb fw4" type="text" placeholder="Search here..." ></input>
        <SearchIcon className="search-icon h2 br bb hover-black" style={{ fill: "red" }} sx={{ fontSize: 40 }} />
    </div>
  );
};

export default SearchBar;
