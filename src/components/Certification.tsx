import React from "react";
import "../assets/styles/Certification.scss";
import az900 from "../assets/certifications/az-900.jpg";

function Certification() {
  return (
    <section className="certification">
      <div className="certification-container">
        <h2 className="certification-title">Certifications</h2>

        <div className="certification-card">
          <img
            src={az900}
            alt="Microsoft Certified: Azure Fundamentals"
            className="certification-image"
          />
          <h3>Microsoft Certified: Azure Fundamentals (AZ-900)</h3>
          <p>
            <strong>Issuer:</strong> Microsoft
          </p>
          <p>
            <strong>Earned on:</strong> 29 August 2025
          </p>
          <a
            href="https://learn.microsoft.com/en-us/certifications/exams/az-900/"
            target="_blank"
            rel="noopener noreferrer"
            className="certification-link"
          >
            View Credential
          </a>
        </div>
      </div>
    </section>
  );
}

export default Certification;
