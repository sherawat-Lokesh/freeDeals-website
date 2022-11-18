import { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const LeftCard = ({ cardData: cardComponent, getFileName }) => {
  //transition type
  const fadeUp = "fade-up";

  useEffect(() => {
    aos.init({ duration: 1000 / 2 });
  }, []);

  return (
    <div>
      {cardComponent
        .map((element, i) => {
          return (
            <div
              key={i}
              data-aos={fadeUp}
              className="cards mt3 ba  b--light-gray near-black { color: #111111 }bg-white { background-color: #FFFFFF } pv2  mr4 ml5  shadow-4 "
            >
              <span className="image-overflow flex ">
                <img
                  className="left-sec-image ml2 link Dim"
                  src={element.image}
                  alt={element.topicname}
                ></img>
                <div>
                  <h4 className=" ml4 mr2 light-purple">{element.topicname}</h4>
                  <h3
                    className="heading ml4 mr2  "
                    onClick={(e) => {
                      e.preventDefault();
                      if (element?.filename === null) return;
                      getFileName(element.filename);
                    }}
                  >
                    <Link className="no-underline black" to="/article">
                      {element.heading}
                    </Link>
                  </h3>
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
        })
        .reverse()}
    </div>
  );
};

export default LeftCard;
