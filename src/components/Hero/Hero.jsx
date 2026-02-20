import { motion } from "framer-motion";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="blur-circle one"></div>
        <div className="blur-circle two"></div>
      </div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="hero-title">
          Hi, I'm <span className="gradient-text">Manikanta Reddy</span>
        </h1>

        <h2 className="hero-subtitle">
          Full Stack Developer • MERN Stack Engineer • Problem Solver
        </h2>

        <p className="hero-description">
          I build scalable full-stack applications with modern technologies,
          clean UI architecture, and performance-focused development.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn-secondary">
            Contact Me
          </a>
        </div>
      </motion.div>

      <div className="scroll-indicator"></div>
    </section>
  );
};

export default Hero;
