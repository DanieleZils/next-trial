"use client";

import Image from "next/image";
import homepic from "../public/homepic-2.jpg";
import Typewriter from 'typewriter-effect';

export default function Home() {
  return (
    <main className="relative w-full md:h-screen ">
      <div className="inset-0 md:h-screen md:fixed">
        <div className="relative top-20 w-full h-64 md:h-full">
          < Image 
          src={homepic} 
          alt="Becca" 
          fill
          priority = {true}
          quality={75}
          className="object-cover object-top w-full h-full" 
          />
          <div className="absolute top-0 w-full h-full md:flex md:items-center md:justify-center">
           <div className="text-black font-medium mx-4 mt-72 md:mt-0 text-center md:absolute text-lg md:text-4xl md:top-[40%] md:left-1/3 md:transform md:-translate-x-1/2 md:-translate-y-1/2 font-serif">
            {/* <h1 className="font-medium font-serif">Performer • Teacher • Community Leader and Activist</h1> */}
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter.typeString(' <span className="text-4xl">•</span> ')
                  .typeString('Performer')
                  .typeString(' <span className="text-4xl">•</span> ')
                  .pauseFor(1500)
                  .deleteAll()
                  .typeString(' <span className="text-4xl">•</span> ')
                  .typeString('Teacher')
                  .typeString(' <span className="text-4xl">•</span> ')
                  .pauseFor(1500)
                  .deleteAll()
                  .typeString(' <span className="text-4xl">•</span> ')
                  .typeString('Community Leader and Activist')
                  .typeString(' <span className="text-4xl">•</span> ')
                  .pauseFor(1500)
                  .start();
                
              }}
            />
          </div>
          </div>
        </div>
      </div>
    </main>
  )
}
