import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Main.scss';
import profilepic from '../assets/images/profilepic1.png';

function Main() {

  return (
    <div className="container">
      
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profilepic} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Nitishjhamb" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/nitish-jhamb-41980320b/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=jrjtWvMnFtTXdKKZQBdTFZZCpFxSJzsLvdpsBnQwQwmhWjqWfjxghwJbkcLcLCsJdSqrrwJB" target="_blank" rel="noreferrer"><EmailIcon/></a>
          </div>
          <h1>NitishJhamb</h1>
          <p>Cloud Infrastructure & Linux
          Administrator</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Nitishjhamb" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/nitish-jhamb-41980320b/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=jrjtWvMnFtTXdKKZQBdTFZZCpFxSJzsLvdpsBnQwQwmhWjqWfjxghwJbkcLcLCsJdSqrrwJB" target="_blank" rel="noreferrer"><EmailIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;