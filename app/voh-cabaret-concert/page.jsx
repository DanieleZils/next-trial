'use client';
import YouTube from 'react-youtube';
import VoH from 'public/VoH.jpg'
import Image from 'next/image';
import vohprincipal from 'public/vohprincipal.jpg';
import vohshadows from 'public/vohshadows.jpg';
import ensemble from 'public/ensemble.jpg';
import ballet from 'public/ballet.jpg';
import beccarecital from 'public/beccarecital.jpg';

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
        <div className="relative min-h-screen bg-white">
        <div className='inset-0'>
            <div className="relative w-full h-72 md:h-screen">
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 grid grid-cols-1 md:grid-cols-12 gap-0 my-2 md:my-12">
            <div className="order-2 md:order-1 col-span-8">
                <YouTube videoId={videoId} opts={videoOptions} className='w-full h-60 md:h-[400px] mb-8'/>
            </div>
            <div className='order-1 md:order-2 md:col-span-4'>
            <div className="col-span-4 relative">
            <h1 className="py-8 text-xl md:text-5xl font-semibold text-black md:py-8 md:px-8 text-center md:text-left">Becca Kasdan's <br/> Violins of Hope <br/> Cabaret Concert</h1>
            </div> 
                <div className="order-3 md:order-3 flex flex-col items-start">
                    <iframe 
                        src="https://heyzine.com/flip-book/9b76a89d4b.html" 
                        title="Violins of Hope"
                        className="w-full h-60 md:h-[400px] mb-8 my-10"
                    />
                    <a href="https://heyzine.com/flip-book/9b76a89d4b.html" target="_blank" rel="noreferrer">
                        <button className="bg-black text-white font-bold py-2 px-2 rounded-full transform hover:scale-110">Full Screen</button>
                    </a>
                </div>
            </div>
        </div>
        <div className='inset-0'>
            <div className="relative w-full h-72 md:h-screen">
                <Image
                    src={vohshadows}
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
        <h1 className="text-center text-xl md:text-2xl font-bold pt-5">Imagining New Possibilities for Classical Music Performances in the 21 st -Century: <br/>Drawing
Inspiration from the Berlin Cabarets of the Weimar Republic</h1>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 grid grid-cols-1 md:grid-cols-12 gap-0 my-2 md:my-4">
            <div className="order-2 md:order-1 md:col-span-8 relative">
                <Image src={ensemble} alt="violinsofhope" priority={true} quality={75} className='w-full h-60 md:h-[400px] mb-8'/>
                <p className="font-semibold text-sm absolute left-0 p-2">An unprecedented art form, the Berlin Cabarets of the Weimar Republic sought to break down
                    traditional barriers by creating improvisatory and impromptu programs that emphasized artistic
                    creativity, freedom, casualness, and acceptance and valued collaboration between a variety of different
                    art forms. During my concert, I combined the most successful elements of the Berlin cabarets to
                    reimagine an innovative format and performance practice for classical music concerts in the 21 st -century
                    that celebrates inclusivity and creativity in the arts. I collaborated with puppeteers, dancers, visual
                    artists, and musicians from Israel, Poland, Hungary, Norway, Austria, England, and the United States to
                    create a truly memorable and internationally inclusive performance that highlighted performer-
                    audience interaction, interdisciplinary collaboration, and community engagement. This performance
                    also featured two world premieres: John Carmichael’s “Puppet Show” for violin and piano and a special
                    arrangement of two Theresienstadt cabaret songs by Ronen Nissan.</p>
            </div>
            <div className='order-1 md:order-2 md:col-span-4'>
            <div className="col-span-4 relative">
            <p className="py-8 text-sm md:text-sm font-semibold text-black md:pt-8 md:px-4 text-center md:text-center">
            On April 23, 2023 I presented a Violins of Hope Cabaret Concert, the culmination of my Doctoral
            performance and research. I performed this recital at the Spurlock Museum of World Cultures in
            Urbana, Illinois in collaboration with Avshalom Weinstein, co-founder of Violins of Hope. As featured in
            the PBS Documentary- Strings of the Holocaust, Violins of Hope is a collection of instruments recovered
            from the Holocaust and painstakingly restored by Amnon Weinstein and Avshi Weinstein in Israel. The
            instruments have heartbreaking stories of being performed in concentration camps, thrown off cattle
            cars, buried in the ground, and etched with Swastikas. 
            </p>
            </div> 
                <div className="order-3 md:order-3 flex flex-col items-start">
                <Image src={beccarecital} alt="violinsofhope" priority={true} quality={75} className='w-full mb-8 my-16'/>
                    <a href="https://www.violins-of-hope.com/" target="_blank" rel="noreferrer">
                        <button className="bg-black text-white font-bold py-2 px-2 rounded-full transform hover:scale-110">Violins of Hope</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
)
}
    
    

    



// "w-full h-screen 2xl:h-[1000px] 2xl:w-[1250px] 2xl:mx-auto"
