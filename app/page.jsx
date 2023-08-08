"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import homepic from "../public/homepic-2.jpg";
import homepicmobile from "../public/homepic-mobile.jpg"
import Typewriter from 'typewriter-effect';

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);




  return (
    <main className="relative w-full h-screen">
        <style>{`
        .hidden-large {
            display: none;
        }

        @media (max-width: 767px) {
            .hidden-large {
            display: block;
            height: 2px;
            }

            .desktop-img {
            display: none;
            }

            .mobile-bg {
            background-color: rgba(0, 0, 0, 0.5);
            }
        }
        `}</style>

        <div className="fixed inset-0 h-full w-full overflow-hidden top-20">
            {/* For Desktop */}
            <Image
                src={homepic}
                alt="Becca"
                className="object-cover object-top w-full h-full desktop-img"
            />
            {/* For Mobile */}
            <Image
                src={homepicmobile}
                alt="Becca"
                className="object-cover object-top w-full h-full mobile-bg "
            />
            <div className={`absolute ${windowWidth > 767 ? 'top-[40%] left-1/3 transform -translate-x-1/2' : 'mobile-bg bottom-20 text-white p-2 text-xl'} w-full text-center text-black font-medium md:text-2xl xl:text-3xl font-serif`}>
                <Typewriter
                options={{
                    autoStart: true,
                    delay: 80,
                }}
                onInit={(typewriter) => {
                    typewriter
                    .typeString('Performer')
                    .typeString(' <span className="text-4xl">•</span> ')
                    .typeString('Teacher')
                    .typeString(' <span className="text-4xl">•</span> ')
                    .typeString('<span class="hidden-large"><br/></span>')
                    .typeString('Community Leader & Activist')
                    .pauseFor(200)
                    .start();
                }}
                />
            </div>
        </div>
    </main>
)
              }