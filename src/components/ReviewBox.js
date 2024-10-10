// src/components/ReviewBox.js
import React from "react";
import { Link } from "react-router-dom";

function ReviewBox({ review }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "10px", margin: "10px", width: "250px", textAlign: "center" }}>
      <img
        src={review.imageURL}
        alt={review.title}
        style={{ width: "100%", height: "150px", objectFit: "cover" }}
      />
      <h3>{review.title}</h3>
      <p>{review.review.substring(0, 100)}...</p>
      <Link to={`/review/${review.id}`}>
        <button style={{ cursor: "pointer", marginTop: "10px" }}>Read More</button>
      </Link>
    </div>
  );
}

export default ReviewBox;
