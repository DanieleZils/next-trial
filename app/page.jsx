import Image from "next/image";
import homepic from "../public/homepic-2.jpg";

export default function Home() {
  return (
    <main className="">
      <div>
        < Image 
        src={homepic} 
        alt="Becca" 
        priority = {true}
        className="bg-cover bg-center"
        />
      </div>
    </main>
  )
}
