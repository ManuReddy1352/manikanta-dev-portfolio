import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

const useSmoothScroll = () => {
    useEffect(() => {
        const lenis = new Lenis({ smooth: true, lerp: 0.08 });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => lenis.destroy();
    }, []);
};

export default useSmoothScroll;
