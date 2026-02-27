import { motion } from "framer-motion";
import "./Experience.css";

const experiences = [
  {
    role: "Software Development Intern",
    company: "Xyenta Solutions Pvt Ltd",
    duration: "Aug 2024 – Present",
    description:
      "Contributed to scalable full-stack application development, backend service design, API integrations, and structured deployment workflows.",
  },
  {
    role: "Web Development Intern",
    company: "CodeCrux Web Technologies Pvt Ltd",
    duration: "May 2024 – July 2024",
    description:
      "Worked on responsive frontend development, reusable component systems, and backend integrations in production-level projects.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience section">
      <div className="experience-container">
        <h2 className="section-title">Experience</h2>

        <div className="timeline-wrapper">
          <div className="timeline-line"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="timeline-dot"></div>

              <div className="experience-card">
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>
                <span className="duration">{exp.duration}</span>
                <p>{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
