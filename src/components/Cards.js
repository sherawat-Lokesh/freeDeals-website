import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "aos";
import "aos/dist/aos.css";
import "tachyons";
import "./card.css";
import LeftCard from "./leftSideCard.js";
import RightCard from "./rightSideCard.js";
import CardArticle from "../cardArticle/cardArticle";

const Cards = ({ carddata: cardComponent }) => {
  //if card component have no value it won't work
  if (cardComponent === undefined) return;

  return (
    <Router>
      <div className="flex mt4 ">

        <Routes>
          <Route
            path="/"
            element={<LeftCard cardData={cardComponent} />}
          ></Route>

          <Route
            path="/article"
            element={<CardArticle cardData={cardComponent} />}
          ></Route>
        </Routes>

        <div className="right-section">
          <RightCard cardData={cardComponent} />
        </div>

      </div>

    </Router>
  );
};
export default Cards;
