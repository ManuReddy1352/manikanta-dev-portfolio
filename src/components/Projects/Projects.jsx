import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import "./Projects.css";

const projects = [
  {
    title: "SkillSwap",
    description:
      "A full-stack MERN platform enabling structured skill exchange with secure authentication, intelligent search, and collaborative workflows.",
    tech: ["React", "Node", "Express", "MongoDB", "JWT"],
    github: "https://github.com/ManuReddy1352/SkillSwap",
  },
  {
    title: "StegaVault",
    description:
      "A secure desktop steganography tool that embeds confidential data inside images using optimized LSB-based encoding techniques.",
    tech: ["Python", "Tkinter", "OpenCV", "NumPy"],
    github: "https://github.com/ManuReddy1352/Steganography-Tool",
  },
  {
    title: "Smart Hospital Management System",
    description:
      "A scalable hospital management platform supporting appointment workflows, backend services, and real-time administrative coordination.",
    tech: ["React", "Node", "MongoDB", "REST APIs"],
    github: "https://github.com/ManuReddy1352/smart-hospital-management-system",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Projects = () => {
  return (
    <section id="projects" className="projects section">
      <motion.div
        className="projects-container"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 className="section-title" variants={fadeUp}>
          Projects
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="project-card">
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="tech-stack">
                    {project.tech.map((tech, i) => (
                      <span key={i}>{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="github-btn"
                  >
                    <FiGithub /> View Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
