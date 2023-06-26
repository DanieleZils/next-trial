
import Image from "next/image";
import back from "/public/back.jpg";

export default function Home() {
  return (
    <main className="relative md:grid md:grid-cols-1 min-h-screen">
      <div className="inset-0 fixed md:h-screen">
        <div className="relative top-24 w-full h-64 md:h-full">
          < Image 
          src={back} 
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