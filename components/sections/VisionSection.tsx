'use client';

import { motion } from 'framer-motion';
import Masonry from '../Masonry';

const narrativeImages = [
  {
    id: 'tayba-01',
    img: '/images/PLACEHOLDER-01.jpg',
    height: 600
  },
  {
    id: 'tayba-02',
    img: '/images/PLACEHOLDER-02.jpg',
    height: 800
  },
  {
    id: 'tayba-03',
    img: '/images/PLACEHOLDER-03.jpg',
    height: 500
  },
  {
    id: 'tayba-04',
    img: '/images/PLACEHOLDER-04.jpg',
    height: 700
  },
  {
    id: 'tayba-05',
    img: '/images/PLACEHOLDER-05.jpg',
    height: 600
  }
];

const filmParts = [
  {
    num: '01',
    title: "الجزء الأول",
    subtitle: "تجذّر التضحية (الشهادة)",
    text: "خُصص هذا الجزء لفئة الإناث، حارسات الأرض وناقلات إرث المقاومة. استعرضتُ فيه نماذج حية لأمهات الشهداء، متدرجاً في حجم التضحية من الأم التي قدمت أربعة شهداء، إلى الثلاثة، ثم الاثنين، وصولاً إلى وحيد أمه. ولم أكتفِ بالأمهات، بل تعمدت إدخال «ابنة الشهيد» كنموذج يكمل الدائرة، لأؤكد للجنة وللمشاهد أن هذه المسيرة ليست طارئة وتنتهي برحيل الجيل الأول، بل هي عقيدة فطرية يتربى عليها الأبناء، فبنات الشهداء هنّ من سيحملن الراية ويكملن الطريق."
  },
  {
    num: '02',
    title: "الجزء الثاني",
    subtitle: "مرارة النزوح وحتمية العودة",
    text: "انتقلت الكاميرا هنا لتعالج فكرة «النزوح»، ولكن هذه المرة عبر فئة الذكور، ومن خلال ثلاث مراحل عمرية مختلفة تختصر دورة حياة الإنسان: الرجل المسن (يمثل الذاكرة والتاريخ)، الشاب (يمثل الحاضر وطاقة البناء)، والطفل (يمثل المستقبل والحنين). بهذا التنويع، أردت القول إن النزوح يترك ندوبه على كل الأعمار، لكنه لا يمحو الارتباط الحتمي بالعودة."
  },
  {
    num: '03',
    title: "الجزء الثالث",
    subtitle: "زهرة الجنوب (فاطمة فتوني)",
    text: "بالحديث عن الشهيدة «فاطمة فتوني»، التي أُطلق عليها لقب «زهرة الجنوب». فاطمة في هذا العمل ليست مجرد شهيدة، بل هي تجسيدٌ حي لروح بلدة الطيبة، «دحنونتها» التي عشقت ترابها ودافعت عنها بالكلمة والموقف حتى ارتوت الأرض بدمائها."
  }
];

const symbolicDimensions = [
  {
    title: "البعد الأسطوري",
    subtitle: "وردة الدم",
    text: "في الأساطير القديمة، يُقال إن شقائق النعمان نبتت من دموع «عشتار» التي امتزجت بدماء «أدونيس» حزناً عليه. هذا البعد يرمز مباشرة إلى الشهداء؛ فالوردة هنا هي قطرة الدم الزكية التي سقطت في الجزء الأول من الفيلم."
  },
  {
    title: "البعد الجغرافي والوجداني",
    subtitle: "حق الأرض",
    text: "شقائق النعمان هي ابنة «جبل عامل». في لاوعينا الجنوبي، رؤية هذه الوردة الحمراء تعني فوراً «الجنوب». إنها وثيقة طابو إلهية تؤكد حقنا وحتمية عودتنا إلى هذه الأرض، وهو ما عالجه الجزء الثاني (النزوح)."
  },
  {
    title: "البعد الإنساني",
    subtitle: "التجسيد",
    text: "في الجزء الثالث والخاتمة، تندمج الرموز لتصبح الوردة هي «فاطمة فتوني» ذاتها. تلك الزهرة التي نزفت على أرض الجنوب واستشهدت كرمال الطيبة."
  }
];

