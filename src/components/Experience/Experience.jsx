import { motion } from "framer-motion";
import "./Experience.css";

const Experience = () => {
  const experiences = [
    {
      company: "Xyenta Solutions Pvt Ltd",
      role: "Software Developing Intern",
      description:
        "Contributed to the development and maintenance of scalable full-stack applications using modern JavaScript frameworks. Assisted in backend service design, API integration, debugging, and performance optimization while collaborating in structured development cycles.",
    },
    {
      company: "CodeCrux Web Technologies Pvt Ltd",
      role: "Web Development Intern",
      description:
        "Developed responsive web applications using React and modern frontend technologies. Integrated REST APIs, enhanced cross-browser compatibility, and participated in collaborative Agile workflows to deliver production-ready solutions.",
    },
  ];

  return (
    <section id="experience" className="experience section">
      <h2 className="section-title">Experience</h2>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="timeline-content">
              <h3>{exp.role}</h3>
              <h4>{exp.company}</h4>
              <p>{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
