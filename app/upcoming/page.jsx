import Image from 'next/image';
import upcoming from "public/upcoming.jpg";

export default function Upcoming() {
    return (
        <div className="grid md:grid-rows-1 grid-rows-4 min-h-screen">
            <div className='md:fixed inset-0'>
              <div className="relative w-full h-64 md:h-screen">
                <Image 
                    src={upcoming} 
                    alt="Becca" 
                    fill={true}
                    className="object-cover object-center w-full h-full" 
                    priority={true}
                />
               </div>
             </div>
            <div className="relative px-6 md:px-24 md:py-24 md:absolute md:inset-0 md:z-10 md:bg-transparent">
                <h2 className="text-4xl mb-6 md:text-white md:py-8">Upcoming Events</h2>
                <p className='md:text-white text-justify-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non ligula at enim ornare aliquam. Nulla facilisi. Curabitur quis nibh convallis, porttitor erat sed, fermentum sem. Integer vel lorem dolor. Aenean sed luctus sem.</p>
                <p className="mt-6 md:text-white">Duis ac sodales erat. Fusce id ex at erat lobortis efficitur sed eu libero. Proin a tellus interdum, egestas est in, sodales tellus. Sed interdum, turpis at varius congue, justo felis aliquam nulla, eu interdum risus lacus ut tellus.</p>
                {/* You can add more content here */}
            </div>
        </div>
    )
}
