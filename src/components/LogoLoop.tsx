"use client"; // needed if you are in Next.js App Router
import React from "react";
import { motion } from "framer-motion";
import "../assets/styles/LogoLoop.scss";

interface LogoLoopProps {
  logos: { src: string; alt: string }[];
  speed?: number;
}

const LogoLoop: React.FC<LogoLoopProps> = ({ logos, speed = 30 }) => {
  const loopLogos = [...logos, ...logos]; // duplicate for smooth loop

  return (
    <div className="logo-loop-container">
      <motion.div
        className="logo-loop-track"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        {loopLogos.map((logo, idx) => (
          <div key={idx} className="logo-loop-item">
            <img src={logo.src} alt={logo.alt} loading="lazy" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default LogoLoop;
