import { motion } from "framer-motion";

import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import CursorGlow from "./components/CursorGlow/CursorGlow";
import Experience from "./components/Experience/Experience";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Particles from "./components/Particles/Particles";
import Projects from "./components/Projects/Projects";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import "./styles/global.css";

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Particles />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <ScrollToTop />
    </motion.div>
  );
}

export default App;
