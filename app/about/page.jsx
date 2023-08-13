"use client";

import Image from "next/image";
import VoH from "/public/VoH.jpg";
import { useEffect, useRef } from "react";

export default function Home() {

  const contentRef = useRef(null);

    useEffect(() => {
        const contentEl = contentRef.current;
        if (contentEl) {
            contentEl.classList.remove("opacity-0");
        }
    }, []);

  return (
    <main className="relative md:grid md:grid-cols-1 min-h-screen bg-white">
        <div className="relative md:fixed inset-0 top-20 w-full h-64 md:h-full ">
          < Image 
          src={VoH} 
          alt="Becca" 
          fill
          quality={75}
          priority = {true}
          className="object-cover object-top w-full h-full transition-opacity opacity-0 duration-[2s]" 
          onLoadingComplete={(image)=> image.classList.remove("opacity-0")}
          />
          </div>
          <div  ref={contentRef}
          className="relative md:grid md:grid-cols-1 min-h-screen mx-14 md:mt-0 transition-opacity opacity-0 duration-[3s]">
            <h1 className="font-semibold text-xl pt-32 px-2">Biography</h1>
            <div className="text-sm md:text-base max-w-lg pt-8">
            <p className="p-2 leading-relaxed md:font-medium text-left">
            Becca Kasdan is currently a Resident Musician at Community MusicWorks in Providence, RI where she
            performs as a member of the MusicWorks Collective, teaches violin lessons, and actively participates
            and coordinates community engagement projects and initiatives.<br/> <br/> Becca received her Doctor of Musical
            Arts in Violin Performance at the University of Illinois at Urbana-Champaign where she studied with Meg
            Freivogel of the Jupiter String Quartet and served as the Violin Teaching Assistant. Previously, Becca
            studied with Violaine Melancon at the Schulich School of Music at McGill University and the Peabody
            Institute of Johns Hopkins University where she received her MM and BM in Violin Performance.<br/> <br/>
            Deeply passionate about chamber music, Becca has worked closely with members of the Juilliard,
            Jupiter, Emerson, Chiara, Orion, Ying, Brentano, and Borromeo String Quartets among others. She has
            performed for several distinguished artists including Midori Goto, Bruno Eicher (Assistant Concertmaster
            MET), Axel Strauss, and Stefan Milenkovich. Becca has also been a Violin Fellow at several summer
            music festivals including the Bowdoin International Music Festival, Manchester Music Festival, and the
            Next Festival of Emerging Artists. As a chamber musician and orchestral player, she has collaborated
            with many esteemed musicians including David Ying, Michael Kannen, Yael Weiss, Benjamin Zander,
            David Zinman, and Leon Fleischer.<br/><br/>
            A passionate and dedicated teacher, Becca is a violin faculty member at Luzerne Music Center’s Senior
            Session in New York and the Easton Chamber Music Festival in Massachusetts. She has presented
            masterclasses at the Paul Rolland String Pedagogy Workshop, American String Teacher Association’s
            National Conference, Tonebase Violin, Virginia Tech, Vanderbilt University Medical Center, DePauw
            University School of Music, and the University of Illinois Urbana Champaign. Previously, Becca was a
            Core Teaching Artist with Apollo’s Fire- the Cleveland Baroque Orchestra in Matteson, IL and
            Coordinator and Violin Instructor for the Illinois Community Music Academy.<br/><br/>
            In 2023, Becca collaborated with the international exhibit Violins of Hope to present her Doctoral
            Lecture Recital, Imagining New Possibilities for 21 st -Century Classical Music Performance: Drawing
            Inspiration from the Berlin Cabarets of the Weimar Republic. Joined by co-founder Avshalom Weinstein,
            Becca performed a recital on violins restored and recovered from the Holocaust. The concert featured
            dancers, musicians, visual artists, and puppeteers from seven countries and a performance of two world
            premieres.
            In addition, Becca is extremely devoted to bringing music into the community. She served as the first co-
            director of the Peabody String Sinfonia, a conductor-less string ensemble at Peabody Conservatory that
            performs exclusively at community venues. Becca has also been on a discussion panel with Midori
            discussing community engagement and outreach in the 21 st century.<br/><br/>Currently, Becca is on the Board of
            Trustees for the Volunteer Musicians for the Arts in Boston, MA where she received a Community
            Leadership Award in 2021. Becca Kasdan is the 2018 recipient of the Johns Hopkins President’s
            Commendation for Achievement in the Arts, the Grace Clagett Ranney Prize in Chamber Music, the
            String Achievement Award from the University of Illinois Urbana-Champaign, and is a member of the Pi
            Kappa Lambda and Phi Kappa Phi’s prestigious music guilds.
            </p>
            </div>
          </div>
    </main>
  )
}