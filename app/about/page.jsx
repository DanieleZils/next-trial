
import Image from "next/image";
import VoH from "/public/VoH.jpg";

export default function Home() {
  return (
    <main className="relative md:grid md:grid-cols-1 min-h-screen">
      <div className="inset-0 fixed md:h-screen">
        <div className="relative top-24 w-full h-64 md:h-full">
          < Image 
          src={VoH} 
          alt="Becca" 
          fill="responsive"
          priority = {true}
          className="object-cover object-top w-full h-full" 
          />
        </div>
      </div>
    </main>
  )
}