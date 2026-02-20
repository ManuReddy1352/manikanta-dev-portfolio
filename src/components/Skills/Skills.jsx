import { motion } from "framer-motion";
import "./Skills.css";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["JavaScript", "Python", "Java", "C", "SQL"],
    },
    {
      title: "Frontend Development",
      skills: ["React.js", "HTML", "CSS", "Bootstrap"],
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "FastAPI"],
    },
    {
      title: "Databases",
      skills: ["MongoDB", "PostgreSQL", "MySQL"],
    },
    {
      title: "Tools & Practices",
      skills: ["Git", "REST APIs", "Agile Development", "Unit Testing"],
    },
  ];

  return (
    <section id="skills" className="skills section">
      <h2 className="section-title">Technical Skills</h2>

      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className="skill-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="skill-title">{category.title}</h3>

            <div className="skill-list">
              {category.skills.map((skill, i) => (
                <span key={i} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
