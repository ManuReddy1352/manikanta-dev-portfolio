import { useEffect, useRef } from "react";

const useMagnetic = () => {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const handleMouseMove = (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        };

        const reset = () => {
            el.style.transform = `translate(0px, 0px)`;
        };

        el.addEventListener("mousemove", handleMouseMove);
        el.addEventListener("mouseleave", reset);

        return () => {
            el.removeEventListener("mousemove", handleMouseMove);
            el.removeEventListener("mouseleave", reset);
        };
    }, []);

    return ref;
};

export default useMagnetic;
