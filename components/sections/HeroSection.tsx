'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section 
      id="hero" 
      className="relative w-full h-[100svh] min-h-[600px] flex flex-col overflow-hidden bg-primary-bg"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24 w-full h-full flex flex-col justify-center relative z-10">
        
        {/* Two-Column Title Sequence */}
        <div className="w-full max-w-7xl mx-auto flex flex-col-reverse lg:flex-row justify-center items-center h-full py-16 lg:py-0 gap-16 lg:gap-24">
          
          {/* Text Column (Right side in RTL) */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-start z-20 max-w-xl">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mb-4 md:mb-6"
            >
              <span className="font-body text-sm md:text-base font-medium text-deep-green">فيلم وثائقي</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6 md:mb-8"
            >
              {/* Clean, elegant title to accompany the logo */}
              <h1 className="font-heading text-5xl lg:text-7xl font-bold text-deep-green leading-[1.2]">
                بلدةٌ طيبة
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-4 mb-8 md:mb-12"
            >
              {/* The Restrained Poppy Motif */}
              <div className="w-[1px] h-8 bg-accent-red opacity-80" />
              <span className="font-body text-sm md:text-base font-medium text-accent-red">مشروع تخرج</span>
            </motion.div>

            {/* Context Sentence */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-body text-lg md:text-xl lg:text-2xl text-primary-text leading-[1.9] max-w-2xl"
            >
              فيلم وثائقي يستكشف علاقة الإنسان بأرضه، وما يبقى منها في الذاكرة بعد أن يُقتلع منها.
            </motion.p>
          </div>

          {/* Logo Column (Left side in RTL) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-1/2 h-[40vh] lg:h-[70vh] relative flex justify-center lg:justify-end items-center"
          >
            <div className="relative w-full h-full">
              <Image 
                src="/images/logo.svg" 
                alt="بلدةٌ طيبة Logo" 
                fill 
                className="object-contain lg:object-left drop-shadow-2xl opacity-100"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Quiet scroll transition indicator at bottom center */}
      <motion.div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1.5 }}
      >
        <div className="w-[1px] h-20 bg-deep-green/10 relative overflow-hidden">
          <motion.div 
            className="w-full h-full bg-deep-green/30"
            animate={{ opacity: [0.2, 0.6, 0.2] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
