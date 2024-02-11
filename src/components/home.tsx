import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleEnterClick = () => {
    navigate("/getting-married");
  };

  return (
    <div
      className="Homepage-background-image"
      style={{
        backgroundImage:
          'url("https://images.squarespace-cdn.com/content/v1/5ad7b796c3c16a6c73c0c347/1525530545776-WIYUM78X5OI7K4NOEWSE/Kid+Photo.jpg?format=2500w")',
      }} // Replace with your image path
    >
      <div className="Homepage-root">
        <div className="Homepage-root-div">
          <img
            alt="Wedding Logo"
            src="/images/wedding_logo.png"
            className="Homepage-root-img"
          />
        </div>
        <h1 className="Homepage-title">We're getting</h1>
        <h1 className="Homepage-title">married</h1>
        <button className="homepage-button" onClick={handleEnterClick}>
          Enter
        </button>
      </div>
    </div>
  );
};

export default Home;
