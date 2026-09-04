'use client';

import { motion } from 'framer-motion';

const equipment = [
  { category: 'الكاميرا', value: '2 كاميرات سوني (Sony)' },
  { category: 'العدسات', value: '50mm, 24-70mm, 70-200mm' },
  { category: 'الإضاءة', value: 'إضاءة Amaran 300C (عدد 2)' },
];

export default function EquipmentSection() {
  return (
    <section id="equipment" className="w-full py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-12 bg-primary-bg border-t border-text-secondary/5">
      <div className="container mx-auto max-w-5xl">
        <motion.h2 
          className="font-heading text-[clamp(2.5rem,6vw,4rem)] md:text-5xl lg:text-6xl text-primary-text font-bold mb-10 md:mb-16 lg:mb-24 text-center md:text-right"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          المعدات
        </motion.h2>

        <div className="border-y border-text-secondary/20">
          <div className="grid grid-cols-1 divide-y divide-text-secondary/10">
            {equipment.map((item, index) => (
              <motion.div 
                key={index}
                className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 py-6 md:py-8"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div className="font-heading text-lg md:text-xl text-primary-text font-bold">
                  {item.category}
                </div>
                <div className="font-body text-base md:text-lg text-text-secondary font-light">
                  {item.value}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
