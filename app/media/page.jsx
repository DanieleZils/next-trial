'use client';

import YouTube from 'react-youtube';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function Media() {
  const contentRef = useRef(null);

  useEffect(() => {
    const contentEl = contentRef.current;
    if (contentEl) {
      contentEl.classList.remove('opacity-0');
    }
  }, []);

  const videoOptions = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  const videos = [
    { id: 'IzPNdBq1H0I', title: 'Dora Pejačević : Sonata in D Major, Op. 26 "Spring"' },
    { id: '9X0nj4oUMs4', title: 'Guillaume Lekeu : Violin Sonata in G Major' },
    { id: 'axwCvc7PP1Y', title: 'Ravel : Violin Sonata No.1 (Posthumous)' },
    { id: 'm0Xpb_Yj0YQ', title: 'Amanda Maier : Violin Concerto in D Minor' },
  ];

  return (
    <main className="relative w-full min-h-screen bg-background">
      {/* Banner */}
      <section className="relative h-[55vh] md:h-[70vh] w-full">
        <Image
          src="/anothermedia.png"
          alt="Becca Kasdan"
          fill
          quality={90}
          sizes="100vw"
          priority
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-black/25" />
        <div className="absolute inset-x-0 bottom-0 px-6 pb-10 md:px-16 md:pb-16">
          <p className="text-[11px] uppercase tracking-[0.32em] text-white/70 mb-3">
            Listen &amp; Watch
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-medium text-white leading-none">
            Media
          </h1>
        </div>
      </section>

      {/* Video grid */}
      <section
        ref={contentRef}
        className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24 transition-opacity duration-[1500ms] opacity-0"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-14">
          {videos.map((video, index) => (
            <article key={index} className="group">
              <div className="relative aspect-video overflow-hidden bg-muted border border-border">
                <YouTube
                  videoId={video.id}
                  opts={videoOptions}
                  className="absolute inset-0 w-full h-full"
                  iframeClassName="w-full h-full"
                />
              </div>
              <div className="mt-5 flex items-baseline gap-4">
                <span className="font-serif text-xl text-primary/70">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h2 className="font-serif text-xl md:text-2xl leading-snug text-foreground">
                  {video.title}
                </h2>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
