'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import Youtube from 'react-youtube';
import { useState, useRef, useEffect, useCallback } from 'react';


export default function EmblaCarousel(props) {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (emblaApi) {
      setIntervalId(setInterval(() => {
        emblaApi.scrollNext();
      }, 5000));
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [emblaApi]);

  const onPlayerStateChange = useCallback((event) => {
    switch(event.data) {
      case 1:  // The video started playing
        if (intervalId) {
          clearInterval(intervalId);
          setIntervalId(null);
        }
        break;
      case 0:  // The video ended
      case 2:  // The video is paused
        if (!intervalId) {
          setIntervalId(setInterval(() => {
            emblaApi.scrollNext();
          }, 5000));
        }
        break;
      default:
        break;
    }
  }, [intervalId, emblaApi]);

    // array of images
    const images = [ 
      {type: 'image', src: "/image0.jpeg", description: "Portland Sea Dogs- National Anthem, Bowdoin International Music Festival"},
      {type: 'image', src:"/image2.jpeg", description:"Panel Discussion with Midori- Community Engagement in the 21st Century"},
      {type: 'image', src:"/image3.jpeg", description:"Virginia Tech String Project Masterclass"},
      {type: 'image', src:"/image4.jpeg", description: "Virginia Tech String Project Masterclass"},
      {type: 'video', src:"tSYbrkM4sDA", description: "Ukraine Benefit Concert"},
];

    return (

        <div className="relative h-screen overflow-hidden">
          <div className=" w-full h-full overflow-hidden" ref={emblaRef}>
            <div className="flex h-full">
              {images.map((slide, index) => (
                <div className="w-screen flex-none h-full relative" key={index}>
                   {slide.type === 'image' ? (
                  <Image 
                    src={images[index].src}
                    alt={`Slide ${index + 1}`}
                    priority={true}
                    quality={85}   
                    fill
                    className='absolute z-10 object-contain md:object-cover md:object-center '
                  />
                   ) : (
                  <Youtube
                  videoId={"tSYbrkM4sDA"}  // The YouTube video ID
                  opts={{
                    height: '100%',  // You can adjust these options as needed
                    width: '100%',
                    playerVars: {
                      autoplay: 0,
                      controls: 1,
                      showinfo: 1,
                      modestbranding: 1,
                    },
                  }}
                  onReady={event => {
                    // Access to player in all event handlers via event.target
                    event.target.pauseVideo();  // Pause the video when it's ready (just in case)
                  }}
                  onStateChange={onPlayerStateChange}  // Function gets called when video starts playing
                  className='absolute z-30 w-full h-full'
                  />
                   )}
                  <div className="absolute z-20 w-full h-full bg-black bg-opacity-20 flex items-end pb-60 justify-center text-white text-lg text-center font-medium md:text-4xl md:p-8">
                    <p>{images[index].description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    
}
    

