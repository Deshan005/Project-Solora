"use client";

import Image from "next/image";
import img1 from "../assets/hero/image1.jpg"
import vid from "../assets/blogs/browse/Container.png"

export default function EmailMarketingFeature() {
  return (
    <section className="py-16 bg-[#F8F4F3]">
      <div className="max-w-6xl mx-auto px-6 rounded-3xl overflow-hidden grid md:grid-cols-2 gap-8 items-center">
        {/* Image */}
        <div className="p-6 relative">
          {/* Main Image */}
          <Image
            src={img1}
            alt="Email Marketing"
            width={500}
            height={400}
            className="rounded-xl"
          />

          {/* Video Overlay */}
          <Image
            src={vid}
            alt="video"
            width={500}          // Adjust size as needed
            height={400}         // Adjust size as needed
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          />
        </div>

        {/* Text */}
        <div className="p-6">
          <p className="text-sm font-poppins uppercase tracking-widest text-gray-500 mb-2">
            Email Marketing for Salons and Spas
          </p>
          <h2 className="text-4xl mt-6 font-cormorant font-bold text-gray-900 leading-tight">
            Explore Solora’s Email Marketing Feature
          </h2>
          <p className="mt-4 font-poppins text-gray-600">
            Learn how to seamlessly connect with salon or spa clients using
            Solora’s built-in email marketing tool, and unlock templates &
            features designed for your business.
          </p>
          <button className="mt-6 font-cormorant text-lg px-6 py-3 rounded-full bg-pink-600 text-white hover:bg-pink-700 transition">
            Watch Now
          </button>
        </div>
      </div>
    </section>
  );
}
