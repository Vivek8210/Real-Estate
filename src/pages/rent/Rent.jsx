import React from "react";
import "./Rent.css";
const Rent = () => {
  return (
    <div className="maincontainer">
      <div className="allContent">
        <img
          className="image"
          src="https://media.istockphoto.com/id/1158713117/photo/brown-two-story-all-american-home.jpg?s=612x612&w=0&k=20&c=PRsPVVX1JK8Dy0Aa_QQ46EKMO32G8QzK2x5nRjNlyhU="
          alt=""
        />

        <div className="priceAndfavourite">
          <div>price</div>
          <div>$</div>
        </div>
        <h4 className="name">name</h4>
        <p className="location">fjkhdfksl</p>
        <div className="details">
          <div>12</div>
          <div>12</div>
          <div>122</div>
        </div>
      </div>
    </div>
  );
};

export default Rent;
