'use client';
import EmblaCarousel from '../carousel.jsx';
import Image from 'next/image.js';
import { useEffect, useRef } from 'react';

export default function CommunityEngagement() {
  const slides = Array.from({ length: 5 }, (_, index) => index);

  const contentRef = useRef(null);

  useEffect(() => {
    const contentEl = contentRef.current;
    if (contentEl) {
      contentEl.classList.remove('opacity-0');
    }
  }, []);

  return (
    <div
      ref={contentRef}
      className="relative w-full min-h-screen flex flex-col bg-background transition-opacity duration-[1500ms] opacity-0"
    >
      <EmblaCarousel slides={slides} />

      {/* Intro */}
      <section className="max-w-6xl mx-auto w-full px-6 md:px-12 py-16 md:py-24">
        <div className="text-center mb-14">
          <p className="text-[11px] uppercase tracking-[0.3em] text-primary mb-4">
            Outreach &amp; Impact
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-medium text-balance">
            Community Engagement
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative aspect-[4/5] w-full overflow-hidden border border-border">
            <Image
              src="/image1.jpeg"
              alt="Becca Kasdan engaging with the community"
              fill
              quality={80}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
            I am deeply passionate about community engagement, frequently performing at community
            venues and engaging with the community in meaningful ways. I have organized and performed
            concerts at addiction recovery centers, veteran homes, breweries, museums, libraries,
            retirement centers, prisons, hospitals, baseball stadiums, places of worship, and Early Head
            Start programs among others. I strongly believe that presenting concerts to audiences who may
            not have access to traditional concert spaces is the key to breaking down racial, economic, and
            cultural barriers in our community.
          </p>
        </div>
      </section>

      <div className="mx-auto w-24 border-t border-border" />

      {/* Initiatives */}
      <section className="max-w-6xl mx-auto w-full px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div className="relative aspect-[4/3] w-full overflow-hidden border border-border lg:sticky lg:top-24">
          <Image
            src="/vohshadows.jpg"
            alt="Violins of Hope shadows"
            fill
            quality={80}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>

        <div className="space-y-10">
          <div>
            <h3 className="font-serif text-2xl mb-2">
              Volunteer Musicians for the Arts, Board of Trustees (2020&ndash;present)
            </h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-2">
              We believe that everyone deserves orchestra seats! Find out how you can get involved today!
            </p>
            <a
              href="https://volunteermusicians.org/"
              target="_blank"
              rel="noreferrer"
              className="link-underline text-sm uppercase tracking-[0.14em] text-primary"
            >
              Learn More
            </a>
          </div>

          <div>
            <h3 className="font-serif text-2xl mb-2">
              Carle Community Concerts: Founder and Director (2020)
            </h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              During the COVID pandemic in 2020 I started a weekly live-stream concert series at the
              University of Illinois Urbana Champaign. Partnering with Carle Hospital, my goal was to
              provide healing and beauty to both hospital patients and healthcare workers at a time when
              many live performances were canceled. These concerts offered a variety of musical genres
              ranging from original song compositions, musical theater, traditional Chinese songs with
              historical instruments, fiddle-sax fusion, and classical music. Carle Community Concerts are
              the first regularly scheduled student concert series and the first community engagement
              concert series hosted by UIUC School of Music since its inception.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-2xl mb-2">
              Co-Director Peabody String Sinfonia (2017&ndash;2018)
            </h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-2">
              Recipient of Johns Hopkins President&apos;s Commendation for Achievement in the Arts for my
              lasting impact on the Baltimore Community.
            </p>
            <a
              href="https://peabody.jhu.edu/life-at-peabody/career-services/opportunities/community-based-learning/string-sinfonia/"
              target="_blank"
              rel="noreferrer"
              className="link-underline text-sm uppercase tracking-[0.14em] text-primary"
            >
              Learn More
            </a>
          </div>

          <div>
            <h3 className="font-serif text-2xl mb-2">
              Featured in Dr. Lisa Redpath&apos;s book
            </h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-2">
              In Harmony: The Complementary Musical Tales of the Brockton Symphony Orchestra, Sharon
              Civic Orchestra, and Sharon Community Chamber Orchestra. Buy your copy today!
            </p>
            <a
              href="https://www.amazon.com/Harmony-Complementary-Brockton-Orchestra-Community/dp/1627343830"
              target="_blank"
              rel="noreferrer"
              className="link-underline text-sm uppercase tracking-[0.14em] text-primary"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
