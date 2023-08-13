'use client';
import YouTube from 'react-youtube';
import Image from 'next/image';
import vohprincipal from 'public/vohprincipal.jpg';
import ensemble from 'public/ensemble.jpg';
import ballet from 'public/ballet.jpg';
import beccarecital from 'public/beccarecital.jpg';
import vohsmile from 'public/vohsmile.jpg';
import end from 'public/end.jpg';
import { useEffect, useRef } from 'react';

export default function VohCabaretConcert() {

    const contentRef = useRef(null);

    useEffect(() => {
        const contentEl = contentRef.current;
        if(contentEl){
            contentEl.classList.remove("opacity-0");
        }
    },[]);


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
        <div ref={contentRef}className="relative bg-white min-h-screen flex flex-col transition-opacity opacity-0 duration-[3s]">
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
                    className="object-cover object-center w-full h-full transition-opacity opacity-0 duration-[2s]"
                    onLoadingComplete={(image) => image.classList.remove('opacity-0')}
                />
            </div>
        </div>
        <h1 className="text-center text-lg md:text-3xl font-semibold md:py-8 py-5 px-6 md:px-0 bg-gradient-to-r from-slate-400 via-slate-900 to-maroon text-white shadow-2xl">Becca Kasdan's Violin of Hope Cabaret Concert</h1>
        <div className="w-full mx-auto px-4 sm:px-6  md:my-16 md:px-48 flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-2">
            <div className="order-2 md:order-1 flex-1">
                <YouTube videoId={videoId} opts={videoOptions} className='w-full h-60 md:h-[500px]'/>
            </div>
            <div className='order-1 md:order-2 flex-1'>
                <div className="order-3 md:order-3 flex flex-col items-center h-full">
                    <iframe 
                        src="https://heyzine.com/flip-book/9b76a89d4b.html" 
                        title="Violins of Hope"
                        className="w-full h-60 md:h-[500px] my-6 md:my-0"
                    />
                    <a href="https://heyzine.com/flip-book/9b76a89d4b.html" target="_blank" rel="noreferrer">
                        <button className="bg-black text-white font-bold text-sm md:text-base mb-8 md:mb-0 py-2 px-2 md:py-4 md:px-4 md:my-6 rounded-full transform hover:scale-110">Full Screen</button>
                    </a>
                </div>
            </div>
        </div>
        <span className="block h-2 my-8 mx-auto w-1/3 bg-black rounded-lg"></span>
        <h1 className="text-center text-lg md:text-2xl font-semibold md:py-8 py-2 px-6 md:px-0 bg-gradient-to-r from-slate-300 via-slate-900 to-maroon text-white shadow-2xl">Imagining New Possibilities for Classical Music Performances in the 21 st -Century: <br/>Drawing
            Inspiration from the Berlin Cabarets of the Weimar Republic</h1>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 grid grid-cols-1 md:grid-cols-12 gap-0 my-2 md:my-2 ">
            <div className="order-2 md:order-1 md:col-span-7 relative">
                <Image src={ensemble} alt="violinsofhope" priority={true} quality={75} className='w-full h-60 md:h-[400px] mb-8'/>
                <p className="font-medium text-sm md:absolute left-0 py-2 md:px-6 leading-5 md:text-justify text-center"> During my concert, I combined the most successful elements of the Berlin cabarets to
                    reimagine an innovative format and performance practice for classical music concerts in the 21 st -century
                    that celebrates inclusivity and creativity in the arts. I collaborated with puppeteers, dancers, visual
                    artists, and musicians from Israel, Poland, Hungary, Norway, Austria, England, and the United States to
                    create a truly memorable and internationally inclusive performance that highlighted performer-
                    audience interaction, interdisciplinary collaboration, and community engagement. This performance
                    also featured two world premieres: John Carmichael’s “Puppet Show” for violin and piano and a special
                    arrangement of two Theresienstadt cabaret songs by Ronen Nissan.</p>
            </div>
            <div className='order-1 md:order-2 md:col-span-5'>
            <div className="col-span-5 relative">
            <p className="py-3 text-sm font-medium text-black md:px-6 md:text-justify text-center mb-8 ">
            On April 23, 2023 I presented a Violins of Hope Cabaret Concert, the culmination of my Doctoral
            performance and research. I performed this recital at the Spurlock Museum of World Cultures in
            Urbana, Illinois in collaboration with Avshalom Weinstein, co-founder of Violins of Hope. As featured in
            the PBS Documentary- Strings of the Holocaust, Violins of Hope is a collection of instruments recovered
            from the Holocaust and painstakingly restored by Amnon Weinstein and Avshi Weinstein in Israel. The
            instruments have heartbreaking stories of being performed in concentration camps, thrown off cattle
            cars, buried in the ground, and etched with Swastikas. An unprecedented art form, the Berlin Cabarets of the Weimar Republic sought to break down
            traditional barriers by creating improvisatory and impromptu programs that emphasized artistic
            creativity, freedom, casualness, and acceptance and valued collaboration between a variety of different
            art forms. 
            </p>
            </div> 
                <div className="order-1 md:order-3 flex flex-col items-center relative">
                <Image src={beccarecital} alt="violinsofhope" priority={true} quality={75} className='w-full md:mb-8 my-2'/>
                    <a href="https://www.violins-of-hope.com/" target="_blank" rel="noreferrer">
                        <button className="bg-black text-white font-bold py-2 px-2 md:py-3 mb-4 text-sm md:text-base rounded-full transform hover:scale-110">Violins of Hope</button>
                    </a>
                </div>
            </div>
        </div>
        <div className='inset-0'>
            <div className="relative w-full h-72 md:h-screen">
                <Image
                    src={ballet}
                    alt="violinsofhopeballet"
                    placeholder='blur'
                    priority={true}
                    quality={75}
                    sizes="100vw"
                    fill
                    className="object-cover object-center w-full h-full"
                />
            </div>
        </div>
        <h1 className="text-center text-xl md:text-3xl font-semibold md:py-8 py-5 px-6 md:px-0 bg-gradient-to-r from-slate-400 via-slate-900 to-maroon text-white">Testimonials</h1>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2 grid grid-cols-1 md:grid-cols-12 gap-0 md:my-8">
            <div className="order-2 md:order-1 md:col-span-6 relative">
                <Image src={vohsmile} alt="violinsofhope" priority={true} quality={75} className='w-full mb-8'/>
                <p className="text-sm md:absolute left-0 px-6 font-medium md:px-8 md:text-justify text-center md:my-16 py-4">“This has been the most extraordinary lecture/recital I have ever had the privilege to experience. The
                presentation and performance of your work has truly changed what I know about and how I absorb
                cabaret music.”</p>
            </div>
            <div className='order-1 md:order-2 md:col-span-6'>
            <div className="col-span-4 relative">
            <p className="py-8 text-sm text-black md:pt-20 md:px-6 md:text-justify text-center font-medium mb-8">
            “This performance was the most impressive community-facing performance I have seen. It was
            the best of community engagement. Her integration of other art forms (dance, puppetry, and visual art)
            with musical performance reflected deep understanding of all these art forms. Her educational talks about
            Weimar and cabaret help us all understand what can happen when people at the margins flourish as well
            as what happens when their rights, and existence, are threatened. What better education to accompany
            these Violins of Hope?” -University of Illinois Former Dean
            </p>
            </div> 
                <div className="order-3 md:order-3 flex flex-col items-center">
                <Image src={end} alt="violinsofhope" priority={true} quality={75} className='w-full md:mt-16'/>
                </div>
            </div>
        </div>
        <span className="block h-2 my-6 mx-auto w-1/3 bg-black rounded-lg"></span>
    </div>
)
}
    
    

    



// "w-full h-screen 2xl:h-[1000px] 2xl:w-[1250px] 2xl:mx-auto"
