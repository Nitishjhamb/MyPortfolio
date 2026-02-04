import React, { useState } from "react";
import LaunchIcon from "@mui/icons-material/Launch";
import CloseIcon from "@mui/icons-material/Close";
import "../assets/styles/Certification.scss";
import az900 from "../assets/certifications/az-900.jpg";
import jsCert from "../assets/certifications/javascript-cert.jpg";
import reactNativeCert from "../assets/certifications/react-native-cert.jpg";

function Certification() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openImage = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <section className="certification-page">
      <div className="certification-container">
        <h2 className="certification-title">Certifications</h2>
        <p className="certification-subtitle">
          Credentials and verified skills.
        </p>

        <div className="certification-grid">
          {/* Card 1 */}
          <div className="cert-glass-card">
            <div
              className="cert-image-wrapper"
              onClick={() => openImage(az900)}
            >
              <img
                src={az900}
                alt="Microsoft Certified: Azure Fundamentals"
                className="cert-image"
              />
              <div className="zoom-hint">Click to Zoom</div>
            </div>
            <div className="cert-content">
              <h3>Microsoft Certified: Azure Fundamentals (AZ-900)</h3>
              <div className="cert-details">
                <p>
                  <strong>Issuer:</strong> Microsoft
                </p>
                <p>
                  <strong>Earned:</strong> Aug 29, 2025
                </p>
              </div>
              <a
                href="https://learn.microsoft.com/en-us/certifications/exams/az-900/"
                target="_blank"
                rel="noopener noreferrer"
                className="cert-link-btn"
              >
                <span>View Credential</span>
                <LaunchIcon sx={{ fontSize: 16 }} />
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="cert-glass-card">
            <div
              className="cert-image-wrapper"
              onClick={() => openImage(jsCert)}
            >
              <img
                src={jsCert}
                alt="JavaScript Course Completion"
                className="cert-image"
              />
              <div className="zoom-hint">Click to Zoom</div>
            </div>
            <div className="cert-content">
              <h3>JavaScript Course Completion</h3>
              <div className="cert-details">
                <p>
                  <strong>Issuer:</strong> Infosys Springboard
                </p>
                <p>
                  <strong>Earned:</strong> Mar 2, 2024
                </p>
              </div>
              <a
                href="https://verify.onwingspan.com"
                target="_blank"
                rel="noopener noreferrer"
                className="cert-link-btn"
              >
                <span>View Credential</span>
                <LaunchIcon sx={{ fontSize: 16 }} />
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="cert-glass-card">
            <div
              className="cert-image-wrapper"
              onClick={() => openImage(reactNativeCert)}
            >
              <img
                src={reactNativeCert}
                alt="React Native Course Completion"
                className="cert-image"
              />
              <div className="zoom-hint">Click to Zoom</div>
            </div>
            <div className="cert-content">
              <h3>React Native Course Completion</h3>
              <div className="cert-details">
                <p>
                  <strong>Issuer:</strong> Infosys Springboard
                </p>
                <p>
                  <strong>Earned:</strong> Mar 3, 2024
                </p>
              </div>
              <a
                href="https://verify.onwingspan.com"
                target="_blank"
                rel="noopener noreferrer"
                className="cert-link-btn"
              >
                <span>View Credential</span>
                <LaunchIcon sx={{ fontSize: 16 }} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* FULL SCREEN IMAGE MODAL */}
      {selectedImage && (
        <div className="image-modal-overlay" onClick={closeImage}>
          <button className="modal-close-btn" onClick={closeImage}>
            <CloseIcon sx={{ fontSize: 30 }} />
          </button>
          <img
            src={selectedImage}
            alt="Enlarged Certification"
            className="modal-image"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
          />
        </div>
      )}
    </section>
  );
}

export default Certification;
