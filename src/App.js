import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import ReviewsPage from "./ReviewsPage";
import ReviewDetail from "./ReviewDetail";

function App() {
  return (
    <Router basename="/critics_corner">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/reviews/:id" element={<ReviewDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
