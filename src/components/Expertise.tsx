import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faCloud, faTerminal } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import "../assets/styles/Expertise.scss";

// ✅ Original Logos
const allLogos = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    alt: "React",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    alt: "JavaScript",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg",
    alt: "HTML5",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
    alt: "CSS3",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg",
    alt: "SASS",
  },
  {
    src: "https://img.icons8.com/?size=100&id=laYYF3dV0Iew&format=png&color=000000",
    alt: "SQL",
  },
  {
    src: "https://www.netlify.com/v3/img/components/logomark.svg",
    alt: "Netlify",
  },
  {
    src: "https://img.icons8.com/?size=100&id=VLKafOkk3sBX&format=png&color=000000",
    alt: "Microsoft Azure",
  },
  {
    src: "https://img.icons8.com/?size=100&id=33039&format=png&color=000000",
    alt: "AWS",
  },
  {
    src: "https://img.icons8.com/?size=100&id=20906&format=png&color=000000",
    alt: "Git",
  },
  {
    src: "https://avatars.githubusercontent.com/u/44036562?s=200&v=4",
    alt: "GitHub Actions",
  },
  {
    src: "https://img.icons8.com/?size=100&id=22813&format=png&color=000000",
    alt: "Docker",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Jenkins_logo.svg",
    alt: "Jenkins",
  },
  {
    src: "https://img.icons8.com/?size=100&id=63208&format=png&color=000000",
    alt: "Ubuntu",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg",
    alt: "Linux",
  },
  {
    src: "https://img.icons8.com/?size=100&id=8gWOBXY72Osj&format=png&color=000000",
    alt: "Bash Scripting",
  },
  {
    src: "https://img.icons8.com/?size=100&id=FwaVI1qCE7hQ&format=png&color=000000",
    alt: "Powershell",
  },
  {
    src: "https://img.icons8.com/?size=100&id=t2x6DtCn5Zzx&format=png&color=000000",
    alt: "Nginx",
  },
];

const LogoLoop = () => {
  // ✅ Duplicated list: [Set A] + [Set A]
  // This allows us to scroll 50% (exactly one set) and snap back instantly.
  const logos = [...allLogos, ...allLogos];

  return (
    <div className="logo-loop-container">
      <motion.div
        className="logo-loop"
        initial={{ x: 0 }}
        animate={{ x: "-50%" }} // Moves exactly half the total width
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30, // Adjust speed here
        }}
      >
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="logo-icon"
          />
        ))}
      </motion.div>
    </div>
  );
};

function Expertise() {
  return (
    <div className="expertise-minimal-section" id="expertise">
      <div className="skills-container">
        <div className="section-header">
          <h1 className="project-title">Experties</h1>
          <div className="title-underline"></div>
        </div>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faCode} size="3x" />
            <h3>Web Development & Security</h3>
            <p>
              I have built and secured web applications using modern
              technologies, ensuring performance and data protection.
            </p>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faCloud} size="3x" />
            <h3>Cloud Computing & DevOps</h3>
            <p>
              Designed scalable cloud architectures and implemented CI/CD
              pipelines for automated deployments.
            </p>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faTerminal} size="3x" />
            <h3>Linux System Administration</h3>
            <p>
              Experienced in managing Linux environments, optimizing
              performance, and ensuring security compliance.
            </p>
          </div>
        </div>
        <LogoLoop />
      </div>
    </div>
  );
}

export default Expertise;
