import React, { useState, useEffect } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import "../assets/styles/Main.scss";
import profilepic from "../assets/images/profilepicb_w.webp";
import profilepicColor from "../assets/images/profilepiccolor.webp";
import { useTypewriter } from "../useTypewriter";
import ColorBends from "./ColorBends";

const ShinyText = ({
  text,
  mode,
  speed = 3,
}: {
  text: string;
  mode: string;
  speed?: number;
}) => {
  const baseColor = mode === "dark" ? "#ffffff" : "#1a1a1a";
  const shineColor = mode === "dark" ? "#cfcfcf" : "#777777";

  return (
    <div
      style={{
        display: "inline-block",
        position: "relative",
        backgroundImage: `linear-gradient(120deg, ${baseColor} 0%, ${baseColor} 40%, ${shineColor} 50%, ${baseColor} 60%, ${baseColor} 100%)`,
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
        animation: `shine ${speed}s linear infinite`,
        fontWeight: 800,
      }}
    >
      {text}
      <style>{`@keyframes shine { 0% { background-position: 100% 0; } 100% { background-position: -100% 0; } }`}</style>
    </div>
  );
};

function Main(props: any) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const parentToChild = props.parentToChild || {};
  const mode = parentToChild.mode || (isDarkMode ? "dark" : "light");

  const titles = [
    "Azure Cloud Enthusiast",
    "DevOps Practitioner",
    "Open Source Contributor",
    "Tech Enthusiast",
  ];
  const titleText = useTypewriter(titles, {
    loop: true,
    typingSpeed: 100,
    deletingSpeed: 50,
    delayBetweenTexts: 2000,
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(mediaQuery.matches);
    const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <div
      className={`container ${mode === "dark" ? "dark-mode" : "light-mode"}`}
    >
      {/* ✅ FIX: Added ID and minHeight to force proper stretching */}
      <div
        id="canvas-wrapper"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          minHeight: "100%" /* Critical for mobile scroll */,
          zIndex: 0,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        {mode === "dark" ? (
          <ColorBends
            colors={["#ff5c7a", "#8a5cff", "#00ffd1"]}
            rotation={0}
            speed={0.2}
            scale={1}
            frequency={1}
            warpStrength={1}
            mouseInfluence={1}
            parallax={0.5}
            noise={0.1}
            transparent
            autoRotate={0}
            backgroundColor="#000000"
          />
        ) : (
          <ColorBends
            style={{ opacity: 0.3 }}
            colors={["#000000", "#333333", "#666666"]}
            rotation={0}
            speed={0.2}
            scale={1}
            frequency={1}
            warpStrength={1}
            mouseInfluence={1}
            parallax={0.5}
            noise={0.1}
            transparent
            autoRotate={0}
            backgroundColor="#ffffff"
          />
        )}
      </div>

      <div className="about-section">
        <div className="image-wrapper">
          <img
            src={mode === "dark" ? profilepicColor : profilepic}
            alt="Avatar"
          />
        </div>

        <div className="content">
          <div className="social_icons">
            <a
              href="https://github.com/Nitishjhamb"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/nitish-jhamb-41980320b/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://mail.google.com/mail/u/0/#inbox"
              target="_blank"
              rel="noreferrer"
            >
              <EmailIcon />
            </a>
          </div>

          <h1>
            <ShinyText text="Nitish Jhamb" mode={mode} speed={2.5} />
          </h1>
          <p>{titleText}</p>

          <div className="mobile_social_icons">
            <a
              href="https://github.com/Nitishjhamb"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/nitish-jhamb-41980320b/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://mail.google.com/mail/u/0/#inbox"
              target="_blank"
              rel="noreferrer"
            >
              <EmailIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
