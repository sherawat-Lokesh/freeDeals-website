import { useEffect, useState } from "react";
import "./cardArticle.css";

//prettier-ignore
const CardArticle = ({cardData: cardComponent,articleFileName:filename}) => {
  const [Data, setdata] = useState(null);

useEffect(() => {
  fetch("https://deals4free-backend.onrender.com/article", {
    method: "post",
      headers: { "content-Type": "application/json" },
        body: JSON.stringify({ fileName: filename }),
      }).then((res) => res.text())
          .then((data) => setdata(data))
            .catch((err) => console.log('File not found'));
  });

if (Data === null) return;

return (
    <div className="cards mt3 ba b--light-gray near-black { color: #111111 }bg-white { background-color: #FFFFFF } pv2  mr4 ml5  shadow-4 pl3 pr3 ">
      <div></div>
        <div dangerouslySetInnerHTML={{ __html: Data }} />
    </div>
  );
};
export default CardArticle;
