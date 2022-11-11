import "tachyons";
import "./card.css";

const Cards = ({ data: cardComponent }) => {
  if (cardComponent === undefined) return;

  return (
    <div className="flex mt4  ">
      <div>
        <div className="cards near-black { color: #111111 }bg-white { background-color: #FFFFFF } pv3  mr4 ml5  shadow-4 ">
          {cardComponent.forEach((element) => {})}
          <span className="flex ">
            <img
              className="ml2"
              src="https://paisawasooldeal.in/wp-content/uploads/2022/09/KBC-Pari-Match-Quiz-Answers-Today.webp"
            ></img>
            <div>
              <h4 className=" ml4 mr2 light-purple">KBC QUIZ ANSWER</h4>
              <h3 className="heading ml4 mr2 ">
                KBC Pari Match Quiz Answers Today 10th November : Play & Win
                Extra Points Daily
              </h3>
              <h5 className="description ml4 mr2 ">
                KBC Pari Match Quiz Answers Today 10th November: Play the KBC
                pari match news quiz daily and collect extra points every day.
              </h5>
              <h5 className="date flex justify-end mr3 bt pt3 ml4">
                10 october 22
              </h5>
            </div>
          </span>
        </div>
      </div>

      <div className="pa3 mr5  shadow-4   near-black { color: #111111 }bg-white { background-color: #FFFFFF } ">
        <img src="https://paisawasooldeal.in/wp-content/uploads/2022/09/KBC-Pari-Match-Quiz-Answers-Today.webp"></img>
      </div>
    </div>
  );
};
export default Cards;
