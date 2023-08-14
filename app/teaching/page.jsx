'use client';
import Image from 'next/image';
import Teachingbecca from 'public/Teachingbecca.png';
import smallert from 'public/smallert.jpg';
import smallerstairs from 'public/smallerstairs.jpg';
import fixed from "public/fixed.jpg";
import { useEffect, useRef } from 'react';



export default function Teaching() {

    const contentRef = useRef(null);

    useEffect(() => {
        const contentEl = contentRef.current;
        if(contentEl){
            contentEl.classList.remove("opacity-0");
        }
    },[]);

    return (
        <div ref={contentRef} className="relative w-full bg-white min-h-screen flex flex-col transition-opacity opacity-0 duration-[2s]">
        <h1 className="text-center text-xl md:text-3xl font-semibold mt-20 md:py-8 py-5 px-6 md:px-0 bg-gradient-to-r from-slate-400 via-slate-900 to-maroon shadow-2xl text-white">Teaching Philosophy</h1>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 grid grid-cols-1 md:grid-cols-12 gap-0 my-2 md:my-2 md:px-12 ">
            <div className="order-2 md:order-1 md:col-span-6 relative flex flex-col">
            <Image src={fixed} alt="violinsofhope" priority={true} quality={90} sizes="100vw" className='w-full object-contain h-60 md:h-[400px] mb-8 order-3 md:order-1'/>
            <p className="font-medium text-sm left-0 py-2 mb-5 md:mb-0 px-6 leading-5 md:text-justify text-center order-3 md:order-1"> I take the time to set up personal meetings with my students before they begin their studies and discuss 
            their learning objectives and musical interests. Together we collaborate on choosing repertoire that interests and excites them. As a result, 
            I teach a wide variety of genres, composers from underrepresented backgrounds, and I am constantly learning new works alongside my students which I enjoy 
            immensely. Beyond studio lessons, 
            I am constantly creating and finding opportunities for my students to perform and explore multi-faceted careers as emerging artists. 
            I encourage my students to explore performing opportunities in the community, as I believe that performing frequently is a critical part to musical advancement. 
            Furthermore, I strongly believe that if you can convey the characters, emotions, and technique in an engaging performance to audiences not familiar with classical music, 
            you have not only fully learned the piece, but you have made a meaningful contribution to the community and perhaps inspired others to share in your musical passion. 
            My unique method of teaching encompasses a thoughtful and diligent approach to musical technique, a high standard of musical excellence, a commitment to community outreach and performance, 
            public speaking preparation, and a collaborative experience that is student-centered and fosters a life-long appreciation and passion for music.</p>
            </div>
            <div className='order-1 md:order-2 md:col-span-5'>
            <div className="col-span-6 relative">
            <p className="py-4 text-sm px-6 font-medium text-black md:px-6 md:text-justify text-center mb-2 md:mb-0">
            My goal as a teacher is to inspire each of my students to become their own teacher by developing as creative and thoughtful musicians. 
            I believe that communicating with students in a kind and respectful manner is of the utmost importance to foster a love of learning 
            and performing and to instill life-long practice skills. I urge my students to constantly be creative in their approach to practicing 
            and music-making by offering a variety of ways to practice technical passages and encourage students to decide their own musical 
            phrasing and characters within a piece. I also emphasize freedom and physical relaxation in playing and enjoy problem solving alongside 
            students to ensure ease and comfort when playing. I particularly look forward to studio lessons because they offer a unique experience of 
            really understanding a student’s goals, personality, and learning style. I cultivate a meaningful relationship with each student ensuring that 
            they feel safe, valued, and inspired. 
            </p>
            </div> 
                <div className="order-1 md:order-3 flex flex-col items-center">
                <Image src={Teachingbecca} alt="violinsofhope" priority={true} quality={90} sizes="100vw" className='w-full md:mb-8 my-16'/>
                    <a href="/contact" target="_blank" rel="noreferrer">
                        <button className="bg-black text-white font-bold py-2 px-4 md:py-4 mb-4 text-sm md:text-base rounded-full transform hover:scale-110">Contact</button>
                    </a>
                </div>
            </div>
        </div>
        <h1 className="text-center text-xl md:text-3xl font-semibold md:py-8 py-5 px-6 md:px-0 bg-gradient-to-r from-slate-400 via-slate-900 to-maroon shadow-2xl text-white">Upcoming and Previous Teaching</h1>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:my-10 flex flex-col md:flex-col sm:flex-col lg:flex-row lg:space-y-0 lg:space-x-1">
            <div className="flex-1 relative w-full top-10 md:top-0">
                <Image src={smallerstairs} alt="stairs" priority={true} quality={100} className='w-full md:h-full mb-8 object-contain lg:object-cover '/>
            </div>
            <div className='w-full flex-1 md:text-left text-center sm:order-2'>
                <div className="flex flex-col h-full">
                    <div className='py-8 px-'>
                        <h3 className='text-base md:text-lg font-bold '>Community MusicWorks, Resident Musician - Providence, RI</h3>
                        <a href="https://communitymusicworks.org/" target="_blank" rel="noreferrer" className='text-sm md:text-base font-medium text-maroon'>Learn More!</a>
                        <h3 className='text-base md:text-lg font-bold py-4'>Summer Teaching:</h3>
                        <p className='text-sm '>Faculty at Easton Chamber Music Festival in Massachusetts:</p>
                        <a href="http://eastonchambermusicfestival.org/index.html" target="_blank" rel="noreferrer" className='text-maroon text-sm md:text-base'> http://eastonchambermusicfestival.org/index.html</a>
                        <p className='text-sm '>Faculty at Luzerne Music Center, Senior Session in New York:</p> 
                        <a href="https://www.luzernemusic.org/" target="_blank" rel="noreferrer" className='text-maroon text-sm md:text-base'> https://www.luzernemusic.org</a>
                        <h3 className='text-base md:text-lg font-bold py-4'> Previous Masterclasses and Lectures:</h3>
                        <p className='text-sm  leading-relaxed'>Virginia Tech (preparatory and collegiate), DePaul University School of Music, Tonebase Violin (sightreading skills and tips).
                        <br/>I have lectured on String Quartet Pedagogy in Higher Education at the Paul Rolland String Pedagogy Workshop (2021) and the American String Teacher’s Association (ASTA) National Conference (2022). I received my Level 1 Rolland Certification in 2021.
                        <br/>I am also available for Public Speaking Workshops for Presenting Music in Community Settings. Past masterclasses have been given at the University of Illinois Urbana-Champaign and for the Peabody String Sinfonia in Baltimore, MD.
                        </p>
                        <h3 className='text-base md:text-lg font-bold py-4'> Previous Teaching: </h3>
                        <p className='text-sm '>Core Teaching Artist at Apollo’s Fire-Cleveland Baroque Orchestra: Matteson, IL Side-by-Side Program:
                            <br/>Taught elementary beginner group string classes (violin, viola, cello) and high school string students;
                            <br/> Performed in side-by-side concerts with students;
                            <br/>Designed elementary school curriculum.
                        </p>
                        <a href="https://apollosfire.org/side-by-side/" target="_blank" rel="noreferrer" className='text-maroon text-sm md:text-base'> https://apollosfire.org/side-by-side</a>
                        <h3 className='text-base md:text-lg font-bold py-4'> University of Illinois Urbana-Champaign, Violin Teaching Assistant: </h3>
                        <p className='text-sm leading-relaxed'>I have taught the following courses to Music Majors and Non-Music Majors at the Undergraduate and Graduate levels:
                           <br/> MUSC 110- Violin;
                            <br/>MUSC 410- Advanced Violin;
                            <br/>MUSC 450- Chamber Music;
                            <br/>Violin Scale Technique Class- Undergraduate and Graduate Violin Music Majors.
                            </p>
                        <h3 className='text-base md:text-lg font-bold  py-4'>Coordinator and Violin Instructor at the Illinois Community Music Academy:</h3>
                        <p className='text-sm  leading-relaxed'> Violin Lessons: Middle School-Adult; <br/> Led Youth Orchestra Sectionals; <br/> Directed Curriculum Meetings for ICMA instructors.</p>
                        <h3 className='text-sm  font-medium py-1 pt-2'>Violin Teaching Assistant to Violaine Melancon at McGill University, Undergraduate Etude Lessons (2019-2020)</h3>
                        <h3 className='text-sm  py-1 font-medium'>Guest Violin Workshop for Aphasia Group of Middle Tennessee, Vanderbilt University Medical Center (2020)</h3>
                        <h3 className='text-sm  py-1 font-medium'>Studio Teaching in Baltimore, MD (2015-2018)</h3>
                        
                    </div>
            </div>
        </div>  
    </div>
    </div>
)}