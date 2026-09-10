'use client';

import { motion } from 'framer-motion';
import ScrollExpand from '../ScrollExpand';

export default function AISection() {
  return (
    <section id="ai" className="w-full bg-deep-green arc-t arc-b relative">
      <div className="pt-16 md:pt-24 lg:pt-32 pb-12 md:pb-16 px-4 md:px-6 lg:px-12 container mx-auto max-w-5xl text-center">
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
          className="font-body text-base md:text-lg lg:text-2xl leading-relaxed text-primary-bg/70 font-light max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          لم يُستخدم الذكاء الاصطناعي كاستعراض تقني، بل كأداة فنية لضرورة درامية. 
          يأتي هذا المشهد في ذروة الفيلم لتجسيد استعارة لا يمكن تصويرها واقعياً، محققاً الانتقال المتعمد:
        </motion.p>
      </div>

      <div className="w-full relative">
        <ScrollExpand
          src="/images/dronereveal.jpg"
          mediaType="image"
          alt="لقطة جوية من فيلم بلدةٌ طيبة"
          useWindowScroll={true}
          startWidth={48}
          startHeight={62}
          startRadius={28}
          endRadius={0}
          mediaZoom={1.3}
          scrollDistance={1.15}
          holdDistance={0.25}
          smoothing={0.08}
          overlayScrim={0.0}
        />
        
        <motion.div 
          className="py-24 md:py-32 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 lg:gap-12 font-heading text-2xl md:text-3xl lg:text-5xl text-primary-bg font-bold tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span>وثيقة</span>
          <span className="text-primary-bg/50 hidden md:block">→</span>
          <span className="text-primary-bg/50 block md:hidden rotate-90 my-2">↓</span>
          <span>رمز</span>
          <span className="text-primary-bg/50 hidden md:block">→</span>
          <span className="text-primary-bg/50 block md:hidden rotate-90 my-2">↓</span>
          <span className="text-accent-red drop-shadow-xl">خيال سينمائي</span>
        </motion.div>
      </div>
    </section>
  );
}
