'use client';

import { motion } from 'framer-motion';

const progression = [
  {
    num: '01',
    title: 'الفقد',
    desc: 'أصوات الأمهات وذاكرة الشهداء.'
  },
  {
    num: '02',
    title: 'الذاكرة',
    desc: 'ثلاثة أجيال يجمعها مكان واحد رغم تفرقها.'
  },
  {
    num: '03',
    title: 'العودة',
    desc: 'انتقال الفيلم من الذاكرة إلى الرمز، ومن الرمز إلى الأمل.'
  }
];

export default function JourneySection() {
  return (
    <section id="journey" className="w-full py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-12 bg-deep-green">
      <div className="container mx-auto max-w-5xl">
        <motion.h2 
          className="font-heading text-[clamp(2.5rem,6vw,4rem)] md:text-5xl lg:text-6xl text-primary-bg font-bold mb-16 md:mb-24 lg:mb-32 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          رحلة الفيلم
        </motion.h2>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 lg:gap-24 max-w-sm md:max-w-none mx-auto">
          {/* Dashed connecting line (Desktop) - Stops at first and last node centers */}
          <div className="hidden md:block absolute top-[2.5rem] left-[16.66%] right-[16.66%] h-[1px] border-t border-dashed border-primary-bg/20 z-0" />
          
          {/* Dashed connecting line (Mobile) */}
          <div className="block md:hidden absolute top-8 bottom-8 right-[2.5rem] w-[1px] border-r border-dashed border-primary-bg/20 z-0" />

          {progression.map((item, index) => (
            <motion.div 
              key={item.num}
              className="relative z-10 flex flex-row md:flex-col items-start md:items-center text-right md:text-center gap-6 md:gap-8 w-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Square editorial number */}
              <div className="w-20 h-20 shrink-0 bg-deep-green border border-primary-bg/20 flex items-center justify-center font-heading text-2xl text-accent-red relative z-10 md:mx-auto">
                {item.num}
              </div>
              <div className="flex flex-col gap-2 md:gap-4 md:mt-4 pt-2 md:pt-0">
                <h3 className="font-heading text-xl md:text-2xl lg:text-3xl text-primary-bg font-bold">
                  {item.title}
                </h3>
                <p className="font-body text-base md:text-lg text-primary-bg/80 leading-loose max-w-xs md:mx-auto">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
