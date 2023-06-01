import Image from "next/image";
import homepic from "../public/homepic-2.jpg";

export default function Home() {
  return (
    <main className="relative w-full h-screen flex items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center">
        < Image 
        src={homepic} 
        alt="Becca" 
        priority = {true}
        className="w-full h-full object-cover" 
        />
      </div>
    </main>
  )
}
