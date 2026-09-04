"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function FloatingDrone() {
  const { scrollYProgress } = useScroll();
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.001
  });

  // Complex pathing
  const y = useTransform(smoothProgress, 
    [0, 0.15, 0.35, 0.6, 0.85, 1], 
    [-200, windowSize.height * 0.25, windowSize.height * 0.55, windowSize.height * 0.7, windowSize.height * 0.9, windowSize.height * 0.75]
  );

  const x = useTransform(smoothProgress, 
    [0, 0.15, 0.35, 0.6, 0.85, 1], 
    [windowSize.width * 0.5, windowSize.width * 0.1, -windowSize.width * 0.2, windowSize.width * 0.3, -windowSize.width * 0.1, 0]
  );

  const rotate = useTransform(smoothProgress, 
    [0, 0.15, 0.35, 0.6, 0.85, 1], 
    [25, -15, 20, -10, 15, 0]
  );

  const scale = useTransform(smoothProgress, 
    [0, 0.15, 0.35, 0.6, 0.85, 1], 
    [0.6, 1.4, 0.8, 1.8, 0.9, 1]
  );

  const zIndex = useTransform(smoothProgress, 
    [0, 0.3, 0.31, 0.6, 0.61, 1], 
    [50, 50, 10, 10, 50, 50]
  );

  return (
    <motion.div
      className="fixed pointer-events-none"
      style={{
        x,
        y,
        rotate,
        scale,
        zIndex
      }}
    >
      <div className="relative w-48 h-48 sm:w-72 sm:h-72 drop-shadow-[0_30px_60px_rgba(211,26,33,0.15)]">
        {/* Drone Image */}
        <img 
          src="/64a1f789-f57c-4283-acfc-ba990350fd1d_2.png" 
          alt="FPV Drone"
          className="w-full h-full object-contain filter brightness-105 drop-shadow-xl"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full bg-accent-silver/10 backdrop-blur-lg rounded-full border border-accent-gold/30 shadow-[0_0_40px_rgba(207,142,64,0.2)] flex items-center justify-center"><span class="text-xs text-center p-2 text-primary-text font-body">Drone Placeholder</span></div>';
          }}
        />
      </div>
    </motion.div>
  );
}
