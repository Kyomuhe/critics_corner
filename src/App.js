// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ReviewForm from "./components/ReviewForm";
import ReviewList from "./components/ReviewList";
import ReviewDetail from "./components/ReviewDetail";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          {/* The homepage will display the list of reviews */}
          <Route path="/" element={<ReviewList />} />
          {/* Route to add a new review */}
          <Route path="/add-review" element={<ReviewForm />} />
          {/* Route to view the detailed review of a specific movie/series */}
          <Route path="/review/:id" element={<ReviewDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
