'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import Youtube from 'react-youtube';
import { useState, useEffect, useCallback } from 'react';
import Thumb from './thumb.jsx';

export default function EmblaCarousel(props) {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on('select', onSelect);
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi]);

  const onThumbClick = useCallback(
    (index) => {
      setSelectedIndex(index);
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  useEffect(() => {
    if (emblaApi) {
      const intervalId = setInterval(() => {
        emblaApi.scrollNext();
      }, 6000);
      return () => clearInterval(intervalId);
    }
  }, [emblaApi]);

  const images = [
    { type: 'image', src: '/musicWorks.jpg', description: 'MusicWorks Collective, Community MusicWorks' },
    { type: 'image', src: '/image0.jpeg', description: 'Portland Sea Dogs – National Anthem, Bowdoin International Music Festival' },
    { type: 'image', src: '/image2.jpeg', description: 'Panel Discussion with Midori – Community Engagement in the 21st Century' },
    { type: 'image', src: '/image4.jpeg', description: 'Virginia Tech String Project Masterclass' },
    { type: 'video', src: 'tSYbrkM4sDA', thumbSrc: 'https://img.youtube.com/vi/tSYbrkM4sDA/hqdefault.jpg', description: 'Ukraine Benefit Concert' },
  ];

  return (
    <div className="relative w-full bg-foreground pt-20">
      <div className="relative h-[60vh] md:h-[80vh] overflow-hidden" ref={emblaRef}>
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
                  className="object-contain md:object-cover md:object-center"
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
