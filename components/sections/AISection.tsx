'use client';

import { motion } from 'framer-motion';

export default function AISection() {
  return (
    <section id="ai" className="w-full py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-12 bg-deep-green arc-t arc-b">
      <div className="container mx-auto max-w-5xl text-center">
        <motion.h2 
          className="font-heading text-[clamp(2.5rem,6vw,4rem)] md:text-5xl lg:text-6xl text-primary-bg font-bold mb-8 md:mb-10 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          الذكاء الاصطناعي والخيال السينمائي
        </motion.h2>

        <motion.p 
          className="font-body text-base md:text-lg lg:text-2xl leading-relaxed text-primary-bg/70 font-light max-w-3xl mx-auto mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          لم يُستخدم الذكاء الاصطناعي كاستعراض تقني، بل كأداة فنية لضرورة درامية. 
          يأتي هذا المشهد في ذروة الفيلم لتجسيد استعارة لا يمكن تصويرها واقعياً، محققاً الانتقال المتعمد:
        </motion.p>

        <motion.div 
          className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 lg:gap-12 font-heading text-xl md:text-2xl lg:text-3xl text-primary-bg font-bold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <span>وثيقة</span>
          <span className="text-primary-bg/30 hidden md:block">→</span>
          <span className="text-primary-bg/30 block md:hidden rotate-90 md:rotate-0 my-2">→</span>
          <span>رمز</span>
          <span className="text-primary-bg/30 hidden md:block">→</span>
          <span className="text-primary-bg/30 block md:hidden rotate-90 md:rotate-0 my-2">→</span>
          <span className="text-accent-red">خيال سينمائي</span>
        </motion.div>
      </div>
    </section>
  );
}
