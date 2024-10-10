// src/components/ReviewForm.js
import React, { useState } from "react";
import { db, storage } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

function ReviewForm() {
  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Upload image to Firebase Storage
    let imageURL = "";
    if (image) {
      const imageRef = ref(storage, `images/${image.name}`);
      const snapshot = await uploadBytes(imageRef, image);
      imageURL = await getDownloadURL(snapshot.ref);
    }

    // Save review to Firestore
    await addDoc(collection(db, "Reviews"), {
      title,
      review,
      imageURL,
      likes: 0,
      comments: [],
    });

    setTitle("");
    setReview("");
    setImage(null);
    alert("Review added successfully!");
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", margin: "20px" }}>
      <input
        type="text"
        placeholder="Movie Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Your Review"
        value={review}
        onChange={(e) => setReview(e.target.value)}
        required
        style={{ margin: "10px 0" }}
      />
      <input type="file" onChange={handleImageChange} />
      <button type="submit" style={{ margin: "20px 0" }}>Post Review</button>
    </form>
  );
}

export default ReviewForm;
