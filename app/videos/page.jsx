'use client';

import YouTube from 'react-youtube';
import { FaYoutube } from 'react-icons/fa';


export default function Videos() {

    

    const videoOptions = {
        height: '300',
        width: '380',
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
        <div className="flex flex-col items-center h-screen">
               <div className='flex flex-col'>
                <h1 className="text-2xl font-semibold mt-32 text-red-900 mx-auto">Media</h1>
                  <div className='flex justify-center'>
                       <a href='https://www.youtube.com/@beccakasdan1564'>
                       <FaYoutube size="2em" color="red" className='mx-auto' />
                       </a>
                  </div>
                   {videos.map((video, index) => (
                     <div key={index} 
                        className='flex flex-col mb-4 pt-4 '>
                        <h3 className='text-md pb-4 text-center '>{video.title}</h3>
                        <div className='overflow-hidden shadow-md"'>
                        <YouTube videoId={video.id}  opts={videoOptions} className='rounded-3xl'/>
                        </div>
                    </div>
                ))} 
            </div>
        </div>
    )
}