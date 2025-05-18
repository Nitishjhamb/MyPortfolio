import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import Instagram from "@mui/icons-material/Instagram";
import "../assets/styles/Footer.scss";

function Footer() {
  return (
    <footer>
      <div>
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
        <a
          href="https://www.instagram.com/jhamb.nitish/"
          target="_blank"
          rel="noreferrer"
        >
          <Instagram />
        </a>
      </div>
      <p> © 2025 Nitish Jhamb</p>
    </footer>
  );
}

export default Footer;