export default function VisionSection() {
  return (
    <section id="vision" className="w-full py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-12 bg-primary-bg overflow-hidden border-t border-text-secondary/5">
      <div className="container mx-auto max-w-5xl">
        <motion.div 
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-[clamp(2.5rem,6vw,4rem)] md:text-5xl lg:text-6xl text-primary-text font-bold">
            رؤيتي ورسالة فيلم «بلدةٌ طيبة»
          </h2>
        </motion.div>

        {/* Subsection 1 */}
        <motion.article 
          className="grid grid-cols-1 md:grid-cols-[1fr_2.5fr] gap-6 md:gap-16 py-12 md:py-20 border-t border-text-secondary/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h3 className="font-heading text-2xl md:text-3xl text-primary-text font-bold">
              لماذا «بلدةٌ طيبة»؟
            </h3>
          </div>
          <div>
            <p className="font-body text-base md:text-lg lg:text-xl leading-loose text-text-secondary font-light">
              لم يكن اختيار عنوان الفيلم من الآية الكريمة في سورة سبأ: ﴿بَلْدَةٌ طَيِّبَةٌ وَرَبٌّ غَفُورٌ﴾ مجرد خيار لغوي، بل هو انعكاس لبُعد ديني وفطري عميق تربينا عليه منذ الصغر. لقد أردت من خلال هذا الربط القرآني أن أؤكد أن «الطيبة» ليست مجرد بقعة جغرافية، بل هي حالة إيمانية وعقيدة متجذرة. صمود أهلها، تضحياتهم، وحبهم للأرض ينبع من هذه القدسية التي أقرها القرآن الكريم. بناءً على هذا الأساس الروحي، تم بناء فكرة الفيلم، وتصوير كافة مشاهده خطوة بخطوة كما هو مفصل أدناه.
            </p>
          </div>
        </motion.article>

        {/* Subsection 2 */}
        <motion.article 
          className="grid grid-cols-1 md:grid-cols-[1fr_2.5fr] gap-6 md:gap-16 py-12 md:py-20 border-t border-text-secondary/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h3 className="font-heading text-2xl md:text-3xl text-primary-text font-bold">
              «الطيبة».. من الخاص إلى العام
            </h3>
          </div>
          <div>
            <p className="font-body text-base md:text-lg lg:text-xl leading-loose text-text-secondary font-light">
              لم يكن اختيار «بلدة الطيبة» مسرحاً وموضوعاً لهذا الفيلم مجرد انحيازٍ عاطفي لمسقط رأسي، بل كان اختياراً وظيفياً يحمل دلالات أعمق. لقد اتخذتُ من «الطيبة» نموذجاً مصغراً (Microcosm) يُقاس عليه حال جميع القرى الحدودية في الجنوب اللبناني. فالمرارة التي يذوقها أبناء هذه البلدة هي ذاتها التي تتجرعها كل قرية على الشريط الحدودي، وأهلها هم مرآة تعكس وجوه كل الجنوبيين في صمودهم، تضحياتهم، ونزوحهم. الفيلم هو صرخة «الطيبة»، لكنه في جوهره بصمةُ كلِ قريةٍ جنوبية تقف في وجه آلة الدمار.
            </p>
          </div>
        </motion.article>

        {/* Masonry Interlude */}
        <div className="py-16 md:py-24 border-t border-text-secondary/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 md:mb-16 text-center"
          >
            <h3 className="font-heading text-2xl md:text-3xl text-primary-text font-bold">
              سردية الأجزاء الثلاثة
            </h3>
          </motion.div>
          <div className="w-full relative" style={{ minHeight: '600px' }}>
            <Masonry
              items={narrativeImages}
              ease="power3.out"
              duration={1.2}
              stagger={0.06}
              animateFrom="bottom"
              scaleOnHover={true}
              hoverScale={0.97}
              blurToFocus={true}
              colorShiftOnHover={false}
            />
          </div>
        </div>

        {/* Subsection 3 - Structure */}
        <motion.article 
          className="grid grid-cols-1 md:grid-cols-[1fr_2.5fr] gap-6 md:gap-16 py-12 md:py-20 border-t border-text-secondary/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h3 className="font-heading text-2xl md:text-3xl text-primary-text font-bold mb-2">
              البناء الهيكلي
            </h3>
            <h4 className="font-heading text-lg text-accent-red">سردية الأجزاء الثلاثة</h4>
          </div>
          
          <div className="flex flex-col gap-12">
            <p className="font-body text-base md:text-lg lg:text-xl leading-loose text-text-secondary font-light">
              بُني الفيلم هندسياً على ثلاثة أجزاء (Sequences) رئيسية، تتقاطع وتتكامل لتروي القصة من زوايا إنسانية وعمرية وجندرية مختلفة، وفق التفصيل الآتي:
            </p>

            {/* Editorial numbered chapters instead of bg cards */}
            <div className="flex flex-col gap-10 md:gap-12">
              {filmParts.map((part, idx) => (
                <div 
                  key={idx}
                  className="flex flex-col md:flex-row gap-6 md:gap-10"
                >
                  {/* Chapter number */}
                  <div className="shrink-0 flex items-start">
                    <span className="font-heading text-4xl md:text-5xl text-accent-red/20 font-bold leading-none">{part.num}</span>
                  </div>
                  
                  {/* Chapter content */}
                  <div className="border-r border-accent-red/30 pr-6 flex flex-col gap-3">
                    <div>
                      <h5 className="font-heading text-xl text-primary-text font-bold mb-1">{part.title}</h5>
                      <h6 className="font-heading text-sm text-accent-red">{part.subtitle}</h6>
                    </div>
                    <p className="font-body text-sm md:text-base leading-loose text-text-secondary">
                      {part.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.article>

        {/* Subsection 4 - Symbolism */}
        <motion.article 
          className="grid grid-cols-1 md:grid-cols-[1fr_2.5fr] gap-6 md:gap-16 py-12 md:py-20 border-t border-text-secondary/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h3 className="font-heading text-2xl md:text-3xl text-primary-text font-bold mb-2">
              الرابط الرمزي
            </h3>
            <h4 className="font-heading text-lg text-accent-red">«شقائق النعمان»</h4>
          </div>
          
          <div className="flex flex-col gap-12">
            <p className="font-body text-base md:text-lg lg:text-xl leading-relaxed text-text-secondary font-light">
              لجعل الفيلم وحدة بصرية وفكرية متماسكة، استخدمتُ وردة «شقائق النعمان» (الدحنون) كعنصرٍ (Motif) يتنقل بين المشاهد ويختصر الفكرة العميقة للأجزاء الثلاثة، وذلك عبر ثلاثة أبعاد:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {symbolicDimensions.map((dim, idx) => (
                <div 
                  key={idx}
                  className="flex flex-col gap-3 border-r border-accent-red/30 pr-4"
                >
                  <div>
                    <h5 className="font-heading text-lg text-primary-text font-bold mb-1">{dim.title}</h5>
                    <h6 className="font-heading text-xs text-accent-red/70">{dim.subtitle}</h6>
                  </div>
                  <p className="font-body text-sm leading-relaxed text-text-secondary font-light mt-1">
                    {dim.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.article>

        {/* Conclusion */}
        <motion.div 
          className="text-center max-w-4xl mx-auto py-12 md:py-16 px-6 md:px-12 bg-deep-green text-primary-bg rounded-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h3 className="font-heading text-2xl md:text-3xl text-accent-red font-bold mb-8">
            خلاصة الرؤية
          </h3>
          <p className="font-body text-base md:text-xl lg:text-2xl leading-loose font-light">
            «بلدةٌ طيبة» ليس مجرد توثيق لقرية مهدمة، بل هو لوحة بصرية متكاملة.. بدأت بـ «وردة/قطرة دم» بين يدي أم، وانتقلت عبر الأجيال النازحة التي تشتاق لأرض الورد، لتنتهي بـ «وردة/فاطمة» تسقط من يد والدها، لا لتموت، بل لتتحول إلى قذيفة تدك آلة الموت، لتزهر «الطيبة» مجدداً تحت سماء: ﴿بَلْدَةٌ طَيِّبَةٌ وَرَبٌّ غَفُورٌ﴾.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
