"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50 h-24">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-20">
            <div className="flex items-center">
                <Image
                src={logo}
                alt="Frezka Logo"
                width={120}
                height={40}
                className="object-contain"
                />
            </div>            
            <div className="hidden md:flex space-x-6">
              <a href="#why" className="nav-link">Why Solora</a>
              <a href="#Businesses" className="nav-link">Businesses</a>
              <a href="#Feautures" className="nav-link">Feautures</a>
              <a href="#Pricing" className="nav-link">Pricing</a>
            </div>
          </div>
          <div className="flex items-center space-x-4 font-roboto">
            <Link href="/login" className="nav-link">
              Sign In
            </Link>
            <Link
                href="/register"
                className="rounded-full bg-white font-cormorant text-[18px] leading-[22.5px] tracking-[-0.02px] font-medium text-[#BC269B] px-4 py-2 border border-[#BC269B] hover:bg-[#BC269B] hover:text-white transition"
            >
            Book a Demo
            </Link>
            <Link
                href="/register"
                className="rounded-full bg-[#BC269B] font-cormorant text-[18px] leading-[22.5px] tracking-[-0.02px] font-medium text-white px-4 py-2 border border-[#BC269B] hover:bg-[#BC269B] hover:text-white transition"
            >
            Try it Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
