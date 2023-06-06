'use client';

import Youtube from 'react-youtube';
import { FaYoutube } from 'react-icons/fa';


export default function Videos() {

    

    const videoOptions = {
        height: '390',
        width: '640',
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
        <div className="flex flex-col items-start justify-center min-h-screen py-24 ps-20">
               <div className='flex flex-col items-center'>
                <h1 className="text-2xl font-semibold mt-12 text-red-900 mx-auto">Media</h1>
                  <div className='flex justify-cente'>
                       <a href='https://www.youtube.com/@beccakasdan1564'>
                       <FaYoutube size="2em" color="red" className='mx-auto' />
                       </a>
                  </div>
                   {videos.map((video, index) => (
                     <div key={index} 
                        className='flex flex-col mb-7 rounded-3xl shadow-xl pt-4 pb-10 border bg-gray-300 border-gray-300'>
                        <h3 className='text-xl pb-1 text-center '>{video.title}</h3>
                        <div className='relative overflow-hidden shadow-md"'>
                        <Youtube videoId={video.id}  opts={videoOptions} className=''/>
                        </div>
                    </div>
                ))} 
            </div>
        </div>
    )
}