'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Only show on first visit per session
    const hasLoaded = sessionStorage.getItem('bl-loaded');
    if (hasLoaded) {
      setIsLoading(false);
      setShouldRender(false);
      return;
    }

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      sessionStorage.setItem('bl-loaded', '1');
      setIsLoading(false);
      setShouldRender(false);
      return;
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem('bl-loaded', '1');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!shouldRender) return null;

  return (
    <AnimatePresence onExitComplete={() => setShouldRender(false)}>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] bg-deep-green flex flex-col items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <motion.h1
            className="font-heading text-3xl md:text-5xl text-primary-bg font-bold mb-4"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            بلدةٌ طيبة
          </motion.h1>

          <motion.p
            className="font-body text-sm md:text-base text-primary-bg/50 tracking-widest mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            فيلم وثائقي
          </motion.p>

          {/* Thin progress line */}
          <div className="w-24 md:w-32 h-[1px] bg-primary-bg/10 overflow-hidden">
            <motion.div
              className="h-full bg-accent-red/60"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.6, delay: 0.3, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
