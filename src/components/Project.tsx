import mockup1 from "../assets/images/mockup1.png";
import mockup2 from "../assets/images/mockup2.png";
import mockup3 from "../assets/images/mockup3.png";
import mockup4 from "../assets/images/mockup4.png";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <div className="image-container">
            <a
              href="https://github.com/Nitishjhamb/automation-react-project.git"
              target="_blank"
              rel="noreferrer"
            >
              <img src={mockup4} className="zoom" alt="thumbnail" />
            </a>
          </div>
          <a
            href="https://github.com/Nitishjhamb/automation-react-project.git"
            target="_blank"
            rel="noreferrer"
          >
            <h2>
              Automated Vulnerability Management and Visualization Platform
            </h2>
          </a>
          <p>
            Automated Vulnerability Management and Visualization Platform" is a
            comprehensive solution designed to enhance software security by
            automating the detection, analysis, and remediation of
            vulnerabilities across the development lifecycle.
          </p>
        </div>
        <div className="project">
          <div className="image-container">
            <a
              href="https://www.aquila-cms.com/demo#"
              target="_blank"
              rel="noreferrer"
            >
              <img src={mockup3} className="zoom" alt="thumbnail" />
            </a>
          </div>
          <a
            href="https://www.aquila-cms.com/demo#"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Aquila Cloud Shield Application</h2>
          </a>
          <p>
            The Aquila Cloud Shield Application project focuses on deploying a
            robust and secure web application using the MERN (MongoDB,
            Express.js, React, Node.js) stack within a three-tier architecture
            on a cloud platform such as AWS or Azure.
          </p>
        </div>
        <div className="project">
          <div className="image-container">
            <a
              href="https://chatvaani.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={mockup2} className="zoom" alt="thumbnail" />
            </a>
          </div>
          <a
            href="https://chatvaani.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>ChatVaani</h2>
          </a>
          <p>
            ChatVaani AI Bot is an intelligent, real-time conversational
            assistant designed to enhance user interaction and automate tasks
            seamlessly. Built with advanced AI capabilities, it can answer
            queries, provide personalized recommendations, and assist with daily
            activities. Whether it's fetching information, helping with
            reminders, or engaging in meaningful conversations, ChatVaani AI Bot
            ensures an intuitive, responsive, and human-like experience.
          </p>
        </div>
        <div className="project">
          <div className="image-container">
            <a
              href="https://github.com/Nitishjhamb"
              target="_blank"
              rel="noreferrer"
            >
              <img src={mockup1} className="zoom" alt="thumbnail" />
            </a>
          </div>
          <a
            href="https://github.com/Nitishjhamb"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Integration EduTech</h2>
          </a>
          <p>
            Developed a comprehensive web-based solution for Integration EduTech
            to efficiently manage employees, clients, and organizational
            workflows. This platform streamlines core operations by providing
            features like employee records management, client tracking, task
            assignments, and performance monitoring.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
