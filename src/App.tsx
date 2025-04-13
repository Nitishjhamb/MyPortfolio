import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import Resume from "./components/Resume";
import FadeIn from "./components/FadeIn";
import "./index.scss";

function Home({ parentToChild }: any) {
  return (
    <>
      <Main parentToChild={parentToChild} />
      <Expertise />
      <Timeline />
      <Project />
      <Contact />
    </>
  );
}

function App() {
  const [mode, setMode] = useState<string>("dark");

  const handleModeChange = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <Router>
      <div
        className={`main-container ${
          mode === "dark" ? "dark-mode" : "light-mode"
        }`}
      >
        <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
        <FadeIn transitionDuration={700}>
          <Routes>
            <Route path="/" element={<Home parentToChild={{ mode }} />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </FadeIn>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
