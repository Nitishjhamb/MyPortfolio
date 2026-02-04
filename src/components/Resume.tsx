import React, { useState } from "react";
import DownloadIcon from "@mui/icons-material/Download";
import CircularProgress from "@mui/material/CircularProgress";
import "../assets/styles/Resume.scss";

const Resume: React.FC = () => {
  const [loading, setLoading] = useState(true);

  // Your actual Google Drive file ID
  const fileId = "1xDlDs15Fj8cEtzsxPtNiLWHLfK9xIIOp";
  const previewUrl = `https://drive.google.com/file/d/${fileId}/preview`;
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

  return (
    <div className="resume-page">
      <div className="resume-glass-card">
        <div className="resume-header">
          <h2 className="resume-title">My Resume</h2>
          <p className="resume-subtitle">
            Take a look at my history or download a copy.
          </p>
        </div>

        {/* Resume Viewer with Loading State */}
        <div className="resume-frame-container">
          {loading && (
            <div className="loading-overlay">
              <CircularProgress color="inherit" />
            </div>
          )}
          <iframe
            src={previewUrl}
            className="resume-iframe"
            title="Resume Viewer"
            allow="autoplay"
            onLoad={() => setLoading(false)}
          />
        </div>

        {/* Download Button */}
        <div className="resume-actions">
          <a
            href={downloadUrl}
            download="Nitish_Resume.pdf"
            className="download-btn"
          >
            <DownloadIcon sx={{ fontSize: 20 }} />
            <span>Download PDF</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
