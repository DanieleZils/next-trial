
export default function Navbar() {

    return (
        <nav className="w-full mx-auto ps-20 bg-transparent fixed shadow-lg top-0 z-50 color:white  ">
            <div className="md:items-center md:flex md:space-between">
                <div>
                    <div className="md:py-5 md:block">
                        <a className="text-2xl font-bold" href="/">Becca</a>
                    </div>
                </div>
                <ul className="md:flex md:space-x-6 md:justify-around md:w-full ">
                <li className="text-lg">
                    <a href="/about">About</a>
                </li>
                <li className="text-lg">
                    <a href="/violinsOfHope"> Violins of Hope </a>
                </li>
                <li className="text-lg">
                    <a href="/videos">Media</a>
                </li>
                <li className="text-lg">
                    <a href="/community">Community Engagement</a>
                </li>
                <li className="text-lg">
                    <a href="/teaching">Teaching</a>
                </li>
                <li className="text-lg">
                    <a href="/upcoming">Upcoming Events</a>
                </li>
                <li className="text-lg">
                    <a href="/contact">Contact</a>
                </li>
             </ul>
            </div>
        </nav>
    )
}