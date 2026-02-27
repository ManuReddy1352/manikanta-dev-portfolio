import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./ScrollToTop.css";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const scroller = document.getElementById("main-scroller") || window;

    const toggleVisibility = () => {
      const scrollY =
        scroller.scrollTop !== undefined ? scroller.scrollTop : window.scrollY;
      if (scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    scroller.addEventListener("scroll", toggleVisibility);
    return () => scroller.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    const scroller = document.getElementById("main-scroller") || window;
    scroller.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
      <div className="scroll-top" onClick={scrollToTop}>
        <FaArrowUp />
      </div>
    )
  );
};

export default ScrollToTop;
