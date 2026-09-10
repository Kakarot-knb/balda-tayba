'use client';

import { motion } from 'framer-motion';

import TestimonialsColumns1 from '@/components/ui/testimonials-columns-1';

export default function ChallengesSection() {
  return (
    <section id="challenges" className="w-full relative">
      {/* Background blend layer: Top half matches previous section (primary-bg), bottom half matches next section (surface) */}
      <div className="absolute top-0 inset-x-0 h-1/2 bg-primary-bg" />
      <div className="absolute bottom-0 inset-x-0 h-1/2 bg-surface" />
      
      <div className="relative w-full py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-12 bg-deep-green border-t border-primary-bg/10 arc-t arc-b">
        <div className="container mx-auto max-w-7xl">
          <motion.h2 
            className="font-heading text-[clamp(2.5rem,6vw,4rem)] md:text-5xl lg:text-6xl text-primary-bg font-bold mb-12 md:mb-16 lg:mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            التحديات وعقبات الإنتاج
          </motion.h2>

          <TestimonialsColumns1 />
        </div>
      </div>
    </section>
  );
}
