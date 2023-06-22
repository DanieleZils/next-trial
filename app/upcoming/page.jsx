import Image from 'next/image';
import back from "public/back.jpg";

export default function Upcoming() {

    return (
        <div className="relative w-full h-screen flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            < Image 
            src={back} 
            alt="Becca" 
            priority = {true}
            className="w-full h-full object-cover" 
            />
         </div>
       </div>
    )
}
