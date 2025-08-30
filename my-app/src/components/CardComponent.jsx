import { useState } from "react";
//import { useNavigate } from "react-router-dom";
import React from "react";
import "./cardCss.css";

export default function CardComponent() {
  const [selectedRating, setSelectedRating] = useState(null);
  //const navigate = useNavigate();

  return (
    <div className="card">
      <div className="star">★</div>
      <h2 className="titulo">How did we do?</h2>
      <p className="texto">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="rating">
        <button onClick={() => setSelectedRating(1)}>1</button>
        <button onClick={() => setSelectedRating(2)}>2</button>
        <button onClick={() => setSelectedRating(3)}>3</button>
        <button onClick={() => setSelectedRating(4)}>4</button>
        <button onClick={() => setSelectedRating(5)}>5</button>
      </div>
      <div className="selected-rating">
        {selectedRating ? `You selected ${selectedRating} out of 5` : "No rating selected"}
      </div>
      <button className="submit">Submit</button>
    </div>


  );
}
