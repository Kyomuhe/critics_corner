import React from "react";
import { useNavigate } from "react-router-dom";
import backImage from "./images/back3.PNG";
import blackImage from "./images/back6.PNG";
import bigImage from "./images/back.PNG";
import back1 from "./images/back1.PNG";
import back2 from "./images/back2.PNG";



function LandingPage() {
  const navigate = useNavigate(); 

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e6f9f0, #b8e4c9, #d4f7e5)",
        fontFamily: "'Poppins', sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Top Menu */}
      <div
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          padding: "10px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
          zIndex: 10,
        }}
      >
        <h1 style={{ fontSize: "1.5rem", color: "#2a9d8f", margin: 0 }}>
          Critics Corner 🎥
        </h1>
        <button
          onClick={() => navigate("/reviews")}
          style={{
            backgroundColor: "#2a9d8f",
            color: "#fff",
            padding: "10px 20px",
            fontSize: "1rem",
            border: "none",
            borderRadius: "20px",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
        >
          Explore Reviews 🚀
        </button>
      </div>

{/* Background Section */}
{/* Background Section */}
<div
  style={{
    height: "60vh",
    backgroundImage: `url(${backImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    marginTop: "60px", // Adjust to the height of your top menu
    width: "100%", // Ensures it stretches full width
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#fff",
    padding: "20px",
  }}
>
  <div
    style={{
      padding: "20px",
      borderRadius: "10px",
      animation: "fadeIn 2s ease-in-out",
    }}
  >
    <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>
      Welcome to Critics Corner with Precious kay 🎬🍿
    </h1>
    <p style={{ fontSize: "1.2rem", margin: "10px 0" }}>
      Your ultimate destination for honest and engaging reviews.
    </p>
  </div>
</div>

{/* Cards Section */}
<section style={{ padding: "40px 20px", textAlign: "center" }}>
  <h2 style={{ fontSize: "2rem", color: "#2a9d8f", marginBottom: "20px" }}>
    What Critics Corner is All About
  </h2>
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "20px",
    }}
  >
    {[
      {
        image: blackImage,
        title: "Honest Reviews",
        description: "Dive in to my unapologetically honest reviews of your favorite series and movies What I feel is what I write—💬, No filters, no favoritism.",
      },
      {
        image: bigImage,
        title: "Open Minds",
        description: "All reviews reflect my personal opinions and interpretations. I understand that opinions can vary, and that’s what makes discussions around entertainment so exciting. It's completely okay to disagree with my views—your unique perspective is always welcome here",
      },
      {
        image: back1,
        title: "Classic Gems",
        description: "Rediscover timeless classics that never fade.",
      },
      {
        image: back2,
        title: "Latest Releases",
        description: "Stay updated on the hottest releases this season.",
      },
    ].map((card, index) => (
      <div
        key={index}
        style={{
          backgroundColor: "#fff",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
          cursor: "pointer",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
        }}
      >
        <img
          src={card.image}
          alt={card.title}
          style={{ width: "100%", height: "200px", objectFit: "cover" }}
        />
        <div style={{ padding: "20px" }}>
          <h3 style={{ fontSize: "1.5rem", color: "#2a9d8f" }}>
            {card.title}
          </h3>
          <p style={{ color: "#344e41", lineHeight: "1.6" }}>
            {card.description}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>
      {/* Additional Content */}
      <section
        style={{
          padding: "40px 20px",
          textAlign: "center",
          backgroundColor: "#f0f9f4",
        }}
      >
        <h2 style={{ fontSize: "2rem", color: "#2a9d8f", marginBottom: "20px" }}>
          Why Choose Critics Corner?
        </h2>
        <p
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            color: "#344e41",
            fontSize: "1.2rem",
            lineHeight: "1.8",
          }}
        >
          At Critics Corner, I believe that entertainment is more than just
          passively watching movies or series—it's about diving into the
          stories, exploring emotions, and sharing our thoughts. With detailed
          reviews and honest opinions, I aim to guide you toward the best
          experiences in cinema and television.
          If a series sucks... I’ll tell you straight up: it sucks 💀. 
          I’m not on any movie company’s payroll, and there’s no product placement here 🚫💰. 
          Just me, my opinions, and a keyboard 🖋️. 
          Grab your popcorn, and let’s spill some tea 🍵🍿!

        </p>
      </section>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#2a9d8f",
          color: "#fff",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <div style={{ marginBottom: "10px" }}>
        </div>
        <div style={{ fontSize: "0.9rem", marginTop: "10px" }}>
          © 2025 Critics Corner. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
