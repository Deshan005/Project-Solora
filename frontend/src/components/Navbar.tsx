"use client";

import Link from "next/link";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa6";
import { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 bg-white shadow-lg z-50 transition-all duration-300 ${isMenuOpen ? 'h-auto pb-4' : 'h-24'}`}>
      <div className="container mx-auto px-4 sm:px-6 py-6">
        <div className="flex items-center justify-between">

          {/* Left Section */}
          <div className="flex items-center space-x-4 lg:space-x-20">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/homepage">
                <Image
                  src={logo}
                  alt="Frezka Logo"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </a>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex space-x-8 xl:space-x-10 font-roboto">
              <a href="#why" className="nav-link">Why Solora</a>

              <a href="/business" className="nav-link flex items-center gap-2">
                Businesses
                <FaChevronDown className="text-sm text-gray-700 mt-0.5" />
              </a>

              <Link href="/features" className="nav-link flex items-center gap-2">
                Features
                <FaChevronDown className="text-sm text-gray-700 mt-0.5" />
              </Link>

              <a href="/pricing" className="nav-link">Pricing</a>
            </div>
          </div>

          {/* Desktop Right Section */}
          <div className="hidden lg:flex items-center space-x-4 font-roboto">
            <Link href="/login" className="nav-link">
              Sign In
            </Link>
            <Link
              href="/register"
              className="rounded-full bg-white font-cormorant text-[16px] lg:text-[18px] leading-[22.5px] tracking-[-0.02px] font-medium text-[#BC269B] px-4 py-2 border border-[#BC269B] hover:bg-[#BC269B] hover:text-white transition"
            >
              Book a Demo
            </Link>
            <Link
              href="/register"
              className="rounded-full bg-[#BC269B] font-cormorant text-[16px] lg:text-[18px] leading-[22.5px] tracking-[-0.02px] font-medium text-white px-4 py-2 border border-[#BC269B] hover:bg-[#BC269B] hover:text-white transition"
            >
              Try it Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-gray-700 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-700 transition-opacity ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-700 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4 pb-4 border-t border-gray-200 pt-4
                      bg-white bg-opacity-70 backdrop-blur-md`}
        >
          <div className="flex flex-col space-y-4 font-roboto">
            <a 
              href="#why" 
              className="nav-link py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Why Solora
            </a>

            <a 
              href="#Businesses" 
              className="nav-link py-2 border-b border-gray-100 flex items-center justify-between"
              onClick={() => setIsMenuOpen(false)}
            >
              Businesses
              <FaChevronDown className="text-sm text-gray-700" />                
            </a>

            <Link 
              href="/features" 
              className="nav-link py-2 border-b border-gray-100 flex items-center justify-between"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
              <FaChevronDown className="text-sm text-gray-700" />
            </Link>

            <a 
              href="#pricing" 
              className="nav-link py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>

            {/* Mobile Auth Buttons */}
            <div className="flex flex-col space-y-3 pt-4">
              <Link 
                href="/login" 
                className="nav-link text-center py-3 border border-gray-300 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </Link>
              <Link
                href="/register"
                className="rounded-full bg-white font-cormorant text-[16px] font-medium text-[#BC269B] px-4 py-3 border border-[#BC269B] hover:bg-[#BC269B] hover:text-white transition text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Book a Demo
              </Link>
              <Link
                href="/register"
                className="rounded-full bg-[#BC269B] font-cormorant text-[16px] font-medium text-white px-4 py-3 border border-[#BC269B] hover:bg-[#BC269B] hover:text-white transition text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Try it Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
