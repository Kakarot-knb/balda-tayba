'use client';

import { motion } from 'framer-motion';
import { CinematicGoalStack } from '../ui/components-community-notification-list';

export default function ObjectiveSection() {
  return (
    <section id="objective" className="w-full py-20 md:py-32 lg:py-40 px-4 md:px-6 lg:px-12 bg-deep-green relative overflow-hidden arc-t">
      
      {/* Subtle background texture/glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-deep-green/5 via-deep-green to-deep-green"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        


        {/* Cinematic Stacked Cards */}
        <div className="relative max-w-4xl mx-auto w-full z-20">
          <CinematicGoalStack />
        </div>

        {/* Major Typographic Moment / Blockquote */}
        <motion.div 
          className="flex justify-center mt-32 md:mt-48 pt-16 md:pt-24 border-t border-accent-gold/10 px-4 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          {/* Subtle glow behind the quote */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-accent-red/5 blur-[100px] pointer-events-none rounded-full" />
          
          <blockquote className="font-heading text-[clamp(1.75rem,5vw,4rem)] md:text-5xl lg:text-7xl text-primary-bg font-bold text-center leading-[2.5] md:leading-[3] max-w-4xl relative z-10">
            <span className="text-accent-red/80">&ldquo;</span>خُطَانَا إِلَيْكِ مَقْضِيَّة<span className="hidden md:inline"> </span><br className="md:hidden" />وَحُقُوقُنَا فِيكِ حَتْمِيَّة.<span className="text-accent-red/80">&rdquo;</span>
          </blockquote>
        </motion.div>

      </div>
    </section>
  );
}
