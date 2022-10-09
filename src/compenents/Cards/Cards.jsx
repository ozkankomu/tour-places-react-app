import data from "../../data";
import "../Cards/Cards.css";

const Cards = () => {
  return (
    <div className="main">
      {data.map((item) => {
        const { id, title, desc, image } = item;
        return (
          <div className="container" id={id}>
            <h2>{title}</h2>
            <div className="city">
              <img src={image} alt="sory img cant found" />
              <div className="description">
                <p className="desc">{desc}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
