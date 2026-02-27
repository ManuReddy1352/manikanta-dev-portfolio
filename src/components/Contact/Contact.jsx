import emailjs from "@emailjs/browser";
import { motion as Motion } from "framer-motion";
import { useRef, useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ text: "", type: "" });
  const [lastSubmitTime, setLastSubmitTime] = useState(0);

  const sendEmail = (e) => {
    e.preventDefault();

    // Honeypot Anti-Spam
    if (form.current.bot_field.value) {
      return;
    }

    // Cooldown Protection (15 seconds)
    const now = Date.now();
    if (now - lastSubmitTime < 15000) {
      setStatusMessage({
        text: "Please wait before sending another message.",
        type: "error",
      });
      setTimeout(() => {
        setStatusMessage({ text: "", type: "" });
      }, 4000);
      return;
    }

    setLoading(true);
    setLastSubmitTime(now);

    // Send message to you
    emailjs
      .sendForm(
        "service_pndu45q",
        "template_cn99nnp",
        form.current,
        "-YA7QEtk0tv1No3QN",
      )
      .then(() => {
        // Auto-Reply to User
        emailjs.send(
          "service_pndu45q",
          "template_u8jy02j",
          {
            user_name: form.current.user_name.value,
            user_email: form.current.user_email.value,
          },
          "-YA7QEtk0tv1No3QN",
        );

        setLoading(false);
        setStatusMessage({
          text: "Message sent successfully!",
          type: "success",
        });

        form.current.reset();

        setTimeout(() => {
          setStatusMessage({ text: "", type: "" });
        }, 4000);
      })
      .catch((error) => {
        setLoading(false);
        setStatusMessage({
          text: "Something went wrong. Please try again.",
          type: "error",
        });
        console.log(error);

        setTimeout(() => {
          setStatusMessage({ text: "", type: "" });
        }, 4000);
      });
  };

  const buttonVariants = {
    hover: { scale: 1.02 },
    tap: { scale: 0.98 },
  };

  return (
    <section id="contact" className="contact section">
      <div className="contact-container">
        {/* LEFT SIDE */}
        <Motion.div
          className="contact-left"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="contact-title">
            Let’s Build Something <span>Amazing</span>
          </h2>

          <p className="contact-description">
            I'm always open to discussing new opportunities, innovative ideas,
            and full-stack development projects. Let’s connect and create
            impactful solutions.
          </p>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="contact-form"
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                form.current.requestSubmit();
              }
            }}
          >
            {/* Hidden Honeypot Field */}
            <input type="text" name="bot_field" style={{ display: "none" }} />

            <div className="contact-form-row">
              <div className="input-field">
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  required
                  placeholder=" "
                />
                <label htmlFor="name">Your Name</label>
                <div className="input-glow"></div>
              </div>

              <div className="input-field">
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  required
                  placeholder=" "
                />
                <label htmlFor="email">Your Email</label>
                <div className="input-glow"></div>
              </div>
            </div>

            <div className="input-field">
              <textarea
                id="message"
                name="message"
                rows="1"
                required
                placeholder=" "
              ></textarea>
              <label htmlFor="message">Your Message</label>
              <div className="input-glow"></div>
            </div>

            <Motion.button
              type="submit"
              className="contact-submit-btn"
              disabled={loading}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <FaEnvelope />
              <span>{loading ? "Sending..." : "Send Message"}</span>
            </Motion.button>

            {statusMessage.text && (
              <Motion.div
                className={`status-message ${statusMessage.type}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p>{statusMessage.text}</p>
              </Motion.div>
            )}
          </form>
        </Motion.div>

        {/* RIGHT SIDE */}
        <Motion.div
          className="contact-right"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="contact-card">
            <a
              href="https://github.com/ManuReddy1352"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/guntuka-manikanta-reddy-325692233"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>

            <a
              href="mailto:guntukareddy9959@gmail.com"
              className="contact-item"
            >
              <FaEnvelope />
              <span>guntukareddy9959@gmail.com</span>
            </a>
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default Contact;
