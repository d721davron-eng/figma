
import React from 'react'
import Logo from '../assets/logo1.png'
import Play from '../assets/Play.png'
import Negr from '../assets/negr.png'

const Header = () => {
    return (
        <header className="min-h-screen bg-[#FFF2E1] overflow-hidden">

            {/* Navbar */}
            <nav className="flex justify-between items-center px-6 md:px-12 lg:px-20 py-6">

                {/* Logo */}
                <div>
                    <img
                        src={Logo}
                        alt="Skilline logo"
                        className="w-32 md:w-40"
                    />
                </div>

                {/* Navigation links */}
                <ul className="hidden lg:flex gap-8 items-center">
                    <li>
                        <a className="text-[#252641] hover:text-[#F48C06] transition" href="#">
                            Home
                        </a>
                    </li>

                    <li>
                        <a className="text-[#252641] hover:text-[#F48C06] transition" href="#">
                            Careers
                        </a>
                    </li>

                    <li>
                        <a className="text-[#252641] hover:text-[#F48C06] transition" href="#">
                            Blog
                        </a>
                    </li>

                    <li>
                        <a className="text-[#252641] hover:text-[#F48C06] transition" href="#">
                            About Us
                        </a>
                    </li>

                    <li>
                        <button className="bg-white text-[#252641] w-32 h-12 rounded-full hover:bg-gray-100 transition">
                            Login
                        </button>
                    </li>

                    <li>
                        <button className="bg-[#F48C06] text-white w-32 h-12 rounded-full hover:bg-orange-600 transition">
                            Sign Up
                        </button>
                    </li>
                </ul>

                {/* Mobile menu */}
                <button className="lg:hidden text-3xl text-[#252641]" aria-label="Open menu">
                    ☰
                </button>
            </nav>

            {/* Hero section */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-12 pt-12 lg:pt-20">

                {/* Left content */}
                <div className="w-full lg:w-1/2 text-center lg:text-left">

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#2F327D]">
                        <span className="text-[#F48C06]">
                            Studying
                        </span>{' '}
                        Online is now
                        <br className="hidden sm:block" />
                        much easier
                    </h1>

                    <p className="text-[#464646] text-base sm:text-lg leading-8 mt-6 max-w-lg mx-auto lg:mx-0">
                        Skilline is an interesting platform that will teach
                        you in a more interactive way.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mt-8">

                        <button className="w-52 h-16 bg-[#F48C06] text-white rounded-full hover:bg-orange-600 transition shadow-lg">
                            Join for free
                        </button>

                        <button className="flex items-center gap-3 group">
                            <span className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md group-hover:scale-105 transition">
                                <img
                                    src={Play}
                                    alt="Play video"
                                    className="w-6 h-6 object-contain"
                                />
                            </span>

                            <span className="text-[#252641] font-medium">
                                Watch how it works
                            </span>
                        </button>

                    </div>
                </div>

                {/* Right image */}
                <div className="w-full lg:w-1/2 flex items-end">
                    <img
                        src={Negr}
                        alt="Student learning online"
                        className="w-[892px] h-[892px] "
                    />
                </div>

            </section>
        </header>
    )
}

export default Header
