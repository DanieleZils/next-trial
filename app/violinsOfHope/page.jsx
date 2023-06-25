'use client';
import YouTube from 'react-youtube';
import violinsofhope from 'public/violinsofhope.jpg'
import Image from 'next/image';

export default function ViolinsOfHope() {


    const videoOptions = {
        height: '100%',
        width: '100%',
        title: "Becca Kasdan's Doctoral Recital",
        playerVars: {
            autoplay: 0,
        },
    }

    const videoId = "Wiv3d5C9Ng4"

    return (
        <div className="relative md:grid md:grid-cols-1 min-h-screen">
            <div className='md:fixed inset-0'>
                <div className="relative top-24 w-full h-64 md:h-screen">
                    <div className="object-cover object-center w-full h-full">
                    <Image
                     src={violinsofhope}
                     alt="violinsofhope"
                     priority={true}
                    />
                    </div>
                </div>
            </div>
            <div className="relative p-8 py-24 md:px-12 md:py-24 md:absolute md:inset-0 md:z-10">
            <h1 className="py-8 text-2xl font-semibold text-black md:py-8 text-left">Rebecca Kasdan's Doctoral Recital</h1>
                <div className="flex flex-col text-center md:items-star">
                    <YouTube videoId={videoId} opts={videoOptions} className='w-full h-80 2xl:h-[450px] 2xl:w-[450px] mb-8'/>
                    </div>
                    <div className="flex flex-col items-start md:items-star">
                        <iframe 
                            src="https://heyzine.com/flip-book/9b76a89d4b.html" 
                            title="Violins of Hope"
                            className="w-full h-80 2xl:h-[550px] 2xl:w-[480px] 2xl:px-8"
                        />
            </div>
        </div>
    </div>
    )
}


// "w-full h-screen 2xl:h-[1000px] 2xl:w-[1250px] 2xl:mx-auto"
