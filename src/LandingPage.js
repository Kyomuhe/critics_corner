import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import backImage from "./images/back3.PNG";
import blackImage from "./images/back6.PNG";
import bigImage from "./images/back.PNG";
import back1 from "./images/back1.PNG";
import back2 from "./images/back2.PNG";
import chicago from "./images/chicago.PNG"
import big from "./images/big.PNG"
import fromm from "./images/fromm.PNG"
import blackish from "./images/blackish.PNG"


function LandingPage() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    setIsVisible(true);
    
    // Window resize handler
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    // Smooth scroll functionality
    const smoothScroll = () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
          });
          setMenuOpen(false);
        });
      });
    };
    
    window.addEventListener('resize', handleResize);
    smoothScroll();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function(e) {});
      });
    };
  }, []);

  // Featured reviews data
  const featuredReviews = [
    {
      title: "From",
      rating: 4.5,
      category: "sci-fi",
      image: fromm,
      snippet: "A group of people find them selve stuck in a lost village and have to do every thing to survive"
    },
    {
      title: "Chicago Pd",
      rating: 4.5,
      category: "action",
      image: chicago,
      snippet: "A chicago police department serie that revolves around how the intelligenece unit works"
    },

    {
      title: "Blackish",
      rating: 5,
      category: "tv",
      image: blackish,
      snippet: "A series the follows the life of a black family in the suburbs"
    },
    {
      title: "Big Bang Theory",
      rating: 4,
      category: "drama",
      image: big,
      snippet: "A series that follows the life of a genius and his friends"
    },
  ];

  const filterReviews = (category) => {
    setActiveCategory(category);
  };

  const filteredReviews = activeCategory === "all" 
    ? featuredReviews 
    : featuredReviews.filter(review => review.category === activeCategory);

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
      {/* Navigation Bar */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          padding: "15px 30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "0 2px 15px rgba(0, 0, 0, 0.1)",
          zIndex: 100,
          boxSizing: "border-box"
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <h1 style={{ fontSize: "1.8rem", color: "#2a9d8f", margin: 0, fontWeight: "700" }}>
            Critics Corner<span style={{ color: "#e76f51" }}>🎥</span>
          </h1>
        </div>
        
        {windowWidth > 768 ? (
          <div style={{ 
            display: "flex", 
            gap: "25px", 
            alignItems: "center",
            paddingRight: "20px"
          }}>
            <a href="#about" style={{ color: "#2a9d8f", textDecoration: "none", fontWeight: "500", fontSize: "1.1rem" }}>About</a>
            <a href="#featured" style={{ color: "#2a9d8f", textDecoration: "none", fontWeight: "500", fontSize: "1.1rem" }}>Featured</a>
            <a href="#movie-moods" style={{ color: "#2a9d8f", textDecoration: "none", fontWeight: "500", fontSize: "1.1rem" }}>Movie Moods</a>
            <button
              onClick={() => navigate("/reviews")}
              style={{
                backgroundColor: "#e76f51",
                color: "#fff",
                padding: "8px 20px",
                fontSize: "1rem",
                border: "none",
                borderRadius: "20px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                fontWeight: "600",
              }}
            >
              All Reviews
            </button>
          </div>
        ) : (
          <div style={{ position: "relative" }}>
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                fontSize: "1.5rem",
                color: "#2a9d8f",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "40px",
                height: "40px"
              }}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
            
            {menuOpen && (
              <div style={{
                position: "absolute",
                top: "50px",
                right: "0",
                backgroundColor: "white",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                borderRadius: "10px",
                padding: "15px",
                width: "200px",
                zIndex: 101
              }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                  <a 
                    href="#about" 
                    style={{ 
                      color: "#2a9d8f", 
                      textDecoration: "none", 
                      fontWeight: "500", 
                      fontSize: "1.1rem",
                      padding: "8px 0",
                      borderBottom: "1px solid #eee"
                    }}
                  >
                    About
                  </a>
                  <a 
                    href="#featured" 
                    style={{ 
                      color: "#2a9d8f", 
                      textDecoration: "none", 
                      fontWeight: "500", 
                      fontSize: "1.1rem",
                      padding: "8px 0",
                      borderBottom: "1px solid #eee"
                    }}
                  >
                    Featured
                  </a>
                  <a 
                    href="#movie-moods" 
                    style={{ 
                      color: "#2a9d8f", 
                      textDecoration: "none", 
                      fontWeight: "500", 
                      fontSize: "1.1rem",
                      padding: "8px 0",
                      borderBottom: "1px solid #eee"
                    }}
                  >
                    Movie Moods
                  </a>
                  <button
                    onClick={() => {
                      navigate("/reviews");
                      setMenuOpen(false);
                    }}
                    style={{
                      backgroundColor: "#e76f51",
                      color: "#fff",
                      padding: "10px 20px",
                      fontSize: "1rem",
                      border: "none",
                      borderRadius: "20px",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      fontWeight: "600",
                      marginTop: "5px"
                    }}
                  >
                    All Reviews
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div
        style={{
          height: "90vh",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${backImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          marginTop: "0",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "#fff",
          padding: "20px",
          position: "relative",
        }}
      >
        <div
          style={{
            padding: windowWidth > 768 ? "40px" : "20px",
            borderRadius: "10px",
            maxWidth: "800px",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 1.5s ease, transform 1.5s ease",
          }}
        >
          <h1 style={{ 
            fontSize: windowWidth > 768 ? "3.5rem" : "2.5rem", 
            fontWeight: "bold",
            marginBottom: "20px",
            textShadow: "2px 2px 8px rgba(0,0,0,0.6)"
          }}>
            Welcome to Critics Corner
          </h1>
          <h2 style={{ 
            fontSize: windowWidth > 768 ? "2rem" : "1.5rem", 
            fontWeight: "500",
            marginBottom: "30px",
            textShadow: "1px 1px 4px rgba(0,0,0,0.6)"
          }}>
            with Precious Kay <span style={{ color: "#e76f51" }}>🎬🍿</span>
          </h2>
          <p style={{ 
            fontSize: windowWidth > 768 ? "1.4rem" : "1.1rem", 
            margin: "20px 0 40px 0",
            lineHeight: "1.6",
            textShadow: "1px 1px 3px rgba(0,0,0,0.5)"
          }}>
            Your ultimate destination for brutally honest, no-filter reviews.
            Because great entertainment deserves authentic criticism.
          </p>
          <div style={{ 
            display: "flex", 
            justifyContent: "center", 
            gap: "20px",
            flexDirection: windowWidth > 480 ? "row" : "column",
            alignItems: "center"
          }}>
            <button
              onClick={() => navigate("/reviews")}
              style={{
                backgroundColor: "#e76f51",
                color: "#fff",
                padding: "15px 35px",
                fontSize: "1.2rem",
                border: "none",
                borderRadius: "30px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                fontWeight: "600",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                width: windowWidth > 480 ? "auto" : "80%"
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
            >
              Explore Reviews 🚀
            </button>
            <button
              onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}
              style={{
                backgroundColor: "transparent",
                color: "#fff",
                padding: "15px 35px",
                fontSize: "1.2rem",
                border: "2px solid #fff",
                borderRadius: "30px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                fontWeight: "600",
                width: windowWidth > 480 ? "auto" : "80%"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              Learn More
            </button>
          </div>
        </div>
        
        {/* Scroll down indicator */}
        <div 
          style={{
            position: "absolute",
            bottom: "30px",
            left: "50%",
            transform: "translateX(-50%)",
            animation: "bounce 2s infinite",
            cursor: "pointer",
          }}
          onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
          </svg>
        </div>
      </div>

      {/* About Section */}
      <section id="about" style={{ padding: windowWidth > 768 ? "80px 20px" : "60px 20px", textAlign: "center" }}>
        <h2 style={{ 
          fontSize: windowWidth > 768 ? "2.5rem" : "2rem", 
          color: "#2a9d8f", 
          marginBottom: "20px",
          position: "relative",
          display: "inline-block",
        }}>
          What Critics Corner is All About
          <div style={{
            position: "absolute",
            height: "4px",
            width: "60%",
            backgroundColor: "#e76f51",
            bottom: "-10px",
            left: "20%",
            borderRadius: "2px"
          }}></div>
        </h2>
        <p style={{ 
          maxWidth: "800px", 
          margin: "30px auto 50px auto", 
          fontSize: windowWidth > 768 ? "1.2rem" : "1.1rem",
          lineHeight: "1.8",
          color: "#344e41",
          padding: "0 15px"
        }}>
          Welcome to a space where honesty reigns supreme and sugar-coating isn't on the menu.
          At Critics Corner, I tell it exactly how I see it.
        </p>
        
        <div
          style={{
            display: "grid",
            gridTemplateColumns: windowWidth > 1200 ? "repeat(4, 1fr)" : windowWidth > 768 ? "repeat(2, 1fr)" : "1fr",
            gap: "30px",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 15px"
          }}
        >
          {[
            {
              image: blackImage,
              title: "Brutally Honest Reviews",
              description: "No sugar-coating, no corporate influence. If a movie or show isn't good, I'll tell you straight up. What I feel is what I write—💬, No filters, no favoritism.",
              icon: "🎯"
            },
            {
              image: bigImage,
              title: "Open Discussion",
              description: "All reviews reflect my personal opinions. I welcome differing viewpoints—your unique perspective enriches our community and makes discussions around entertainment more dynamic.",
              icon: "💬"
            },
            {
              image: back1,
              title: "Timeless Classics",
              description: "Rediscover the masterpieces that have shaped cinema and television. I dive deep into what makes these works stand the test of time.",
              icon: "🏆"
            },
            {
              image: back2,
              title: "Fresh Takes",
              description: "Stay ahead with reviews of the latest releases, delivered while they're still hot off the press. First impressions that help you decide what's worth your time.",
              icon: "🔥"
            },
          ].map((card, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#fff",
                borderRadius: "12px",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
                overflow: "hidden",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.4s ease, box-shadow 0.4s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow = "0 15px 35px rgba(0, 0, 0, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.08)";
              }}
            >
              <div style={{ position: "relative", height: "200px", overflow: "hidden" }}>
                <img
                  src={card.image}
                  alt={card.title}
                  style={{ 
                    width: "100%", 
                    height: "100%", 
                    objectFit: "cover",
                    transition: "transform 0.5s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                />
                <div style={{
                  position: "absolute",
                  top: "15px",
                  right: "15px",
                  backgroundColor: "#e76f51",
                  color: "white",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                }}>
                  {card.icon}
                </div>
              </div>
              <div style={{ padding: "25px", flexGrow: 1, display: "flex", flexDirection: "column" }}>
                <h3 style={{ fontSize: "1.6rem", color: "#2a9d8f", marginBottom: "15px" }}>
                  {card.title}
                </h3>
                <p style={{ color: "#344e41", lineHeight: "1.7", flexGrow: 1 }}>
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Reviews Section */}
      <section id="featured" style={{ 
        padding: windowWidth > 768 ? "80px 20px" : "60px 20px", 
        textAlign: "center", 
        backgroundColor: "#f0f9f4" 
      }}>
        <h2 style={{ 
          fontSize: windowWidth > 768 ? "2.5rem" : "2rem", 
          color: "#2a9d8f", 
          marginBottom: "20px",
          position: "relative",
          display: "inline-block", 
        }}>
          Featured Reviews
          <div style={{
            position: "absolute",
            height: "4px",
            width: "60%",
            backgroundColor: "#e76f51",
            bottom: "-10px",
            left: "20%",
            borderRadius: "2px"
          }}></div>
        </h2>
        
        <p style={{ 
          maxWidth: "800px", 
          margin: "30px auto 30px auto", 
          fontSize: windowWidth > 768 ? "1.2rem" : "1.1rem",
          lineHeight: "1.8",
          color: "#344e41",
          padding: "0 15px"
        }}>
          Check out some of my most popular takes on recent releases
        </p>
        
        {/* Category Filter */}
        <div style={{ 
          display: "flex", 
          justifyContent: "center", 
          gap: "15px",
          margin: "20px 0 40px 0",
          flexWrap: "wrap",
          padding: "0 15px"
        }}>
          {["all", "tv", "sci-fi", "drama", "action"].map(category => (
            <button
              key={category}
              onClick={() => filterReviews(category)}
              style={{
                backgroundColor: activeCategory === category ? "#2a9d8f" : "transparent",
                color: activeCategory === category ? "#fff" : "#2a9d8f",
                border: activeCategory === category ? "none" : "2px solid #2a9d8f",
                padding: "8px 20px",
                borderRadius: "20px",
                cursor: "pointer",
                fontWeight: "500",
                transition: "all 0.3s ease",
                textTransform: "capitalize",
                margin: "5px"
              }}
            >
              {category === "all" ? "All Reviews" : category}
            </button>
          ))}
        </div>
        
        {/* Reviews Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: windowWidth > 1200 ? "repeat(4, 1fr)" : windowWidth > 768 ? "repeat(2, 1fr)" : "1fr",
            gap: "30px",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 15px"
          }}
        >
          {filteredReviews.map((review, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#fff",
                borderRadius: "12px",
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.06)",
                overflow: "hidden",
                cursor: "pointer",
                transition: "transform 0.4s ease, box-shadow 0.4s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow = "0 15px 30px rgba(0, 0, 0, 0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.06)";
              }}
              onClick={() => navigate(`/review/${review.title.toLowerCase().replace(/\s+/g, "-")}`)}
            >
              <div style={{ position: "relative" }}>
                <img
                  src={review.image}
                  alt={review.title}
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <div style={{
                  position: "absolute",
                  top: "15px",
                  right: "15px",
                  backgroundColor: "#e76f51",
                  color: "white",
                  padding: "5px 10px",
                  borderRadius: "20px",
                  fontSize: "0.9rem",
                  fontWeight: "bold",
                }}>
                  {review.category.toUpperCase()}
                </div>
              </div>
              <div style={{ padding: "25px" }}>
                <div style={{ 
                  display: "flex", 
                  justifyContent: "space-between", 
                  alignItems: "center",
                  marginBottom: "15px"
                }}>
                  <h3 style={{ fontSize: "1.6rem", color: "#2a9d8f", margin: 0 }}>
                    {review.title}
                  </h3>
                  <div style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    color: "#e76f51", 
                    fontWeight: "bold" 
                  }}>
                    <span style={{ fontSize: "1.2rem", marginRight: "5px" }}>
                      {review.rating}
                    </span>
                    <span style={{ fontSize: "1.2rem" }}>★</span>
                  </div>
                </div>
                <p style={{ color: "#344e41", lineHeight: "1.7", textAlign: "left" }}>
                  {review.snippet}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <button
          onClick={() => navigate("/reviews")}
          style={{
            backgroundColor: "#2a9d8f",
            color: "#fff",
            padding: "12px 30px",
            fontSize: "1.1rem",
            border: "none",
            borderRadius: "30px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            fontWeight: "600",
            marginTop: "50px",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
        >
          View All Reviews
        </button>
      </section>

      {/* Movie Moods Section - Creative replacement for testimonials */}
      <section id="movie-moods" style={{ padding: windowWidth > 768 ? "80px 20px" : "60px 20px", textAlign: "center" }}>
        <h2 style={{ 
          fontSize: windowWidth > 768 ? "2.5rem" : "2rem", 
          color: "#2a9d8f", 
          marginBottom: "20px",
          position: "relative",
          display: "inline-block"
        }}>
          Find Your Movie Mood
          <div style={{
            position: "absolute",
            height: "4px",
            width: "60%",
            backgroundColor: "#e76f51",
            bottom: "-10px",
            left: "20%",
            borderRadius: "2px"
          }}></div>
        </h2>
        
        <p style={{ 
          maxWidth: "800px", 
          margin: "30px auto 50px auto", 
          fontSize: windowWidth > 768 ? "1.2rem" : "1.1rem",
          lineHeight: "1.8",
          color: "#344e41",
          padding: "0 15px"
        }}>
          Not sure what to watch? Let your mood be your guide! Browse my curated collections
          for every emotional state and occasion.
        </p>
        
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: windowWidth > 1200 ? "repeat(4, 1fr)" : windowWidth > 768 ? "repeat(2, 1fr)" : "1fr",
          gap: "30px",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 15px"
        }}>
          {[
            {
              mood: "Need a Good Laugh",
              emoji: "😂",
              color: "#FFD166",
              description: "Comedy picks that actually deliver the laughs - no awkward silences here!",
              recommendations: ["The Other Two", "What We Do in the Shadows", "Barb and Star Go to Vista Del Mar"]
            },
            {
              mood: "Mind-Bending Thrillers",
              emoji: "🤯",
              color: "#06D6A0",
              description: "Films that will keep you guessing until the very end and beyond.",
              recommendations: ["Severance", "Enemy", "Black Mirror: USS Callister"]
            },
            {
              mood: "Crying Session",
              emoji: "😭",
              color: "#118AB2",
              description: "When you need that emotional release - get the tissues ready.",
              recommendations: ["Dear Edward", "After Life", "Aftersun"]
            },
            {
              mood: "Adrenaline Rush",
              emoji: "💥",
              color: "#EF476F",
              description: "High-octane entertainment that will keep you on the edge of your seat.",
              recommendations: ["Top Gun: Maverick", "The Fall", "The Night Agent"]
            }
          ].map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#fff",
                borderRadius: "12px",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.05)",
                overflow: "hidden",
                position: "relative",
                transition: "transform 0.4s ease, box-shadow 0.4s ease",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow = "0 15px 35px rgba(0, 0, 0, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.05)";
              }}
              onClick={() => navigate(`/mood/${item.mood.toLowerCase().replace(/\s+/g, "-")}`)}
            >
              <div style={{
                backgroundColor: item.color,
                padding: "30px 20px",
                textAlign: "center",
                color: "#fff"
              }}>
                <div style={{ fontSize: "3.5rem", marginBottom: "10px" }}>
                  {item.emoji}
                </div>
                <h3 style={{ fontSize: "1.6rem", margin: "0 0 5px 0" }}>
                  {item.mood}
                </h3>
              </div>
              <div style={{ padding: "25px" }}>
                <p style={{ 
                  color: "#344e41", 
                  lineHeight: "1.7", 
                  marginBottom: "20px",
                  textAlign: "left"
                }}/>
                  <p style={{ 
                  color: "#344e41", 
                  lineHeight: "1.7", 
                  marginBottom: "20px",
                  textAlign: "left"
                }}>
                  {item.description}
                </p>
                <div style={{ textAlign: "left" }}>
                  <h4 style={{ color: "#2a9d8f", marginBottom: "10px", fontSize: "1.1rem" }}>
                    Top Picks:
                  </h4>
                  <ul style={{ 
                    listStyleType: "none", 
                    margin: 0, 
                    padding: 0
                  }}>
                    {item.recommendations.map((rec, idx) => (
                      <li 
                        key={idx} 
                        style={{
                          margin: "8px 0",
                          padding: "5px 0",
                          borderBottom: idx !== item.recommendations.length - 1 ? "1px solid #eee" : "none"
                        }}
                      >
                        <span style={{ marginRight: "5px" }}>•</span> {rec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section style={{ 
        padding: windowWidth > 768 ? "80px 20px" : "60px 20px", 
        textAlign: "center",
        backgroundColor: "#f0f9f4",
        position: "relative",
        overflow: "hidden"
      }}>
        <div style={{
          maxWidth: "900px",
          margin: "0 auto",
          backgroundColor: "#fff",
          padding: windowWidth > 768 ? "50px" : "30px",
          borderRadius: "12px",
          boxShadow: "0 15px 35px rgba(0, 0, 0, 0.08)",
          position: "relative",
          zIndex: 2
        }}>
          <h2 style={{ 
            fontSize: windowWidth > 768 ? "2.2rem" : "1.8rem", 
            color: "#2a9d8f", 
            marginBottom: "25px"
          }}>
            Never Miss a Review
          </h2>
          
          <p style={{ 
            maxWidth: "600px", 
            margin: "0 auto 40px auto", 
            fontSize: windowWidth > 768 ? "1.1rem" : "1rem",
            lineHeight: "1.8",
            color: "#344e41"
          }}>
            Subscribe to get my latest reviews and recommendations delivered straight to your inbox.
            No spam, just authentic takes on the latest in entertainment.
          </p>
          
          <div style={{ 
            display: "flex", 
            flexDirection: windowWidth > 480 ? "row" : "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "15px",
            maxWidth: "600px",
            margin: "0 auto"
          }}>
            <input 
              type="email"
              placeholder="Your email address"
              style={{
                padding: "15px 20px",
                fontSize: "1rem",
                border: "1px solid #ddd",
                borderRadius: "30px",
                width: windowWidth > 480 ? "60%" : "100%",
                outline: "none"
              }}
            />
            <button
              style={{
                backgroundColor: "#e76f51",
                color: "#fff",
                padding: "15px 30px",
                fontSize: "1rem",
                border: "none",
                borderRadius: "30px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                fontWeight: "600",
                width: windowWidth > 480 ? "auto" : "100%"
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer style={{
        backgroundColor: "#2a9d8f",
        color: "#fff",
        padding: windowWidth > 768 ? "60px 20px 40px 20px" : "40px 20px 30px 20px",
        textAlign: "center"
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ 
            display: "flex", 
            flexDirection: windowWidth > 768 ? "row" : "column",
            justifyContent: "space-between",
            alignItems: windowWidth > 768 ? "flex-start" : "center",
            textAlign: windowWidth > 768 ? "left" : "center",
            gap: "40px",
            marginBottom: "50px"
          }}>
            <div style={{ maxWidth: "300px" }}>
              <h3 style={{ fontSize: "1.8rem", marginBottom: "15px", color: "#fff" }}>
                Critics Corner<span style={{ color: "#e76f51" }}>🎥</span>
              </h3>
              <p style={{ lineHeight: "1.7", marginBottom: "20px" }}>
                Your trusted source for brutally honest film and TV reviews since 2022.
              </p>
            </div>
            
            <div>
              <h4 style={{ fontSize: "1.2rem", marginBottom: "20px", color: "#fff" }}>Quick Links</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li style={{ marginBottom: "10px" }}>
                  <a href="#about" style={{ color: "#fff", textDecoration: "none" }}>About</a>
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <a href="#featured" style={{ color: "#fff", textDecoration: "none" }}>Featured Reviews</a>
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <a href="#movie-moods" style={{ color: "#fff", textDecoration: "none" }}>Movie Moods</a>
                </li>
                <li>
                  <a href="/reviews" style={{ color: "#fff", textDecoration: "none" }}>All Reviews</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 style={{ fontSize: "1.2rem", marginBottom: "20px", color: "#fff" }}>Categories</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li style={{ marginBottom: "10px" }}>
                  <a href="/category/movies" style={{ color: "#fff", textDecoration: "none" }}>Movies</a>
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <a href="/category/tv" style={{ color: "#fff", textDecoration: "none" }}>TV Shows</a>
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <a href="/category/documentaries" style={{ color: "#fff", textDecoration: "none" }}>Documentaries</a>
                </li>
                <li>
                  <a href="/category/classics" style={{ color: "#fff", textDecoration: "none" }}>Classics</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 style={{ fontSize: "1.2rem", marginBottom: "20px", color: "#fff" }}>Connect</h4>
              <div style={{ display: "flex", gap: "15px", justifyContent: windowWidth > 768 ? "flex-start" : "center" }}>
                <a href="#" style={{ color: "#fff", fontSize: "1.5rem" }}>
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" style={{ color: "#fff", fontSize: "1.5rem" }}>
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" style={{ color: "#fff", fontSize: "1.5rem" }}>
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="#" style={{ color: "#fff", fontSize: "1.5rem" }}>
                  <i className="fab fa-letterboxd"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.2)", paddingTop: "30px" }}>
            <p>&copy; {new Date().getFullYear()} Critics Corner with Precious Kay. All rights reserved.</p>
            <div style={{ 
              display: "flex", 
              justifyContent: "center", 
              gap: "20px", 
              marginTop: "15px",
              fontSize: "0.9rem"
            }}>
              <a href="/privacy" style={{ color: "#fff", textDecoration: "none" }}>Privacy Policy</a>
              <a href="/terms" style={{ color: "#fff", textDecoration: "none" }}>Terms of Service</a>
              <a href="/contact" style={{ color: "#fff", textDecoration: "none" }}>Contact</a>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Add custom CSS for animations */}
      <style jsx>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0) translateX(-50%);
          }
          40% {
            transform: translateY(-20px) translateX(-50%);
          }
          60% {
            transform: translateY(-10px) translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}

export default LandingPage;