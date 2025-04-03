import React, { useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

interface NotFoundProps {
  message?: string;
}

const NotFound: React.FC<NotFoundProps> = ({ message = "Page not found" }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      window.location.href = `/find-jobs?search=${encodeURIComponent(
        searchTerm
      )}`;
    }
  };
  return (
    <div style={containerStyle}>
      <DotLottieReact
        style={animationStyle}
        autoplay
        loop
        src="https://lottie.host/d1f4afd3-53fc-429b-838e-93f7070b4c62/hQBV6RREpn.lottie"
      />
      <h1 style={titleStyle}>404</h1>
      <p style={textStyle}>{message}</p>
      <form style={searchContainerStyle} onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for jobs..."
          style={inputStyle}
        />
        <button type="submit" style={searchButtonStyle} onClick={handleSearch}>
          Search
        </button>
      </form>

      <button
        style={homeButtonStyle}
        onClick={() => (window.location.href = "/")}
      >
        Return Home
      </button>

      <style>{`
        input:focus-visible {
          outline: 2px solid #0055FF !important;
          border-color: #0055FF;
        }
      `}</style>
    </div>
  );
};

const searchContainerStyle: React.CSSProperties = {
  display: "flex",
  position: "relative",
  gap: "0.5rem",
  marginTop: "1rem",
  maxWidth: "500px",
  width: "100%",
};

const inputStyle: React.CSSProperties = {
  flex: 1,
  padding: "0.75rem",
  borderRadius: "4px",
  border: "1px solid #cbd5e0",
  fontSize: "1rem",
};

const searchButtonStyle: React.CSSProperties = {
  position: "absolute",
  height: "100%",
  right: "0",
  padding: "0.75rem 1.5rem",
  backgroundColor: "#E0EBFF",
  color: "#0055FF",
  border: "none",
  borderRadius: "0 4px 4px 0",
  cursor: "pointer",
  fontSize: "1rem",
  transition: "background-color 0.2s",
};

const homeButtonStyle: React.CSSProperties = {
  marginTop: "2rem",
  padding: "0.75rem 1.5rem",
  backgroundColor: "#0055FF",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

const containerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  textAlign: "center",
  backgroundColor: "#fff",
  fontFamily: "Arial, sans-serif",
};

const animationStyle: React.CSSProperties = {
  height: "320px",
  width: "320px",
};

const titleStyle: React.CSSProperties = {
  fontSize: "3rem",
  fontWeight: "bold",
  margin: "0",
  color: "#0055FF",
};

const textStyle: React.CSSProperties = {
  fontSize: "1.25rem",
  color: "#4a5568",
  marginTop: "1rem",
};

export default NotFound;
