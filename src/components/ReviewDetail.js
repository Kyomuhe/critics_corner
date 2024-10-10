// src/components/ReviewDetail.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

function ReviewDetail() {
  const { id } = useParams();
  const [review, setReview] = useState(null);

  useEffect(() => {
    const fetchReview = async () => {
      const docRef = doc(db, "Reviews", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setReview(docSnap.data());
      }
    };

    fetchReview();
  }, [id]);

  const handleLike = async () => {
    const docRef = doc(db, "Reviews", id);
    await updateDoc(docRef, {
      likes: review.likes + 1,
    });
    setReview({ ...review, likes: review.likes + 1 });
  };

  if (!review) return <div>Loading...</div>;

  return (
    <div style={{ margin: "20px" }}>
      <h1>{review.title}</h1>
      <img src={review.imageURL} alt={review.title} style={{ width: "300px", height: "auto" }} />
      <p>{review.review}</p>
      <p>Likes: {review.likes}</p>
      <button onClick={handleLike}>Like</button>
    </div>
  );
}

export default ReviewDetail;
