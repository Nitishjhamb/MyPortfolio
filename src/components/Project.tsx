import React from "react";
import mockup1 from '../assets/images/mockup1.png';
import mockup2 from '../assets/images/mockup2.png';
import mockup3 from '../assets/images/mockup3.png';
import mockup4 from '../assets/images/mockup4.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
        
            <div className="project">
                <a href="https://github.com/Nitishjhamb/automation-react-project.git" target="_blank" rel="noreferrer"><img src={mockup4} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Nitishjhamb/automation-react-project.git" target="_blank" rel="noreferrer"><h2>Automated Vulnerability Management and Visualization Platform
                </h2></a>
                <p>Automated Vulnerability Management and Visualization Platform" is a comprehensive solution designed to enhance software security by automating the detection, analysis, and remediation of vulnerabilities across the development lifecycle.</p>
            </div>
            <div className="project">
                <a href="https://www.aquila-cms.com/demo#" target="_blank" rel="noreferrer"><img src={mockup3} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.aquila-cms.com/demo#" target="_blank" rel="noreferrer"><h2>Aquila Cloud Shield Application</h2></a>
                <p>The Aquila Cloud Shield Application project focuses on
deploying a robust and secure web application using the MERN
(MongoDB, Express.js, React, Node.js) stack within a three-tier
architecture on a cloud platform such as AWS or Azure.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Nitishjhamb/generative-ai.git" target="_blank" rel="noreferrer"><img src={mockup2} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Nitishjhamb/generative-ai.git" target="_blank" rel="noreferrer"><h2>Generative-Ai</h2></a>
                <p>An AI-powered chatbot utilizing Google's Gemini API, built with Node.js and Express, offering a seamless and interactive conversation experience.</p>
            </div>
            <div className="project">
                <a href="#" target="_blank" rel="noreferrer"><img src={mockup1} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="#" target="_blank" rel="noreferrer"><h2>Integration EduTech</h2></a>
                <p>Developed a Website for an Organisation to manage Employes,Client.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;