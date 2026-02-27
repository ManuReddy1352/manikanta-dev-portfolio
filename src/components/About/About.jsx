import { motion } from "framer-motion";
import { FaFileAlt, FaGithub } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import "./About.css";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const About = () => {
  return (
    <section id="about" className="about section">
      <motion.div
        className="about-container"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* LEFT SIDE */}
        <motion.div className="about-left" variants={fadeLeft}>
          <h2 className="about-heading">
            <span className="highlight">WHO</span> AM I?
          </h2>
          <p>
            I’m a Full Stack Developer focused on building scalable MERN
            applications with clean architecture and performance-driven systems.
          </p>
          <p>
            I’ve worked as a Software Development Intern contributing to
            real-world production systems, backend services, and responsive
            frontend applications.
          </p>

          <div className="about-highlights">
            <div>
              <FiCheckCircle className="highlight-icon" /> Clean Architecture
            </div>
            <div>
              <FiCheckCircle className="highlight-icon" /> Scalable Systems
            </div>
            <div>
              <FiCheckCircle className="highlight-icon" /> Modern UI Design
            </div>
            <div>
              <FiCheckCircle className="highlight-icon" /> Backend Integration
            </div>
          </div>

          <div className="about-buttons">
            <a
              href="/manikanta-reddy-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <FaFileAlt /> View Resume
            </a>

            <a
              href="https://github.com/ManuReddy1352"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <FaGithub /> GitHub
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div className="about-right" variants={fadeRight}>
          <div className="image-wrapper">
            <img
              src="/profile.jpeg"
              alt="Manikanta"
              className="profile-image"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
