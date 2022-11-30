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
  let emptyArr=[]

useEffect(() => {aos.init({ duration: 1000 / 2 })}, []);        
  
pageNo<10?setPageNo(10):''
pageNo===10 ? pageChange(0):null

function pageChange(num){

if(cardComponent !==undefined) {
  const mainArray=cardComponent.sort((a,b)=>b.id-a.id).map(val=>{return val});
  const arrayLength=cardComponent.length;
    if(pageNo===10 && num===-10)return;
        if(arrayLength<pageNo && num ===10)return;
       if(num !==0) setPageNo( pageNo+=num)
              emptyArr=[]
                for(let i=pageNo-10;i<=pageNo;i++){
                    if(mainArray[i]!==undefined){
                        emptyArr.push(mainArray[i])    
             
        }
      }

      console.log(emptyArr)
      
    }
}



if(emptyArr ===[] )return
  return (
    <div>
      {emptyArr.sort((a, b) => (a.id - b.id))
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
       
        <div className=" bg-black ph4 pv3 center shadow-5 mv5" style={{marginRight:'27rem',marginLeft:'4rem'}}>
        <div className='ml5'>
            <button className='ml7' onClick={()=>{pageChange(-10);}}><ArrowBackIosSharpIcon /></button>
            <button className='ml6'  onClick={()=>{pageChange(10);}}><ArrowForwardIosSharpIcon /></button>
        </div>
    </div>
        
    </div>
  )};

export default LeftCard;
