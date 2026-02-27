import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [underlineStyle, setUnderlineStyle] = useState({});

  const sections = ["home", "projects", "experience", "contact"];

  useEffect(() => {
    const scroller = document.getElementById("main-scroller") || window;

    const handleScroll = () => {
      const scrollY =
        scroller.scrollTop !== undefined ? scroller.scrollTop : window.scrollY;
      setScrolled(scrollY > 50);
    };

    scroller.addEventListener("scroll", handleScroll);
    return () => scroller.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
        root: document.getElementById("main-scroller"),
      },
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        <a href="#home" className="logo">
          MR
        </a>

        <ul
          className="nav-links"
          onMouseLeave={() => setUnderlineStyle({ opacity: 0 })}
        >
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                onMouseEnter={(e) => {
                  const rect = e.target.getBoundingClientRect();
                  setUnderlineStyle({
                    width: rect.width,
                    left: e.target.offsetLeft,
                    opacity: 1,
                  });
                }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
          <span className="nav-underline" style={underlineStyle} />
        </ul>

        <div
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={() => setIsOpen(false)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
