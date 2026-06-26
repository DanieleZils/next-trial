'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import Youtube from 'react-youtube';
import { useState, useEffect, useCallback } from 'react';
import Thumb from './thumb.jsx';

const images = [
  { type: 'image', src: '/musicWorks.jpg', description: 'MusicWorks Collective, Community MusicWorks' },
  { type: 'image', src: '/image0.jpeg', description: 'Portland Sea Dogs – National Anthem, Bowdoin International Music Festival' },
  { type: 'image', src: '/image2.jpeg', description: 'Panel Discussion with Midori – Community Engagement in the 21st Century' },
  { type: 'image', src: '/image4.jpeg', description: 'Virginia Tech String Project Masterclass' },
  { type: 'video', src: 'tSYbrkM4sDA', thumbSrc: 'https://img.youtube.com/vi/tSYbrkM4sDA/hqdefault.jpg', description: 'Ukraine Benefit Concert' },
];

export default function EmblaCarousel(props) {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, ...options });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on('select', onSelect);
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onThumbClick = useCallback(
    (index) => {
      setSelectedIndex(index);
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  // Auto-advance, but pause on hover and while a video slide is active so it
  // never scrolls away mid-playback.
  const isVideoSlide = images[selectedIndex]?.type === 'video';

  useEffect(() => {
    if (!emblaApi || isPaused || isVideoSlide) return;
    const intervalId = setInterval(() => {
      emblaApi.scrollNext();
    }, 6000);
    return () => clearInterval(intervalId);
  }, [emblaApi, isPaused, isVideoSlide]);

  return (
    <div
      className="relative w-full bg-foreground pt-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative aspect-[3/2] md:aspect-auto md:h-[78vh] overflow-hidden" ref={emblaRef}>
        <div className="flex h-full">
          {images.map((slide, index) => (
            <div className="relative flex-none w-full h-full" key={index}>
              {slide.type === 'image' ? (
                <Image
                  src={slide.src}
                  alt={slide.description}
                  fill
                  priority
                  quality={90}
                  sizes="100vw"
                  className="object-cover object-center"
                />
              ) : (
                <Youtube
                  videoId={slide.src}
                  opts={{
                    height: '100%',
                    width: '100%',
                    playerVars: { autoplay: 0, controls: 1, modestbranding: 1 },
                  }}
                  className="absolute inset-0 w-full h-full"
                  iframeClassName="w-full h-full"
                />
              )}
              {slide.type === 'image' && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 px-6 pb-10 md:px-16 md:pb-20">
                    <p className="font-serif text-xl md:text-3xl text-white text-balance max-w-3xl leading-snug">
                      {slide.description}
                    </p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={scrollPrev}
          aria-label="Previous slide"
          className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          type="button"
          onClick={scrollNext}
          aria-label="Next slide"
          className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
      <div className="flex overflow-x-auto justify-center gap-1 py-5 bg-foreground">
        {images.map((slide, index) => (
          <Thumb
            onClick={() => onThumbClick(index)}
            selected={index === selectedIndex}
            index={index}
            imgSrc={slide.thumbSrc || slide.src}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
