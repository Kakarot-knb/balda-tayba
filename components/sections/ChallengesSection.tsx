'use client';

import { motion } from 'framer-motion';

const challenges = [
  {
    title: 'تأخير بداية العمل',
    desc: 'تأخر انطلاق التصوير بسبب استشهاد عدد من أفراد العائلة، وآخرهم عمي الشهيد محمد مهدي صولي، وما رافق ذلك من واجبات عزاء في مكان النزوح.'
  },
  {
    title: 'ضغط الوقت والحالة النفسية',
    desc: 'العمل ضمن وقت ضيق، مع مسؤولية تنفيذ مشروع كبير، ما شكّل ضغطاً وإرهاقاً خلال فترة الإنتاج.'
  },
  {
    title: 'تطوير الرؤية والنص',
    desc: 'احتاجت الأفكار في البداية إلى وقت حتى تتبلور، خصوصاً للوصول إلى لغة موزونة وبلاغية تناسب العمل.'
  },
  {
    title: 'تعديل خطة التصوير',
    desc: 'تم تغيير بعض الشخصيات والمقابلات، واستبدالها بشخصيات تخدم فكرة الصمود والتكافل بشكل أفضل.'
  },
  {
    title: 'التصوير وسط النزوح والقصف',
    desc: 'تم تصوير مقابلات مع نازحين في الجنوب بالتزامن مع الضربات وموجات النزوح. كنا أحياناً ننهي مقابلة مع شخصية، فتغادر المنطقة مباشرة بعدها.'
  },
  {
    title: 'تنفيذ مشاهد الـAI',
    desc: 'واجهنا صعوبة في تنفيذ مشاهد الذكاء الاصطناعي في البداية مع الحفاظ على ملامح بلدة الطيبة الحقيقية.'
  },
  {
    title: 'تأمين شقائق النعمان',
    desc: 'صعوبة تأمين الوردة المطلوبة للتصوير، ما دفعني إلى تصنيع وردة شقائق النعمان يدوياً بنفسي خصيصاً للمشهد.'
  },
  {
    title: 'ظروف النزوح والإنتاج',
    desc: 'العمل من خارج الديار بعد سنوات من عدم الاستقرار، مع انقطاع الكهرباء وصعوبة التنقل وتأمين مواقع تصوير بديلة ونقل الشخصيات إليها.'
  },
  {
    title: 'الترجمة والتدقيق اللغوي',
    desc: 'ترجمة الفيلم إلى اللغة الإنكليزية ومراجعة الترجمة والتدقيق اللغوي استغرقا وقتاً طويلاً لضمان دقة المعنى وسلامة اللغة.'
  }
];

export default function ChallengesSection() {
  return (
    <section id="challenges" className="w-full py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-12 bg-deep-green border-t border-primary-bg/10 rounded-t-[3rem] lg:rounded-t-[5rem] rounded-b-[3rem] lg:rounded-b-[5rem]">
      <div className="container mx-auto max-w-7xl">
        <motion.h2 
          className="font-heading text-[clamp(2.5rem,6vw,4rem)] md:text-5xl lg:text-6xl text-primary-bg font-bold mb-12 md:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          التحديات وعقبات الإنتاج
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {challenges.map((challenge, index) => (
            <motion.div 
              key={index}
              className="flex flex-col gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <h3 className="font-heading text-xl md:text-2xl text-primary-bg font-bold">
                {challenge.title}
              </h3>
              <p className="font-body text-base md:text-lg text-primary-bg/75 font-light leading-relaxed">
                {challenge.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
