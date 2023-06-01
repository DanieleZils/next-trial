import Image from "next/image";
import homepic from "../public/homepic-2.jpg";

export default function Home() {
  return (
    <main>
      <div className="elative aspect-content aspect-w-16 aspect-h-9 w-full max-h-screen">
        < Image 
        src={homepic} 
        alt="Becca" 
        priority = {true}
        className="absolute inset-0 object-cover w-full h-full"
        />
      </div>
    </main>
  )
}
