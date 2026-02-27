import { motion as Motion } from "framer-motion";
import "./Hero.css";

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
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeRightScale = {
  hidden: { opacity: 0, scale: 0.8, x: 80 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const Hero = () => {
  return (
    <section id="home" className="hero section">
      <Motion.div
        className="hero-container"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* LEFT SIDE */}
        <Motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -120, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1], // smooth premium cubic bezier
          }}
        >
          <Motion.h1>
            Hi, I'm <span className="gradient-text">Manikanta</span>
          </Motion.h1>

          <Motion.h2>Full Stack Developer</Motion.h2>

          <Motion.p>
            Building scalable web applications with clean architecture and
            modern UI systems.
          </Motion.p>

          <Motion.div className="hero-buttons">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </Motion.div>
        </Motion.div>

        {/* RIGHT SIDE */}
        <Motion.div className="hero-right" variants={fadeRightScale}>
          <Motion.div
            className="orbit-wrapper"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="core-glow"></div>

            {/* Orbit 1 */}
            <div className="orbit orbit-1">
              <Motion.img
                src="/react.svg"
                alt="React"
                initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                animate={{ y: -55, opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>

            {/* Orbit 2 */}
            <div className="orbit orbit-2">
              <Motion.img
                src="/node.svg"
                alt="Node"
                initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                animate={{ y: -70, opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
              />
            </div>

            {/* Orbit 3 */}
            <div className="orbit orbit-3">
              <Motion.img
                src="/mongodb.svg"
                alt="MongoDB"
                initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                animate={{ y: -85, opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>

            {/* Orbit 4 */}
            <div className="orbit orbit-4">
              <Motion.img
                src="/javascript.svg"
                alt="JavaScript"
                initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                animate={{ y: -100, opacity: 1, scale: 1 }}
                transition={{ duration: 1.1, ease: "easeOut" }}
              />
            </div>

            {/* Orbit 5 */}
            <div className="orbit orbit-5">
              <Motion.img
                src="/python.svg"
                alt="Python"
                initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                animate={{ y: -115, opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
            </div>

            {/* Orbit 6 */}
            <div className="orbit orbit-6">
              <Motion.img
                src="/git.svg"
                alt="Git"
                initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                animate={{ y: -130, opacity: 1, scale: 1 }}
                transition={{ duration: 1.3, ease: "easeOut" }}
              />
            </div>
          </Motion.div>
        </Motion.div>
      </Motion.div>
    </section>
  );
};

export default Hero;
