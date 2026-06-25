'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const videos = [
  { id: 'IzPNdBq1H0I', title: 'Dora Pejačević : Sonata in D Major, Op. 26 "Spring"' },
  { id: '9X0nj4oUMs4', title: 'Guillaume Lekeu : Violin Sonata in G Major' },
  { id: 'axwCvc7PP1Y', title: 'Ravel : Violin Sonata No.1 (Posthumous)' },
  { id: 'm0Xpb_Yj0YQ', title: 'Amanda Maier : Violin Concerto in D Minor' },
];

function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-[900ms] ease-out ${
        shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  );
}

function VideoCard({ video, index }) {
  const [active, setActive] = useState(false);

  return (
    <article className="group">
      <div className="relative aspect-video overflow-hidden bg-muted border border-border">
        {active ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerated-sensors; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setActive(true)}
            aria-label={`Play ${video.title}`}
            className="absolute inset-0 h-full w-full cursor-pointer"
          >
            <Image
              src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
              alt={video.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-black/35" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/70 bg-black/30 backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:border-primary">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="ml-1 h-6 w-6 text-white"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
          </button>
        )}
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
  );
}

export default function Media() {
  return (
    <main className="relative w-full min-h-screen bg-background">
      {/* Banner */}
      <section className="relative mt-20 h-[calc(55vh-5rem)] md:h-[calc(70vh-5rem)] w-full overflow-hidden">
        <Image
          src="/anothermedia.png"
          alt="Becca Kasdan"
          fill
          quality={90}
          sizes="100vw"
          priority
          className="object-cover object-top animate-[heroZoom_2000ms_ease-out_forwards]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-black/25" />
        <div className="absolute inset-x-0 bottom-0 px-6 pb-10 md:px-16 md:pb-16">
          <p className="text-[11px] uppercase tracking-[0.32em] text-white/70 mb-3 animate-[fadeUp_900ms_ease-out_200ms_both]">
            Listen &amp; Watch
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-medium text-white leading-none animate-[fadeUp_1000ms_ease-out_400ms_both]">
            Media
          </h1>
        </div>
      </section>

      {/* Video grid */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-14">
          {videos.map((video, index) => (
            <Reveal key={video.id} delay={(index % 2) * 120}>
              <VideoCard video={video} index={index} />
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
