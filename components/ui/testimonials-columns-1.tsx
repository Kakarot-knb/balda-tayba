'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimate } from 'framer-motion';

export interface Challenge {
  number: string;
  title: string;
  text: string;
}

const challengesData: Challenge[] = [
  {
    number: "01",
    title: "التصوير في ظروف صعبة",
    text: "فرضت ظروف المكان والمرحلة التي صُوّر فيها الفيلم تحديات ميدانية كبيرة، من صعوبة الوصول إلى بعض المواقع إلى العمل ضمن ظروف غير مستقرة."
  },
  {
    number: "02",
    title: "جمع الشهادات",
    text: "كان الوصول إلى أصحاب الحكايات وتسجيل شهاداتهم الحساسة تحديًا يتطلب وقتًا، ثقة، وحضورًا إنسانيًا يحافظ على صدق التجربة."
  },
  {
    number: "03",
    title: "تحويل الذاكرة إلى صورة",
    text: "لم تكن كل تفاصيل الحكاية قابلة للتصوير مباشرة، لذلك كان على الفريق إيجاد لغة بصرية تعبّر عن الذاكرة والغياب والانتماء دون فقدان صدقها."
  },
  {
    number: "04",
    title: "دمج الذكاء الاصطناعي",
    text: "استخدم الفيلم عناصر بصرية مولدة بالذكاء الاصطناعي ضمن لغته السينمائية، ما تطلب تحقيق توازن بين الخيال البصري وهوية الفيلم الواقعية."
  },
  {
    number: "05",
    title: "بناء لغة بصرية واحدة",
    text: "جمع الفيلم بين المقابلات، لقطات الدرون، المواد الأرشيفية، والعناصر السينمائية المولدة بالذكاء الاصطناعي ضمن رؤية بصرية واحدة."
  },
  {
    number: "06",
    title: "ضيق الموارد",
    text: "فرضت طبيعة مشروع التخرج والعمل الميداني ضرورة الاستفادة القصوى من المعدات والوقت والموارد المتاحة، مع الحفاظ على مستوى بصري سينمائي."
  }
];

const col1 = [challengesData[0], challengesData[1]];
const col2 = [challengesData[2], challengesData[3]];
const col3 = [challengesData[4], challengesData[5]];

function ChallengeCard({ challenge }: { challenge: Challenge }) {
  return (
    <motion.div 
      className="bg-[#F8F6F0] border border-[#111A15]/10 rounded-2xl p-6 md:p-8 flex flex-col gap-3 shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:border-deep-green/15 transition-all duration-500 relative group overflow-hidden w-full"
      whileHover={{ scale: 1.02 }}
    >
      <div className="absolute top-0 right-0 w-1.5 h-0 bg-accent-red transition-all duration-500 group-hover:h-full opacity-80" />
      <span className="font-heading text-sm md:text-base font-bold text-accent-red opacity-80 mb-1">
        {challenge.number}
      </span>
      <h4 className="font-heading text-xl md:text-2xl text-deep-green font-bold">
        {challenge.title}
      </h4>
      <p className="font-body text-deep-green/80 text-sm md:text-base leading-relaxed font-light">
        {challenge.text}
      </p>
    </motion.div>
  );
}

function MovingColumn({ 
  items, 
  duration
}: { 
  items: Challenge[]; 
  duration: number;
}) {
  const [scope, animate] = useAnimate();
  const controlsRef = useRef<any>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!scope.current) return;
    
    controlsRef.current = animate(
      scope.current,
      { y: ["0%", "-50%"] },
      {
        repeat: Infinity,
        repeatType: "loop",
        duration: duration,
        ease: "linear",
      }
    );

    return () => {
      if (controlsRef.current) {
        controlsRef.current.stop();
      }
    };
  }, [animate, duration, scope]);

  useEffect(() => {
    if (!controlsRef.current) return;
    
    // Only pause if hover is supported (ignores touch devices)
    const isHoverSupported = typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches;
    
    if (isHovered && isHoverSupported) {
      controlsRef.current.pause();
    } else {
      controlsRef.current.play();
    }
  }, [isHovered]);
  return (
    <div 
      className="relative flex flex-col overflow-hidden h-[450px] sm:h-[550px] md:h-[600px] lg:h-[700px] w-full"
      style={{
         maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
         WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        ref={scope}
        className="flex flex-col gap-6 md:gap-8 w-full"
      >
        <div className="flex flex-col gap-6 md:gap-8">
           {/* Duplicate multiple times to ensure it fills height and loops smoothly */}
           {[...items, ...items, ...items, ...items].map((item, idx) => (
             <ChallengeCard key={`a-${idx}`} challenge={item} />
           ))}
        </div>
        <div className="flex flex-col gap-6 md:gap-8 mt-6 md:mt-8">
           {[...items, ...items, ...items, ...items].map((item, idx) => (
             <ChallengeCard key={`b-${idx}`} challenge={item} />
           ))}
        </div>
      </motion.div>
    </div>
  );
}

export default function TestimonialsColumns1() {
  return (
    <>
      <div 
        className="w-full relative mt-8 md:mt-12 motion-reduce:hidden"
      >
        {/* Desktop view */}
        <div className="hidden lg:grid grid-cols-3 gap-6 xl:gap-8">
          <MovingColumn items={col1} duration={15} />
          <MovingColumn items={col2} duration={19} />
          <MovingColumn items={col3} duration={17} />
        </div>

        {/* Tablet view */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-6">
          <MovingColumn items={[...col1, ...col3]} duration={22} />
          <MovingColumn items={col2} duration={18} />
        </div>

        {/* Mobile view */}
        <div className="grid md:hidden grid-cols-1 gap-6">
          <MovingColumn items={[...col1, ...col2, ...col3]} duration={35} />
        </div>
      </div>

      {/* Reduced Motion Fallback */}
      <div className="w-full mt-8 md:mt-12 hidden motion-reduce:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
         {challengesData.map((item, idx) => (
            <ChallengeCard key={`fallback-${idx}`} challenge={item} />
         ))}
      </div>
    </>
  );
}
