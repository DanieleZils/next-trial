'use client';
import YouTube from 'react-youtube';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

function useInView(options) {
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
      { threshold: 0.2, rootMargin: '0px 0px -12% 0px', ...options }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, shown];
}

function Reveal({ children, className = '', delay = 0 }) {
  const [ref, shown] = useInView();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out will-change-transform ${
        shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
    >
      {children}
    </div>
  );
}

function RevealImage({ src, alt, className = '', ratio = 'aspect-[4/3]', delay = 0, sizes, quality = 85 }) {
  const [ref, shown] = useInView({ threshold: 0.25 });
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`relative ${ratio} w-full overflow-hidden border border-border bg-muted transition-opacity duration-700 ease-out ${
        shown ? 'opacity-100' : 'opacity-0'
      } ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        quality={quality}
        sizes={sizes}
        className={`object-cover object-center transition-transform duration-[1400ms] ease-out will-change-transform ${
          shown ? 'scale-100' : 'scale-[1.06]'
        }`}
      />
    </div>
  );
}

export default function VohCabaretConcert() {
  const videoOptions = {
    height: '100%',
    width: '100%',
    title: "Becca Kasdan's Doctoral Recital",
    playerVars: { autoplay: 0 },
  };

  const videoId = 'Wiv3d5C9Ng4';

  return (
    <main className="relative bg-background min-h-screen">
      {/* Hero */}
      <section className="relative mt-20 h-[calc(60vh-5rem)] md:h-[calc(85vh-5rem)] w-full overflow-hidden">
        <Image
          src="/vohprincipal.jpg"
          alt="Violins of Hope"
          fill
          quality={90}
          sizes="100vw"
          priority
          className="object-cover object-center animate-[heroZoom_2000ms_ease-out_forwards]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-black/30" />
        <div className="absolute inset-x-0 bottom-0 px-6 pb-12 md:px-16 md:pb-20 max-w-4xl">
          <p className="text-[11px] uppercase tracking-[0.32em] text-white/70 mb-4 animate-[fadeUp_900ms_ease-out_200ms_both]">
            Violins of Hope
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-medium text-white text-balance leading-tight animate-[fadeUp_1000ms_ease-out_400ms_both]">
            Becca Kasdan&apos;s Cabaret Concert
          </h1>
        </div>
      </section>

      {/* Recital + flipbook */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
        <Reveal className="flex flex-col">
          <p className="text-[11px] uppercase tracking-[0.2em] text-primary mb-4">Doctoral Recital</p>
          <div className="aspect-video w-full overflow-hidden border border-border bg-muted">
            <YouTube videoId={videoId} opts={videoOptions} className="w-full h-full" iframeClassName="w-full h-full" />
          </div>
        </Reveal>
        <Reveal className="flex flex-col" delay={120}>
          <p className="text-[11px] uppercase tracking-[0.2em] text-primary mb-4">Program Booklet</p>
          <iframe
            src="https://heyzine.com/flip-book/9b76a89d4b.html"
            title="Violins of Hope"
            className="w-full aspect-video border border-border bg-muted"
          />
          <a href="https://heyzine.com/flip-book/9b76a89d4b.html" target="_blank" rel="noreferrer" className="mt-5">
            <button className="bg-foreground text-background text-xs uppercase tracking-[0.18em] px-7 py-3 hover:bg-foreground/90 transition-colors duration-300">
              View Full Screen
            </button>
          </a>
        </Reveal>
      </section>

      <div className="mx-auto w-24 border-t border-border" />

      {/* Concept */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <Reveal>
          <h2 className="font-serif text-3xl md:text-5xl font-medium text-balance leading-tight mb-12">
            Imagining New Possibilities for Classical Music Performance in the 21st-Century: Drawing Inspiration
            from the Berlin Cabarets of the Weimar Republic
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
          <div className="space-y-8">
            <RevealImage src="/ensemble.jpg" alt="The ensemble" sizes="(max-width:768px) 100vw, 50vw" />
            <Reveal>
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                During my concert, I combined the most successful elements of the Berlin cabarets to reimagine an
                innovative format and performance practice for classical music concerts in the 21st-century that
                celebrates inclusivity and creativity in the arts. I collaborated with puppeteers, dancers, visual
                artists, and musicians from Israel, Poland, Hungary, Norway, Austria, England, and the United States
                to create a truly memorable and internationally inclusive performance that highlighted performer-
                audience interaction, interdisciplinary collaboration, and community engagement. This performance
                also featured two world premieres: John Carmichael&apos;s &ldquo;Puppet Show&rdquo; for violin and
                piano and a special arrangement of two Theresienstadt cabaret songs by Ronen Nissan.
              </p>
            </Reveal>
          </div>

          <div className="space-y-8">
            <Reveal delay={120}>
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                On April 23, 2023 I presented a Violins of Hope Cabaret Concert, the culmination of my Doctoral
                performance and research. I performed this recital at the Spurlock Museum of World Cultures in
                Urbana, Illinois in collaboration with Avshalom Weinstein, co-founder of Violins of Hope. As featured
                in the PBS Documentary &mdash; Strings of the Holocaust, Violins of Hope is a collection of instruments
                recovered from the Holocaust and painstakingly restored by Amnon Weinstein and Avshi Weinstein in
                Israel. The instruments have heartbreaking stories of being performed in concentration camps, thrown
                off cattle cars, buried in the ground, and etched with Swastikas. An unprecedented art form, the Berlin
                Cabarets of the Weimar Republic sought to break down traditional barriers by creating improvisatory
                and impromptu programs that emphasized artistic creativity, freedom, casualness, and acceptance and
                valued collaboration between a variety of different art forms.
              </p>
            </Reveal>
            <RevealImage src="/beccarecital.jpg" alt="Becca Kasdan recital" sizes="(max-width:768px) 100vw, 50vw" delay={120} />
            <Reveal delay={200}>
              <a href="https://www.violins-of-hope.com/" target="_blank" rel="noreferrer">
                <button className="bg-primary text-primary-foreground text-xs uppercase tracking-[0.18em] px-7 py-3 hover:bg-primary/90 transition-colors duration-300">
                  Violins of Hope
                </button>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Full-bleed image */}
      <section className="relative w-full h-72 md:h-[80vh] overflow-hidden">
        <Image src="/ballet.jpg" alt="Violins of Hope ballet" fill quality={90} sizes="100vw" className="object-cover object-center" />
      </section>

      {/* Testimonials */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <Reveal className="text-center mb-14">
          <p className="text-[11px] uppercase tracking-[0.3em] text-primary mb-4">In Their Words</p>
          <h2 className="font-serif text-4xl md:text-6xl font-medium">Testimonials</h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">
          <figure className="space-y-6">
            <RevealImage src="/vohsmile.jpg" alt="Violins of Hope" sizes="(max-width:768px) 100vw, 50vw" quality={80} />
            <Reveal>
              <blockquote className="font-serif text-xl md:text-2xl leading-snug text-foreground text-balance">
                &ldquo;This has been the most extraordinary lecture/recital I have ever had the privilege to experience.
                The presentation and performance of your work has truly changed what I know about and how I absorb
                cabaret music.&rdquo;
              </blockquote>
            </Reveal>
          </figure>

          <figure className="space-y-6">
            <Reveal delay={120}>
              <blockquote className="font-serif text-xl md:text-2xl leading-snug text-foreground text-balance">
                &ldquo;This performance was the most impressive community-facing performance I have seen. It was the
                best of community engagement. Her integration of other art forms (dance, puppetry, and visual art) with
                musical performance reflected deep understanding of all these art forms. Her educational talks about
                Weimar and cabaret help us all understand what can happen when people at the margins flourish as well
                as what happens when their rights, and existence, are threatened. What better education to accompany
                these Violins of Hope?&rdquo;
                <footer className="block mt-4 text-sm not-italic uppercase tracking-[0.16em] text-muted-foreground">
                  &mdash; University of Illinois Former Dean
                </footer>
              </blockquote>
            </Reveal>
            <RevealImage src="/end.jpg" alt="Violins of Hope" sizes="(max-width:768px) 100vw, 50vw" quality={80} delay={120} />
          </figure>
        </div>
      </section>
    </main>
  );
}
