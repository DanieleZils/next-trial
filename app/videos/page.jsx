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
        <div className="flex flex-col items-center justify-center min-h-screen py-24">
            <h1 className="text-4xl font-bold mb-8">Videos</h1>
            <div className='flex flex-col items-center'>
                {videos.map((video, index) => (
                    <div key={index} className='flex flex-col mb-4'>
                        <h3 className='text-xl font-semibold py-5 mb-2'>{video.title}</h3>
                        <Youtube videoId={video.id} opts={videoOptions} className="max-w-xl mx-auto" />
                    </div>
                ))} 
            </div>
        </div>
    )
}