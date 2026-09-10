'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import DocumentaryMediaFrame from '@/components/DocumentaryMediaFrame';

export default function PromoPosterSection() {
  return (
    <section 
      id="promo-poster" 
      className="relative w-full pt-16 md:pt-24 lg:pt-32 pb-8 md:pb-16 bg-primary-bg z-10 overflow-hidden"
    >
      <div className="layout-container">
        
        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center lg:items-start relative">
          
          {/* Poster Side (Visual Anchor) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end lg:-mt-12 z-20"
          >
            {/* Poster wrapper with subtle overlap offset */}
            <div className="relative w-full max-w-[320px] sm:max-w-[400px] lg:max-w-none transform lg:translate-x-4 lg:translate-y-4">
              <DocumentaryMediaFrame>
                <div className="relative w-full aspect-[2/3] lg:aspect-[3/4] xl:aspect-[2/3]">
                  <Image
                    src="/images/poster.jpg"
                    alt="بلدةٌ طيبة - Film Poster"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 90vw, (max-width: 1200px) 40vw, 33vw"
                  />
                </div>
              </DocumentaryMediaFrame>
            </div>
          </motion.div>

          {/* Promotional Content Side */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center z-10 pt-4 lg:pt-0"
          >
            {/* Title */}
            <div className="mb-10 md:mb-12">
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary-text leading-tight relative inline-block">
                الإعلان <span className="text-accent-red">الترويجي</span>
                <div className="absolute -bottom-4 right-0 h-[2px] w-1/2 bg-gradient-to-l from-accent-gold/80 to-transparent" />
              </h2>
            </div>

            {/* Vimeo Promo Placeholder */}
            <div className="w-full relative mb-8 group">
              <DocumentaryMediaFrame>
                {/* Clean 16:9 cinematic ratio without massive rounded borders */}
                <div className="relative w-full pb-[56.25%] bg-[#0B0E11] overflow-hidden group-hover:opacity-95 transition-opacity duration-500">
                  <iframe 
                    src="https://player.vimeo.com/video/1225576921?title=0&byline=0&portrait=0&color=9B2226&dnt=1" 
                    className="absolute top-0 left-0 w-full h-full border-0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
                    allowFullScreen
                    loading="lazy"
                    title="بلدةٌ طيبة — الإعلان الترويجي"
                  />
                </div>
              </DocumentaryMediaFrame>
            </div>

            {/* CTA / Metadata */}
            <div className="flex items-center gap-6">
              <a 
                href="#watch" 
                className="font-heading text-sm md:text-base text-primary-text border-b border-accent-red/50 hover:border-accent-red transition-colors duration-300 pb-1 flex items-center gap-2"
              >
                شاهد الفيلم الكامل
                <span className="text-accent-red text-xs">↓</span>
              </a>
              <span className="text-text-secondary/30">|</span>
              <span className="font-body text-xs md:text-sm text-text-secondary font-light">
                وثائقي • قصير
              </span>
            </div>

          </motion.div>
        </div>

        {/* Transition Divider into next section */}
        <div className="w-full flex justify-center mt-20 md:mt-32">
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            whileInView={{ height: 80, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-[1px] bg-gradient-to-b from-accent-red/40 to-transparent"
          />
        </div>

      </div>
    </section>
  );
}
