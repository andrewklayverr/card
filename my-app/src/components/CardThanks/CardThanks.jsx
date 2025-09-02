import { useLocation } from "react-router-dom";
import "./CardThanks.css";
import illustration from "../../assets/images/image-removebg-preview.png";

export default function CardThanks() {
  const location = useLocation();
  const rating = location.state?.rating;

  return (
    <div className="card">
      <img className="illustration" src={illustration} />
      <div className="selected-rating">
        {rating ? `You selected ${rating} out of 5` : "No rating received"}
      </div>
      <h2 className="title">Thank you!</h2>
      <p className="text">
        We appreciate you taking the time to give a rating.
        <br />
        If you ever need more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}
