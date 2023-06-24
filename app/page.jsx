import Image from "next/image";
import homepic from "../public/homepic-2.jpg";

export default function Home() {
  return (
    <main className="relative w-full h-screen">
      <div className="absolute inset-0 md:h-screen">
        <div className="absolute top-24 w-full h-96 md:h-full">
          < Image 
          src={homepic} 
          alt="Becca" 
          fill="responsive"
          priority = {true}
          className="object-cover object-center w-full h-full" 
          />
        </div>
      </div>
    </main>
  )
}
