'use client';
import Image from 'next/image';
import porta from 'public/porta.jpg';
import Teachingbecca from 'public/Teachingbecca.png';
import herovoh from 'public/herovoh.jpg';
import stairs from 'public/stairs.jpg';



export default function Teaching() {

    return (
        <div className="relative w-full bg-white min-h-screen flex flex-col">
        <div className='inset-0'>
            <div className="relative w-full h-72 top-20 md:h-screen">
                <Image
                    src={porta}
                    alt="violinsofhope"
                    placeholder='blur'
                    priority={true}
                    quality={75}
                    sizes="100vw"
                    fill
                    className="object-cover object-top w-full h-full"
                />
            </div>
        </div>
        <h1 className="text-center text-xl md:text-4xl font-bold mt-20 py-5 px-6 md:px-0 bg-black bg-opacity-50 text-white">Teaching Philosophy</h1>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 grid grid-cols-1 md:grid-cols-12 gap-0 my-2 md:my-2 ">
            <div className="order-2 md:order-1 md:col-span-7 relative flex flex-col">
            <Image src={herovoh} alt="violinsofhope" priority={true} quality={75} className='w-full h-60 md:h-[400px] mb-8 order-3 md:order-1'/>
            <p className="font-medium text-sm left-0 py-2 mb-5 md:mb-0 px-6 leading-5 text-justify order-2 md:order-1"> I take the time to set up personal meetings with my students before they begin their studies and discuss 
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
            <div className="col-span-5 relative">
            <p className="py-3 text-sm px-6 font-medium text-black md:px-6 text-justify ">
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
                <Image src={Teachingbecca} alt="violinsofhope" priority={true} quality={75} className='w-full md:mb-8 my-6'/>
                    <a href="https://www.violins-of-hope.com/" target="_blank" rel="noreferrer">
                        <button className="bg-black text-white font-bold py-2 px-4 md:py-4 mb-4 text-sm md:text-base rounded-full transform hover:scale-110">Contact</button>
                    </a>
                </div>
            </div>
        </div>
        <h1 className="text-center text-xl md:text-4xl font-bold py-5 px-6 md:px-0 bg-black bg-opacity-50 text-white">Upcoming and Previous Teaching</h1>
        <div className="w-full mx-auto px-4 sm:px-6  md:my-16 md:px-48 flex flex-col lg:flex-row lg:space-y-0 lg:space-x-1">
            <div className="flex-1 relative w-full top-10 md:top-0">
                <Image src={stairs} alt="stairs" priority={true} quality={75} className='w-full md:h-full mb-8'/>
            </div>
            <div className='w-full flex-1'>
                <div className="flex flex-col h-full">
                    <div className='py-8 px-6'>
                        <h3 className='text-base md:text-lg font-bold '>Community MusicWorks, Resident Musician- Providence, RI</h3>
                        <a href="https://communitymusicworks.org/" target="_blank" rel="noreferrer" className='text-sm md:text-base font-medium text-maroon'>Learn More!</a>
                        <h3 className='text-base md:text-lg font-bold py-4'>Summer Teaching:</h3>
                        <p className='text-sm md:text-base'>Faculty at Easton Chamber Music Festival in Massachusetts:</p>
                        <a href="http://eastonchambermusicfestival.org/index.html" target="_blank" rel="noreferrer" className='text-maroon text-sm md:text-base'> http://eastonchambermusicfestival.org/index.html</a>
                        <p className='text-sm md:text-base'>Faculty at Luzerne Music Center, Senior Session in New York:</p> 
                        <a href="https://www.luzernemusic.org/" target="_blank" rel="noreferrer" className='text-maroon text-sm md:text-base'> https://www.luzernemusic.org</a>
                        <h3 className='text-base md:text-lg font-bold py-4'> Previous Masterclasses and Lectures:</h3>
                        <p className='text-sm md:text-base leading-relaxed'>Virginia Tech (preparatory and collegiate), DePaul University School of Music, Tonebase Violin (sightreading skills and tips).
                        <br/>I have lectured on String Quartet Pedagogy in Higher Education at the Paul Rolland String Pedagogy Workshop (2021) and the American String Teacher’s Association (ASTA) National Conference (2022). I received my Level 1 Rolland Certification in 2021.
                        <br/>I am also available for Public Speaking Workshops for Presenting Music in Community Settings. Past masterclasses have been given at the University of Illinois Urbana-Champaign and for the Peabody String Sinfonia in Baltimore, MD.
                        </p>
                        <h3 className='text-base md:text-lg font-bold py-4'> Previous Teaching: </h3>
                        <p className='text-sm md:text-base'>Core Teaching Artist at Apollo’s Fire-Cleveland Baroque Orchestra: Matteson, IL Side-by-Side Program:
                            <br/>Taught elementary beginner group string classes (violin, viola, cello) and high school string students;
                            <br/> Performed in side-by-side concerts with students;
                            <br/>Designed elementary school curriculum.
                        </p>
                        <a href="https://apollosfire.org/side-by-side/" target="_blank" rel="noreferrer" className='text-maroon text-sm md:text-base'> https://apollosfire.org/side-by-side</a>
                        <h3 className='text-base md:text-lg font-bold py-4'> University of Illinois Urbana-Champaign, Violin Teaching Assistant: </h3>
                        <p className='text-sm md:text-base leading-relaxed'>I have taught the following courses to Music Majors and Non-Music Majors at the Undergraduate and Graduate levels:
                           <br/> MUSC 110- Violin;
                            <br/>MUSC 410- Advanced Violin;
                            <br/>MUSC 450- Chamber Music;
                            <br/>Violin Scale Technique Class- Undergraduate and Graduate Violin Music Majors.
                            </p>
                        <h3 className='text-base md:text-lg font-bold  py-4'>Coordinator and Violin Instructor at the Illinois Community Music Academy:</h3>
                        <p className='text-sm md:text-base leading-relaxed'> Violin Lessons: Middle School-Adult; <br/> Led Youth Orchestra Sectionals; <br/> Directed Curriculum Meetings for ICMA instructors.</p>
                        <h3 className='text-sm md:text-base font-medium py-1 pt-2'>Violin Teaching Assistant to Violaine Melancon at McGill University, Undergraduate Etude Lessons (2019-2020)</h3>
                        <h3 className='text-sm md:text-base py-1 font-medium'>Guest Violin Workshop for Aphasia Group of Middle Tennessee, Vanderbilt University Medical Center (2020)</h3>
                        <h3 className='text-sm md:text-base py-1 font-medium'>Studio Teaching in Baltimore, MD (2015-2018)</h3>
                        
                    </div>
            </div>
        </div>  
    </div>
    </div>
)}