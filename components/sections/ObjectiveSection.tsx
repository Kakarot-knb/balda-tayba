'use client';

import { motion } from 'framer-motion';
import { Home, Trees, HeartHandshake, Flower2 } from 'lucide-react';
import clsx from 'clsx';

const objectives = [
  {
    id: '01',
    title: 'الإنسان',
    description: 'نقل معاناة أهالي الجنوب الذين حُرِموا الاستقرار والحياة الطبيعية لأكثر من ثلاث سنوات بعيداً عن ديارهم.',
    icon: Home,
  },
  {
    id: '02',
    title: 'الأرض',
    description: 'التأكيد على أن هدم الحجر لن يمحو الحق، وأن العودة إلى الأرض قرارٌ حتمي لا تراجع عنه.',
    icon: Trees,
  },
  {
    id: '03',
    title: 'التضحية',
    description: 'توثيق نماذج التضحيات في الطيبة، من أمهات الشهداء إلى الشباب الذين استمروا في عطائهم رغم خساراتهم المتكررة.',
    icon: HeartHandshake,
  },
  {
    id: '04',
    title: 'من الركام إلى النصر',
    description: 'تحويل الركام إلى نصر من خلال إبراز الفكرة البصرية بأن الدمار ليس إلا مخاضاً عسيراً يسبق ولادة النصر واستعادة الحياة.',
    icon: Flower2,
    isSpecial: true,
  },
];

export default function ObjectiveSection() {
  return (
    <section id="objective" className="w-full py-20 md:py-32 lg:py-40 px-4 md:px-6 lg:px-12 bg-deep-green relative overflow-hidden">
      
      {/* Subtle background texture/glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-deep-green/5 via-deep-green to-deep-green"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center mb-24 md:mb-32">
          <motion.h2 
            className="font-heading text-[clamp(2.5rem,6vw,4rem)] md:text-5xl lg:text-6xl text-primary-bg font-bold text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            الهدف
          </motion.h2>
        </div>

        {/* Infographic Timeline */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Vertical Connecting Line (Desktop: Center, Mobile: Right) */}
          <div className="absolute top-0 bottom-0 right-8 md:right-1/2 w-[1px] transform md:translate-x-1/2">
            <motion.div 
              className="w-full h-full bg-gradient-to-b from-accent-gold/40 via-accent-gold/40 to-accent-red origin-top"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />
          </div>

          <div className="flex flex-col gap-16 md:gap-24 relative">
            {objectives.map((obj, index) => {
              const isEven = index % 2 !== 0; // 0-indexed, so index 1 is "02", index 3 is "04"
              const Icon = obj.icon;
              
              return (
                <div key={obj.id} className={clsx(
                  "flex flex-col md:flex-row items-center gap-8 md:gap-16 w-full",
                  isEven ? "md:flex-row-reverse" : ""
                )}>
                  
                  {/* Content Card */}
                  <motion.div 
                    className={clsx(
                      "w-full md:w-1/2 flex relative z-20",
                      isEven ? "md:justify-start" : "md:justify-end"
                    )}
                    initial={{ opacity: 0, y: 30, x: isEven ? -20 : 20 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <div className={clsx(
                      "relative p-8 md:p-10 w-full max-w-md border mr-16 md:mr-0",
                      obj.isSpecial 
                        ? "bg-deep-green/20 border-accent-red/30 shadow-[0_0_40px_rgba(155,34,38,0.05)] backdrop-blur-sm" 
                        : "bg-surface/5 border-accent-gold/10 backdrop-blur-sm"
                    )}>
                      {/* Number watermark */}
                      <span className={clsx(
                        "absolute -top-8 -right-4 font-heading text-6xl md:text-8xl font-black select-none pointer-events-none",
                        obj.isSpecial ? "text-accent-red/5" : "text-white/5"
                      )}>
                        {obj.id}
                      </span>

                      <h3 className={clsx(
                        "font-heading text-2xl md:text-3xl font-bold mb-4 flex items-center gap-4 relative z-10", 
                        obj.isSpecial ? "text-accent-red" : "text-primary-bg"
                      )}>
                        {obj.title}
                      </h3>
                      <p className={clsx(
                        "font-body text-base md:text-lg leading-relaxed font-light relative z-10",
                        obj.isSpecial ? "text-primary-bg/90" : "text-primary-bg/70"
                      )}>
                        {obj.description}
                      </p>
                      
                      {/* Decorative corner accents */}
                      <div className={clsx("absolute top-0 right-0 w-3 h-3 border-t border-r", obj.isSpecial ? "border-accent-red" : "border-accent-gold/40")} />
                      <div className={clsx("absolute bottom-0 left-0 w-3 h-3 border-b border-l", obj.isSpecial ? "border-accent-red" : "border-accent-gold/40")} />
                    </div>
                  </motion.div>

                  {/* Center Node (Desktop) */}
                  <motion.div 
                    className="absolute right-1/2 transform translate-x-1/2 z-10 hidden md:flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <div className={clsx(
                      "w-16 h-16 rounded-full flex items-center justify-center border-4 border-deep-green relative",
                      obj.isSpecial ? "bg-accent-red shadow-[0_0_30px_rgba(155,34,38,0.4)]" : "bg-deep-green"
                    )}>
                      {/* Outer pulse ring for special node */}
                      {obj.isSpecial && (
                        <div className="absolute inset-0 rounded-full border border-accent-red/50 animate-ping opacity-75" style={{ animationDuration: '3s' }} />
                      )}
                      <Icon className={clsx("w-6 h-6", obj.isSpecial ? "text-primary-bg" : "text-accent-gold")} strokeWidth={1.5} />
                    </div>
                  </motion.div>

                  {/* Mobile Node */}
                  <motion.div 
                    className="absolute right-8 transform translate-x-1/2 z-10 md:hidden flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <div className={clsx(
                      "w-12 h-12 rounded-full flex items-center justify-center border-4 border-deep-green relative",
                      obj.isSpecial ? "bg-accent-red shadow-[0_0_20px_rgba(155,34,38,0.4)]" : "bg-deep-green"
                    )}>
                       {/* Outer pulse ring for special node */}
                       {obj.isSpecial && (
                        <div className="absolute inset-0 rounded-full border border-accent-red/50 animate-ping opacity-75" style={{ animationDuration: '3s' }} />
                      )}
                      <Icon className={clsx("w-5 h-5", obj.isSpecial ? "text-primary-bg" : "text-accent-gold")} strokeWidth={1.5} />
                    </div>
                  </motion.div>

                  {/* Empty Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Major Typographic Moment / Blockquote */}
        <motion.div 
          className="flex justify-center mt-32 md:mt-48 pt-16 md:pt-24 border-t border-accent-gold/10 px-4 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          {/* Subtle glow behind the quote */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-accent-red/5 blur-[100px] pointer-events-none rounded-full" />
          
          <blockquote className="font-heading text-[clamp(1.75rem,5vw,4rem)] md:text-5xl lg:text-7xl text-primary-bg font-bold text-center leading-tight max-w-4xl relative z-10">
            <span className="text-accent-red/80">&ldquo;</span>خُطَانَا إِلَيْكِ مَقْضِيَّة.. وَحُقُوقُنَا فِيكِ حَتْمِيَّة.<span className="text-accent-red/80">&rdquo;</span>
          </blockquote>
        </motion.div>

      </div>
    </section>
  );
}
