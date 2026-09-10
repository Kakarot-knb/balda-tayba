"use client";

import React from "react";
import { motion } from "framer-motion";
import { Camera, BookOpen, Flower2, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

const timelineData = [
  {
    id: "01",
    title: "توثيق حكاية الطيبة",
    subtitle: "الأرض والإنسان",
    description: "تقديم حكاية بلدة الطيبة من خلال أهلها، ذاكرتها، وأرضها، وتحويل تفاصيل المكان إلى شهادة بصرية تحفظ قصته.",
    icon: Camera,
    isFinal: false,
  },
  {
    id: "02",
    title: "حفظ الذاكرة",
    subtitle: "ما يبقى بعد الغياب",
    description: "توثيق الوجوه والحكايات والذكريات التي تبقى مرتبطة بالأرض، حتى عندما يبتعد الإنسان عنها.",
    icon: BookOpen,
    isFinal: false,
  },
  {
    id: "03",
    title: "إبراز التضحية",
    subtitle: "الأرض التي تحمل آثار أهلها",
    description: "إظهار معنى التضحية والانتماء من خلال شهادات الأهالي، وخصوصًا الأمهات، وربط الإنسان بالأرض التي قدّم من أجلها الكثير.",
    icon: Flower2,
    isFinal: false,
  },
  {
    id: "04",
    title: "ترسيخ معنى العودة",
    subtitle: "من الغياب إلى الرجوع",
    description: "الوصول بالحكاية إلى فكرة أن الابتعاد لا يعني النهاية، وأن العلاقة بالأرض تبقى أقوى من المسافة.",
    icon: RotateCcw,
    isFinal: true,
  }
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export function OrderTracking() {
  return (
    <div className="w-full max-w-2xl mx-auto font-body py-8 md:py-16 relative" dir="rtl">
      
      {/* Background Vertical Line */}
      <div className="absolute right-7 md:right-11 top-12 bottom-12 w-[2px] bg-accent-gold/10 z-0"></div>
      
      {/* Animated Connecting Line */}
      <motion.div 
        className="absolute right-7 md:right-11 top-12 bottom-12 w-[2px] bg-gradient-to-b from-accent-gold/40 via-accent-gold/40 to-accent-red origin-top z-10"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 2.5, ease: "easeInOut" }}
      />

      <div className="flex flex-col gap-12 relative z-20">
        {timelineData.map((item, index) => {
          const Icon = item.icon;
          
          return (
            <motion.div 
              key={item.id}
              className="flex items-start gap-6 group"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2 }}
            >
              {/* Marker Container */}
              <div className="relative shrink-0 flex flex-col items-center">
                {/* ID Watermark - Mobile positioned slightly differently to save space */}
                <span className={cn(
                  "absolute -right-8 -top-6 md:-right-12 md:-top-8 font-heading text-4xl md:text-6xl font-black select-none pointer-events-none transition-colors duration-500",
                  item.isFinal ? "text-accent-red/10 group-hover:text-accent-red/20" : "text-white/5 group-hover:text-white/10"
                )}>
                  {item.id}
                </span>

                <motion.div 
                  className={cn(
                    "w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center border-[3px] md:border-4 relative bg-deep-green z-20 transition-all duration-300",
                    item.isFinal 
                      ? "border-accent-red shadow-[0_0_20px_rgba(155,34,38,0.2)] group-hover:shadow-[0_0_30px_rgba(155,34,38,0.4)]" 
                      : "border-deep-green group-hover:border-accent-gold/30"
                  )}
                  whileHover={{ scale: 1.05 }}
                >
                  {item.isFinal && (
                    <div className="absolute inset-0 rounded-full border border-accent-red/50 animate-ping opacity-50" style={{ animationDuration: '3s' }} />
                  )}
                  <Icon className={cn(
                    "w-5 h-5 md:w-6 md:h-6 transition-colors duration-300", 
                    item.isFinal ? "text-accent-red" : "text-accent-gold group-hover:text-primary-bg"
                  )} strokeWidth={1.5} />
                </motion.div>
              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-1.5 pt-1 md:pt-2 w-full pr-2 md:pr-4">
                <h3 className={cn(
                  "font-heading text-xl md:text-2xl font-bold transition-colors duration-300",
                  item.isFinal ? "text-accent-red" : "text-primary-bg group-hover:text-primary-bg"
                )}>
                  {item.title}
                </h3>
                <span className="font-body text-sm md:text-base text-accent-gold/70 tracking-wide">
                  {item.subtitle}
                </span>
                <p className="font-body text-base md:text-lg leading-relaxed text-primary-bg/70 mt-2 font-light group-hover:text-primary-bg/90 transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
