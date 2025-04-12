import React, { useState, useEffect } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import "../assets/styles/Main.scss";
import profilepic from "../assets/images/profilepicb_w.webp";
import profilepicColor from "../assets/images/profilepiccolor.webp";
import { useTypewriter } from "../useTypewriter";

function Main({ parentToChild }: any) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { mode } = parentToChild;

  // Typewriter effect for name (one-time)
  const nameText = useTypewriter("NitishJhamb", {
    loop: false,
    typingSpeed: 100,
    onTypingComplete: () => setNameTypingComplete(true),
  });
  const [nameTypingComplete, setNameTypingComplete] = useState(false);

  // Typewriter effect for titles (looping)
  const titles = [
    "Cloud Infrastructure & Linux Administrator",
    "AWS | Azure | GCP Enthusiast",
    "DevOps Engineer",
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

    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <div className={`container ${isDarkMode ? "dark-mode" : "light-mode"}`}>
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
              href="https://mail.google.com/mail/u/0/#inbox?compose=jrjtWvMnFtTXdKKZQBdTFZZCpFxSJzsLvdpsBnQwQwmhWjqWfjxghwJbkcLcLCsJdSqrrwJB"
              target="_blank"
              rel="noreferrer"
            >
              <EmailIcon />
            </a>
          </div>
          <h1 className={nameTypingComplete ? "complete" : ""}>{nameText}</h1>
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
              href="https://mail.google.com/mail/u/0/#inbox?compose=jrjtWvMnFtTXdKKZQBdTFZZCpFxSJzsLvdpsBnQwQwmhWjqWfjxghwJbkcLcLCsJdSqrrwJB"
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
