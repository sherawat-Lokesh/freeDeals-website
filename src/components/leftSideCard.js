import { useEffect, useState} from "react";
import aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import ArrowBackIosSharpIcon from '@mui/icons-material/ArrowBackIosSharp';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';





const LeftCard = ({ cardData: cardComponent, getFileName }) => {
  //transition type
  const fadeUp = "fade-up";

  let [pageNo,setPageNo]=useState(10)
  let [empArr,setEmptyArr]=useState(undefined)

useEffect(() => {aos.init({ duration: 1000 / 2 })}, []);        
  
if(pageNo<10)setPageNo(10)
if(pageNo===10) pageChange(0)

function pageChange(num){
  if(cardComponent !==undefined) {
      const arrayLength=cardComponent.length;
        if(pageNo===10 && num===-10)return;
          if(arrayLength<pageNo && num ===10)return;
            if(num !==0) setPageNo( pageNo+=num)
  }
}
//This is working only because pageChange function run before it and page logic is handled their
const result= cardComponent.sort((a,b)=>b.id-a.id).slice(pageNo-10,pageNo)
//It only works when the pageNo change if we try to re-render based on ``result`` the it get's in error so pageNo is neccessary here
// eslint-disable-next-line
useEffect(()=>{setEmptyArr(result)},[pageNo])


if(empArr ===undefined )return
  return (
    <div>
      {empArr.sort((a, b) => (a.id - b.id))
          .map((element, i) => {
            return (
              <div key={i} data-aos={fadeUp}className="cards mt3 ba  b--light-gray near-black { color: #111111 }bg-white { background-color: #FFFFFF } pv2  mr4 ml5  shadow-4 ">
                <span className="image-overflow flex ">
                  <img className="left-sec-image ml2 link Dim" src={element.image} alt={element.topicname}></img>
                    <div>
                        <h4 className=" ml4 mr2 light-purple">{element.topicname}</h4>
                          <h3 className="heading ml4 mr2  "
                            onClick={(e) => {
                              e.preventDefault();
                                if (element?.filename === null) return;
                                  getFileName(element.filename);
                            }}>
                              <Link className="no-underline black" to="/article">{element.heading}</Link>
                                </h3>
                                    <h5 className="description ml4 mr2 ">{element.description}</h5>
                                      <h5 className="date flex justify-end mr3 bt pt3 ml4">{element.dates}</h5>
                    </div>
                </span>
              </div>
          );
        })
        .reverse()}
       
        <div className=" bg-black ph4 pv1 center shadow-5 mv5  " style={{marginLeft:'4rem',marginRight:'2rem'}} >
        <div className='ml5'>
            <button className='ml7'  onClick={()=>{pageChange(-10);}}><ArrowBackIosSharpIcon /></button>
            <button className='ml6'  onClick={()=>{pageChange(10);}}><ArrowForwardIosSharpIcon /></button>
        </div>
    </div>
        
    </div>
  )};

export default LeftCard;
