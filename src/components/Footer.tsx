import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/Nitishjhamb" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/nitish-jhamb-41980320b/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>License 2025 by Nitish Jhamb</p>
    </footer>
  );
}

export default Footer;