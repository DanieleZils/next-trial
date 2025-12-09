"use client";
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function UpcomingEvents() {

    const contentRef = useRef(null);

    useEffect(() => {
        const contentEl = contentRef.current;
        if(contentEl){
            contentEl.classList.remove("opacity-0");
        }
    },[]);


    return (
        <div className="relative md:grid md:grid-cols-1 min-h-screen bg-white">
            <div className=' inset-0 md:fixed'>
              <div className="relative top-20 w-full h-64 md:h-screen">
                <Image 
                    src="/eventtwo.jpg" 
                    alt="Becca" 
                    quality={90}
                    fill
                    sizes="100vx"
                    priority={true}
                    className="object-cover object-top w-full h-full transition-opacity opacity-0 duration-[2s]"
                    onLoadingComplete={(image)=> image.classList.remove("opacity-0")}
                    
                />
               </div>
            </div>
            <div ref={contentRef}
            className="relative p-8 py-24 md:px-12 md:py-24 md:absolute md:inset-0 md:z-10 md:bg-transparent md:mb-10 transition-opacity opacity-0 duration-[2s]">
                <h2 className=" py-5 text-2xl font-semibold text-black md:text-black md:py-5 text-center md:text-left">Upcoming 2025 - 2026 Events</h2>
                <div className='md:text-black md:text-left space-y-6'>
                    <div className="bg-black bg-opacity-30 md:text-black text-white md:bg-transparent rounded-lg shadow-xl md:shadow-none p-6 md:p-0">
                        <h3 className="font-bold pb-2">RI Philharmonic - Handel's Messiah</h3>
                        <p className='font-medium text-base pb-2'>Sunday, December 14, 2025 • 3 PM</p>
                        <p className='font-medium text-sm pb-2'>Location: VETS Memorial Auditorium, Providence RI</p>
                        <a href="https://www.thevetsri.com/events/detail/handels-messiah-25" className='font-bold hover:text-maroon'>Learn More</a>
                    </div>
                    <div className="bg-black bg-opacity-30 md:text-black text-white md:bg-transparent rounded-lg shadow-xl md:shadow-none p-6 md:p-0">
                        <h3 className="font-bold pb-2">New England Conservatory Expanded Education Faculty Recital</h3>
                        <p className='font-medium text-base pb-2'>Thursday, February 19, 2026 • 8 PM</p>
                        <p className='font-medium text-base pb-2'>With Victor Cayres, piano, and Eugene Kim, cello</p>
                        <p className='font-medium text-base pb-2'>Program: Works by Elgar, Amy Beach, Turina, Adrienne Albert, and Ilan Rechtman</p>
                        <p className='font-medium text-sm pb-2'>Location: Williams Hall, 290 Huntington Ave, Boston, MA 02115</p>
                    </div>
                </div>
                <h2 className=" py-5 text-2xl font-semibold text-black md:text-black md:py-5 text-center md:text-left">Past 2025 Events</h2>
                <div className='md:text-black md:text-left space-y-6'>
                    <div className="bg-black bg-opacity-30 md:text-black text-white md:bg-transparent rounded-lg shadow-xl md:shadow-none p-6 md:p-0">
                        <h3 className="font-bold pb-2">A Child's Christmas in Wales with the Aurea Ensemble</h3>
                        <p className='font-medium text-base pb-2'>Sunday, December 7, 2025 • 3 PM</p>
                        <p className='font-medium text-base pb-2'>Sarah Whitney, violin; Consuelo Sherba, viola; Emmanuel Feldman, cello</p>
                        <p className='font-medium text-sm pb-2'>Location: St Martin's Episcopal Church, 50 Orchard Ave, Providence RI 02906</p>
                    </div>
                    <div className="bg-black bg-opacity-30 md:text-black text-white md:bg-transparent rounded-lg shadow-xl md:shadow-none p-6 md:p-0">
                        <h3 className="font-bold pb-2">Bach Marathon</h3>
                        <p className='font-medium text-base pb-2'>Friday, November 7, 2025 • 7 PM, all night!</p>
                        <p className='font-medium text-sm pb-2'>Location: Manning Chapel, 21 Prospect St, Providence, RI 02912</p>
                        <p className='font-medium text-sm pb-2'>Free and no tickets required</p>
                    </div>
                    <div className="bg-black bg-opacity-30 md:text-black text-white md:bg-transparent rounded-lg shadow-xl md:shadow-none p-6 md:p-0">
                        <h3 className="font-bold pb-2">Chamber Concert, Fauré Piano Quartet</h3>
                        <p className="font-medium text-base pb-2">Saturday, October 25, 2025 • 3 PM</p>
                        <p className="font-medium text-sm pb-2">Location: First Church, 6 Eliot Street, Jamaica Plain, MA 02130</p>
                    </div>
                    <div className="bg-black bg-opacity-30 md:text-black text-white md:bg-transparent rounded-lg shadow-xl md:shadow-none p-6 md:p-0">
                    <h3 className="font-bold pb-2">Brown Faculty Chamber Concert</h3>
                    <p className="font-medium text-base pb-2">Sunday, October 5, 2025 • 2 PM</p>
                    <p className="font-medium text-sm pb-2">Location: Grant Recital Hall, 105 Benevolent St, Providence, RI 02906</p>
                    <p className="font-medium text-sm pb-2">Program: Frank Bridge <em>Phantasy</em> for piano quartet; Korngold quartet for 2 violins, cello, piano left hand</p>
                    <p className="font-medium text-sm pb-2">Performers: Becca Kasdan (violin), Jesse Holstein (violin/viola), Megan Koch (cello), Andrew Welch (piano)</p>
                    <p className="font-medium text-sm pb-2">Free admission, no ticket reservations required</p>
                    </div>
                    <div className="bg-black bg-opacity-30 md:text-black text-white md:bg-transparent rounded-lg shadow-xl md:shadow-none p-6 md:p-0">
                    <h3 className="font-bold pb-2">Newport Pocket Concerts</h3>
                    <p className="font-medium text-base pb-2">Solo violin performance of Berlin cabaret music</p>
                    <p className="font-medium text-base pb-2">Sunday, September 21, 2025 • 11 AM–12 PM</p>
                    <p className="font-medium text-sm pb-2">Location: Belmont Chapel, 30 Warner St, Newport, RI 02840</p>
                    <a href="https://pci.jotform.com/form/252384992740163" className="font-bold hover:text-maroon">Tickets &amp; Information</a>
                    </div>
                    <div className="bg-black bg-opacity-30 md:text-black text-white md:bg-transparent rounded-lg shadow-xl md:shadow-none p-6 md:p-0">
                        <h3 className="font-bold pb-2">Rhode Island Philharmonic - Pops concert with conductor Troy Quinn </h3>
                        <p className='font-medium text-base pb-2'>Friday, July 11, 2025 • 8 PM</p>
                        <p className='font-medium text-sm pb-2'>Location: Narragansett Beach</p>
                    </div>
                </div>
                <h2 className=" py-5 text-2xl font-semibold text-black md:text-black md:py-5 text-center md:text-left">2024 - 2025 Events</h2>
                <div className='md:text-black md:text-left space-y-6'>
                    {/* Replace these divs with your own event data */}
                    <div className="bg-black bg-opacity-30 md:text-black text-white md:bg-transparent rounded-lg shadow-xl md:shadow-none p-6 md:p-0">
                        <h3 className="font-bold pb-2">MusicWorks Collective Season Finale concerts</h3>
                        <p className='font-medium text-base pb-2'>Works by Tchaikovsky, Jennifer Higdon, and Nikos Skalkotas</p>
                        <p className='font-medium text-base pb-2'>June 7, 2025 • 7 PM</p>
                        <p className='font-medium text-sm pb-2'>Location: 1326 Westminster St. Providence RI</p>
                    </div>
                    <div className="bg-black bg-opacity-30 md:text-black text-white md:bg-transparent rounded-lg shadow-xl md:shadow-none p-6 md:p-0">
                        <h3 className="font-bold pb-2">Korngold Suite for 2 violins, cello and piano, other chamber works TBA</h3>
                        <p className='font-medium text-base pb-2'>April 27, 2025</p>
                        <p className='font-medium text-sm pb-2'>Location: Dedham/Falmouth MA</p>
                    </div>
                    <div className="bg-black bg-opacity-30 md:text-black text-white md:bg-transparent rounded-lg shadow-xl md:shadow-none p-6 md:p-0">
                        <h3 className="font-bold pb-2">MusicWorks Collective Concert</h3>
                        <p className='font-medium text-base pb-2'>April 5 and 6, 2025 • 7 PM</p>
                        <p className='font-medium text-sm pb-2'>Location: 1326 Westminster St. Providence, RI</p>
                    </div>
                    <div className="bg-black bg-opacity-30 md:text-black text-white md:bg-transparent rounded-lg shadow-xl md:shadow-none p-6 md:p-0">
                        <h3 className="font-bold pb-2">Mendelssohn Octet with the Isidore Quartet</h3>
                        <p className='font-medium text-base pb-2'>March 15, 2025 • 7 PM</p>
                        <p className='font-medium text-sm pb-2'>Location: 1326 Westminster St. Providence, RI</p>
                    </div>
                    <div className="bg-black bg-opacity-30 md:text-black text-white md:bg-transparent rounded-lg shadow-xl md:shadow-none p-6 md:p-0">
                        <h3 className="font-bold pb-2">Brown University Faculty Recital with Jesse Holstein (violin) and Andrew Welch (piano)</h3>
                        <p className='font-medium text-base pb-2'>Works by Leclair, Bacewicz, Shostakovich, and Moszkowski.</p>
                        <p className='font-medium text-base pb-2'>March 3, 2025 • 7 PM</p>
                        <p className='font-medium text-sm pb-2'>Location: Brown University's Grant Hall</p>
                        <p className='font-medium text-base pb-2'>March 6, 2025 • 7 PM</p>
                        <p className='font-medium text-sm pb-2'>Location: Bell Street Congregation in Providence RI</p>
                    </div>
                    <div className="bg-black bg-opacity-30 md:text-black text-white md:bg-transparent rounded-lg shadow-xl md:shadow-none p-6 md:p-0">
                        <h3 className="font-bold pb-2">MusicWorks Collective Concert</h3>
                        <p className='font-medium text-base pb-2'>Featuring Jeremy Eicher's book, Time's Echo,<br></br>
                        Works by Shostakovich, Britten, and Strauss</p>
                        <p className='font-medium text-base pb-2'>January 26, 2025 • 7 PM</p>
                        <p className='font-medium text-sm pb-2'>Location: 1326 Westminster St. Providence</p>
                    </div>
                     <div className="bg-black bg-opacity-30 md:text-black text-white md:bg-transparent rounded-lg shadow-xl md:shadow-none p-6 md:p-0">
                        <h3 className="font-bold pb-2">Violins of Hope Opening Concert</h3>
                        <p className='font-medium text-base pb-2'>Works by Korngold, Robert Dauber, John Wiliams, Joseph Achron,<br></br> 
                        Kurt Weill, Gershwin, Ignace Lilien with Pianist Andrei Baumann</p>
                        <p className='font-medium text-base pb-2'>November 9, 2024 • 7 PM</p>
                        <p className='font-medium text-sm pb-2'>Jewish Alliance of Greater Rhode Island</p>
                        <p className='font-medium text-sm pb-2'>Location: 401 Elmgrove Ave. Providence RI 02906</p>
                    </div>
                    <div className="bg-black bg-opacity-30 md:text-black text-white md:bg-transparent rounded-lg shadow-xl md:shadow-none p-6 md:p-0">
                        <h3 className="font-bold pb-2">Violins of Hope Pre-Concert and Discussion</h3>
                        <p className='font-medium text-base pb-2'>November 8, 2024 • Following Shabbat Service</p>
                        <p className='font-medium text-sm pb-2'>Location: Temple Sinai, Sharon MA</p>
                    </div>
                    <div className="bg-black bg-opacity-30 md:text-black text-white md:bg-transparent rounded-lg shadow-xl md:shadow-none p-6 md:p-0">
                        <h3 className="font-bold pb-2">Bach Marathon</h3>
                        <p className='font-medium text-base pb-2'>November 1, 2024 • 7 PM</p>
                        <p className='font-medium text-sm pb-2'>Location: Manning Chapel, Brown University</p>
                    </div>
                    <div className="bg-black bg-opacity-30 md:text-black text-white md:bg-transparent rounded-lg shadow-xl md:shadow-none p-6 md:p-0">
                        <h3 className="font-bold pb-2">MusicWorks Collective in Concert</h3>
                        <p className='font-medium text-base pb-2'>Works by Wang Lu, Jessie Montgomery, Josef Suk, Reena Esmail</p>
                        <p className='font-medium text-sm pb-2'>October 27, 2024 • 3 PM</p>
                        <p className='font-medium text-sm pb-2'>Location: Lindemann Performing Arts Center, Brown University</p>
                    </div>
                    <div className="bg-black bg-opacity-30 md:text-black text-white md:bg-transparent rounded-lg shadow-xl md:shadow-none p-6 md:p-0">
                        <h3 className="font-bold pb-2">Community MusicWorks Sonata Series Concert</h3>
                        <p className='font-medium text-base pb-2'>Playing works by  Jesús García Leoz and Korngold with pianist Eliko Akahori</p>
                        <p className='font-medium text-base pb-2'>October 17, 2024 • 7 PM</p>
                           <a href="https://communitymusicworks.org/event/sonata-series-event-1-2/" className='font-bold hover:text-maroon'>Learn More</a>
                    </div>
                    <div className="bg-black bg-opacity-30 md:text-black text-white md:bg-transparent rounded-lg shadow-xl md:shadow-none p-6 md:p-0">
                        <h3 className="font-bold pb-2">Community MusicWorks Grand Opening </h3>
                        <p className='font-medium text-base pb-2'>New Commission by composer Wang Lu</p>
                        <p className='font-medium text-base pb-2'>September 28, 2024 • 2-7 PM</p>
                        <p className='font-medium text-sm pb-2'>Location: 1326 Westminster Street, Providence</p>
                           <a href="https://communitymusicworks.org/event/cmw-grand-opening-celebration/" className='font-bold hover:text-maroon'>Learn More</a>
                    </div>
                </div>
                <h2 className=" py-5 text-2xl font-semibold text-black md:text-black md:py-5 text-center md:text-left">2023 - 2024 Events</h2>
                <div className='md:text-black md:text-left space-y-6'>
                    {/* Replace these divs with your own event data */}
                    <div className="bg-black bg-opacity-20 text-white md:text-black md:bg-transparent rounded-lg shadow-xl md:shadow-none p-6 md:p-0">
                    <h3 className="font-bold pb-2">Luzerne Music Center Faculty Performances</h3>
                        <p className='font-medium text-base pb-2'>July 26, 2024 • 7:30 PM <br/>
                        August 2, 2024 • 7:30 PM <br/>
                        August 9, 2024 • 7:30 PM</p>
                           <a href="https://www.luzernemusic.org/2023-season" className='font-bold hover:text-maroon'>Learn More</a>
                    </div>
                    <div className="bg-black bg-opacity-20 text-white md:text-black md:bg-transparent md:shadow-none rounded-lg shadow-xl p-6 md:p-0">
                    <h3 className="font-bold pb-2">Luzerne Music Center Faculty Artist Series</h3>
                        <p className='font-medium text-base pb-2'>July 21, 2024 • 7:30 PM (EST) <br/>
                            July 28, 2024 • 7:30 PM (EST) <br/>
                            August 4, 2024 • 7:30 PM (EST)<br />
                            203 Lake Tour Road
                            Lake Luzerne, NY</p>
                           <a href="https://www.luzernemusic.org/2023-season" className='font-bold hover:text-maroon'>Learn More</a>
                    </div>
                    <div className="bg-black bg-opacity-30 md:text-black text-white md:bg-transparent rounded-lg shadow-xl md:shadow-none p-6 md:p-0">
                        <h3 className="font-bold pb-2">Easton Chamber Music Festival Faculty Concerts</h3>
                        <p className=' font-medium text-base pb-2'>June 23, 2024 • 7:30 PM (EST) <br/>
                        June 24, 2024 • 7:30 PM (EST) <br />
                        Covenant Congregational Church<br/>
                        204 Center St., Easton MA</p>
                        <a href="http://eastonchambermusicfestival.org/concerts.html" className='font-bold hover:text-maroon'>Learn More</a>
                    </div>
                    <div className="bg-black bg-opacity-30 md:text-black text-white md:bg-transparent rounded-lg shadow-xl md:shadow-none p-6 md:p-0">
                        <h3 className="font-bold pb-2">Easton Chamber Music Festival Faculty Performances</h3>
                        <p className='font-medium text-base pb-2'>June 21 & 22, 2024 • 7:30 PM</p>
                           <a href="https://eastonchambermusicfestival.org/concerts.html" className='font-bold hover:text-maroon'>Learn More</a>
                    </div>
                    <div className="bg-black bg-opacity-30 md:text-black text-white md:bg-transparent rounded-lg shadow-xl md:shadow-none p-6 md:p-0">
                        <h3 className="font-bold pb-2">Tonebase Violin</h3>
                        <p className='font-medium text-base pb-2'>June 20, 2024 • 3 PM (EST), virtual</p>
                        <p className='font-medium text-base pb-2'>Sight Reading Skills and Tips</p>
                           <a href="https://www.tonebase.co/violin" className='font-bold pb-10 hover:text-maroon'>Learn More</a>
                    </div>
                    <div className="bg-black bg-opacity-30 md:text-black text-white md:bg-transparent rounded-lg shadow-xl md:shadow-none p-6 md:p-0">
                        <h3 className="font-bold pb-2">MusicWorks Collective Providence Tour</h3>
                        <p className='font-medium text-base pb-2'>April 6, 2024 • 5 PM </p>
                        <p className='font-medium text-base pb-2'>Works by: William Grant Still, Jose Elizondo, and more! </p>
                        <p className='font-medium text-sm pb-2'>Location: The Avery, 18 Luongo Square, Providence, RI 02903 <br></br> Public, no tickets required, 21+</p>
                           <a href="https://communitymusicworks.org/events-calendar/" className='font-bold hover:text-maroon'>Learn More</a>
                    </div>
                    <div className="bg-black bg-opacity-30 md:text-black text-white md:bg-transparent rounded-lg shadow-xl md:shadow-none p-6 md:p-0">
                        <h3 className="font-bold pb-2">MusicWorks Collective Providence Tour</h3>
                        <p className='font-medium text-base pb-2'>April 6, 2024 • 2:30 PM </p>
                        <p className='font-medium text-base pb-2'>Works by: William Grant Still, Jose Elizondo, and more! </p>
                        <p className='font-medium text-sm pb-2'>Location: Providence Children's Museum, 100 South St, Providence, RI 02903 <br></br> Open to the public, museum admission required, all ages welcome</p>
                           <a href="https://communitymusicworks.org/events-calendar/" className='font-bold hover:text-maroon'>Learn More</a>
                    </div>
                    <div className="bg-black bg-opacity-30 md:text-black text-white md:bg-transparent rounded-lg shadow-xl md:shadow-none p-6 md:p-0">
                        <h3 className="font-bold pb-2">MusicWorks Collective Providence Tour</h3>
                        <p className='font-medium text-base pb-2'>April 5, 2024 • 5:30 PM </p>
                        <p className='font-medium text-base pb-2'>Works by: William Grant Still, Jose Elizondo, and more! </p>
                        <p className='font-medium text-sm pb-2'>Location: Community MusicWorks Phase II, Providence RI <br></br> Private Concert</p>
                           <a href="https://communitymusicworks.org/events-calendar/" className='font-bold hover:text-maroon'>Learn More</a>
                    </div>
                    <div className="bg-black bg-opacity-30 md:text-black text-white md:bg-transparent rounded-lg shadow-xl md:shadow-none p-6 md:p-0">
                        <h3 className="font-bold pb-2">MusicWorks Collective Providence Tour</h3>
                        <p className='font-medium text-base pb-2'>April 4, 2024 • 1 PM </p>
                        <p className='font-medium text-base pb-2'>Works by: William Grant Still, Jose Elizondo, and more! </p>
                        <p className='font-medium text-sm pb-2'>Location: Rhode Island Free Clinic, Providence RI <br></br> Private Concert</p>
                           <a href="https://communitymusicworks.org/events-calendar/" className='font-bold hover:text-maroon'>Learn More</a>
                    </div>
                    <div className="bg-black bg-opacity-30 md:text-black text-white md:bg-transparent rounded-lg shadow-xl md:shadow-none p-6 md:p-0">
                        <h3 className="font-bold pb-2">MusicWorks Collective Providence Tour</h3>
                        <p className='font-medium text-base pb-2'>April 3, 2024 • 1 PM </p>
                        <p className='font-medium text-base pb-2'>Works by: William Grant Still, Jose Elizondo, and more! </p>
                        <p className='font-medium text-sm pb-2'>Location: The Providence Athenaeum, 251 Benefit St, Providence, RI 02903 <br></br> Open to the public, no reservations or tickets required</p>
                           <a href="https://communitymusicworks.org/events-calendar/" className='font-bold hover:text-maroon'>Learn More</a>
                    </div>
                    <div className="bg-black bg-opacity-30 md:text-black text-white md:bg-transparent rounded-lg shadow-xl md:shadow-none p-6 md:p-0">
                        <h3 className="font-bold pb-2">MusicWorks Collective Providence Tour</h3>
                        <p className='font-medium text-base pb-2'>April 2, 2024 • 11 AM </p>
                        <p className='font-medium text-base pb-2'>Works by: William Grant Still, Jose Elizondo, and more! </p>
                        <p className='font-medium text-sm pb-2'>Location: John Hope Settlement House, Providence RI <br></br> Private Concert </p>
                           <a href="https://communitymusicworks.org/events-calendar/" className='font-bold hover:text-maroon'>Learn More</a>
                    </div>
                    <div className="bg-black bg-opacity-30 md:text-black text-white md:bg-transparent rounded-lg shadow-xl md:shadow-none p-6 md:p-0">
                        <h3 className="font-bold pb-2">Songs of Refuge Concert, Community MusicWorks</h3>
                        <p className='font-medium text-base pb-2'>December 2, 2023 • 7 PM </p>
                        <p className='font-medium text-sm pb-2'>Location: Bell St Chapel, Providence, RI</p>
                           <a href="https://communitymusicworks.org/event/musicworks-collective-and-guests-songs-of-refuge/" className='font-bold hover:text-maroon'>Learn More</a>
                    </div>
                    <div className="bg-black bg-opacity-30 md:text-black text-white md:bg-transparent rounded-lg shadow-xl md:shadow-none p-6 md:p-0">
                        <h3 className="font-bold pb-2">Rhode Island Civic Chorale and Orchestra</h3>
                        <p className='font-medium text-base pb-2'>November 18, 2023 • 7 PM </p>
                        <p className='font-medium text-sm pb-2'>Location: Church of St. Sebastian, Providence, RI 02096</p>
                           <a href="https://ricco.org/spring-2021/" className='font-bold hover:text-maroon'>Learn More</a>
                    </div>
                    <div className="bg-black bg-opacity-30 md:text-black text-white md:bg-transparent rounded-lg shadow-xl md:shadow-none p-6 md:p-0">
                        <h3 className="font-bold pb-2">Community MusicWorks Sonata Series</h3>
                        <p className='font-medium text-base pb-2'>October 26, 2023 • 7 PM </p>
                        <p className='font-medium text-sm pb-2'>Dora Pejačević Violin Sonata No. 1 in D major, Op. 26. With Pianist Andrei Baumann<br/>
                        Location: Music Mansion, 88 Meeting St, Providence, RI 02906</p>
                        <a href="https://www.eventbrite.com/e/sonata-series-event-1-tickets-732842019207?aff=oddtdtcreator" className='font-bold hover:text-maroon'>Purchase Tickets Here</a>
                    </div>
                    <div className=" bg-black bg-opacity-30 md:text-black text-white md:bg-transparent rounded-lg shadow-xl md:shadow-none p-6 md:p-0">
                        <h3 className="font-bold pb-2">Sonata Series with pianist, Andrei Bauman</h3>
                        <p className='font-medium text-base pb-2'>Saturday, October 21, 2023 • 3 PM </p>
                        <p className='font-medium text-sm pb-2'>Dora Pejačević Violin Sonata Op. 26<br/>
                        Location: Unitarian Church Jamaica Plain,<br/> 775 Centre St., Boston, MA 02130</p>
                    </div>
                    <div className="bg-black bg-opacity-30 md:text-black text-white md:bg-transparent rounded-lg shadow-xl md:shadow-none p-6 md:p-0">
                        <h3 className="font-bold pb-2">Community MusicWorks - MusicWorks Collective Concert</h3>
                        <p className='font-medium text-base pb-2'>September 9, 2023 • 4 PM</p>
                        <p className='font-medium text-sm pb-2'>Works by Manuel Ponce, Adrienne Taylor, and Coleridge Taylor Perkinson<br/>
                        Location: Temple to Music, Roger Williams Park, F C Greene Memorial Blvd,<br/> Providence, RI 02910<br/>
                        Admission is free; no reservations necessary </p>
                           <a href="https://communitymusicworks.org/" className='font-bold hover:text-maroon'>Learn More</a>
                    </div>
                    <div className="bg-black bg-opacity-30 md:text-black text-white md:bg-transparent rounded-lg shadow-xl md:shadow-none p-6 md:p-0">
                        <h3 className="font-bold pb-2">MusicWorks Collective Season Opening Concert</h3>
                        <p className='font-medium text-base pb-2'>September 8, 2023 • 7 PM</p>
                        <p className='font-medium text-sm pb-2'>Works by Manuel Ponce, Adrienne Taylor, and Coleridge Taylor Perkinson<br/>
                        Location: Touisset Point Community Club, 10 Touisset Road, Warren, RI 02885<br/>
                        Admission is free; no reservations necessary </p>
                           <a href="https://communitymusicworks.org/event/musicworks-collective-season-opener-2/" className='font-bold hover:text-maroon'>Learn More</a>
                    </div>
            </div>
            </div>
        </div>
    )
}
