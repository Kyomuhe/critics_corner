// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px", background: "#333", color: "#fff" }}>
      <h1>Critics Corner with Precious Kay</h1>
      <Link to="/add-review">
        <button style={{ padding: "10px 20px", cursor: "pointer", background: "#f5ba13", border: "none", color: "#333" }}>
          Add Review
        </button>
      </Link>
    </header>
  );
}

export default Header;
