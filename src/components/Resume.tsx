import React from "react";
import "../assets/styles/Resume.scss";

const Resume: React.FC = () => {
  // Your actual Google Drive file ID
  const fileId = "1xDlDs15Fj8cEtzsxPtNiLWHLfK9xIIOp";
  const previewUrl = `https://drive.google.com/file/d/${fileId}/preview`;
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

  return (
    <div className="resume-container">
      <div className="resume-content">
        <h2 className="resume-title">My Resume</h2>

        {/* Resume Viewer (Google Drive Preview) */}
        <div className="resume-viewer">
          <iframe
            src={previewUrl}
            className="resume-iframe"
            title="Resume Viewer"
            allow="autoplay"
          />
        </div>

        {/* Download Button */}
        <div className="download-container">
          <a
            href={downloadUrl}
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
