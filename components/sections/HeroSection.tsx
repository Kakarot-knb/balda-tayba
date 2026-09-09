'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section 
      id="hero" 
      className="relative w-full min-h-[100svh] flex flex-col"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(10, 10, 10, 0.1), rgba(10, 10, 10, 0.3), var(--primary-bg, #0B0E11)), url('/images/tayba-landscape.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24 w-full flex-1 flex flex-col justify-center relative z-10 pb-24 pt-24 lg:pt-0 lg:pb-0">

        {/* Centered Content */}
        <div className="w-full max-w-5xl mx-auto flex flex-col justify-center items-center flex-1 z-20 relative px-4">
          
          {/* Logo Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-[20vh] lg:h-[30vh] max-w-sm lg:max-w-md relative flex justify-center items-center mb-6 lg:mb-10"
          >
            <Image 
              src="/images/headerlogo.PNG" 
              alt="بلدةٌ طيبة Logo" 
              fill 
              className="object-contain object-center drop-shadow-2xl opacity-100"
              priority
            />
          </motion.div>

          {/* Slogan */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-body text-xl lg:text-2xl xl:text-3xl text-white leading-[1.8] text-center max-w-3xl drop-shadow-md"
          >
            فيلم وثائقي ومشروع تخرج سينمائي يستكشف علاقة الإنسان بأرضه، وما يبقى منها في الذاكرة بعد أن يُقتلع منها.
          </motion.p>
          
        </div>
      </div>
    </section>
  );
}
