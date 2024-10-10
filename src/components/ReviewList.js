// src/components/ReviewList.js
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import ReviewBox from "./ReviewBox";

function ReviewList() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch all reviews from Firestore when the component mounts
    const fetchReviews = async () => {
      const querySnapshot = await getDocs(collection(db, "Reviews"));
      const reviewsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setReviews(reviewsData);
    };

    fetchReviews();
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {reviews.length > 0 ? (
        reviews.map((review) => <ReviewBox key={review.id} review={review} />)
      ) : (
        <p>No reviews available. Add some!</p>
      )}
    </div>
  );
}

export default ReviewList;
