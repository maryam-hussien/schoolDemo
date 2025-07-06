import { useState } from "react";
import { FaStar } from "react-icons/fa";

const Star = ({ uniqueId, onStarClick }) => {
  const [currentRating, setCurrentRating] = useState(3);

  const handleClick = (rating) => {
    setCurrentRating(rating);
    onStarClick(uniqueId, rating); 
  };

  return (
    <div
      className="star-rating"
      style={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        gap: "5px",
        marginTop: "10px",
      }}
    >
      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          color={index < currentRating ? "#FFD700" : "#E0E0E0"}
          onClick={() => handleClick(index + 1)}
          style={{ cursor: "pointer" }}
        />
      ))}
    </div>
  );
};

export default Star;
