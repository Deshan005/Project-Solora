"use client";

import Image from "next/image";
import img1 from "../assets/hero/image1.png";
import vid from "../assets/blogs/browse/Container.png";

export default function EmailMarketingFeature() {
  return (
    <section className="py-16 bg-[#F8F4F3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-6 rounded-3xl overflow-hidden flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Image */}
        <div className="w-full md:w-1/2 relative">
          <Image
            src={img1}
            alt="Email Marketing"
            width={500}
            height={400}
            className="rounded-xl w-full h-auto object-cover"
          />

          {/* Video Overlay */}
          <Image
            src={vid}
            alt="video"
            width={200}  // Mobile size
            height={160} // Mobile size
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer w-24 sm:w-32 sm:h-24 md:w-40 md:h-32"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-xs sm:text-sm font-poppins uppercase tracking-widest text-gray-500 mb-2">
            Email Marketing for Salons and Spas
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl mt-4 sm:mt-6 font-cormorant font-bold text-gray-900 leading-tight">
            Explore Solora’s Email Marketing Feature
          </h2>
          <p className="mt-2 sm:mt-4 font-poppins text-gray-600 text-sm sm:text-base md:text-lg">
            Learn how to seamlessly connect with salon or spa clients using
            Solora’s built-in email marketing tool, and unlock templates & features
            designed for your business.
          </p>
          <button className="mt-4 sm:mt-6 font-cormorant text-sm sm:text-lg px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-pink-600 text-white hover:bg-pink-700 transition">
            Watch Now
          </button>
        </div>
      </div>
    </section>
  );
}
