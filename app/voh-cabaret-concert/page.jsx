'use client';
import YouTube from 'react-youtube';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function VohCabaretConcert() {
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
    title: "Becca Kasdan's Doctoral Recital",
    playerVars: { autoplay: 0 },
  };

  const videoId = 'Wiv3d5C9Ng4';

  return (
    <main
      ref={contentRef}
      className="relative bg-background min-h-screen transition-opacity duration-[1500ms] opacity-0"
    >
      {/* Hero */}
      <section className="relative h-[60vh] md:h-[85vh] w-full">
        <Image
          src="/vohprincipal.jpg"
          alt="Violins of Hope"
          fill
          quality={90}
          sizes="100vw"
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-black/30" />
        <div className="absolute inset-x-0 bottom-0 px-6 pb-12 md:px-16 md:pb-20 max-w-4xl">
          <p className="text-[11px] uppercase tracking-[0.32em] text-white/70 mb-4">Violins of Hope</p>
          <h1 className="font-serif text-4xl md:text-6xl font-medium text-white text-balance leading-tight">
            Becca Kasdan&apos;s Cabaret Concert
          </h1>
        </div>
      </section>

      {/* Recital + flipbook */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
        <div className="flex flex-col">
          <p className="text-[11px] uppercase tracking-[0.2em] text-primary mb-4">Doctoral Recital</p>
          <div className="aspect-video w-full overflow-hidden border border-border bg-muted">
            <YouTube videoId={videoId} opts={videoOptions} className="w-full h-full" iframeClassName="w-full h-full" />
          </div>
        </div>
        <div className="flex flex-col">
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
        </div>
      </section>

      <div className="mx-auto w-24 border-t border-border" />

      {/* Concept */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <h2 className="font-serif text-3xl md:text-5xl font-medium text-balance leading-tight mb-12">
          Imagining New Possibilities for Classical Music Performance in the 21st-Century: Drawing Inspiration
          from the Berlin Cabarets of the Weimar Republic
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
          <div className="space-y-8">
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-border">
              <Image src="/ensemble.jpg" alt="The ensemble" fill quality={85} sizes="(max-width:768px) 100vw, 50vw" className="object-cover object-center" />
            </div>
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
          </div>

          <div className="space-y-8">
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
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-border">
              <Image src="/beccarecital.jpg" alt="Becca Kasdan recital" fill quality={85} sizes="(max-width:768px) 100vw, 50vw" className="object-cover object-center" />
            </div>
            <a href="https://www.violins-of-hope.com/" target="_blank" rel="noreferrer">
              <button className="bg-primary text-primary-foreground text-xs uppercase tracking-[0.18em] px-7 py-3 hover:bg-primary/90 transition-colors duration-300">
                Violins of Hope
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Full-bleed image */}
      <section className="relative w-full h-72 md:h-[80vh]">
        <Image src="/ballet.jpg" alt="Violins of Hope ballet" fill quality={90} sizes="100vw" className="object-cover object-center" />
      </section>

      {/* Testimonials */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="text-center mb-14">
          <p className="text-[11px] uppercase tracking-[0.3em] text-primary mb-4">In Their Words</p>
          <h2 className="font-serif text-4xl md:text-6xl font-medium">Testimonials</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">
          <figure className="space-y-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-border">
              <Image src="/vohsmile.jpg" alt="Violins of Hope" fill quality={80} sizes="(max-width:768px) 100vw, 50vw" className="object-cover object-center" />
            </div>
            <blockquote className="font-serif text-xl md:text-2xl leading-snug text-foreground text-balance">
              &ldquo;This has been the most extraordinary lecture/recital I have ever had the privilege to experience.
              The presentation and performance of your work has truly changed what I know about and how I absorb
              cabaret music.&rdquo;
            </blockquote>
          </figure>

          <figure className="space-y-6">
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
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-border">
              <Image src="/end.jpg" alt="Violins of Hope" fill quality={80} sizes="(max-width:768px) 100vw, 50vw" className="object-cover object-center" />
            </div>
          </figure>
        </div>
      </section>
    </main>
  );
}
