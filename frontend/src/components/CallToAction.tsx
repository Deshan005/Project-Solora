"use client";

import { FaArrowDown } from "react-icons/fa";

export default function CallToAction() {
  return (
    <section className="relative bg-white py-20 text-center overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-cormorant text-gray-900">
          Ready to take the next step?
        </h2>

        {/* Description */}
        <p className="text-gray-600 font-poppins mt-4 text-base md:text-lg leading-relaxed">
          We’d love to give you a personalized tour and answer all your questions.
          <br />
          If you’d rather explore for yourself, start a free trial to see it in action.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center font-cormorant text-lg gap-4 flex-wrap">
          <button className="px-6 py-3 border-2 border-pink-400 rounded-full text-pink-600 font-medium hover:bg-pink-50 transition">
            Book a demo
          </button>

          <button className="px-6 py-3 rounded-full font-medium bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow hover:opacity-90 transition">
            Start a free trial
          </button>
        </div>

        {/* Compare Plans */}
        <div className="mt-6 flex flex-col mb-10 items-center">
          <a
            href="#compare-plans"
            className="text-pink-500 font-poppins text-lg font-medium uppercase text-sm tracking-wide hover:underline flex items-center gap-2"
          >
            Compare Plans
            <FaArrowDown className="text-pink-500 text-xs" />
          </a>
        </div>
      </div>

      {/* Gradient Wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-24 md:h-32"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="50%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#f97316" />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGradient)"
            fillOpacity="1"
            d="M0,160 C480,280 960,40 1440,200 L1440,320 L0,320 Z"
          ></path>
        </svg>
      </div>


    </section>
  );
}
