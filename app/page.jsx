import Image from "next/image";
import homepic from "../public/homepic.jpg";

export default function Home() {
  return (
    <main className=" p-4 ">
      <div>
        < Image 
        src={homepic} 
        alt="Becca" 
        priority = {true}
        className="bg-contain"/>
      </div>
    </main>
  )
}
