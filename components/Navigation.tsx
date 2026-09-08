'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';

const navLinks = [
  { name: 'فكرة الفيلم', id: 'concept' },
  { name: 'الهدف', id: 'objective' },
  { name: 'الرحلة', id: 'journey' },
  { name: 'الرمزية', id: 'symbolism' },
  { name: 'الرؤية', id: 'vision' },
  { name: 'الصعوبات', id: 'challenges' },
  { name: 'الشخصيات', id: 'participants' },
  { name: 'التعليق والنصوص', id: 'voice-scripts' },
  { name: 'المعدات', id: 'equipment' },
  { name: 'الأسلوب', id: 'style' },
  { name: 'فريق العمل', id: 'team' },
];

export default function Navigation() {
  const [isHidden, setIsHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll lock for mobile menu
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY <= 50) {
        setIsHidden(false);
      } else {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsHidden(true);
        } else if (currentScrollY < lastScrollY) {
          setIsHidden(false);
        }
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-editorial py-6 md:py-8 pointer-events-none',
          isHidden && !mobileMenuOpen ? '-translate-y-full' : 'translate-y-0',
          mobileMenuOpen ? 'bg-transparent' : 'bg-gradient-to-b from-primary-bg via-primary-bg/90 to-transparent'
        )}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-end lg:justify-center items-center pointer-events-auto">
          
          {/* Desktop Nav */}
          <motion.nav 
            className="hidden lg:flex flex-wrap justify-center items-center gap-6 xl:gap-8 max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="font-body text-sm xl:text-base font-medium text-primary-text hover:text-accent-red transition-colors duration-300 whitespace-nowrap"
              >
                {link.name}
              </button>
            ))}
          </motion.nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden text-primary-text z-50 p-2 -mr-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="القائمة"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {mobileMenuOpen ? <X size={28} className="text-primary-bg" /> : <Menu size={28} />}
          </motion.button>
        </div>
      </header>

      {/* Mobile Menu Takeover */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0% 0% 100% 0%)' }}
            animate={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
            exit={{ opacity: 0, clipPath: 'inset(0% 0% 100% 0%)' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-deep-green text-primary-bg overflow-y-auto overflow-x-hidden"
          >
            <div className="min-h-full flex flex-col justify-center px-6 py-24 md:px-12 w-full max-w-full">
              <nav className="flex flex-col gap-2 w-full max-w-sm mx-auto">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.04, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    onClick={() => scrollTo(link.id)}
                    className="text-right text-2xl md:text-3xl lg:text-4xl font-heading text-primary-bg/90 hover:text-accent-red transition-colors w-full py-4 border-b border-primary-bg/10 min-h-[56px] flex items-center justify-end"
                  >
                    {link.name}
                  </motion.button>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
