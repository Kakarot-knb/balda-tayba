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
      
      <div 
        className="relative w-full rounded-sm bg-[#111111] shadow-2xl p-3 sm:p-4 md:p-5 lg:p-6"
        style={{
          backgroundImage: `
            linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(0,0,0,0.8) 100%),
            url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.15'/%3E%3C/svg%3E")
          `,
          boxShadow: `
            0 30px 60px -15px rgba(0,0,0,0.8),
            inset 0 0 0 1px rgba(255,255,255,0.08),
            inset 0 0 20px rgba(0,0,0,0.9)
          `
        }}
      >
        {/* Inner Content Wrapper */}
        <div className="relative w-full h-full overflow-hidden bg-black shadow-[inset_0_0_20px_rgba(0,0,0,0.8),0_0_0_1px_rgba(0,0,0,1)]">
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
