'use client';

import YouTube from 'react-youtube';
import { FaYoutube } from 'react-icons/fa';
import Image from 'next/image';
import anothermedia from 'public/anothermedia.png';
import { useEffect, useRef } from 'react';



export default function Media() {

  const contentRef = useRef(null);

    useEffect(() => {
        const contentEl = contentRef.current;
        if(contentEl){
            contentEl.classList.remove("opacity-0");
        }
    },[]);
    

    const videoOptions = {
        height: '360',
        width: '480',
        playerVars: {
            autoplay: 0,
        },
    }

    const videos = [
        { id:'9X0nj4oUMs4', title: 'Guillaume Lekeu : Violin Sonata in G Major'},
        { id: 'axwCvc7PP1Y', title: 'Ravel : Violin Sonata No.1 (Posthumous)'},
        { id: 'm0Xpb_Yj0YQ', title: 'Amanda Maier : Violin Concerto in D Minor'},
        { id:'IzPNdBq1H0I', title: 'Dora Pejačević : Sonata in D Major, Op. 26 “Spring”'}
    ]

    return (
        <div ref={contentRef} className="relative md:grid md:grid-cols-1 min-h-screen bg-white transition-opacity opacity-0 duration-[3s]">
          <div className='md:fixed inset-0'> 
            <div className="relative top-20 w-full h-64 md:h-screen">
              <Image 
                src={anothermedia} 
                alt="Becca" 
                fill
                quality={95}
                sizes="100vx"
                className="object-cover object-top w-full h-full transition-opacity opacity-0 duration-[2s]" 
                priority={true}
                onLoadingComplete={(image)=> image.classList.remove("opacity-0")}
              />
            </div>
            </div>
            <div className="relative py-24 md:px-12 md:py-24 md:absolute md:inset-0 ">
              <div className='md:text-black md:text-left space-y-4'>
                <h1 className="text-2xl font-semibold pt-6 md:text-black mx-auto text-center md:text-left md:px-4">Media</h1>
                {videos.map((video, index) => (
                  <div key={index} 
                    className='p-4'>
                    <h3 className='text-base md:text-lg md:py-4 md:text-left sm:text-left md:text-black font-semibold'>{video.title}</h3>
                    <div className='overflow-hidden'>
                      <YouTube videoId={video.id}  opts={videoOptions} className='rounded-3xl w-full h-full 2xl:h-[350px] 2xl:w-[350px]'/>
                    </div>
                  </div>
                ))} 
              </div>
              <br/>
            </div>
          </div>
      )
    }

