
export default function Navbar() {

    return (

        <header className="w-full mx-auto px-5 bg-white fixed shadow-lg top-0 z-50  ">
            <div className="justify-between md:items-center md:flex">
                <div>
                    <div className="md:py-5 md:block">
                        <h1 className=" text-xl font-semibold">Becca</h1>
                    </div>
                </div>
                <ul className="md:flex md:space-x-6">
                  <li className="text-lg">
                    <a href="/">Home</a> 
                  </li>
                <li className="text-lg">
                    <a href="/about">About</a>
                </li>
                <li className="text-lg">
                    <a href="/videos">Videos</a>
                </li>
             </ul>
            </div>
        </header>
    )
}