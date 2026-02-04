import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import "../assets/styles/Navigation.scss";

interface NavigationProps {
  parentToChild: { mode: string };
  modeChange: () => void;
}

const navItems = [
  { name: "Expertise", id: "expertise" },
  { name: "Education", id: "education" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

function Navigation({ parentToChild, modeChange }: NavigationProps) {
  const { mode } = parentToChild;
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu whenever the route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const scrollToSection = (section: string) => {
    setMobileMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document
          .getElementById(section)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goHome = () => {
    setMobileMenuOpen(false);
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* --- CLASSIC GLASS NAVBAR --- */}
      <nav className={`navbar ${mode === "dark" ? "dark-mode" : "light-mode"}`}>
        <div className="navbar-container">
          {/* 1. LINKS (Left Aligned for Classic Feel) */}
          <div className="navbar-links">
            {/* Home Icon */}
            <button className="nav-link" onClick={goHome} title="Home">
              <div style={{ display: "flex", alignItems: "center" }}>
                <HomeIcon fontSize="small" style={{ marginRight: 5 }} />
                Home
              </div>
            </button>

            {/* Nav Items */}
            {navItems.map((item) => (
              <button
                key={item.id}
                className="nav-link"
                onClick={() => scrollToSection(item.id)}
              >
                {item.name}
              </button>
            ))}
            <button className="nav-link" onClick={() => navigate("/resume")}>
              Resume
            </button>
            <button
              className="nav-link"
              onClick={() => navigate("/certifications")}
            >
              Certifications
            </button>
          </div>

          {/* MOBILE LOGO (Visible only when desktop links are hidden) */}
          <div className="navbar-mobile-brand" style={{ display: "none" }}>
            {/* You can show a logo here on mobile if you want */}
            <button className="nav-link" onClick={goHome}>
              <HomeIcon />
            </button>
          </div>

          {/* 2. CONTROLS (Right Aligned) */}
          <div className="navbar-controls">
            <div className="theme-toggle" onClick={modeChange}>
              {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
            </div>

            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{ color: "inherit" }}
            >
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </nav>

      {/* --- MOBILE FULLSCREEN MENU --- */}
      <div
        className={`mobile-menu ${mobileMenuOpen ? "open" : ""} ${mode === "dark" ? "dark-mode" : "light-mode"}`}
      >
        <div className="mobile-link" onClick={goHome}>
          Home
        </div>
        {navItems.map((item) => (
          <div
            key={item.id}
            className="mobile-link"
            onClick={() => scrollToSection(item.id)}
          >
            {item.name}
          </div>
        ))}
        <div className="mobile-link" onClick={() => navigate("/resume")}>
          Resume
        </div>
        <div
          className="mobile-link"
          onClick={() => navigate("/certifications")}
        >
          Certifications
        </div>
      </div>
    </>
  );
}

export default Navigation;
