import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faCloud, faTerminal } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import "../assets/styles/Expertise.scss";

// ✅ All logos (mostly SVG, clean & official)
const allLogos = [
  // Web
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

  // Cloud & DevOps
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

  // Linux
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

// ✅ Looping logos animation
const LogoLoop = () => {
  const logos = [...allLogos, ...allLogos]; // duplicate for seamless loop

  return (
    <div className="logo-loop-container">
      <motion.div
        className="logo-loop"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 40,
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
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>

        <div className="skills-grid">
          {/* Web Development */}
          <div className="skill">
            <FontAwesomeIcon icon={faCode} size="3x" />
            <h3>Web Development & Security</h3>
            <p>
              I have built and secured web applications using modern
              technologies, ensuring performance and data protection.
            </p>
          </div>

          {/* Cloud */}
          <div className="skill">
            <FontAwesomeIcon icon={faCloud} size="3x" />
            <h3>Cloud Computing & DevOps</h3>
            <p>
              Designed scalable cloud architectures and implemented CI/CD
              pipelines for automated deployments.
            </p>
          </div>

          {/* Linux */}
          <div className="skill">
            <FontAwesomeIcon icon={faTerminal} size="3x" />
            <h3>Linux System Administration</h3>
            <p>
              Experienced in managing Linux environments, optimizing
              performance, and ensuring security compliance.
            </p>
          </div>
        </div>

        {/* ✅ Animated logos row */}
        <LogoLoop />
      </div>
    </div>
  );
}

export default Expertise;
