'use client';

import { motion } from 'framer-motion';

export default function ObjectiveSection() {
  return (
    <section id="objective" className="w-full py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-12 bg-primary-bg">
      <div className="container mx-auto max-w-5xl">
        <motion.h2 
          className="font-heading text-[clamp(2.5rem,6vw,4rem)] md:text-5xl lg:text-6xl text-primary-text font-bold mb-10 md:mb-16 lg:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          الهدف
        </motion.h2>

        <div className="flex flex-col gap-12 md:gap-16 lg:gap-24">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-body text-lg md:text-xl lg:text-2xl leading-loose text-text-secondary font-light">
              الهدف من هذا العمل هو توثيق القصة الإنسانية التي تقف خلف الدمار الجغرافي.
              يسعى الفيلم إلى حفظ ذاكرة الأهالي، حكايات العائلات، والتمسك العميق بالأرض، إلى جانب تجارب النزوح وفكرة العودة.
            </p>
          </motion.div>

          {/* Major Typographic Moment */}
          <motion.div 
            className="flex justify-center py-10 md:py-16 lg:py-20 border-y border-text-secondary/10 px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.4 }}
          >
            <blockquote className="font-heading text-[clamp(2rem,6vw,4.5rem)] md:text-5xl lg:text-7xl text-primary-text font-bold text-center leading-tight max-w-4xl">
              <span className="text-accent-red/60">&ldquo;</span>الأرض التي تُعجن بدماء أبنائها لا تموت.<span className="text-accent-red/60">&rdquo;</span>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
