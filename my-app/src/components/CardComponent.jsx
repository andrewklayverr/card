import { useState } from "react";
import "./cardCss.css";
import { useNavigate } from "react-router-dom";

export default function CardComponent() {
  const [selectedRating, setSelectedRating] = useState(null);
  const navigate = useNavigate();

  const handleRatingClick = (rating) => {
    setSelectedRating(rating);
  };
  const handleSubmit = () => {
    if (selectedRating) {
      navigate("/thankyou", { state: { rating: selectedRating } });
    } else {
      alert("Selecione uma nota antes de submeter.");
    }
  };

  return (
    <div className="card">
      <div className="star">★</div>
      <h2 className="title">How did we do?</h2>
      <p className="text">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="rating">
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            onClick={() => handleRatingClick(num)}
            className={selectedRating === num ? "selected" : ""}
          >
            {num}
          </button>
        ))}
      </div>
      <div className="selected-rating-display">
        {selectedRating
          ? `You selected ${selectedRating} out of 5`
          : "No rating selected"}
      </div>
      <button
        type="submit"
        onClick={handleSubmit}
        className="submit"
      >
        Submit
      </button> 
    </div>
  );
}
