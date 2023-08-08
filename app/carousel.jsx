'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import Youtube from 'react-youtube';
import { useState, useRef, useEffect, useCallback } from 'react';
import Thumb from './thumb.jsx';


export default function EmblaCarousel(props) {
  const { slides, options } = props;
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

  const onThumbClick = useCallback((index) => {
    setSelectedIndex(index);
    emblaApi.scrollTo(index);
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      const intervalId = setInterval(() => {
        emblaApi.scrollNext();
      }, 6000);

      return () => clearInterval(intervalId);
    }
  }, [emblaApi]);

  const onPlayerStateChange = useCallback((event) => {
    if (event.data === 1) {  // The video started playing
      const intervalId = setInterval(() => {
        emblaApi.scrollNext();
      }, 6000);
      clearInterval(intervalId);
    }
  }, [emblaApi]);

 

    // array of images
    const images = [ 
      {type: 'image', src: "/image0.jpeg", description: "Portland Sea Dogs- National Anthem, Bowdoin International Music Festival"},
      {type: 'image', src:"/image2.jpeg", description:"Panel Discussion with Midori- Community Engagement in the 21st Century"},
      {type: 'image', src:"/image3.jpeg", description:"Virginia Tech String Project Masterclass"},
      {type: 'image', src:"/image4.jpeg", description: "Virginia Tech String Project Masterclass"},
      {type: 'video', src:"tSYbrkM4sDA", thumbSrc: "https://img.youtube.com/vi/tSYbrkM4sDA/hqdefault.jpg", description: "Ukraine Benefit Concert"},
];

    return (
      //here is where i can fix the height for the mobile//
        <div className="relative h-[800px] md:h-screen">
          <div className=" w-full h-full overflow-hidden" ref={emblaRef}>
            <div className="flex h-full ml-[-0.25rem]">
              {images.map((slide, index) => (
                <div className="w-full flex-none h-3/4 top-20 relative ml-0.25-rem" key={index}>
                   {slide.type === 'image' ? (
                  <Image 
                    src={images[index].src}
                    alt={`Slide ${index + 1}`}
                    priority={true}
                    quality={95}   
                    fill
                    className='absolute z-10 object-contain md:object-cover md:object-center'
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
                  className='absolute z-30 w-full h-full object-center'
                  />
                   )}
                  <div className="absolute z-20 w-full h-full bg-black bg-opacity-20 flex items-end md:pb-10 justify-center text-white text-base text-center font-medium md:text-4xl md:p-8">
                    <p className="text-lg md:text-4xl">{images[index].description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-0 left-0 flex overflow-x-auto z-2 w-full justify-center ">
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
      )
    
}
    

