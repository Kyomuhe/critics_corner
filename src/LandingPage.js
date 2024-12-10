import React from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #e6f9f0, #d4f7e5)",
        fontFamily: "'Poppins', sans-serif",
        padding: "40px",
        color: "#344e41",
      }}
    >
      {/* Title */}
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          color: "#2a9d8f",
          marginBottom: "10px",
        }}
      >
        Critics Corner
      </h1>

      {/* Description */}
      <p
        style={{
          fontSize: "1.2rem",
          maxWidth: "600px",
          lineHeight: "1.8",
          marginBottom: "30px",
        }}
      >
        Welcome to Critics Corner with Precious Kay 🎬🍿

Dive into my unapologetically honest reviews of your favorite series and movies. What I feel is what I write—no sugar-coating, no filters, no favoritism.

If a series sucks... I’ll tell you straight up: it sucks 💀.

I’m not on any movie company’s payroll, and there’s no product placement here 🚫💰. Just me, my opinions, and a keyboard 🖋️.

Grab your popcorn, and let’s spill some tea 🍵🍿!

      </p>

      {/* Button */}
      <button
        onClick={() => navigate("/reviews")}
        style={{
          background: "#2a9d8f",
          color: "white",
          padding: "12px 24px",
          border: "none",
          borderRadius: "25px",
          fontSize: "1rem",
          cursor: "pointer",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          transition: "transform 0.2s, box-shadow 0.2s",
        }}
        onMouseOver={(e) => {
          e.target.style.transform = "scale(1.1)";
          e.target.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.3)";
        }}
        onMouseOut={(e) => {
          e.target.style.transform = "scale(1)";
          e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
        }}
      >
        Dive in to my Reviews😊
      </button>

      {/* Decorative Elements */}
      <div
        style={{
          position: "absolute",
          right: "40px",
          bottom: "40px",
          height: "300px",
          width: "300px",
          backgroundColor: "#2a9d8f",
          borderRadius: "50%",
          opacity: "0.1",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          height: "150px",
          width: "150px",
          backgroundColor: "#2a9d8f",
          borderRadius: "50%",
          opacity: "0.1",
        }}
      ></div>
    </div>
  );
}

export default LandingPage;
