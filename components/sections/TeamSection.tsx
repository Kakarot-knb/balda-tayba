'use client';

import { motion } from 'framer-motion';

const team = [
  { role: 'الإخراج', name: 'Ali Sawly' },
  { role: 'مساعد الإخراج', name: 'Saja Karanbach' },
  { role: 'التصوير والمونتاج', name: 'Mohammad Radi' },
  { role: 'الذكاء الاصطناعي', name: 'Khalil Sammour' },
  { role: 'تصميم الملصق', name: 'Mohammad Ali Karaki' },
  { role: 'تطوير الموقع', name: 'Mohamad Karanbash' },
];

export default function TeamSection() {
  return (
    <section id="team" className="w-full py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-12 bg-primary-bg">
      <div className="container mx-auto max-w-4xl">
        <motion.h2 
          className="font-heading text-[clamp(2.5rem,6vw,4rem)] md:text-5xl lg:text-6xl text-primary-text font-bold mb-10 md:mb-16 lg:mb-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          فريق العمل
        </motion.h2>

        {/* Film-credit style list */}
        <div className="flex flex-col max-w-xl mx-auto">
          {team.map((member, index) => (
            <motion.div 
              key={index}
              className="flex flex-col items-center py-6 md:py-8 border-b border-text-secondary/10 last:border-b-0"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <span className="font-heading text-sm md:text-base text-text-secondary/60 tracking-widest uppercase mb-2 md:mb-3">
                {member.role}
              </span>
              <span className="font-body text-xl md:text-2xl lg:text-3xl text-primary-text font-light" dir="ltr">
                {member.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
