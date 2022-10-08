import React from "react";
import data from "../helper/data";

const Card = () => {
  console.log(data);
  return (
    <div className="container">
      {data.map((item) => {
        return (
          <div className="card" style={{}}>
            <h1>{item.photographer}</h1>
            <img src={item.src.large} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Card;
