'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import DocumentaryMediaFrame from '../DocumentaryMediaFrame';

const concepts = [
  {
    title: 'الرمزية والهوية',
    content: 'دحض أسطورة "عشتار وأدونيس" وإثبات أن وردة شقائق النعمان في الطيبة لم تنبت من أساطير القدماء، بل نبتت من دماء شهدائها الفعليين، لِتتحول بتلاتها في المشاهد الملحمية إلى قذائف تصهر آليات العدو (الميركافا).'
  },
  {
    title: 'العمق القرآني',
    content: 'الربط بين اسم الضيعة "الطيبة" والجذر القرآني (الطيب) المذكور 50 مرة في القرآن الكريم ({الْكَلِمَةِ الطَّيِّبَةِ}، {الشَّجَرَةِ الطَّيِّبَةِ}، {الْمَسَاكِنِ الطَّيِّبَةِ}، و{بَلْدَةٌ طَيِّبَةٌ وَرَبٌّ غَفُورٌ}).'
  },
  {
    title: 'صوت الشريط الحدودي',
    content: 'نقل صرخة أهالي الجنوب الذين عانوا من التهجير وحُرِموا الاستقرار والحياة الطبيعية بعيداً عن منازلهم لأكثر من 3 سنوات.'
  },
  {
    title: 'التضحية والصمود الإنساني',
    content: 'توثيق قصص واقعية تُجسد العناد والوفاء للأرض (قصص الشهداء والنازحين).'
  },
  {
    title: 'حتمية العودة والنصر',
    content: 'إيصال رسالة قاطعة بأن تدمير الحجر لا يمحو الحق، وأن الركام والدمار ليسا إلا "مخاضاً عسيراً" يسبق العودة الحتمية لإنبات الأرض وبنائها من جديد.'
  },
  {
    title: 'زهرة الجنوب الشهيدة فاطمة فتوني',
    content: 'تجسيد فاطمة كـ "دحنونة الطيبة وزهرة الجنوب" التي سقطت من يد والدها، لا لتموت، بل لتتحول بتلاتها إلى قوة وقذيفة تدك دبابات "الميركافا" وتصنع النصر.'
  }
];

export default function ConceptSection() {
  return (
    <section id="concept" className="w-full py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-12 bg-primary-bg overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Text Column - Natural Editorial Flow */}
          <motion.div 
            className="flex flex-col gap-8 md:gap-12 lg:gap-16 py-0 order-2 lg:order-1"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Top Anchor: Heading + Explanatory Text */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2 order-1 lg:order-none">
                <h2 className="font-heading text-[clamp(2rem,6vw,4rem)] md:text-5xl lg:text-6xl text-primary-text font-bold">
                  فكرة الفيلم
                </h2>
                <p className="font-body text-sm md:text-base text-text-secondary/80">
                  إخراج: <Link href="/" className="hover:text-primary-text border-b border-text-secondary/30 hover:border-primary-text transition-colors duration-500 pb-0.5">علي صولي</Link>
                </p>
              </div>
              
              {/* Image Column - Moves here on mobile */}
              <div className="w-full order-2 lg:hidden mt-4 mb-4">
                <DocumentaryMediaFrame className="w-full">
                  <div className="relative w-full aspect-[2480/3508]">
                    <motion.img 
                      src="/images/poster.jpg" 
                      alt="ملصق فيلم بلدةٌ طيبة للمخرج علي صولي" 
                      className="absolute inset-0 w-full h-full object-cover z-10" 
                    />
                  </div>
                </DocumentaryMediaFrame>
              </div>

              <div className="flex flex-col gap-5 md:gap-6 max-w-2xl order-3 lg:order-none">
                {concepts.map((concept, idx) => (
                  <div key={idx} className="flex flex-col gap-1 md:gap-2">
                    <h3 className="font-heading text-lg md:text-xl text-primary-text font-bold">
                      {concept.title}
                    </h3>
                    <p className="font-body text-base md:text-lg leading-relaxed text-text-secondary font-light">
                      {concept.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Image Column */}
          <motion.div 
            className="w-full hidden lg:block order-1 lg:order-2 sticky top-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <DocumentaryMediaFrame className="w-full h-full">
              <div className="relative w-full aspect-[2480/3508]">
                <motion.img 
                  src="/images/poster.jpg" 
                  alt="ملصق فيلم بلدةٌ طيبة للمخرج علي صولي" 
                  className="absolute inset-0 w-full h-full object-cover z-10" 
                  initial={{ scale: 1.04 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, ease: "easeOut" }}
                />
              </div>
            </DocumentaryMediaFrame>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
