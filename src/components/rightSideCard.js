
const RightCard = ({ cardData: cardComponent }) => {

    //sorting out component which have topicName='FREE KA MAAL'
    const freekamaal = cardComponent.filter(myFuntion).reverse()

function myFuntion(values) {
    return (`${values.topicname}`.toUpperCase()) === "FREE KA MAAL";
}

return (
  <div>
      <div className="pa3 mr5 mt3 shadow-4 ba b--light-gray  near-black { color: #111111 }bg-white { background-color: #FFFFFF } ">
        <img alt="amitab bachan" src="https://paisawasooldeal.in/wp-content/uploads/2022/09/Cadbury-PlayPad-Paytm-Cashback.webp"></img>
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
                            
                            {// eslint-disable-next-line
                            freekamaal.reverse().map((values, i) => {
                              if (i < 5) {
                                return (
                                  <div key={i} className="hover-moon-gray mt2 flex bb  b--light-gray ">
                                    <img className="w3 h3 br2" src={values.image} alt={values.topicname}></img>
                                      <p className="Heading ml4 mr2 normal mt0 ml1">{values.heading}</p>
                                  </div>
                                );
                              }
                            })}
                          </div>
                  </div>
                </div>
  </div>
  );
};
export default RightCard;
