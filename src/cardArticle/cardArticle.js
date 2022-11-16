import { useEffect, useState } from "react";

const CardArticle = ({ cardData: cardComponent }) => {
  const [Data, setdata] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/article", {
      method: "post",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify({ fileName: "cardArticle.html" }),
    })
      .then((res) => res.text())
      .then((data) => setdata(data))
      .catch((err) => console.log(err));
  });

  if (Data === null) return;

  return (
    <div className="cards mt3 ba  b--light-gray near-black { color: #111111 }bg-white { background-color: #FFFFFF } pv2  mr4 ml5  shadow-4 ">
      <div dangerouslySetInnerHTML={{ __html: Data }} />
      <div>hello it's working</div>
    </div>
  );
};
export default CardArticle;
