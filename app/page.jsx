import Image from "next/image";
import homepic from "../public/homepic.jpg";

export default function Home() {
  return (
    <main className="">
      <div>
        < Image 
        src={homepic} 
        alt="Becca" 
        priority = {true}
        className="bg-homepic bg-cover bg-center"
        />
      </div>
    </main>
  )
}
