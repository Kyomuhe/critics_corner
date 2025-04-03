import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import shameless from "./images/shameless.PNG";
import fromm from "./images/fromm.PNG";
import big from "./images/big.PNG";
import chicago from "./images/chicago.PNG";
import unfort from "./images/unfort.PNG";
import black from "./images/black.PNG";

// Enhanced reviews data with more information
const reviews = [
  { 
    id: 1, 
    title: "Shameless", 
    image: shameless,
    rating: 4.2,
    category: "drama",
    year: "2011-2021",
    snippet: "Raw, unapologetic, and wildly entertaining look at a dysfunctional family."
  },
  { 
    id: 2, 
    title: "From", 
    image: fromm,
    rating: 4.5,
    category: "horror",
    year: "2022-Present",
    snippet: "Terrifying small-town mystery with genuinely unsettling atmosphere."
  },
  { 
    id: 3, 
    title: "Big Bang Theory", 
    image: big,
    rating: 3.8,
    category: "comedy",
    year: "2007-2019",
    snippet: "Nerdy humor that made science mainstream, though runs out of steam in later seasons."
  },
  { 
    id: 4, 
    title: "Chicago PD", 
    image: chicago,
    rating: 4.0,
    category: "crime",
    year: "2014-Present",
    snippet: "Gritty police drama that doesn't shy away from moral complexity."
  },
  { 
    id: 5, 
    title: "A Series of Unfortunate Events", 
    image: unfort,
    rating: 4.3,
    category: "family",
    year: "2017-2019",
    snippet: "Darkly whimsical adaptation that captures the books' unique tone perfectly."
  },
  { 
    id: 6, 
    title: "Blackish", 
    image: black,
    rating: 4.1,
    category: "comedy",
    year: "2014-2022",
    snippet: "Smart family comedy that tackles cultural issues with humor and heart."
  },
];

function ReviewsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [sortBy, setSortBy] = useState("title");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Get unique categories for filter buttons
  const categories = ["all", ...new Set(reviews.map(review => review.category))];

  // Filter reviews based on search term and category
  const filteredReviews = reviews.filter((review) => {
    const matchesSearch = review.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "all" || review.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  // Sort reviews
  const sortedReviews = [...filteredReviews].sort((a, b) => {
    if (sortBy === "title") {
      return a.title.localeCompare(b.title);
    } else if (sortBy === "rating") {
      return b.rating - a.rating;
    } else if (sortBy === "year") {
      // Extract start year for sorting
      const yearA = parseInt(a.year.split("-")[0]);
      const yearB = parseInt(b.year.split("-")[0]);
      return yearB - yearA; // Most recent first
    }
    return 0;
  });

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #e6f9f0, #b8e4c9, #d4f7e5)",
      fontFamily: "'Poppins', sans-serif",
      paddingTop: "80px", // Space for fixed navbar
      paddingBottom: "40px"
    }}>
      {/* Page Header */}
      <div style={{
        textAlign: "center",
        padding: "40px 20px 20px 20px",
      }}>
        <h1 style={{ 
          fontSize: windowWidth > 768 ? "3rem" : "2.2rem", 
          color: "#2a9d8f", 
          marginBottom: "15px",
          fontWeight: "700"
        }}>
          All Reviews
        </h1>
        <p style={{ 
          fontSize: windowWidth > 768 ? "1.2rem" : "1rem", 
          maxWidth: "700px", 
          margin: "0 auto 30px auto",
          color: "#344e41"
        }}>
          Browse my complete collection of brutally honest TV series reviews.
        </p>
      </div>

      {/* Search and Filter Controls */}
      <div style={{ 
        maxWidth: "1200px", 
        margin: "0 auto 30px auto",
        padding: "0 20px"
      }}>
        <div style={{ 
          backgroundColor: "white",
          borderRadius: "12px",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
          padding: "25px",
          marginBottom: "30px"
        }}>
          {/* Search Field */}
          <div style={{ marginBottom: "20px" }}>
            <div style={{ 
              display: "flex", 
              alignItems: "center",
              backgroundColor: "#f5f5f5",
              borderRadius: "30px",
              padding: "5px 15px",
              border: "2px solid transparent",
              transition: "all 0.3s ease",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2a9d8f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: "10px" }}>
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                type="text"
                placeholder="Search by title..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: "100%",
                  padding: "12px 0",
                  fontSize: "1rem",
                  border: "none",
                  outline: "none",
                  backgroundColor: "transparent",
                }}
              />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm("")}
                  style={{ 
                    background: "none", 
                    border: "none", 
                    cursor: "pointer",
                    color: "#777" 
                  }}
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Filter and Sort Controls */}
          <div style={{ 
            display: "flex", 
            flexDirection: windowWidth > 768 ? "row" : "column",
            justifyContent: "space-between",
            alignItems: windowWidth > 768 ? "center" : "flex-start",
            gap: "20px"
          }}>
            {/* Category Filter */}
            <div>
              <h3 style={{ 
                marginBottom: "10px", 
                fontSize: "1rem", 
                color: "#344e41",
                fontWeight: "600"
              }}>
                Filter by Category:
              </h3>
              <div style={{ 
                display: "flex", 
                flexWrap: "wrap", 
                gap: "10px" 
              }}>
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    style={{
                      backgroundColor: activeCategory === category ? "#2a9d8f" : "transparent",
                      color: activeCategory === category ? "#fff" : "#2a9d8f",
                      border: activeCategory === category ? "none" : "2px solid #2a9d8f",
                      padding: "8px 16px",
                      borderRadius: "20px",
                      cursor: "pointer",
                      fontWeight: "500",
                      transition: "all 0.3s ease",
                      textTransform: "capitalize"
                    }}
                  >
                    {category === "all" ? "All Categories" : category}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Sort Options */}
            <div>
              <h3 style={{ 
                marginBottom: "10px", 
                fontSize: "1rem", 
                color: "#344e41",
                fontWeight: "600"
              }}>
                Sort by:
              </h3>
              <div style={{ 
                display: "flex", 
                gap: "10px",
                flexWrap: "wrap"
              }}>
                {[
                  { value: "title", label: "Title (A-Z)" },
                  { value: "rating", label: "Highest Rated" },
                  { value: "year", label: "Newest" }
                ].map(option => (
                  <button
                    key={option.value}
                    onClick={() => setSortBy(option.value)}
                    style={{
                      backgroundColor: sortBy === option.value ? "#e76f51" : "transparent",
                      color: sortBy === option.value ? "#fff" : "#e76f51",
                      border: sortBy === option.value ? "none" : "2px solid #e76f51",
                      padding: "8px 16px",
                      borderRadius: "20px",
                      cursor: "pointer",
                      fontWeight: "500",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div style={{ marginBottom: "20px", color: "#344e41" }}>
          {filteredReviews.length === 0 ? (
            <p>No results found. Try adjusting your filters.</p>
          ) : (
            <p>Showing {filteredReviews.length} {filteredReviews.length === 1 ? 'result' : 'results'}</p>
          )}
        </div>
      </div>

      {/* Reviews Grid */}
      <div style={{ 
        maxWidth: "1200px", 
        margin: "0 auto",
        padding: "0 20px"
      }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: windowWidth > 1200 ? "repeat(3, 1fr)" : windowWidth > 768 ? "repeat(2, 1fr)" : "1fr",
            gap: "30px",
          }}
        >
          {sortedReviews.length > 0 ? (
            sortedReviews.map((review) => (
              <div
                key={review.id}
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
                onClick={() => navigate(`/reviews/${review.id}`)}
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
                  <div style={{
                    position: "absolute",
                    bottom: "15px",
                    left: "15px",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    color: "white",
                    padding: "5px 10px",
                    borderRadius: "20px",
                    fontSize: "0.9rem",
                  }}>
                    {review.year}
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
                  <div style={{ 
                    marginTop: "20px", 
                    display: "inline-block",
                    color: "#2a9d8f",
                    fontWeight: "600",
                    borderBottom: "2px solid #2a9d8f",
                    paddingBottom: "2px"
                  }}>
                    Read full review →
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div style={{ 
              gridColumn: "1/-1", 
              textAlign: "center",
              padding: "50px 20px",
              backgroundColor: "white",
              borderRadius: "12px",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
            }}>
              <div style={{ fontSize: "3rem", marginBottom: "20px" }}>
                😕
              </div>
              <h3 style={{ color: "#2a9d8f", marginBottom: "15px", fontSize: "1.5rem" }}>
                No series found
              </h3>
              <p style={{ color: "#344e41", maxWidth: "500px", margin: "0 auto" }}>
                I haven't reviewed or watched that series yet. Check back later or try a different search term.
              </p>
              <button 
                onClick={() => {
                  setSearchTerm("");
                  setActiveCategory("all");
                }}
                style={{
                  backgroundColor: "#e76f51",
                  color: "#fff",
                  padding: "12px 25px",
                  fontSize: "1rem",
                  border: "none",
                  borderRadius: "25px",
                  cursor: "pointer",
                  marginTop: "20px",
                  fontWeight: "500",
                }}
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Back to Home Button */}
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <button
          onClick={() => navigate("/")}
          style={{
            backgroundColor: "transparent",
            color: "#2a9d8f",
            padding: "12px 25px",
            fontSize: "1rem",
            border: "2px solid #2a9d8f",
            borderRadius: "25px",
            cursor: "pointer",
            fontWeight: "600",
            transition: "all 0.3s ease",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(42, 157, 143, 0.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default ReviewsPage;