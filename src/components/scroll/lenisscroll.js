"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function LenisScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.045,
      smooth: true,
      smoothTouch: true,
      direction: "vertical",
      wheelMultiplier: 0.8,
      syncTouch: true,
    });
    window.lenis = lenis;

    // Intercept wheel events for Shift+Wheel (horizontal scroll)
    function onWheel(e) {
      if (e.shiftKey) {
        // Let browser handle horizontal scroll, prevent Lenis
        lenis.stop();
      } else {
        lenis.start();
      }
    }
    window.addEventListener("wheel", onWheel, { passive: true });

    function raf(time) {
      // Pause Lenis if body is overflow hidden
      const bodyOverflow = document.body.style.overflow;
      if (bodyOverflow === "hidden") {
        lenis.stop();
      } else {
        lenis.start();
        lenis.raf(time);
      }
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      window.removeEventListener("wheel", onWheel);
    };
  }, []);

  return null;
}