"use client";

import Image from "next/image";
import heroImg from "../assets/hero/image1.png";
import yelloLogo from "../assets/trusted/logo1.png";
import peterLogo from "../assets/trusted/logo2.png";
import ouidadLogo from "../assets/trusted/logo1.png";
import palmLogo from "../assets/trusted/logo2.png";
import megaLogo from "../assets/trusted/logo1.png";

export default function BusinessHero() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-28 lg:pt-28 text-center lg:text-left relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
          {/* Text Section */}
          <div className="max-w-lg lg:w-1/2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-cormorant font-bold text-[#191E49] leading-snug mb-6">
              Unleash Your Salon’s <br /> Full Potential
            </h1>
            <p className="text-gray-700 text-base sm:text-lg mb-6">
              Transform your operations with streamlined scheduling, dedicated client experiences,
              and accelerated business growth through Solora’s cutting-edge salon management platform.
            </p>
            <button className="px-6 py-3 bg-[#7B4DFF] text-white rounded-full font-medium shadow hover:bg-[#6a3de0] transition">
              Watch video tour
            </button>
          </div>

          {/* Hero Image */}
          <div className="w-full lg:w-1/2 flex justify-center relative">
            <Image
              src={heroImg}
              alt="Salon Hero"
              className="rounded-2xl shadow-lg max-w-sm sm:max-w-md lg:max-w-lg w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* Wave Gradient Behind Image */}
      <div className="relative w-full mt-12 sm:mt-8 -mb-1">
        <svg
          viewBox="0 0 1491 182"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[140px] sm:h-[180px]"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="2%" stopColor="#C098F5" />
              <stop offset="45%" stopColor="#FAA4CD" />
              <stop offset="88%" stopColor="#FFC9A3" />
            </linearGradient>
          </defs>
          <path
            d="M-26 58.3296C174.349 213.45 385.528 134.454 584 82.3296C782.472 30.2049 860.871 210.522 1034.5 201.329C1189.6 193.117 1217 -14.6987 1465.26 24.2605"
            stroke="url(#waveGradient)"
            strokeWidth="37"
            fill="transparent"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Logos Section (Merged with Wave) */}
      <div className="bg-gradient-to-b from-[#FFF2F9] to-white pt-10 pb-16 mt-4 sm:mt-1.5">
        <h3 className="text-center text-gray-700 text-sm sm:text-base font-medium mb-8 px-4">
          Join 10,000+ hair salon professionals who switched to Mangomint
        </h3>

        <div className="flex justify-center items-center gap-10 sm:gap-14 flex-wrap max-w-5xl mx-auto px-4">
          {[yelloLogo, peterLogo, ouidadLogo, palmLogo, megaLogo].map((logo, i) => (
            <Image
              key={i}
              src={logo}
              alt={`Logo ${i + 1}`}
              className="h-12 sm:h-14 lg:h-16 w-auto object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
