import Image from 'next/image';
import back from "public/back.jpg";

export default function Upcoming() {

    return (
        <div className="relative w-full h-screen">
          <div className="absolute inset-0 md:h-screen">
            <div className="w-full h-64 md:h-full relative">
                < Image 
                src={back} 
                alt="Becca" 
                fill="responsive"
                priority = {true}
                className="object-cover object-center w-full h-full" 
                />
            </div>
         </div>
       </div>
    )
}
