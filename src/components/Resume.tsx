import React, { useState, useEffect } from "react";
import "../assets/styles/Resume.scss"; 

const Resume: React.FC = () => {
  const googleDrivePdfUrl =
    "https://drive.google.com/file/d/1-dQfAfi2a_UrnjiWXA7PeLbt4Y8kpD8F/preview";
  const googleDriveDownloadUrl =
    "https://drive.google.com/uc?export=download&id=1-dQfAfi2a_UrnjiWXA7PeLbt4Y8kpD8F";

  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`resume-container ${isMobile ? "mobile" : "desktop"}`}>
      <h2 className="resume-title">My Resume</h2>

      <div className="resume-iframe-container">
        <iframe
          src={googleDrivePdfUrl}
          className="resume-iframe"
          title="Resume"
          allow="autoplay"
        ></iframe>
      </div>

      <a href={googleDriveDownloadUrl} download>
        <button className="resume-button">Download Resume</button>
      </a>
    </div>
  );
};

export default Resume;
