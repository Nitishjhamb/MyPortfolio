import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGraduate,
  faGraduationCap,
  faSchool,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/Timeline.scss";

const educationData = [
  {
    id: "mca",
    year: "2023 — 2025",
    degree: "MCA (Cloud & DevOps)",
    institute: "Chandigarh University",
    summary:
      "Advanced specialization in scalable cloud architectures and automation.",
    color: "#6366f1",
    icon: faUserGraduate,
  },
  {
    id: "bca",
    year: "2019 — 2022",
    degree: "BCA",
    institute: "Tirupati College",
    summary:
      "Solid foundation in software development and database management.",
    color: "#8b5cf6",
    icon: faGraduationCap,
  },
  {
    id: "inter",
    year: "2017 — 2019",
    degree: "Intermediate",
    institute: "Step by Step School",
    summary: "Senior secondary education focused on Science and Mathematics.",
    color: "#ec4899",
    icon: faSchool,
  },
  {
    id: "matric",
    year: "2016 — 2017",
    degree: "Matriculation",
    institute: "Sanskar Valley School",
    summary: "Foundational secondary school education.",
    color: "#f43f5e",
    icon: faBook,
  },
];

function Timeline() {
  const [activeTab, setActiveTab] = useState(educationData[0]);

  return (
    <section id="education" className="edu-minimal-section">
      <div className="section-header">
        <h1 className="project-title">Education</h1>
        <div className="title-underline"></div>
      </div>

      <div className="edu-layout">
        {/* Navigation Sidebar */}
        <div className="nav-sidebar">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className={`nav-item ${activeTab.id === edu.id ? "active" : ""}`}
              onClick={() => setActiveTab(edu)}
              style={{ "--accent": edu.color } as React.CSSProperties}
            >
              <FontAwesomeIcon icon={edu.icon} className="nav-icon" />
              <div className="nav-text">
                <span className="nav-degree">{edu.degree}</span>
                <span className="nav-year">{edu.year.split(" — ")[1]}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Info Display */}
        <div className="display-panel">
          <div className="panel-inner" key={activeTab.id}>
            <span className="accent-label" style={{ color: activeTab.color }}>
              {activeTab.year}
            </span>
            <h2>{activeTab.degree}</h2>
            <h3>{activeTab.institute}</h3>
            <p>{activeTab.summary}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
