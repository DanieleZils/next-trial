
export default function Navbar() {

    return (
        <nav className="w-full mx-auto ps-20 bg-transparent fixed shadow-lg top-0 z-50  ">
            <div className="md:items-center md:flex md:space-between">
                <div>
                    <div className="md:py-5 md:block">
                        <h1 className="text-xl font-semibold ">Becca</h1>
                    </div>
                </div>
                <ul className="md:flex md:space-x-6 md:justify-around md:w-full ">
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
        </nav>
    )
}