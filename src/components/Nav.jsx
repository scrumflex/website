import { useState } from "react";
import logo from "../assets/scrumflex.png"
import hamburger from "../assets/Vector.png"
import close from "../assets/Close.svg"
import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const [navbar, setNavbar] = useState(false);
    const location = useLocation();

    return (
        <nav className="lg:flex bg-[#283B49] lg:bg-white pr-4 w-full lg:pr-[120px] lg:pl-[85px] items-center lg:h-[112px] justify-between relative">
            <div className="flex pt-2 items-center justify-between w-full">
               <div className="lg:flex justify-center items-center">
                    <Link to="/">
                        <header><img className="w-[127px] h-[85px] lg:w-[127px] lg:h-[85px]" src={logo} alt="logo" /></header>
                    </Link>
                    <ul className="hidden lg:flex gap-8">
                        <li><Link className={`font-montserrat block font-[500] ${location.pathname === '/' ? 'text-[#283B49]' : 'text-[#000000]'}`} to="/">Home</Link></li>
                        <li><Link className={`font-montserrat block font-[500] ${location.pathname === '/about-us' ? 'text-[#283B49]' : 'text-[#000000]'}`} to="/about-us">About Us</Link></li>
                        <li><Link className={`font-montserrat block font-[500] ${location.pathname === '/trainings' ? 'text-[#283B49]' : 'text-[#000000]'}`} to="/trainings">Trainings</Link></li>
                        <li><Link className={`font-montserrat block font-[500] ${location.pathname === '/articles' ? 'text-[#283B49]' : 'text-[#000000]'}`} to="/articles">Articles</Link></li>
                        <li><Link className={`font-montserrat block font-[500] ${location.pathname === '/faq' ? 'text-[#283B49]' : 'text-[#000000]'}`} to="/faq">FAQs</Link></li>
                    </ul>
               </div>
                <div className="hidden lg:flex md:justify-center lg:items-center">
                  <Link to="/prime-time-pal/registration/">
                    <button className="bg-[#4ABE99] mt-2 mb-4 lg:mt-0 lg:mb-0 text-white rounded-[5px] w-[166px] h-[48px]">
                        Join the Tribe
                    </button>
                  </Link>
                </div>
                <div className="lg:hidden">
                    <button
                        className="p-2 outline-none focus:border-gray-400 focus:border"
                        onClick={() => setNavbar(!navbar)}
                    >
                        {navbar ? (
                            <img src={close} width={30} height={30} alt="close" />
                        ) : (
                            <img
                                src={hamburger}
                                width={30}
                                height={30}
                                alt="hamburger"
                                className="focus:border-none active:border-none"
                            />
                        )}
                    </button>
                </div>
            </div>
            {navbar && (
                <div className="fixed lg:hidden top-0 left-0 w-full h-full text-center  bg-white bg-opacity-100 z-50">
                    <button
                        className="absolute top-0 right-0 m-4 p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                        onClick={() => setNavbar(false)}
                    >
                        <img src={close} width={30} height={30} alt="close" />
                    </button>
                    <ul className="lg:flex gap-8 mt-8">
                        <li className="mb-8"><Link className={`font-montserrat block ${location.pathname === '/' ? 'text-[#283B49]' : 'text-[#000000]'}`} to="/">Home</Link></li>
                        <li className="mb-8"><Link className={`font-montserrat block ${location.pathname === '/about-us' ? 'text-[#283B49]' : 'text-[#000000]'}`} to="/about-us">About Us</Link></li>
                        <li className="mb-8"><Link className={`font-montserrat block ${location.pathname === '/Trainings' ? 'text-[#283B49]' : 'text-[#000000]'}`} to="/Trainings">Trainings</Link></li>
                        <li className="mb-8"><Link className={`font-montserrat block ${location.pathname === '/Articles' ? 'text-[#283B49]' : 'text-[#000000]'}`} to="/Articles">Articles</Link></li>
                        <li className="mb-8"><Link className={`font-montserrat block ${location.pathname === '/faq' ? 'text-[#283B49]' : 'text-[#000000]'}`} to="/faq">FAQs</Link></li>
                    </ul>
                    <div className="flex justify-center items-center">
                    <Link to="/prime-time-pal/registration/">
                    <button className="bg-[#4ABE99] mt-2 mb-4 lg:mt-0 lg:mb-0 text-white rounded-[5px] w-[166px] h-[48px]">
                        Join the Tribe
                    </button>
                  </Link>
                    </div>    
                </div>
            )}
        </nav>
    )
}

export default Navbar;

