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
      
      {/* Floral Frame from User Upload */}
      <div 
        className="relative w-full shadow-2xl bg-[#f8f5ee]"
        style={{
          borderStyle: 'solid',
          borderWidth: 'clamp(20px, 5vw, 60px)',
          borderImageSource: 'url("/images/floral-frame.png")',
          borderImageSlice: '18%', // Adjust slice based on typical frame thickness
          borderImageRepeat: 'stretch',
          boxShadow: '0 30px 60px -15px rgba(0,0,0,0.5), inset 0 0 20px rgba(0,0,0,0.5)'
        }}
      >
        {/* Inner shadow overlay for depth */}
        <div className="relative w-full h-full overflow-hidden">
          {children}
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_15px_rgba(0,0,0,0.3)] z-20" />
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
