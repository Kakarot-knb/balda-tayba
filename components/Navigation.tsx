'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';

import Image from 'next/image';

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
  { name: 'فريق العمل', id: 'team' },
];

export default function Navigation() {
  const [isHidden, setIsHidden] = useState(false);
  const [isNavHovered, setIsNavHovered] = useState(false);
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
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-editorial px-4 pt-4 md:px-6 md:pt-6 pointer-events-none',
          isHidden && !isNavHovered && !mobileMenuOpen ? '-translate-y-full' : 'translate-y-0'
        )}
      >
        <div 
          onMouseEnter={() => setIsNavHovered(true)}
          onMouseLeave={() => setIsNavHovered(false)}
          className={clsx(
            "mx-auto w-full lg:w-fit px-4 py-2.5 md:px-6 md:py-3 flex justify-between lg:justify-center items-center pointer-events-auto rounded-full transition-colors duration-500",
            mobileMenuOpen ? 'bg-transparent' : 'bg-deep-green shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/5'
          )}
        >
          
          {/* Mobile Logo */}
          <motion.div 
            className="lg:hidden relative h-7 w-28 md:h-8 md:w-32 mr-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <Image 
              src="/images/headerlogo.png" 
              alt="بلدةٌ طيبة Logo" 
              fill 
              className="object-contain object-right"
              priority
            />
          </motion.div>
          
          {/* Desktop Nav */}
          <motion.nav 
            className="hidden lg:flex flex-nowrap justify-center items-center gap-2 xl:gap-4 max-w-none mx-auto w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {navLinks.map((link) => (
              <motion.button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="font-body text-xs lg:text-sm xl:text-base font-medium text-white hover:bg-white/10 px-2 lg:px-3 py-1.5 rounded-lg transition-colors duration-300 whitespace-nowrap"
              >
                {link.name}
              </motion.button>
            ))}
          </motion.nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden text-white hover:bg-white/10 rounded-lg z-50 p-2 -mr-2 transition-colors duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="القائمة"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {mobileMenuOpen ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
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
            className="fixed inset-0 z-40 bg-deep-green text-white overflow-y-auto overflow-x-hidden"
          >
            <div className="min-h-full flex flex-col justify-center px-6 py-12 md:py-24 md:px-12 w-full max-w-full">
              <nav className="flex flex-col gap-2 w-full max-w-sm mx-auto">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.04, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    onClick={() => scrollTo(link.id)}
                    className="text-right text-2xl md:text-3xl lg:text-4xl font-heading text-white hover:bg-white/10 transition-colors w-full py-4 px-4 rounded border-b border-white/10 min-h-[56px] flex items-center justify-end"
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
