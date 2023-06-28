'use client';

import YouTube from 'react-youtube';
import { FaYoutube } from 'react-icons/fa';
import Image from 'next/image';
import beccaprofile from 'public/beccaprofile.jpg'


export default function Videos() {

    

    const videoOptions = {
        height: '400',
        width: '480',
        playerVars: {
            autoplay: 0,
        },
    }

    const videos = [
        { id:'9X0nj4oUMs4', title: 'Guillaume Lekeu : Violin Sonata in G Major'},
        { id: 'axwCvc7PP1Y', title: 'Ravel : Violin Sonata No.1 (Posthumous)'},
        { id: 'm0Xpb_Yj0YQ', title: 'Amanda Maier : Violin Concerto in D Minor'}
    ]

    return (
        <div className="relative md:grid md:grid-cols-1 overflow-y-auto">
          <div className='md:fixed inset-0 bg-black z-0'></div> {/* Fixed full-screen black div for large screens */}
          <div className="relative md:h-screen overflow-y-auto z-10"> {/* Content layer */}
            <div className=" relative top-24 w-full h-64 md:h-screen">
              <Image 
                src={beccaprofile} 
                alt="Becca" 
                quality={75}
                className="object-contain md:object-right w-full h-full md:h-screen md:fixed" 
                priority={true}
              />
            </div>
            <div className="relative py-24 md:px-12 md:py-24 md:absolute md:inset-0 md:z-10">
              <div className='md:text-white md:text-left space-y-6 text-center '>
                <h1 className="text-2xl font-semibold pt-6 md:text-stone-100 mx-auto">Media</h1>
                <div className='md:flex md:flex-row '>
                  <a href='https://www.youtube.com/@beccakasdan1564'>
                    <FaYoutube size="2em" color="red" className='mx-auto' />
                  </a>
                </div>
                {videos.map((video, index) => (
                  <div key={index} 
                    className='bg-white md:bg-transparent md:shadow-none rounded-lg shadow-md p-4 md:p-0'>
                    <h3 className='text-md md:p-8 md:text-left md:text-stone-100 font-bold'>{video.title}</h3>
                    <div className='overflow-hidden shadow-md md:shadow-none'>
                      <YouTube videoId={video.id}  opts={videoOptions} className='rounded-3xl w-full h-62 2xl:h-[350px] 2xl:w-[350px] 
                    md:h-[250px] md:w-[250px]'/>
                    </div>
                  </div>
                ))} 
              </div>
              <br/>
            </div>
          </div>
        </div>
      )
    }

