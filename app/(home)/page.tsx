import Link from "next/link";

export default function AliSawlyHome() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center px-6 bg-primary-bg text-primary-text relative">
      {/* Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Ali Sawly",
            alternateName: "علي صولي",
            url: "https://alisawly.com/",
            jobTitle: "Filmmaker / Director",
            description: "Official professional portfolio of Lebanese filmmaker and director Ali Sawly (علي صولي).",
            sameAs: [
              "https://www.instagram.com/_ali_sawly/"
            ],
          }),
        }}
      />

      {/* Central Identity */}
      <div className="flex flex-col items-center justify-center flex-grow text-center mt-12 md:mt-0">
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-light tracking-wide uppercase mb-4 md:mb-6 flex flex-col items-center gap-2 md:gap-4">
          <span>Ali Sawly</span>
          <span className="text-xl md:text-3xl font-medium tracking-normal text-primary-text/40">علي صولي</span>
        </h1>
        <p className="font-body text-xs md:text-sm lg:text-base tracking-[0.2em] md:tracking-[0.3em] text-text-secondary uppercase mb-16 md:mb-24">
          Filmmaker & Director
        </p>
        
        {/* Navigation Links */}
        <nav className="flex flex-col md:flex-row items-center gap-8 md:gap-16 text-xs md:text-sm tracking-widest uppercase">
          {/* Instagram */}
          <a 
            href="https://www.instagram.com/_ali_sawly/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-primary-text transition-colors duration-500 pb-1"
          >
            Instagram
          </a>
          
          <Link 
            href="/baldatayba" 
            className="text-primary-text border-b border-primary-text/20 hover:border-primary-text transition-colors duration-500 pb-1"
          >
            بلدةٌ طيبة (Film)
          </Link>

          {/* WhatsApp */}
          <a 
            href="https://wa.me/96181374121" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-primary-text transition-colors duration-500 pb-1"
          >
            WhatsApp
          </a>
        </nav>
      </div>

      {/* Portfolio Indicator */}
      <div className="pb-12 opacity-40 flex flex-col items-center select-none pointer-events-none">
        <p className="font-heading text-[10px] md:text-xs tracking-[0.3em] uppercase mb-2">
          Portfolio
        </p>
        <p className="font-body text-[8px] md:text-[10px] tracking-widest uppercase text-text-secondary">
          Coming Soon
        </p>
      </div>
    </main>
  );
}
