
import EmblaCarousel from '../carousel.jsx'; // adjust path as needed
import Image from 'next/image.js';
import image1 from 'public/image1.jpeg';

export default function CommunityEngagement() {
  const slides = Array.from({ length: 5 }, (_, index) => index); 

  return (
    <div className="relative w-ful min-h-screen flex flex-col">
        <EmblaCarousel slides={slides} />
        <h1 className="text-center text-xl md:text-4xl font-bold  py-5 px-6 md:px-0 bg-black bg-opacity-50 text-white">Community Engagement</h1>
        <div className="max-w-7xl mx-auto grid grid-cols-1 my-16 ">
            <div className="relative flex flex-col md:flex-row">
            <Image src={image1} alt="violinsofhope" priority={true} quality={75} className='w-full md:w-1/2 h-60 md:h-[600px] object-contain'/>
            <p className="font-medium text-sm md:text-base py-5 mb-5 md:mb-0 md:mt-32 leading-relaxed text-center w-full md:w-1/2 md:px-12"> I am deeply passionate about community engagement, 
            frequently performing at community venues and engaging with the community in meaningful ways. I have organized and performed concerts at addiction recovery centers, 
            veteran homes, breweries, museums, libraries, retirement centers, prisons, hospitals, baseball stadiums, places of worship, and Early Head Start programs among others.
             I strongly believe that presenting concerts to audiences who may not have access to traditional concert spaces is the key to breaking down racial, economic, 
             and cultural barriers in our community.</p>
            </div>
          </div>
          <h1 className="text-center text-xl md:text-4xl font-bold  py-5 px-6 md:px-0 bg-black bg-opacity-50 text-white">Community Events and Opportunities</h1>
    </div>
    
  )
}
