"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Camera, BookOpen, Flower2, RotateCcw, Target } from "lucide-react";
import { cn } from "@/lib/utils";

const goals = [
  {
    id: "cover",
    title: "أهداف الفيلم",
    subtitle: "الرؤية والرسالة",
    description: "مرر المؤشر لاستكشاف الأهداف الأربعة التي يسعى الفيلم لتحقيقها وتوثيقها.",
    icon: Target,
    colorClass: "border-deep-green/10 text-deep-green",
    bgClass: "bg-primary-bg", 
  },
  {
    id: "01",
    title: "توثيق حكاية الطيبة",
    subtitle: "الأرض والإنسان",
    description: "تقديم حكاية بلدة الطيبة من خلال أهلها، ذاكرتها، وأرضها، وتحويل تفاصيل المكان إلى شهادة بصرية تحفظ قصته.",
    icon: Camera,
    colorClass: "border-deep-green/10 text-deep-green",
    bgClass: "bg-[#e8e2d4]", 
  },
  {
    id: "02",
    title: "حفظ الذاكرة",
    subtitle: "ما يبقى بعد الغياب",
    description: "توثيق الوجوه والحكايات والذكريات التي تبقى مرتبطة بالأرض، حتى عندما يبتعد الإنسان عنها.",
    icon: BookOpen,
    colorClass: "border-deep-green/10 text-deep-green",
    bgClass: "bg-[#e5dfd0]", 
  },
  {
    id: "03",
    title: "إبراز التضحية",
    subtitle: "الأرض التي تحمل آثار أهلها",
    description: "إظهار معنى التضحية والانتماء من خلال شهادات الأهالي، وخصوصًا الأمهات، وربط الإنسان بالأرض التي قدّم من أجلها الكثير.",
    icon: Flower2,
    colorClass: "border-accent-red/20 text-accent-red",
    bgClass: "bg-[#e3dccc]",
  },
  {
    id: "04",
    title: "ترسيخ معنى العودة",
    subtitle: "من الغياب إلى الرجوع",
    description: "الوصول بالحكاية إلى فكرة أن الابتعاد لا يعني النهاية، وأن العلاقة بالأرض تبقى أقوى من المسافة.",
    icon: RotateCcw,
    colorClass: "border-accent-red/30 text-accent-red",
    bgClass: "bg-[#e0d9c8]",
  }
];

export function CinematicGoalStack() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center font-body pt-8 pb-16 px-4"
      dir="rtl"
    >
      <div 
        className="relative w-full cursor-pointer"
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        // For mobile support
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="relative w-full h-[220px] md:h-[240px]">
          {goals.map((goal, index) => {
            const isTop = index === 0;
            const Icon = goal.icon;
            
            // Calculate stacking values
            const scale = isExpanded ? 1 : 1 - index * 0.05;
            const y = isExpanded ? index * 210 : index * 16;
            const zIndex = goals.length - index;
            const opacity = isExpanded ? 1 : (1 - index * 0.15);

            return (
              <motion.div
                key={goal.id}
                className={cn(
                  "absolute top-0 left-0 right-0 w-full rounded-2xl border",
                  "shadow-xl overflow-hidden",
                  goal.bgClass,
                  goal.colorClass
                )}
                style={{ zIndex }}
                initial={false}
                animate={{
                  scale,
                  y,
                  opacity,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 26,
                  mass: 1,
                }}
              >
                <div className="p-6 md:p-8 relative">
                  
                  <div className="flex gap-5 md:gap-6">
                    {/* Icon Container */}
                    <div className="shrink-0 mt-1">
                      <div className={cn(
                        "w-14 h-14 md:w-16 md:h-16 rounded-full border flex items-center justify-center bg-white/40 shadow-sm",
                        goal.colorClass
                      )}>
                        <Icon className="w-6 h-6 md:w-7 md:h-7" strokeWidth={1.5} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0 flex flex-col gap-2 relative z-10">
                      <h3 className="font-heading text-2xl md:text-3xl font-bold text-deep-green truncate">
                        {goal.title}
                      </h3>
                      <p className="text-base md:text-lg font-medium text-deep-green/70 mb-1">
                        {goal.subtitle}
                      </p>
                      <motion.div
                        initial={false}
                        animate={{ 
                          height: (isExpanded || isTop) ? "auto" : 0,
                          opacity: (isExpanded || isTop) ? 1 : 0 
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-deep-green/80 text-base md:text-lg leading-relaxed font-light">
                          {goal.description}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Helper bottom spacer when expanded so content below doesn't get covered instantly */}
        <motion.div 
          initial={false}
          animate={{ height: isExpanded ? (goals.length - 1) * 210 : 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 26,
          }}
          className="w-full"
        />
        
      </div>



    </div>
  );
}
