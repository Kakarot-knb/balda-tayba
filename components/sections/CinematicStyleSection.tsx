'use client';

import { motion } from 'framer-motion';

const techniques = [
  {
    title: 'القطع القفزي (Jump Cuts)',
    desc: 'لخلق تأثير عاطفي مباشر عبر تصريحات الأمهات.'
  },
  {
    title: 'القطع المتطابق (Match Cut)',
    desc: 'لربط الأجيال الثلاثة بصرياً رغم تصويرهم في أماكن مختلفة.'
  },
  {
    title: 'اللقطات القريبة (Close-ups)',
    desc: 'التركيز على الأيدي، الوجوه، والأشياء الشخصية لخلق حالة من الحميمية.'
  },
  {
    title: 'التصوير الجوي (Drone)',
    desc: 'لتأسيس بلدة الطيبة جغرافياً وعاطفياً وإظهار حجم الدمار.'
  },
  {
    title: 'المواد الأرشيفية (Archival Footage)',
    desc: 'لربط القصص الشخصية بالذاكرة التاريخية الحقيقية.'
  },
  {
    title: 'التسلسل السينمائي بالذكاء الاصطناعي',
    desc: 'استُخدم تحديداً لتجسيد استعارة بصرية تعذر تصويرها واقعياً.'
  }
];

export default function CinematicStyleSection() {
  return (
    <section id="style" className="w-full py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-12 bg-primary-bg">
      <div className="container mx-auto max-w-7xl">
        <motion.h2 
          className="font-heading text-[clamp(2.5rem,6vw,4rem)] md:text-5xl lg:text-6xl text-primary-text font-bold mb-10 md:mb-16 lg:mb-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          الأسلوب السينمائي
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 md:gap-x-12 gap-y-12 md:gap-y-16">
          {techniques.map((tech, index) => (
            <motion.div 
              key={index}
              className="flex flex-col border-t border-text-secondary/20 pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <span className="font-heading text-sm text-accent-red mb-4 block font-bold">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="font-heading text-xl md:text-2xl text-primary-text font-bold mb-3">
                {tech.title}
              </h3>
              <p className="font-body text-base lg:text-lg text-text-secondary font-light leading-relaxed">
                {tech.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
