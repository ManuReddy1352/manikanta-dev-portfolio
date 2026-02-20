import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact section">
      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Get In Touch</h2>

        <p className="contact-subtext">
          I'm always open to discussing new opportunities, collaborations, or
          innovative project ideas.
        </p>

        <div className="contact-content">
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit" className="contact-btn">
              Send Message
            </button>
          </form>

          <div className="contact-info">
            <h3>Connect With Me</h3>

            <div className="social-links">
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>

              <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
            </div>

            <p className="contact-email">Email: guntukareddy9959@gmail.com</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
