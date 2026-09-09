'use client';

import { motion } from 'framer-motion';
import { Camera, Aperture, Mic, SunMedium, Move3d } from 'lucide-react';
import MagicBento from '../MagicBento';

const equipment = [
  {
    category: 'الكاميرات',
    icon: Camera,
    items: [
      'Sony α7R V',
      'Sony α7 IV'
    ]
  },
  {
    category: 'العدسات',
    icon: Aperture,
    items: [
      'Sony FE 24–70mm F2.8 GM',
      'Sony FE 70–200mm F2.8 GM OSS',
      'Sony FE 50mm F1.8'
    ]
  },
  {
    category: 'الصوت',
    icon: Mic,
    items: [
      'RØDE Wireless PRO'
    ]
  },
  {
    category: 'الإضاءة',
    icon: SunMedium,
    items: [
      '2× amaran 300c RGBWW LED Lights',
      '2× Godox SL100Bi Lights'
    ]
  },
  {
    category: 'الدعم والتثبيت',
    icon: Move3d,
    items: [
      '2× Camera Tripods'
    ]
  }
];

export default function EquipmentSection() {
  const bentoCards = equipment.map((item) => {
    const Icon = item.icon;
    return {
      color: '#1E2B22',
      label: (
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-full bg-[#2A3C30] text-[#8CB39B] border border-[#8CB39B]/20">
            <Icon className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
          </div>
          <span className="font-heading text-lg md:text-xl text-primary-bg font-bold">
            {item.category}
          </span>
        </div>
      ),
      description: (
        <div className="flex flex-col gap-1 md:gap-2 mt-4">
          {item.items.map((val, idx) => (
            <div key={idx} className="font-body text-base md:text-lg text-primary-bg/75 font-light text-right" dir="ltr">
              {val}
            </div>
          ))}
        </div>
      )
    };
  });

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
          المواد المستخدمة
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <MagicBento
            cards={bentoCards}
            textAutoHide={false}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={false}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={8}
            glowColor="140, 179, 155"
          />
        </motion.div>
      </div>
    </section>
  );
}
