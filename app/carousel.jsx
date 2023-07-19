'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';


export default function EmblaCarousel(props) {
    const {slides, options} = props;
    const [emblaRef] = useEmblaCarousel(options, [Autoplay()]);

    // array of images
    const images = [
        "/image0.jpeg",
        "/image1.jpeg",
        "/image2.jpeg",
        "/image3.jpeg",
        "/image4.jpeg",
    ];

    return (

        <div className="">
          <div className=" overflow-hidden" ref={emblaRef}>
            <div className=" flex">
              {slides.map((index) => (
                <div className="w-screen flex-none" key={index}>
                  <div className="">
                    <span>{index + 1}</span>
                  </div>
                  <Image 
                    src={images[index]}
                    alt={`Slide ${index + 1}`}
                    width = {1000}
                    height={50}
                    priority={true}
                    quality={85}   
                    className='w-full h-auto object-cover'
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    
}
    

