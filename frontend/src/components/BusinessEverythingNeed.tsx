"use client";

import Image from "next/image";
import img1 from "../assets/blogs/img1.png";

export default function BusinessEverythingNeed() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-20">
        {/* Blue Box Container */}
        <div className="bg-[#191E49] text-white rounded-3xl shadow-2xl px-6 sm:px-10 md:px-16 py-12 sm:py-16 text-center">
          {/* Text Section */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-cormorant font-bold mb-6 leading-snug">
            Everything you need to power your business
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto mb-12 text-sm sm:text-base">
            We care about the details. Every aspect of the platform has been carefully crafted 
            to make your day-to-day easier.
          </p>

          {/* Image Section */}
          <div className="rounded-2xl overflow-hidden shadow-xl border border-white/10 max-w-3xl mx-auto">
            <Image
              src={img1}
              alt="Dashboard Screenshot"
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
