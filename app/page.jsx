"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import homepic from "../public/homepic-2.jpg";
import homepicmobile from "../public/homepic-mobile.jpg";

export default function Home() {
  const contentRef = useRef(null);

  useEffect(() => {
    const contentEl = contentRef.current;
    if (contentEl) {
      contentEl.classList.remove("opacity-0");
    }
  }, []);

  return (
    <main className="relative w-full h-screen overflow-hidden">
      {/* Desktop portrait */}
      <Image
        src={homepic}
        alt="Becca Kasdan"
        fill
        priority
        className="hidden md:block object-cover object-top"
      />
      {/* Mobile portrait */}
      <Image
        src={homepicmobile}
        alt="Becca Kasdan"
        fill
        priority
        className="block md:hidden object-cover object-top"
      />

      {/* Legibility scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />

      {/* Caption */}
      <div
        ref={contentRef}
        className="absolute inset-x-0 bottom-0 px-6 pb-12 md:px-16 md:pb-20 transition-opacity duration-[1800ms] opacity-0"
      >
        <div className="max-w-xl">
          <p className="text-[11px] uppercase tracking-[0.32em] text-white/70 mb-3">
            Violinist
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-medium text-white text-balance leading-[0.95]">
            Becca Kasdan
          </h1>
          <p className="mt-5 text-sm md:text-base uppercase tracking-[0.22em] text-white/85">
            Performer
            <span className="mx-3 text-white/40">&middot;</span>
            Teacher
            <span className="mx-3 text-white/40">&middot;</span>
            Community Leader &amp; Activist
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/about"
              className="border border-white/70 text-white text-xs uppercase tracking-[0.18em] px-7 py-3 hover:bg-white hover:text-foreground transition-colors duration-300"
            >
              Biography
            </Link>
            <Link
              href="/upcoming-events"
              className="bg-primary text-primary-foreground text-xs uppercase tracking-[0.18em] px-7 py-3 hover:bg-primary/90 transition-colors duration-300"
            >
              Upcoming Events
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
