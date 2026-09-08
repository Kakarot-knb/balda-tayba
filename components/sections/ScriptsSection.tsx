'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const introText = `خَمْسُونَ مَرَّةً.. تَنَفَّسَ بِطِيبِكِ الوَحْيُ المُبِين!
فَكُنْتِ فِي كِتَابِ اللَّهِ صَدَى {الكَلِمَةِ الطَّيِّبَة}..
وَجِذْعَ {الشَّجَرَةِ الطَّيِّبَة}..وَمَلَاذَ {المَسَاكِنِ الطَّيِّبَة}.
وَأَبَى التَّنْزِيلُ إِلَّا أَنْ يُنْصِفَ أَهْلَكِ الأَطْهَار.. لِيَحْسِمَ هُوِيَّتَكِ بِحُجَّةِ القَهَّار: {وَالطَّيِّبَاتُ لِلطَّيِّبِينَ}.
نُحَلِّقُ فِي مَدَارِكِ.. فَنَسْتَسْقِي مِنْ «عَيْنِكِ» مَاءَ الخُلُود.. وَنُبْصِرُ فِي «عُمْرَتِكِ» صَرْحَ الجُدُود..
وَيَنْبِضُ «مَشْرُوعُكِ» بِشِرْيَانِ الوُجُود.. يَسْتَلُّ مِنْ نَهْرِ "اللِّيطَانِي" رُوَاءَهُ، لِيُغَذِّيَ ثَغْرَ القُرَى وَيَرْوِيَ الصُّمُود.
ثُمَّ نَهْوِي إِلَى سُرَّةِ المَيْدَان.. لِنَكْتَشِفَ سِرَّ التُّرَابِ: شَقَائِقَ النُّعْمَان. كَذَبَتْ أُسْطُورَةٌ زَعَمَتْ أَنَّهَا نَبَتَتْ مِنْ دَمْعِ "عِشْتَارَ" حُزْنًا عَلَى "أَدُونِيس".. وَصَدَقَتْ أَرْضٌ عَجَنَتْهَا بِدِمَاءِ رِجَالٍ؛ زُفُّوا لِلْمَنَايَا زَفَافَ عَرِيس!
فَلَوْنُهَا مِنْ نَزْفِ الوَرِيدِ اكْتَسَى.. وَعِطْرُهَا مِنْ أَنْفَاسِ الشَّهِيدِ احْتَسَى.
فَلَمَّا دَانَتِ الرُّؤْيَا مِنْ سِرِّهَا المَصْقُول.. أَسْدَلَ المَوْتُ سِتَارَه.. لِيُبْعَثَ مِنْ جَوْفِ العَتْمَةِ، فَجْرُ الأُصُول!`;

const outroText = `«فَبِيَدِ اللَّهِ يَسْقُط».. وَمَا سَقَطَ فِي كَفِّ الإِلَهِ فَقَدْ عَرَج.. وَمَا ضَاقَتْ حَلَقَاتُ الخَطْبِ إِلَّا أَذِنَ اللَّهُ بِالفَرَج!
مِنْ وَجَعِ النُّزُوحِ، وَغُرْبَةِ الدِّيَار الدَّامِيَة.. طَارَتْ وَدِيعَةُ النَّحْرِ، قَذِيفَةً حَامِيَة.
بَتْلَةٌ.. خَفَّ فِي عَيْنِ العِدَا مِيزَانُهَا.. وَثَقُلَ فِي سَاحِ الرَّدَى سُلْطَانُهَا! تَهْوِي عَلَى فُولَاذِ المُسْتَكْبِرِينَ فَتَصْهَرُه.. وَتَدُكُّ عُنْجُهِيَّةَ المِيرْكَافَا فَتَقْهَرُه. لِتَصْدَعَ فُوَّهَاتُ السَّمَاءِ بِقَوْلِ مَنْ حَطَّمَ الطُّغَاة: {وَمَا رَمَيْتَ إِذْ رَمَيْتَ وَلَـٰكِنَّ اللَّهَ رَمَىٰ}.
أَرْضُنَا تَلْفِظُ الغَاصِبَ كَمَا يَلْفِظُ اليَمُّ خَبَثَه.. وَتَحْتَضِنُ دِمَاءَنَا كَمَا يَحْتَضِنُ القَلْبُ نَبْضَه.
وَلَئِنْ سَاوَى العَدُوُّ مَعَالِمَنَا بِالتُّرَاب.. وَلَمْ يُبْقِ حَجَرًا عَلَى حَجَرٍ فِي تِلْكَ الرِّهَاب..
سَنَعُودُ إِلَيْهَا! فَنَحْنُ لِجَدْبِهَا المَطَر.. وَنَحْنُ فِي عُرُوقِهَا الشَّجَر!
خُطَانَا إِلَيْكِ مَقْضِيَّة.. وَحُقُوقُنَا فِيكِ حَتْمِيَّة.
عَائِدُونَ قَوَافِلَ نُور.. سَادَةً نَبْنِي القُصُور.. أَوْ شُهَدَاءَ نُعَانِقُ القُبُور.
لِتَتَنَفَّسَ الأَرْضُ نَصْرَهَا، بَعْدَ مَخَاضِهَا العَسِير.. وَتُتَوَّجَ رُكَامَاتُهَا بِآيَةِ المَصِير: {بَلْدَةٌ طَيِّبَةٌ وَرَبٌّ غَفُورٌ}.`;

const PAPER_TEXTURE = "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.06'/%3E%3C/svg%3E\")";

export default function ScriptsSection() {
  const [activeModal, setActiveModal] = useState<'intro' | 'outro' | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeModal]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveModal(null);
    };
    if (activeModal) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModal]);

  return (
    <section id="voice-scripts" className="w-full py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-12 bg-surface overflow-hidden border-t border-text-secondary/5">
      <div className="container mx-auto max-w-5xl text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-16 flex flex-col items-center gap-6"
        >
          <h2 className="font-heading text-[clamp(2.5rem,6vw,4rem)] md:text-5xl lg:text-6xl text-primary-text font-bold">
            التعليق الصوتي
          </h2>
          <div className="w-12 h-[1px] bg-accent-red/50"></div>
          <h3 className="font-heading text-xl md:text-2xl lg:text-3xl text-text-secondary font-light">
            بصوت الحاج سهيل دياب
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 max-w-4xl mx-auto">
          
          {/* Intro Archival Document Trigger */}
          <motion.button
            onClick={() => setActiveModal('intro')}
            className="group relative flex flex-col items-start w-full text-right transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {/* Folder Tab */}
            <div className="bg-[#EAE5D9] px-4 py-2 rounded-t-sm border border-b-0 border-[#D5CFC1] ml-4 flex items-center gap-4">
              <span className="font-mono text-xs text-[#2C2C2A]/60 tracking-wider">REF: DOC-INT-001</span>
              <div className="w-2 h-2 rounded-full bg-accent-red/70"></div>
            </div>
            
            {/* Folder Body */}
            <div 
              className="w-full bg-[#F9F8F4] p-8 md:p-10 rounded-sm border border-[#D5CFC1] shadow-sm relative overflow-hidden"
              style={{ backgroundImage: PAPER_TEXTURE }}
            >
              {/* Decorative tape/binding line */}
              <div className="absolute top-0 bottom-0 right-4 w-[1px] bg-[#2C2C2A]/10 border-l border-white/50"></div>
              
              <div className="mr-8 flex flex-col gap-6">
                <div>
                  <span className="font-mono text-xs text-[#2C2C2A]/50 tracking-widest block mb-2">TYPE: SCRIPT / INTRO</span>
                  <h3 className="font-heading text-3xl md:text-4xl text-[#2C2C2A] font-bold group-hover:text-accent-red transition-colors duration-300">
                    الإنترو
                  </h3>
                </div>
                
                <div className="w-full h-[1px] bg-[#2C2C2A]/10"></div>
                
                <p className="font-body text-sm md:text-base text-[#2C2C2A]/70 line-clamp-2 leading-relaxed">
                  خَمْسُونَ مَرَّةً.. تَنَفَّسَ بِطِيبِكِ الوَحْيُ المُبِين! فَكُنْتِ فِي كِتَابِ اللَّهِ صَدَى...
                </p>
                
                <span className="font-heading text-sm text-accent-red/80 underline underline-offset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  فتح الوثيقة
                </span>
              </div>
            </div>
          </motion.button>

          {/* Outro Archival Document Trigger */}
          <motion.button
            onClick={() => setActiveModal('outro')}
            className="group relative flex flex-col items-start w-full text-right transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Folder Tab */}
            <div className="bg-[#EAE5D9] px-4 py-2 rounded-t-sm border border-b-0 border-[#D5CFC1] ml-4 flex items-center gap-4">
              <span className="font-mono text-xs text-[#2C2C2A]/60 tracking-wider">REF: DOC-OUT-002</span>
              <div className="w-2 h-2 rounded-full bg-text-secondary/50"></div>
            </div>
            
            {/* Folder Body */}
            <div 
              className="w-full bg-[#F9F8F4] p-8 md:p-10 rounded-sm border border-[#D5CFC1] shadow-sm relative overflow-hidden"
              style={{ backgroundImage: PAPER_TEXTURE }}
            >
              {/* Decorative tape/binding line */}
              <div className="absolute top-0 bottom-0 right-4 w-[1px] bg-[#2C2C2A]/10 border-l border-white/50"></div>
              
              <div className="mr-8 flex flex-col gap-6">
                <div>
                  <span className="font-mono text-xs text-[#2C2C2A]/50 tracking-widest block mb-2">TYPE: SCRIPT / OUTRO</span>
                  <h3 className="font-heading text-3xl md:text-4xl text-[#2C2C2A] font-bold group-hover:text-accent-red transition-colors duration-300">
                    الأوترو
                  </h3>
                </div>
                
                <div className="w-full h-[1px] bg-[#2C2C2A]/10"></div>
                
                <p className="font-body text-sm md:text-base text-[#2C2C2A]/70 line-clamp-2 leading-relaxed">
                  «فَبِيَدِ اللَّهِ يَسْقُط».. وَمَا سَقَطَ فِي كَفِّ الإِلَهِ فَقَدْ عَرَج.. وَمَا ضَاقَتْ...
                </p>

                <span className="font-heading text-sm text-accent-red/80 underline underline-offset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  فتح الوثيقة
                </span>
              </div>
            </div>
          </motion.button>

        </div>
      </div>

      {/* Archival Modal */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-8 lg:p-12 overflow-hidden">
            {/* Dark Cinematic Backdrop */}
            <motion.div 
              className="absolute inset-0 bg-deep-green/90 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => setActiveModal(null)}
            />
            
            {/* The Document */}
            <motion.div
              className="relative w-full max-w-4xl max-h-[calc(100svh-1rem)] md:max-h-[calc(100svh-4rem)] overflow-y-auto rounded-sm shadow-2xl flex flex-col"
              style={{ 
                backgroundColor: '#F4F1EA',
                backgroundImage: PAPER_TEXTURE,
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(0,0,0,0.05)'
              }}
              initial={{ opacity: 0, y: 100, rotateX: 5 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: 40, scale: 0.98 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              
              {/* Archival Header / Metadata */}
              <div className="sticky top-0 bg-[#F4F1EA]/95 backdrop-blur-md border-b border-[#2C2C2A]/10 px-4 md:px-6 py-4 flex justify-between items-center z-50">
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-xs md:text-sm text-[#2C2C2A]/50 tracking-widest uppercase">
                    Archive // {activeModal === 'intro' ? 'DOC-INT-001' : 'DOC-OUT-002'}
                  </span>
                  <span className="font-mono text-[10px] md:text-xs text-[#2C2C2A]/40 uppercase hidden sm:block">
                    Voice: S. Diab | Status: Final | 2024
                  </span>
                </div>
                
                {/* Stamp-like Close Button */}
                <button 
                  onClick={() => setActiveModal(null)}
                  className="font-heading text-xs md:text-sm text-[#2C2C2A]/60 hover:text-accent-red border border-[#2C2C2A]/20 hover:border-accent-red px-3 py-1 rounded-sm transition-colors flex items-center gap-2 flex-shrink-0"
                  aria-label="إغلاق الوثيقة"
                >
                  إغلاق
                </button>
              </div>

              {/* The Written Text */}
              <div 
                dir="rtl" 
                className="px-4 py-10 md:px-16 lg:px-24 md:py-16 flex-grow"
              >
                <div className="max-w-3xl mx-auto">
                  {/* Subtle red line indicator */}
                  <div className="w-16 h-[2px] bg-accent-red/60 mb-8 md:mb-12"></div>
                  
                  <h3 className="font-heading text-3xl md:text-5xl font-bold text-[#2C2C2A] mb-8 md:mb-12">
                    {activeModal === 'intro' ? 'الإنترو' : 'الأوترو'}
                  </h3>

                  <div className="font-body text-lg md:text-2xl lg:text-3xl leading-loose text-[#2C2C2A]/90 font-medium whitespace-pre-wrap">
                    {activeModal === 'intro' ? introText : outroText}
                  </div>
                  
                  {/* End of document stamp */}
                  <div className="mt-16 md:mt-20 flex justify-end opacity-40 mix-blend-multiply grayscale mb-8 md:mb-0">
                     <div className="border-4 border-[#2C2C2A] p-2 rotate-[-5deg]">
                       <span className="font-mono text-lg md:text-xl text-[#2C2C2A] font-bold tracking-widest uppercase">END OF SCRIPT</span>
                     </div>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
