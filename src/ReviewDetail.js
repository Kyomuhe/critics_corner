import React from "react";
import { useParams } from "react-router-dom";

const reviews = {
  1: {
    title: "Shameless",
    content:
      "This was truly a masterpiece of modern TV drama. The show skillfully delves into the complexities of poverty, addiction, and family dynamics,and alittle mix of humor and heartbreak. However, it was also a very unfair game for Fiona Gallagher, whose struggles and sacrifices were often overshadowed by the chaos around her. Despite her relentless efforts to keep her family afloat, her family didnt appreciate at all, i mean really at some point even Debbie shut the water off while in the shower demanding her money, really this person raised you when you were not even her own child but thats how you repay her, and the lack of support from her own siblings like when she bought the laudary mart and Lip thought she could not pull it off. Overall, Shameless remains a standout series for its raw portrayal of resilience and flawed humanity.",
  },
  2: {
    title: "FROM",
    content:
      "A nostalgic dive into 80s sci-fi with great storytelling. The show captures the eerie vibe of small-town mysteries with a brilliant mix of suspense, drama, and supernatural elements. The characters are well-crafted, and the unfolding mystery keeps you hooked from start to finish. FROM is a delightful blend of nostalgia and originality, leaving viewers eager for more answers with every episode.",
  },

  3: {
    title: "BIG BANG THEORY",
    content:
      "A nostalgic dive into 80s sci-fi with great storytelling. The show captures the eerie vibe of small-town mysteries with a brilliant mix of suspense, drama, and supernatural elements. The characters are well-crafted, and the unfolding mystery keeps you hooked from start to finish. FROM is a delightful blend of nostalgia and originality, leaving viewers eager for more answers with every episode.",
  },

};

function ReviewDetail() {
  const { id } = useParams();
  const review = reviews[id];

  if (!review) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h1 style={{ color: "#ff6b6b" }}>Review not found</h1>
        <p style={{ fontSize: "1.2rem", color: "#6c757d" }}>
          Oops! The review you're looking for doesn't exist.
        </p>
      </div>
    );
  }

  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "'Poppins', sans-serif",
        lineHeight: "1.8",
        maxWidth: "800px",
        margin: "0 auto",
        color: "#344e41",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          color: "#2a9d8f",
          marginBottom: "20px",
        }}
      >
        {review.title}
      </h1>
      <p
        style={{
          fontSize: "1.2rem",
          textAlign: "justify",
          textIndent: "2em",
          whiteSpace: "pre-wrap", // Preserves formatting for long texts
        }}
      >
        {review.content}
      </p>
    </div>
  );
}

export default ReviewDetail;
