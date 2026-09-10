'use client';

import { motion } from 'framer-motion';

export default function DedicationSection() {
  return (
    <section id="dedication" className="relative overflow-hidden w-full py-24 md:py-32 lg:py-48 px-4 md:px-6 lg:px-12 bg-deep-green flex flex-col items-center justify-center min-h-[60vh] md:min-h-[70vh] arc-t">

      <div className="container mx-auto text-center relative z-10">
        
        {/* Subtle Poppy Symbol — no glow */}
        <motion.div 
          className="mb-12 flex justify-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 0.8, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="w-3.5 h-3.5 rounded-full bg-accent-red/90" />
        </motion.div>

        <motion.h2 
          className="font-heading text-2xl md:text-3xl text-accent-gold/80 font-light tracking-widest mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          إهداء
        </motion.h2>

        <motion.p 
          className="font-heading text-[clamp(2rem,6vw,3.5rem)] md:text-5xl text-primary-bg font-bold mb-10 px-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          إلى أرواح أعمامي الشهداء
        </motion.p>

        <motion.div 
          className="flex flex-col gap-4 font-body text-[clamp(1.25rem,4vw,2rem)] md:text-3xl text-primary-bg/80 font-light"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <p>محمد مهدي علي صولي</p>
          <p>راغب علي صولي</p>
          <p>يوسف علي صولي</p>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="w-px h-12 bg-accent-gold/20 mx-auto my-10"
          initial={{ opacity: 0, scaleY: 0 }}
          whileInView={{ opacity: 1, scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.6 }}
        />

        <motion.div
          className="flex flex-col gap-4 font-body text-[clamp(1.1rem,3.5vw,1.6rem)] md:text-2xl text-primary-bg/60 font-light italic"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.8 }}
        >
          <p>والى روح عمتي الشهيدة زهرة حسين صولي</p>
          <p>والشهيدة فاطمة عباس فتوني</p>
        </motion.div>
      </div>
    </section>
  );
}
