import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about section">
      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="about-left">
          <h2 className="section-title">About Me</h2>

          <p className="about-text">
            I am a Computer Science undergraduate at ICFAI Foundation for Higher
            Education with a strong passion for building scalable,
            performance-driven full-stack applications.
          </p>

          <p className="about-text">
            My focus lies in designing clean UI architectures and developing
            robust backend systems using the MERN stack. I enjoy transforming
            complex ideas into intuitive, production-ready digital solutions.
          </p>

          <p className="about-text">
            I continuously explore modern technologies and development practices
            to deliver impactful, high-quality software experiences.
          </p>
        </div>

        <div className="about-right">
          <div className="about-card">
            <h3>Core Focus</h3>
            <ul>
              <li>Full Stack Web Development</li>
              <li>MERN Stack Applications</li>
              <li>Scalable Backend Architecture</li>
              <li>Clean UI & Responsive Design</li>
              <li>REST API Integration</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
