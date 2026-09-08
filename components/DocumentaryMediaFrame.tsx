import React from 'react';
import clsx from 'clsx';

interface DocumentaryMediaFrameProps {
  children: React.ReactNode;
  className?: string;
  metadataTitle?: string;
  metadataSubtitle?: string;
}

export default function DocumentaryMediaFrame({
  children,
  className,
  metadataTitle,
  metadataSubtitle
}: DocumentaryMediaFrameProps) {
  return (
    <div className={clsx("w-full max-w-6xl mx-auto flex flex-col items-center", className)}>
      
      {/* Custom Premium Frame */}
      <div 
        className="relative w-full rounded-sm bg-[#2c1d18] shadow-2xl p-3 sm:p-4 md:p-5 lg:p-6"
        style={{
          backgroundImage: `
            linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(0,0,0,0.6) 100%),
            url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.15'/%3E%3C/svg%3E")
          `,
          boxShadow: `
            0 30px 60px -15px rgba(0,0,0,0.7),
            inset 0 0 0 1px #0a0504,
            inset 0 0 0 2px rgba(255,255,255,0.05),
            inset 0 0 20px rgba(0,0,0,0.9)
          `
        }}
      >
        {/* Inner Gold Rim */}
        <div 
          className="relative w-full h-full bg-deep-green overflow-hidden"
          style={{
            borderStyle: 'solid',
            borderWidth: 'clamp(2px, 0.6vw, 4px)',
            borderTopColor: '#d4af37',
            borderLeftColor: '#c5a017',
            borderRightColor: '#a67b00',
            borderBottomColor: '#8b6914',
            boxShadow: '0 0 0 1px #111, 0 0 15px rgba(0,0,0,0.8)'
          }}
        >
          {children}
          {/* Inner Drop Shadow for depth over the content */}
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_15px_rgba(0,0,0,0.6)] z-20" />
        </div>
      </div>

      {/* Optional Archival Metadata underneath the frame */}
      {(metadataTitle || metadataSubtitle) && (
        <div className="mt-6 flex flex-col items-center text-center gap-2">
          {metadataTitle && (
            <span className="font-heading text-xl md:text-2xl text-primary-text font-bold">{metadataTitle}</span>
          )}
          {metadataSubtitle && (
            <span className="font-body text-sm md:text-base text-text-secondary/80">{metadataSubtitle}</span>
          )}
        </div>
      )}
    </div>
  );
}
