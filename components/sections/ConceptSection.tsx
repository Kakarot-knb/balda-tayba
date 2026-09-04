'use client';

import { motion } from 'framer-motion';
import DocumentaryMediaFrame from '../DocumentaryMediaFrame';

const themes = ['الأرض', 'الهوية', 'الذاكرة', 'التضحية', 'النزوح', 'العودة'];

export default function ConceptSection() {
  return (
    <section id="concept" className="w-full py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-12 bg-primary-bg overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Text Column - Natural Editorial Flow */}
          <motion.div 
            className="flex flex-col gap-12 md:gap-16 lg:gap-24 py-0 order-2 lg:order-1"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Top Anchor: Heading + Explanatory Text */}
            <div className="flex flex-col gap-8">
              <h2 className="font-heading text-[clamp(2rem,6vw,4rem)] md:text-5xl lg:text-6xl text-primary-text font-bold order-1 lg:order-none">
                فكرة الفيلم
              </h2>
              
              {/* Image Column - Moves here on mobile */}
              <div className="w-full order-2 lg:hidden mt-4 mb-4">
                <DocumentaryMediaFrame className="w-full">
                  <div className="relative w-full aspect-[2480/3508]">
                    <motion.img 
                      src="/images/poster.jpg" 
                      alt="بلدة الطيبة — ملصق الفيلم" 
                      className="absolute inset-0 w-full h-full object-cover z-10" 
                    />
                  </div>
                </DocumentaryMediaFrame>
              </div>

              <div className="flex flex-col gap-6 md:gap-8 max-w-2xl order-3 lg:order-none">
                <p className="font-body text-lg md:text-xl lg:text-2xl leading-loose text-text-secondary font-light">
                  الفيلم لا يتعامل مع الطيبة كمجرد مساحة جغرافية، بل يستكشفها كرمز للأرض، الهوية، الذاكرة، التضحية، النزوح، والعودة.
                </p>
                <p className="font-body text-base md:text-lg lg:text-xl leading-loose text-text-secondary/80 font-light">
                  يربط الفيلم بين المعنى العميق لكلمة &quot;طيّب&quot; في القرآن الكريم، ويتخذ من القرية نموذجاً مصغراً يحاكي تجربة المجتمعات الحدودية في جنوب لبنان.
                </p>
              </div>
            </div>

            {/* Keyword Anchor */}
            <div className="order-4 lg:order-none">
              <p className="font-body text-base lg:text-lg tracking-wide text-text-secondary font-bold">
                {themes.join(' · ')}
              </p>
            </div>
          </motion.div>

          {/* Image Column */}
          <motion.div 
            className="w-full hidden lg:block order-1 lg:order-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <DocumentaryMediaFrame className="w-full h-full">
              <div className="relative w-full aspect-[2480/3508]">
                <motion.img 
                  src="/images/poster.jpg" 
                  alt="بلدة الطيبة — ملصق الفيلم" 
                  className="absolute inset-0 w-full h-full object-cover z-10" 
                  initial={{ scale: 1.04 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, ease: "easeOut" }}
                />
              </div>
            </DocumentaryMediaFrame>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
