import { Link } from "react-router-dom";

const SearchResPage = ({searchData:SearchResult,getFileName}) => {

  if(SearchResult ===[])return
  return (
    <div
      className="cards mt3 ba w-100 b--light-gray near-black { color: #111111 }bg-white { background-color: #FFFFFF } pv2  mr4 ml5  shadow-4 ">
       {SearchResult.map(res=>{
          return(
            <span key={res.id} className="image-overflow flex pv2  bb b--light-gray  ">
                        <img className=" ml2 link Dim"  src={res.image} alt={res.topicname}></img>
                            <div>
                              <h4 className=" ml4 mr2 light-purple">{res.topicname}</h4>
                              <h3 className="heading ml4 mr2"
                                onClick={(e) => {
                                  e.preventDefault();
                                    if (res?.filename === null) return;
                                      getFileName(res.filename);
                                  }}>
                                  <Link className="no-underline black" to="/article">
                                    {res.heading}
                                  </Link>
                              </h3>
                              <h5 className="description ml4 mr2 ">
                                    {res.description}
                              </h5>
                              <h5 className="date flex justify-end mr3 bt pt3 ml4">
                                  {res.dates}
                              </h5>
                            </div>
            </span>
            )
          })}
      </div>
  )
};

export default SearchResPage;
