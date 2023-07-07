'use client';
import YouTube from 'react-youtube';
import VoH from 'public/VoH.jpg'
import Image from 'next/image';

export default function VohCabaretConcert() {


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
                <div className="relative top-20 w-full h-64 md:h-screen">
                    <Image
                     src={VoH}
                     alt="violinsofhope"
                     placeholder='blur'
                     priority={true}
                     quality={75}
                     fill
                     sizes="100vx"
                    className="object-cover object-top w-full h-full"
                    />
                </div>
            </div>
            <div className="relative py-24 md:px-12 md:py-24 md:absolute md:inset-0 md:z-10">
            <h1 className="py-8 px-4 text-xl font-semibold text-maroon md:py-8 text-left md:text-left">Becca Kasdan's Violins of Hope Cabaret Concert</h1>
            <p></p>
                <div className="flex flex-col text-center  w-full 2xl:h-[400px] 2xl:w-[400px] md:pt-8 md:mb-8">
                    <YouTube videoId={videoId} opts={videoOptions} className='w-full h-60 px-4 2xl:h-[350px] 2xl:w-[350px] 
                    md:h-[250px] md:w-[250px] mb-8'/>
                    </div>
                    <div className="flex flex-col items-start md:items-star">
                        <iframe 
                            src="https://heyzine.com/flip-book/9b76a89d4b.html" 
                            title="Violins of Hope"
                            className="w-full h-60 px-4 2xl:h-[350px] 2xl:w-[350px] 
                            md:h-[250px] md:w-[250px] mb-8"
                        />
                        <a href="https://heyzine.com/flip-book/9b76a89d4b.html" target="_blank" rel="noreferrer">
                        <button className="bg-black text-white font-bold py-2 px-4 mx-36 rounded-full transform hover:scale-110">Full Screen</button>
                        </a>
            </div>
        </div>
    </div>
    )
}


// "w-full h-screen 2xl:h-[1000px] 2xl:w-[1250px] 2xl:mx-auto"