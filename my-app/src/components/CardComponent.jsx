//import { useState } from "react";
import React from "react";
import "./cardCss.css";

export default function CardComponent() {
//  const [selectedRating, setSelectedRating] = useState(null);

  return (
    <div className="card">
      <div className="star">★</div>
      <h2 className="titulo">How did we do?</h2>
      <p className="texto">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="rating">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
      </div>
      <button className="submit">Submit</button>
    </div>


  );
}
