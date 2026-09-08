'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function FooterSection() {
  return (
    <section className="w-full pt-24 pb-24 md:pt-32 md:pb-32 lg:pt-48 lg:pb-48 px-4 md:px-6 lg:px-12 bg-deep-green text-primary-bg flex flex-col items-center justify-center min-h-[50vh] md:min-h-[60vh] text-center overflow-hidden relative">
      
      {/* Final Logo Signature */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="flex flex-col items-center justify-center relative z-10 w-full mb-16 md:mb-24"
      >
        {/* Logo cleanly sized, relying on the SVG's natural aspect ratio without hacks */}
        <div className="w-[130px] sm:w-[160px] md:w-[180px] lg:w-[220px] flex justify-center relative">
          <img 
            src="/images/logo.svg" 
            alt="بلدةٌ طيبة" 
            className="w-full h-auto object-contain scale-[3] origin-center"
          />
        </div>
        
        {/* Subtle divider */}
        <div className="w-16 md:w-24 h-[1px] bg-primary-bg/20 mt-16 md:mt-24" />
      </motion.div>

      <motion.div 
        className="flex flex-col items-center justify-center relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
      >
        <h1 className="font-heading text-[clamp(3.5rem,10vw,8rem)] leading-none font-bold mb-6 md:mb-8 text-primary-bg">
          بلدةٌ طيبة
        </h1>
        
        <p className="font-body text-[clamp(1.5rem,5vw,2.75rem)] text-primary-bg/90 font-light mb-6 md:mb-8 tracking-wide">
          الأرض تحفظ أبناءها.
        </p>

        {/* Quranic verse as cinematic closer */}
        <p className="font-heading text-xl md:text-2xl text-accent-gold/80 mb-10 md:mb-16 leading-relaxed">
          ﴿بَلْدَةٌ طَيِّبَةٌ وَرَبٌّ غَفُورٌ﴾
        </p>

        <p className="font-body text-xs md:text-sm lg:text-base text-primary-bg/50 tracking-widest uppercase px-4">
          فيلم وثائقي — مشروع تخرج
        </p>
      </motion.div>

    </section>
  );
}
