"use client";
import Image from 'next/image';
import event from "public/event.jpg"

export default function UpcomingEvents() {
    return (
        <div className="relative md:grid md:grid-cols-1 min-h-screen bg-white">
            <div className=' inset-0 md:fixed'>
              <div className="relative top-20 w-full h-64 md:h-screen">
                <Image 
                    src={event} 
                    alt="Becca" 
                    quality={100}
                    fill
                    sizes="100vx"
                    priority={true}
                    className="object-contain md:object-right w-full h-full md:h-screen md:fixed transition-opacity opacity-0 duration-[2s]"
                    onLoadingComplete={(image)=> image.classList.remove("opacity-0")}
                    
                />
               </div>
            </div>
            <div className="relative p-8 py-24 md:px-12 md:py-24 md:absolute md:inset-0 md:z-10 md:bg-transparent">
                <h2 className=" py-8 text-2xl font-semibold text-black md:text-black md:py-8 text-center md:text-left">Upcoming Events</h2>
                <div className='md:text-black md:text-left space-y-6'>
                    {/* Replace these divs with your own event data */}
                    <div className="bg-black bg-opacity-20 md:text-black text-white md:bg-transparent rounded-lg shadow-md md:shadow-none p-6 md:p-0">
                        <h3 className="font-bold pb-2">Luzerne Music Center Faculty Artist Series</h3>
                        <p className='font-medium text-base pb-2'>July 21, 7:30 PM (EST) <br/>
                            July 28, 7:30 PM (EST) <br/>
                            August 4, 7:30 PM (EST)<br />
                            203 Lake Tour Road
                            Lake Luzerne, NY</p>
                           <a href="https://www.luzernemusic.org/2023-season" className='font-bold'>Learn More</a>
                    </div>
                </div>
                <h2 className=" py-8 text-2xl font-semibold text-black md:text-black md:py-8 text-center md:text-left">Past Events</h2>
                <div className='md:text-black md:text-left space-y-6'>
                    {/* Replace these divs with your own event data */}
                    <div className="bg-black bg-opacity-20 text-white md:text-black md:bg-transparent md:shadow-none rounded-lg shadow-md p-6 md:p-0">
                        <h3 className="font-bold pb-2">Orchestra on the Hill: Inspirations- Music, Art, Poetry</h3>
                        <p className=' font-medium text-base pb-2'>June 10, 7:30 PM (EST)<br/>
                            June 11, 2:30 PM (EST) <br />
                            Gordon-Conwell Theological Seminary
                            130 Essex St., South Hamilton, MA</p>
                            <a href="https://www.theorchestraonthehill.org/upcoming" className='font-bold'>Learn More</a>
                    </div>
                    <div className="bg-black bg-opacity-30 text-white md:text-black md:bg-transparent rounded-lg shadow-md md:shadow-none p-6 md:p-0">
                        <h3 className="font-bold pb-2">Tonebase Violin</h3>
                        <p className=' font-medium text-base pb-2'>June 20, 3 PM (EST), virtual <br />
                           Sight Reading Skills and Tips.</p>
                           <a href="https://www.tonebase.co/violin" className='font-bold'>Learn More</a>
                    </div>
                    <div className="bg-black bg-opacity-30 text-white md:bg-transparent md:text-black  rounded-lg shadow-md md:shadow-none p-6 md:p-0">
                        <h3 className="font-bold pb-2">Easton Chamber Music Festival Faculty Concerts</h3>
                        <p className=' font-medium text-base pb-2'>June 23, 7:30 PM (EST) <br/>
                            June 24, 7:30 PM (EST) <br />
                            Covenant Congregational Church
                            204 Center St., Easton MA</p>
                           <a href="http://eastonchambermusicfestival.org/concerts.html" className='font-bold'>Learn More</a>
                    </div>
            </div>
            </div>
        </div>
    )
}
