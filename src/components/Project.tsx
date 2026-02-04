import React from "react";
import "../assets/styles/Project.scss";

const projectData = [
  {
    title: "Inkscribe",
    desc: "AI OCR platform for handwriting using Azure and Gemini AI.",
    tech: ["Azure", "Gemini", "Flask"],
    link: "https://inkscribe.vercel.app/",
  },
  {
    title: "ChatVaani AI",
    desc: "Conversational assistant for task automation and interaction.",
    tech: ["React", "Node.js", "AI"],
    link: "https://chatvaani.netlify.app/",
  },
  {
    title: "Azure Translator",
    desc: "Translation tool leveraging Azure Cognitive Services.",
    tech: ["Azure API", "React"],
    link: "https://azure-translator-eight.vercel.app/",
  },
];

function Project() {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const cards = document.getElementsByClassName("project-card");
    for (const card of cards as any) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  };

  return (
    <section
      className="projects-minimal-section"
      id="projects"
      onMouseMove={handleMouseMove}
    >
      <div className="dot-grid-bg"></div>

      <div className="section-header">
        <h1 className="project-title">Projects</h1>
        <div className="title-underline"></div>
      </div>

      <div className="projects-grid">
        {projectData.map((proj, index) => (
          <div className="project-card" key={index}>
            <div className="card-inner">
              <div className="tech-row">
                {proj.tech.map((t) => (
                  <span key={t} className="tech-pill">
                    {t}
                  </span>
                ))}
              </div>
              <h2>{proj.title}</h2>
              <p>{proj.desc}</p>
              <a
                href={proj.link}
                target="_blank"
                rel="noreferrer"
                className="source-link"
              >
                View Source →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
