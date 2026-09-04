'use client';

import { motion } from 'framer-motion';
import DocumentaryMediaFrame from '../DocumentaryMediaFrame';

export default function SymbolismSection() {
  const evolution = ['زهرة', 'ذكرى', 'دم', 'رمز', 'قوة', 'عودة'];

  return (
    <section id="symbolism" className="w-full py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-12 bg-primary-bg overflow-hidden border-t border-text-secondary/5">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-start">
          
          {/* Text Column */}
          <motion.div 
            className="flex flex-col gap-12 py-0"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Top Anchor: Heading + Text */}
            <div className="flex flex-col gap-8 md:gap-10">
              <h2 className="font-heading text-[clamp(2.5rem,6vw,4rem)] md:text-5xl lg:text-6xl text-primary-text font-bold">
                شقائق النعمان
              </h2>
              
              <p className="font-body text-lg md:text-xl lg:text-2xl leading-loose text-text-secondary font-light">
                تسافر زهرة شقائق النعمان عبر الفيلم كتيمة متكررة تحمل دلالات متغيرة. 
                تظهر في البداية، ثم في أيدي الأمهات، وتنتقل عبر الأجيال المختلفة، لترافق عائلة فاطمة فتوني، وصولاً إلى الذروة السينمائية للفيلم.
              </p>
            </div>

            {/* Bottom Anchor: Evolution */}
            <div className="mt-12 lg:mt-0">
              <h3 className="font-heading text-xl text-primary-text mb-4 opacity-60">تطور الرمز</h3>
              <div className="flex flex-wrap items-center gap-2 md:gap-3 lg:gap-4 font-body text-base md:text-lg lg:text-xl font-bold text-accent-red">
                {evolution.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 md:gap-3 lg:gap-4">
                    <span>{item}</span>
                    {index < evolution.length - 1 && (
                      <span className="text-text-secondary/30 hidden sm:inline">→</span>
                    )}
                    {index < evolution.length - 1 && (
                      <span className="text-text-secondary/30 inline sm:hidden">↓</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Image Column - Uses DocumentaryMediaFrame to establish physical geometry */}
          <motion.div 
            className="w-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <DocumentaryMediaFrame className="w-full h-full">
              <div className="relative w-full aspect-[4/5] md:aspect-[4/3] lg:aspect-square">
                <motion.img 
                  src="/images/poppy.jpg" 
                  alt="شقائق النعمان" 
                  className="absolute inset-0 w-full h-full object-cover z-10"
                  initial={{ scale: 1.04 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
                />
              </div>
            </DocumentaryMediaFrame>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
