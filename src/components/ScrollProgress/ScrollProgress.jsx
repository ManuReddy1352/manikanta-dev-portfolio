import { useEffect, useRef, useState } from "react";
import "./ScrollProgress.css";

const ScrollProgress = () => {
  const [width, setWidth] = useState(0);
  const [active, setActive] = useState(false);
  const lastScroll = useRef(0);

  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrolled = (scrollTop / docHeight) * 100;

      lastScroll.current = scrollTop;
      setWidth(scrolled);
      setActive(scrollTop > 10);

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`progress-container ${active ? "active" : ""}`}>
      <div className="progress-fill" style={{ width: `${width}%` }} />
    </div>
  );
};

export default ScrollProgress;
