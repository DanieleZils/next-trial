'use client';
import YouTube from 'react-youtube';
import VoH from 'public/VoH.jpg'
import Image from 'next/image';
import vohprincipal from 'public/vohprincipal.jpg';
import vohshadows from 'public/vohshadows.jpg';
import ensemble from 'public/ensemble.jpg';
import ballet from 'public/ballet.jpg';
import beccarecital from 'public/beccarecital.jpg';
import vohsmile from 'public/vohsmile.jpg';
import end from 'public/end.jpg';

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
        <div className="relative bg-white h-full">
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
            <div className="order-2 md:order-1 col-span-7">
                <YouTube videoId={videoId} opts={videoOptions} className='w-full h-60 md:h-[400px] mb-8'/>
            </div>
            <div className='order-1 md:order-2 md:col-span-5'>
            <div className="col-span-5 relative">
            <h1 className=" text-xl md:text-4xl font-extrabold text-black md:py-8 md:mt-16 md:px-8 text-center">Becca Kasdan's <br/> Violins of Hope <br/> Cabaret Concert</h1>
            </div> 
                <div className="order-3 md:order-3 flex flex-col md:pt-24 items-center">
                    <iframe 
                        src="https://heyzine.com/flip-book/9b76a89d4b.html" 
                        title="Violins of Hope"
                        className="w-full h-60 md:h-[400px] my-8 md:mt-20"
                    />
                    <a href="https://heyzine.com/flip-book/9b76a89d4b.html" target="_blank" rel="noreferrer">
                        <button className="bg-black text-white font-bold py-4 px-4 my-4 md:my-0 rounded-full transform hover:scale-110">Full Screen</button>
                    </a>
                </div>
            </div>
        </div>
        <h1 className="text-center text-xl md:text-2xl font-bold py-6 px-6 md:px-0 bg-black bg-opacity-50 text-white">Imagining New Possibilities for Classical Music Performances in the 21 st -Century: <br/>Drawing
            Inspiration from the Berlin Cabarets of the Weimar Republic</h1>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 grid grid-cols-1 md:grid-cols-12 gap-0 my-2 md:my-2 ">
            <div className="order-2 md:order-1 md:col-span-7 relative">
                <Image src={ensemble} alt="violinsofhope" priority={true} quality={75} className='w-full h-60 md:h-[400px] mb-8'/>
                <p className="font-medium text-sm md:text-base md:absolute left-0 text-center py-2 px-3">An unprecedented art form, the Berlin Cabarets of the Weimar Republic sought to break down
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
            <div className='order-1 md:order-2 md:col-span-5'>
            <div className="col-span-5 relative">
            <p className="py-8 text-sm md:text-base font-medium text-black md:pt-4 md:px-4 text-center md:text-center">
            On April 23, 2023 I presented a Violins of Hope Cabaret Concert, the culmination of my Doctoral
            performance and research. I performed this recital at the Spurlock Museum of World Cultures in
            Urbana, Illinois in collaboration with Avshalom Weinstein, co-founder of Violins of Hope. As featured in
            the PBS Documentary- Strings of the Holocaust, Violins of Hope is a collection of instruments recovered
            from the Holocaust and painstakingly restored by Amnon Weinstein and Avshi Weinstein in Israel. The
            instruments have heartbreaking stories of being performed in concentration camps, thrown off cattle
            cars, buried in the ground, and etched with Swastikas. 
            </p>
            </div> 
                <div className="order-3 md:order-3 flex flex-col items-center">
                <Image src={beccarecital} alt="violinsofhope" priority={true} quality={75} className='w-full md:mb-8 md:my-12 my-4 h-80'/>
                    <a href="https://www.violins-of-hope.com/" target="_blank" rel="noreferrer">
                        <button className="bg-black text-white font-bold py-2 px-2 mb-4 rounded-full transform hover:scale-110">Violins of Hope</button>
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
        <h1 className="text-center text-xl md:text-3xl font-bold py-6 bg-black bg-opacity-50 text-white">Testimonials</h1>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-2 grid grid-cols-1 md:grid-cols-12 gap-0 md:my-2  ">
            <div className="order-2 md:order-1 md:col-span-6 relative">
                <Image src={vohsmile} alt="violinsofhope" priority={true} quality={75} className='w-full md:h-[400px] mb-8'/>
                <p className="text-sm md:absolute left-0 px-6 md:text-base font-medium text-center md:my-28 py-4">“This has been the most extraordinary lecture/recital I have ever had the privilege to experience. The
                presentation and performance of your work has truly changed what I know about and how I absorb
                cabaret music.”</p>
            </div>
            <div className='order-1 md:order-2 md:col-span-6'>
            <div className="col-span-4 relative">
            <p className="py-8 text-sm md:text-base text-black md:pt-12 md:px-4 text-center md:text-center font-medium">
            “This performance was the most impressive community-facing performance I have seen. It was
            the best of community engagement. Her integration of other art forms (dance, puppetry, and visual art)
            with musical performance reflected deep understanding of all these art forms. Her educational talks about
            Weimar and cabaret help us all understand what can happen when people at the margins flourish as well
            as what happens when their rights, and existence, are threatened. What better education to accompany
            these Violins of Hope?” -University of Illinois Former Dean
            </p>
            </div> 
                <div className="order-3 md:order-3 flex flex-col items-center">
                <Image src={end} alt="violinsofhope" priority={true} quality={75} className='w-full mb-8 md:my-20 md:h-[400px]'/>
                </div>
            </div>
        </div>
    </div>
)
}
    
    

    



// "w-full h-screen 2xl:h-[1000px] 2xl:w-[1250px] 2xl:mx-auto"
