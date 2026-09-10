'use client';

import { motion } from 'framer-motion';
import ChromaGrid from '../ChromaGrid';

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

const chromaItems = participants.map(p => ({
  image: p.image,
  title: p.name,
  subtitle: p.role,
  borderColor: 'rgba(0, 0, 0, 0.8)',
  gradient: 'linear-gradient(145deg, #1E2B22, #0a0f0c)'
}));

export default function ParticipantsSection() {
  return (
    <section id="participants" className="w-full py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-12 bg-surface overflow-hidden">
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <ChromaGrid 
            items={chromaItems}
            radius={350}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
          />
        </motion.div>

      </div>
    </section>
  );
}
