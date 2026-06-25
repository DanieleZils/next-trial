"use client";

import Image from "next/image";
import VoH from "/public/VoH.jpg";
import { useEffect, useRef, useState } from "react";

function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <p
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-[900ms] ease-out ${
        visible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-8 blur-[2px]"
      }`}
    >
      {children}
    </p>
  );
}

export default function About() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="relative w-full bg-background pt-20">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Portrait — fixed on desktop */}
        <div className="relative h-72 md:h-auto">
          <div className="relative h-72 md:fixed md:top-20 md:left-0 md:h-[calc(100vh-5rem)] md:w-1/2">
            <Image
              src={VoH}
              alt="Becca Kasdan performing"
              fill
              quality={85}
              priority
              className="object-cover object-top"
            />
            {/* Scroll invitation */}
            <div
              className={`hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 transition-opacity duration-700 ${
                scrolled ? "opacity-0" : "opacity-100"
              }`}
            >
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/90">
                Scroll
              </span>
              <span className="flex h-9 w-5 items-start justify-center rounded-full border border-white/70 p-1">
                <span className="h-2 w-1 animate-bounce rounded-full bg-white/90" />
              </span>
            </div>
          </div>
        </div>

        {/* Biography text */}
        <div className="px-6 py-14 md:px-14 lg:px-20 md:py-24">
          <Reveal>
            <span className="block text-[11px] uppercase tracking-[0.3em] text-primary mb-4">
              Biography
            </span>
          </Reveal>
          <Reveal delay={100}>
            <span className="block font-serif text-4xl md:text-5xl font-medium leading-tight text-balance mb-10 text-foreground">
              A life devoted to the violin, teaching, and community.
            </span>
          </Reveal>

          <div className="max-w-2xl space-y-6 text-sm md:text-base leading-relaxed text-muted-foreground">
            <Reveal>
              Becca Kasdan is currently a Teaching Associate at Brown University and holds a Violin Faculty
              position at New England Conservatory Preparatory/Expanded Education. Dr. Kasdan teaches
              applied violin lessons and coaches chamber music for undergraduate and graduate students at
              Brown University and pre-college lessons to violin students at NEC. Becca Kasdan is also an
              active freelancer in Rhode Island and Boston performing with groups such as the Rhode Island
              Philharmonic, the Rhode Island Civic Chorale, The Orchestra on the Hill, among others. During
              the summers, Becca is a faculty member at the Easton Chamber Music Festival and the Rhode
              Island Philharmonic Summer Chamber Music Workshop.
            </Reveal>
            <Reveal>
              Becca received her Doctor of Musical Arts in Violin Performance at the University of Illinois at
              Urbana-Champaign where she studied with Meg Freivogel of the Jupiter String Quartet and
              served as the Violin Teaching Assistant. Previously, Becca studied with Violaine Melancon at the
              Schulich School of Music at McGill University and the Peabody Institute of Johns Hopkins
              University where she received her MM and BM in Violin Performance.
            </Reveal>
            <Reveal>
              Deeply passionate about chamber music, Becca has worked closely with members of the
              Juilliard, Jupiter, Emerson, Chiara, Orion, Ying, Brentano, and Borromeo String Quartets among
              others. She has performed for several distinguished artists including Midori Goto, Bruno Eicher
              (Assistant Concertmaster MET), Axel Strauss, and Stefan Milenkovich. Becca has also been a
              Violin Fellow at several summer music festivals including the Bowdoin International Music
              Festival, Manchester Music Festival, and the Next Festival of Emerging Artists. As a chamber
              musician and orchestral player, she has collaborated with many esteemed musicians including
              David Ying, Michael Kannen, Yael Weiss, Benjamin Zander, David Zinman, and Leon Fleischer.
              Dr. Kasdan frequently performs U.S. and world premieres of contemporary works and enjoys
              collaborating with composers.
            </Reveal>
            <Reveal>
              A passionate and dedicated teacher, Becca has presented masterclasses at the Paul Rolland
              String Pedagogy Workshop, American String Teacher Association&apos;s National Conference,
              Tonebase Violin, Virginia Tech, Vanderbilt University Medical Center, DePauw University School
              of Music, and the University of Illinois Urbana Champaign. Previously, Becca was a Resident
              Musician at Community MusicWorks in Providence, RI where she performed with the
              MusicWorks Collective, organized community initiatives, and taught violin lessons. In Illinois, Dr.
              Kasdan was a Core Teaching Artist with Apollo&apos;s Fire- the Cleveland Baroque Orchestra in
              Matteson, IL and Coordinator and Violin Instructor for the Illinois Community Music Academy.
              Becca was also a violin faculty member at Luzerne Summer Music Festival&apos;s Senior Session in
              New York.
            </Reveal>
            <Reveal>
              In 2023, Becca collaborated with the international exhibit Violins of Hope to present her
              Doctoral Lecture Recital, Imagining New Possibilities for 21st-Century Classical Music
              Performance: Drawing Inspiration from the Berlin Cabarets of the Weimar Republic. Joined by
              co-founder Avshalom Weinstein, Becca performed a recital on violins restored and recovered
              from the Holocaust. The concert featured dancers, musicians, visual artists, and puppeteers
              from seven countries and a performance of two world premieres. In addition, Becca is
              extremely devoted to bringing music into the community. She served as the first co-director of
              the Peabody String Sinfonia, a conductor-less string ensemble at Peabody Conservatory that
              performs exclusively at community venues. Becca has also been on a discussion panel with
              Midori discussing community engagement and outreach in the 21st century.
            </Reveal>
            <Reveal>
              Currently, Becca is on the Board of Trustees for the Volunteer Musicians for the Arts in Boston,
              MA where she received a Community Leadership Award in 2021. Becca Kasdan is the 2018
              recipient of the Johns Hopkins President&apos;s Commendation for Achievement in the Arts, the
              Grace Clagett Ranney Prize in Chamber Music, the String Achievement Award from the
              University of Illinois Urbana-Champaign, and is a member of the Pi Kappa Lambda and Phi
              Kappa Phi&apos;s prestigious music guilds.
            </Reveal>
          </div>
        </div>
      </div>
    </main>
  );
}
