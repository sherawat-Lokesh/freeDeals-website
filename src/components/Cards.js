import { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css";
import "tachyons";
import "./card.css";
import pagination from "./pagination.js";

const Cards = ({ carddata: cardComponent }) => {
  const fadeUp = "fade-up";
  useEffect(() => {
    aos.init({ duration: 1000 / 2 });
  }, []);

  if (cardComponent === undefined) return;

  const freekamaal = cardComponent.filter(myFuntion);
  function myFuntion(values, i, array) {
    if (i <= 6) {
      return values.topicName === "FREE KA MAAL";
    }
  }

  return (
    <div className="flex mt4  ">
      <div>
        {cardComponent.map((element, i) => {
          return (
            <div
              data-aos={fadeUp}
              className="cards mt3 ba  b--light-gray near-black { color: #111111 }bg-white { background-color: #FFFFFF } pv2  mr4 ml5  shadow-4 "
            >
              <span className="flex ">
                <img
                  className="left-sec-image ml2 link Dim"
                  src={element.image}
                  alt={element.topicName}
                ></img>
                <div>
                  <h4 className=" ml4 mr2 light-purple">{element.topicName}</h4>
                  <h3 className="heading ml4 mr2  ">{element.heading}</h3>
                  <h5 className="description ml4 mr2 ">
                    {element.description}
                  </h5>
                  <h5 className="date flex justify-end mr3 bt pt3 ml4">
                    {element.date}
                  </h5>
                </div>
              </span>
            </div>
          );
        })}
      </div>

      <div className="right-section">
        {/* IMAGE SECTION TOP RIGHT SIDE */}
        <div className="pa3 mr5 mt3 shadow-4 ba b--light-gray  near-black { color: #111111 }bg-white { background-color: #FFFFFF } ">
          <img
            alt="amitab bachan"
            src="https://paisawasooldeal.in/wp-content/uploads/2022/09/KBC-Pari-Match-Quiz-Answers-Today.webp"
          ></img>
        </div>
        {/* free ka maal sectio RIGHT SIDE */}
        <div className="pa2 mr5 mt3 shadow-4 ba b--light-gray  near-black { color: #111111 }bg-white { background-color: #FFFFFF } ">
          <div>
            <div className="heading flex bb">
              <h2>|</h2>
              <h2 className="pt1 ">&nbsp; FREE KA MAAL</h2>
            </div>
            {/* free ka maal items list start from here */}
            <div>
              {freekamaal.map((values) => {
                return (
                  <div className="hover-moon-gray mt2 flex bb  b--light-gray ">
                    <img
                      className="w3 h3 br2"
                      src={values.image}
                      alt={values.topicName}
                    ></img>
                    <p className="Heading ml4 mr2 normal mt0 ml1">
                      {values.heading}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cards;
