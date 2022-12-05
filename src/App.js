import React, { useEffect, useState } from "react";
import { BrowserRouter as Router} from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import SearchBar from "./components/searchBar";
import Cards from "./components/Cards.js";

function App() {

  const [cards, setCards] = useState(undefined);
  const [searchData,setSearchData]=useState([]);


  useEffect(() => {
    fetch(" https://plain-cow-top-coat.cyclic.app/",{method:"get"})
      .then((res) => res.json())
        .then((card) => {
          setCards(card);}
            ).catch((err) => console.error(err));
  }, []);



  return (
    <div>
      <Router> 
          <div key="navbar" className="navbar">
            <Navbar />
          </div>
              <div key="search-box" className="search-box">
                <SearchBar carddata={cards} onChangeSet={setSearchData}/>
              </div>
                  <div>
                    <Cards key="cards" carddata={cards} SearchingDataResult={searchData}/>
                  </div>
                     
      </Router>
    </div>
  );
}

export default App;
