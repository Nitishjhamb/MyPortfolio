import React, { useState } from "react";
import "../assets/styles/Resume.scss";
import page1 from "../assets/images/resume-page1.jpg";
import page2 from "../assets/images/resume-page2.jpg";

const Resume: React.FC = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="resume-container">
      <div className="resume-content">
        <h2 className="resume-title">My Resume</h2>

        {/* Flip Card */}
        <div className="flip-card" onClick={() => setFlipped(!flipped)}>
          <div className={`flip-card-inner ${flipped ? "flipped" : ""}`}>
            {/* Front */}
            <div className="flip-card-front">
              <img
                src={page1}
                alt="Resume Page 1"
                className="flip-card-image"
              />
            </div>

            {/* Back */}
            <div className="flip-card-back">
              <img
                src={page2}
                alt="Resume Page 2"
                className="flip-card-image"
              />
            </div>
          </div>
        </div>

        {/* Download Button */}
        <div className="download-container">
          <a
            href="/resume.pdf"
            download="Nitish_Resume.pdf"
            className="download-button"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
