'use client';

import { motion } from 'framer-motion';

const challenges = [
  {
    title: 'الوصول إلى المناطق المتضررة',
    desc: 'التصوير في بيئة حدودية والعمل في ظل ظروف أمنية ولوجستية معقدة.'
  },
  {
    title: 'التصوير أثناء النزوح',
    desc: 'إجراء المقابلات وتوثيق قصص الأهالي وهم بعيدون عن منازلهم وفي حالة نزوح.'
  },
  {
    title: 'توثيق المشاعر الإنسانية',
    desc: 'العمل مع شخصيات تعيش مشاعر قوية وحساسة، مع الحفاظ على المصداقية الوثائقية والاحترام التام لمعاناتهم.'
  },
  {
    title: 'الدمج بين الوثائقي والسينمائي',
    desc: 'الموازنة بين المقابلات الواقعية واللقطات الوثائقية من جهة، والمشاهد السينمائية الرمزية من جهة أخرى.'
  },
  {
    title: 'إنتاج المشاهد المعتمدة على الذكاء الاصطناعي',
    desc: 'صناعة المشهد الرمزي الختامي باستخدام تقنيات الذكاء الاصطناعي مع الحفاظ على الاستمرارية البصرية مع اللقطات الحقيقية.'
  },
  {
    title: 'الحفاظ على وحدة الهوية البصرية',
    desc: 'جعل زهرة شقائق النعمان عنصراً بصرياً ورمزياً متماسكاً عبر مختلف أساليب التصوير المتبعة في الفيلم.'
  }
];

export default function ChallengesSection() {
  return (
    <section id="challenges" className="w-full py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-12 bg-deep-green border-t border-primary-bg/10">
      <div className="container mx-auto max-w-5xl">
        <motion.h2 
          className="font-heading text-[clamp(2.5rem,6vw,4rem)] md:text-5xl lg:text-6xl text-primary-bg font-bold mb-12 md:mb-16 lg:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          الصعوبات
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
          {challenges.map((challenge, index) => (
            <motion.div 
              key={index}
              className="flex items-start gap-4 md:gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              {/* Number label */}
              <span className="font-heading text-sm text-accent-red/80 mt-1 shrink-0">
                {String(index + 1).padStart(2, '0')}
              </span>

              <div className="flex flex-col gap-4 border-r-2 border-accent-red/80 pr-4 md:pr-6">
                <h3 className="font-heading text-xl md:text-2xl text-primary-bg font-bold">
                  {challenge.title}
                </h3>
                <p className="font-body text-base md:text-lg text-primary-bg/70 font-light leading-loose">
                  {challenge.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
