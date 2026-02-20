import { motion } from "framer-motion";
import { useRef } from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "SkillSwap",
      description:
        "A full-stack MERN platform enabling secure skill exchange with structured collaboration.",
      tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    },
    {
      title: "Smart Hospital Management System",
      description:
        "A scalable web platform streamlining hospital workflows and backend services.",
      tech: ["React", "Node.js", "MongoDB", "REST APIs"],
    },
    {
      title: "StegaVault",
      description:
        "A secure desktop tool for embedding sensitive data inside images.",
      tech: ["Python", "Tkinter", "OpenCV", "NumPy"],
    },
  ];

  return (
    <section id="projects" className="projects section">
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <TiltCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

const TiltCard = ({ project, index }) => {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const card = ref.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * -10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const resetTilt = () => {
    ref.current.style.transform = "rotateX(0) rotateY(0) scale(1)";
  };

  return (
    <motion.div
      className="project-card"
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <div className="tech-stack">
        {project.tech.map((tech, i) => (
          <span key={i}>{tech}</span>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
