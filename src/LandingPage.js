import React from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e6f9f0, #b8e4c9, #d4f7e5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Poppins', sans-serif",
        padding: "20px",
        overflow: "hidden",
      }}
    >
      {/* Decorative Elements */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "-50px",
          width: "200px",
          height: "200px",
          backgroundColor: "#2a9d8f",
          borderRadius: "50%",
          opacity: "0.3",
          animation: "float 4s ease-in-out infinite",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          bottom: "-60px",
          right: "10%",
          width: "300px",
          height: "300px",
          backgroundColor: "#52b788",
          borderRadius: "50%",
          opacity: "0.2",
          animation: "float 6s ease-in-out infinite reverse",
        }}
      ></div>

      {/* Content */}
      <div
        style={{
          textAlign: "center",
          color: "#344e41",
          zIndex: 1,
          maxWidth: "700px",
        }}
      >
        {/* Title */}
        <h1
          style={{
            fontSize: "4rem",
            fontWeight: "bold",
            color: "#2a9d8f",
            marginBottom: "20px",
            textShadow: "2px 4px rgba(0, 0, 0, 0.2)",
          }}
        >
          Critics Corner 🎥
        </h1>

        {/* Playful Description */}
        <p
          style={{
            fontSize: "1.5rem",
            lineHeight: "1.8",
            color: "#344e41",
            marginBottom: "40px",
          }}
        >
          Welcome to Critics Corner with Precious Kay 🎬🍿
        </p>
        <p
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.6",
            color: "#344e41",
            marginBottom: "40px",
          }}
        >
          Dive into my unapologetically honest reviews of your favorite series and movies. 
          What I feel is what I write—💬 no sugar-coating, no filters, no favoritism.
        </p>
        <p
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.6",
            color: "#344e41",
            marginBottom: "40px",
          }}
        >
          If a series sucks... I’ll tell you straight up: it sucks 💀. 
          I’m not on any movie company’s payroll, and there’s no product placement here 🚫💰. 
          Just me, my opinions, and a keyboard 🖋️. 
          Grab your popcorn, and let’s spill some tea 🍵🍿!
        </p>

        {/* Call-to-Action Button */}
        <button
          onClick={() => navigate("/reviews")}
          style={{
            backgroundColor: "#2a9d8f",
            color: "#fff",
            padding: "15px 30px",
            fontSize: "1.2rem",
            border: "none",
            borderRadius: "30px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
          onMouseOver={(e) => {
            e.target.style.transform = "scale(1.1)";
            e.target.style.backgroundColor = "#1f7f69";
            e.target.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.3)";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.backgroundColor = "#2a9d8f";
            e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
          }}
        >
          Explore Reviews 🚀
        </button>
      </div>

      {/* Floating Animation Keyframes */}
      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-20px);
            }
          }
        `}
      </style>
    </div>
  );
}

export default LandingPage;