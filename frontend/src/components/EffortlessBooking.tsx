"use client";

import Image from "next/image";
import bookingImg from "../assets/features/hero.png"; 
// import bookingUi from "../assets/features/hero.png";
// import bookingCard from "../assets/features/hero.png";

export default function EffortlessBooking() {
  return (
    <section className="relative bg-gradient-to-b from-purple-50 via-white to-pink-50 pt-40 pb-14 px-4 sm:px-6 md:px-8 lg:pt-40">
      <div className="max-w-5xl mx-auto text-center">
        {/* -------- TEXT -------- */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-cormorant font-bold text-[#191E49] mb-4 sm:mb-6">
          Effortless Booking for Your Clients
        </h2>
        <p className="text-[#191E49] font-poppins leading-relaxed mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-2 sm:px-0">
          Give your clients the smoothest, most user-friendly appointment booking
          experience designed specifically for today's salons and spas. With Solora's
          intuitive platform, scheduling becomes simple and stress-free.
        </p>

        {/* -------- MAIN IMAGE -------- */}
        <div className="relative w-full max-w-4xl mx-auto mb-8 sm:mb-0">
          <Image
            src={bookingImg}
            alt="Client booking"
            className="rounded-xl sm:rounded-2xl w-full h-auto object-cover"
            priority
          />

          {/* Optional Floating UI cards
          <div className="absolute -top-3 left-2 sm:-top-6 sm:left-4 md:-top-8 md:left-6 lg:-top-8 lg:left-6 w-24 sm:w-36 md:w-52 lg:w-64">
            <Image 
              src={bookingUi} 
              alt="Booking UI" 
              className="rounded-md sm:rounded-lg shadow-md sm:shadow-lg w-full h-auto object-cover" 
            />
          </div>

          <div className="absolute -bottom-3 right-2 sm:-bottom-6 sm:right-4 md:-bottom-8 md:right-6 lg:-bottom-10 lg:right-6 w-28 sm:w-40 md:w-56 lg:w-72">
            <Image 
              src={bookingCard} 
              alt="Booking Payment" 
              className="rounded-md sm:rounded-lg shadow-md sm:shadow-lg w-full h-auto object-cover" 
            />
          </div> */}
        </div>
      </div>

      {/* -------- WAVE DESIGN BELOW IMAGE -------- */}
      <div className="w-full overflow-hidden mt-0">
        <svg
          viewBox="0 0 1491 182"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[182px]"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="paint0_linear_55_4764"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="2.09%" stopColor="#C098F5" />
              <stop offset="45.25%" stopColor="#FAA4CD" />
              <stop offset="88.41%" stopColor="#FFC9A3" />
            </linearGradient>
          </defs>

          <path
            d="M-26 58.3296C174.349 213.45 385.528 134.454 584 82.3296C782.472 30.2049 860.871 210.522 1034.5 201.329C1189.6 193.117 1217 -14.6987 1465.26 24.2605"
            stroke="url(#paint0_linear_55_4764)"
            strokeWidth="37"
            fill="transparent"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </section>
  );
}
