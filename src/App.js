import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import SearchBar from "./components/searchBar";
import Cards from "./components/Cards.js";

function App() {
  const [cards, setCards] = useState(undefined);

  useEffect(() => {
    fetch("http://localhost:8000/", { method: "get" })
      .then((res) => res.json())
      .then((card) => {
        setCards(card);
      });
    console.log("a");
  }, []);

  return (
    <div>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="search-box">
        <SearchBar />
      </div>
      <div>
        <Cards carddata={cards} />
      </div>
    </div>
  );
}

export default App;
