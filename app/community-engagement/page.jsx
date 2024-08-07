'use client';
import EmblaCarousel from '../carousel.jsx'; // adjust path as needed
import Image from 'next/image.js';
import { useEffect, useRef } from 'react';

export default function CommunityEngagement() {
  const slides = Array.from({ length: 5 }, (_, index) => index); 

  const contentRef = useRef(null);

  useEffect(() => {
      const contentEl = contentRef.current;
      if(contentEl){
          contentEl.classList.remove("opacity-0");
      }
  },[]);

  return (
    <div ref={contentRef}className="relative w-ful min-h-screen flex flex-col transition-opacity opacity-0 duration-[2s] ">
        <EmblaCarousel slides={slides} />
        <h1 className="text-center text-xl md:text-4xl font-semibold md:py-8 py-5 px-6 md:px-0 bg-gradient-to-r from-slate-400 via-slate-900 to-maroon text-white mt-4">Community Engagement</h1>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:my-16 ">
            <div className="relative flex flex-col sm:flex-col md:flex-row">
            <Image src="/image1.jpeg" alt="teaching" priority={true} quality={75} width={500} height={500} className='w-full md:w-[530px] h-90 px-5 py-5 md:h-[500px] lg:w-[830px] lg:h-[800px] object-contain '/>
            <p className="px-6 font-medium text-sm md:text-base py-5 md:mb-0 md:mt-10 lg:mt-40 text-center w-full md:w-1/2"> I am deeply passionate about community engagement, 
            frequently performing at community venues and engaging with the community in meaningful ways. I have organized and performed concerts at addiction recovery centers, 
            veteran homes, breweries, museums, libraries, retirement centers, prisons, hospitals, baseball stadiums, places of worship, and Early Head Start programs among others.
             I strongly believe that presenting concerts to audiences who may not have access to traditional concert spaces is the key to breaking down racial, economic, 
             and cultural barriers in our community.</p>
            </div>
          </div>
          <span className="block h-2 md:my-10 mx-auto w-1/3 bg-gradient-to-r from-slate-400 via-slate-900 to-maroon"></span>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:my-10 flex flex-col md:flex-col sm:flex-col lg:flex-row lg:space-y-0 lg:space-x-1">
            <div className="flex-1 relative w-full top-10 md:top-0">
                <Image src="/vohshadows.jpg" alt="shadows" priority={true} quality={75} width={500} height={500} className='w-full md:h-full mb-8 object-contain lg:object-cover '/>
            </div>
            <div className='w-full flex-1 text-center sm:order-2 lg:w-1/2'>
                <div className="flex flex-col h-full">
                    <div className='py-8 px-6'>
                        <h3 className='text-base md:text-lg font-bold '>Volunteer Musicians for the Arts, Board of Trustees (2020-present)</h3>
                        <p className='text-sm'>We believe that everyone deserves orchestra seats! Find out how you can get involved today!</p>
                        <a href="https://volunteermusicians.org/" target="_blank" rel="noreferrer" className='text-sm md:text-base font-medium text-maroon'>Learn More!</a>
                        <h3 className='text-base md:text-lg font-bold py-4'>Carle Community Concerts: Founder and Director (2020)</h3>
                        <p className='text-sm '>During the COVID pandemic in 2020 I started a weekly live-stream concert series at the University of Illinois Urbana Champaign.
                         Partnering with Carle Hospital, my goal was to provide healing and beauty to both hospital patients and healthcare workers at a time
                          when many live performances were canceled. These concerts offered a variety of musical genres ranging from original song compositions, musical theater, 
                          traditional Chinese songs with historical instruments, fiddle-sax fusion, and classical music. Carle Community Concerts are the first regularly scheduled student concert series 
                          and the first community engagement concert series hosted by UIUC School of Music since its inception.</p>
                        <h3 className='text-base md:text-lg font-bold py-4'>Co-Director Peabody String Sinfonia (2017-2018)</h3>
                        <p className='text-sm  leading-relaxed'>Recipient of Johns Hopkins President’s Commendation for Achievement in the Arts for my lasting impact on the Baltimore Community
                        </p>
                        <a href="https://peabody.jhu.edu/life-at-peabody/career-services/opportunities/community-based-learning/string-sinfonia/" target="_blank" rel="noreferrer" className='text-sm md:text-base font-medium text-maroon'>Learn More!</a>
                        <h3 className='text-base md:text-lg font-bold '>My commitment to community engagement is highlighted in Dr. Lisa Redpath’s book:</h3>
                        <p className='text-sm  leading-relaxed'>In Harmony: The Complementary Musical Tales of the Brockton Symphony Orchestra, Sharon Civic Orchestra, and Sharon Community Chamber Orchestra. Buy your copy today!
                        </p>
                        <a href="https://www.amazon.com/Harmony-Complementary-Brockton-Orchestra-Community/dp/1627343830" target="_blank" rel="noreferrer" className='text-sm md:text-base font-medium text-maroon'>Learn More!</a>
                        
                  </div>
                  
                </div>

              </div>
              
           </div>
           <span className="block h-2 my-12 mx-auto w-1/3 bg-gradient-to-r from-slate-400 via-slate-900 to-maroon"></span>
    </div>
    
  )
}
