import Image from "next/image";
import Link from "next/link";
import homepic from "../public/homepic-2.jpg";
import homepicmobile from "../public/homepic-mobile.jpg";

export default function Home() {
  return (
    <main className="relative w-full h-[calc(100vh-5rem)] mt-20 overflow-hidden bg-foreground">
      {/* Desktop portrait */}
      <Image
        src={homepic}
        alt="Becca Kasdan"
        fill
        priority
        sizes="100vw"
        className="hidden md:block object-cover object-top animate-[heroZoom_2400ms_ease-out_forwards]"
      />
      {/* Mobile portrait */}
      <Image
        src={homepicmobile}
        alt="Becca Kasdan"
        fill
        priority
        sizes="100vw"
        className="block md:hidden object-cover object-[center_18%] animate-[heroZoom_2400ms_ease-out_forwards]"
      />

      {/* Legibility scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />

      {/* Caption */}
      <div className="absolute inset-x-0 bottom-0 px-6 pb-12 md:px-16 md:pb-20">
        <div className="max-w-xl">
          <p className="text-[11px] uppercase tracking-[0.32em] text-white/70 mb-3 animate-[fadeUp_900ms_ease-out_300ms_both]">
            Violinist
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-medium text-white text-balance leading-[0.95] animate-[fadeUp_1000ms_ease-out_450ms_both]">
            Becca Kasdan
          </h1>
          <p className="mt-5 text-[9px] sm:text-xs md:text-base font-medium uppercase tracking-[0.04em] sm:tracking-[0.12em] md:tracking-[0.2em] text-white whitespace-nowrap animate-[fadeUp_1000ms_ease-out_650ms_both]">
            Performer
            <span className="mx-1.5 md:mx-3 text-white/50">&middot;</span>
            Teacher
            <span className="mx-1.5 md:mx-3 text-white/50">&middot;</span>
            Community Leader &amp; Activist
          </p>
          <div className="mt-8 flex flex-wrap gap-4 animate-[fadeUp_1000ms_ease-out_850ms_both]">
            <Link
              href="/about"
              className="border-2 border-white text-white text-xs uppercase tracking-[0.18em] font-medium px-8 py-4 hover:bg-white hover:text-foreground transition-colors duration-300"
            >
              Biography
            </Link>
            <Link
              href="/upcoming-events"
              className="bg-primary text-primary-foreground text-xs uppercase tracking-[0.18em] font-semibold px-8 py-4 hover:bg-primary/85 transition-colors duration-300 shadow-lg"
            >
              Upcoming Events
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
