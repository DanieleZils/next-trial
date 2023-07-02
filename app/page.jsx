import Image from "next/image";
import homepic from "../public/homepic-2.jpg";

export default function Home() {
  return (
    <main className="relative w-full h-screen">
      <div className="inset-0 md:h-screen md:fixed">
        <div className="relative top-20 w-full h-64 md:h-full">
          < Image 
          src={homepic} 
          alt="Becca" 
          fill
          priority = {true}
          quality={75}
          className="object-cover object-top w-full h-full" 
          />
        </div>
      </div>
    </main>
  )
}
