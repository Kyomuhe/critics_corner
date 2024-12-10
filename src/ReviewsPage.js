import React from "react";
import { useNavigate } from "react-router-dom";
import shameless from "./shameless.PNG";
import fromm from "./fromm.PNG";
import big from "./big.PNG";

const reviews = [
  { id: 1, title: "Shameless", image: shameless },
  { id: 2, title: "From", image: fromm },
  { id: 3, title: "Big Bang Theory", image: big },

];

function ReviewsPage() {
  const navigate = useNavigate();

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", padding: "20px" }}>
      {reviews.map((review) => (
        <div
          key={review.id}
          style={{ cursor: "pointer", border: "1px solid #ddd", borderRadius: "8px", textAlign: "center", padding: "10px" }}
          onClick={() => navigate(`/reviews/${review.id}`)}
        >
          <img src={review.image} alt={review.title} style={{ width: "100%", borderRadius: "8px" }} />
          <h3>{review.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default ReviewsPage;
