'use client';

import { motion } from 'framer-motion';

import DocumentaryMediaFrame from '../DocumentaryMediaFrame';

const participants = [
  { name: 'الحاجة أم علي مستراح', role: 'والدة أربعة شهداء', image: '/images/characters/om-ali-mstarrah.jpg' },
  { name: 'أم حسين صولي', role: 'والدة ثلاثة شهداء', image: '/images/characters/om-hussein-sawly.jpg' },
  { name: 'أم جواد مستراح', role: 'زوجة ووالدة شهيد', image: '/images/characters/om-jawad-mstarrah.jpg' },
  { name: 'أم حسن رمال', role: 'والدة الشهيد الوحيد', image: '/images/characters/om-hassan-rammal.jpg' },
  { name: 'فاطمة صولي', role: 'بنت الشهيد', image: '/images/characters/fatima-sawly.jpg' },
  { name: 'أبو سليم نحلة', role: 'الحاج الكبير', image: '/images/characters/abu-salim-nahla.jpg' },
  { name: 'محمد يوسف صولي', role: 'الشاب', image: '/images/characters/mohamad-yousef-sawly.jpg' },
  { name: 'علي أحمد عواضة', role: 'الطفل الصغير', image: '/images/characters/ali-ahmad-awada.jpg' },
  { name: 'أبو الفضل فتوني', role: 'والد الشهيدة', image: '/images/characters/abu-elfadel-ftouni.jpg' },
];

export default function ParticipantsSection() {
  return (
    <section id="participants" className="w-full py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-12 bg-surface overflow-hidden border-t border-text-secondary/5">
      <div className="container mx-auto max-w-7xl">
        
        <motion.div 
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-[clamp(2.5rem,6vw,4rem)] md:text-5xl lg:text-6xl text-primary-text font-bold">
            الشخصيات المشاركة
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 lg:gap-24">
          {participants.map((person, idx) => (
            <motion.div 
              key={idx}
              className="group flex flex-col items-center w-full max-w-[280px] md:max-w-[320px] mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.08 }}
            >
              <DocumentaryMediaFrame
                metadataTitle={person.name}
                metadataSubtitle={person.role}
                className="w-full"
              >
                <div className="relative w-full aspect-[3/4]">
                  {/* Editorial Placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center bg-primary-bg/10">
                    <span className="font-heading text-sm md:text-base text-text-secondary/50 tracking-widest">
                      صورة فوتوغرافية قريباً
                    </span>
                  </div>
                  {/* Image */}
                  <img 
                    src={person.image} 
                    alt={person.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03] z-10"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              </DocumentaryMediaFrame>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
