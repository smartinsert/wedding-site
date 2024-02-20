import React from "react";
import { Link } from "react-router-dom";
import { animated, useSpring } from "react-spring";
import "../styles/menu.css";

const Menu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuAnimation = useSpring({
    opacity: isMenuOpen ? 1 : 0,
    transform: `translateY(${isMenuOpen ? 0 : -20}px)`,
    delay: isMenuOpen ? 200 : 0,
  });

  return (
    <div>
      <div
        onClick={toggleMenu}
        style={{
          cursor: "pointer",
          position: "fixed",
          top: "20px",
          right: "20px",
          zIndex: 1000,
        }}
      >
        <div
          style={{
            width: "30px",
            height: "3px",
            backgroundColor: "#FFFFCC",
            marginBottom: "6px",
            transition: "0.4s",
            transform: isMenuOpen ? "rotate(-45deg) translate(-5px, 6px)" : "",
          }}
        />
        <div
          style={{
            width: "30px",
            height: "3px",
            backgroundColor: "#FFFFCC",
            marginBottom: "6px",
            transition: "0.4s",
            opacity: isMenuOpen ? 0 : 1,
          }}
        />
        <div
          style={{
            width: "30px",
            height: "3px",
            backgroundColor: "#FFFFCC",
            marginBottom: "0px",
            transition: "0.4s",
            transform: isMenuOpen ? "rotate(45deg) translate(-5px, -6px)" : "",
          }}
        />
      </div>
      <animated.div
        style={{
          display: isMenuOpen ? "flex" : "none",
          flexDirection: "column",
          gap: "10px",
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          background: "rgba(255, 255, 255, 0.4)",
          backdropFilter: "blur(10px) brightness(0.7)",
          zIndex: 999,
          justifyContent: "center",
          alignItems: "center",
          ...menuAnimation,
        }}
      >
        <Link to="/getting-married" onClick={toggleMenu} className="link">
          We're getting married
        </Link>
        <Link to="/how-it-started" onClick={toggleMenu} className="link">
          How it all started
        </Link>
        <Link to="/we-go-nuts" onClick={toggleMenu} className="link">
          We go nuts
        </Link>
        <Link to="/rsvp" onClick={toggleMenu} className="link">
          RSVP
        </Link>
        <Link to="/gifts" onClick={toggleMenu} className="link">
          Gifts
        </Link>
        <Link to="/thanks" onClick={toggleMenu} className="link">
          Thanks
        </Link>
      </animated.div>
    </div>
  );
};

export default Menu;
