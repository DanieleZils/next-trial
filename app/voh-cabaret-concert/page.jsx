'use client';
import YouTube from 'react-youtube';
import VoH from 'public/VoH.jpg'
import Image from 'next/image';
import vohprincipal from 'public/vohprincipal.jpg';

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
        <div className="relative md:grid md:grid-cols-1 min-h-screen bg-white">
            <div className=' inset-0'>
                <div className="relative w-full h-64 md:h-screen">
                    <Image
                     src={vohprincipal}
                     alt="violinsofhope"
                     placeholder='blur'
                     priority={true}
                     quality={75}
                     sizes="100vw"
                     fill
                    className="object-cover object-center w-full h-full"
                    />
                </div>
            </div>
            <div className="absolute top-30 md:relative md:flex md:flex-row-reverse md:items-start md:space-x-reverse py-2 px-16">
                <h1 className="py-8 px-4 text-xl md:text-5xl font-semibold text-black md:py-8 md:px-8 text-left md:text-left md:w-1/2">Becca Kasdan's <br/> Violins of Hope <br/> Cabaret Concert</h1>
                <div className="flex flex-col text-center w-full md:w-1/2 md:pt-8 md:px-8 md:mb-8">
                    <YouTube videoId={videoId} opts={videoOptions} className='w-full h-60 px-4 md:h-[400px] md:w-[400px] mb-8'/>
                    <div className="flex flex-col items-start md:items-star">
                        <iframe 
                            src="https://heyzine.com/flip-book/9b76a89d4b.html" 
                            title="Violins of Hope"
                            className="w-full h-60 px-4 md:h-[400px] md:w-[400px] mb-8"
                        />
                        <a href="https://heyzine.com/flip-book/9b76a89d4b.html" target="_blank" rel="noreferrer">
                        <button className="bg-black text-white font-bold py-2 px-2 mx-36 rounded-full transform hover:scale-110">Full Screen</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
    }
    
    

    



// "w-full h-screen 2xl:h-[1000px] 2xl:w-[1250px] 2xl:mx-auto"
