import { useEffect, useRef, useState } from "react";
import "./ScrollProgress.css";

const ScrollProgress = () => {
  const [width, setWidth] = useState(0);
  const [active, setActive] = useState(false);
  const lastScroll = useRef(0);

  useEffect(() => {
    let ticking = false;
    const scroller = document.getElementById("main-scroller") || window;

    const updateScroll = () => {
      const scrollTop =
        scroller.scrollTop !== undefined ? scroller.scrollTop : window.scrollY;
      const docHeight =
        (scroller.scrollHeight || document.documentElement.scrollHeight) -
        (scroller.clientHeight || document.documentElement.clientHeight);

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

    scroller.addEventListener("scroll", handleScroll);
    return () => scroller.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`progress-container ${active ? "active" : ""}`}>
      <div className="progress-fill" style={{ width: `${width}%` }} />
    </div>
  );
};

export default ScrollProgress;
