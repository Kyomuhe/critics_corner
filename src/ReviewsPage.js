import React from "react";
import { useNavigate } from "react-router-dom";
import shameless from "./images/shameless.PNG";
import fromm from "./images/fromm.PNG";
import big from "./images/big.PNG";
import chicago from "./images/chicago.PNG";
import unfort from "./images/unfort.PNG";
import black from "./images/black.PNG";




const reviews = [
  { id: 1, title: "Shameless", image: shameless },
  { id: 2, title: "From", image: fromm },
  { id: 3, title: "Big Bang Theory", image: big },
  { id: 4, title: "Chicago Pd", image: chicago },
  { id: 5, title: "A Series of Unfortunate Events", image: unfort },
  { id: 6, title: "Black", image: black },



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
