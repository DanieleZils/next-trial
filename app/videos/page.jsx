'use client';

import Youtube from 'react-youtube';


export default function Videos() {

    const videoOptions = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 0,
        },
    }

    const videos = [
        { id: 'axwCvc7PP1Y', title: 'Ravel Violin Sonata No.1 (Posthumous)'},
        { id:'9X0nj4oUMs4', title: 'Guillaume Lekeu Violin Sonata in G Major'},
        { id:'TmsViKgwziM', title: 'Francis Poulenc Violin Sonata'},
        { id:'FdqX4EeQf1Q', title: "George Gerswhin Porgy and Bess Suite: My Man's Gone Now"},
    ]

    return (
        <div className="flex flex-col items-start justify-center min-h-screen py-24 ps-20">
            <h1 className="text-2xl font-bold mb-8">Media</h1>
            <div className='flex flex-col items-start'>
                {videos.map((video, index) => (
                    <div key={index} className='flex flex-col mb-4'>
                        <h3 className='text-xl pb-2'>{video.title}</h3>
                        <Youtube videoId={video.id} opts={videoOptions} className='pb-12'/>
                    </div>
                ))} 
            </div>
        </div>
    )
}