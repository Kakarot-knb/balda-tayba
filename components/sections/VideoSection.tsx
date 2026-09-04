'use client';

import { motion } from 'framer-motion';
import DocumentaryMediaFrame from '@/components/DocumentaryMediaFrame';

export default function VideoSection() {
  return (
    <section 
      id="watch" 
      className="section-padding bg-primary-bg relative z-10"
    >
      <div className="layout-container">
        
        {/* Editorial Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-heading text-[clamp(3rem,8vw,6rem)] lg:text-8xl font-bold text-primary-text leading-[1.1] tracking-tight">
              بلدةٌ طيبة
            </h2>
            
            <div className="flex items-center justify-center gap-6 mt-8">
              <div className="w-12 h-[1px] bg-text-secondary/20" />
              <span className="font-body text-sm md:text-base font-medium text-text-secondary/80">فيلم وثائقي — مشروع تخرج</span>
              <div className="w-12 h-[1px] bg-text-secondary/20" />
            </div>
          </motion.div>
        </div>

        {/* Cinematic Vimeo Player in Physical Frame */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full"
        >
          <DocumentaryMediaFrame>
            {/* 16:9 Aspect Ratio Container */}
            <div className="relative w-full pb-[56.25%]">
              <iframe 
                src="https://player.vimeo.com/video/1223390123?title=0&byline=0&portrait=0&color=9B2226&dnt=1" 
                className="absolute top-0 left-0 w-full h-full border-0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
                allowFullScreen
                loading="lazy"
                title="بلدةٌ طيبة — فيلم وثائقي"
              />
            </div>
          </DocumentaryMediaFrame>
        </motion.div>

      </div>
    </section>
  );
}
