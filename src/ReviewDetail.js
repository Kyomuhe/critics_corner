import React from "react";
import { useParams } from "react-router-dom";

const reviews = {
  1: { title: "Shameless", content: "This was truely masterpiece of modern TV drama. But truely it was a very unfair game to fiona gallager" },
  2: { title: "FROM", content: "A nostalgic dive into 80s sci-fi with great storytelling." },
};

function ReviewDetail() {
  const { id } = useParams();
  const review = reviews[id];

  if (!review) {
    return <h1>Review not found</h1>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{review.title}</h1>
      <p>{review.content}</p>
    </div>
  );
}

export default ReviewDetail;
