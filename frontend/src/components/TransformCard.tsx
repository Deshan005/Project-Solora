'use client'

import Image from "next/image";
import image1 from "../assets/hero/image1.png"

// components/TransformCard.tsx
export default function TransformCard() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row items-center">
        
        {/* Left Text Content */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-10 text-left">
          <h2 className="text-2xl md:text-4xl font-cormorant text-gray-900 leading-snug">
            Ready to transform your salon experience?
          </h2>
          <p className="text-gray-600 font-poppins mt-4 text-sm md:text-base leading-relaxed">
            Start today with a free trial and discover how easy salon
            management can be. No credit card required.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button className="px-6 text-lg font-cormorant py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-medium shadow-lg hover:opacity-90 transition">
              Start your free trial
            </button>
            <button className="text-sm font-cormorant flex items-center text-gray-700 hover:text-gray-900 gap-1">
              ▶ Watch a video tour
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 h-64 md:h-[400px] relative">
            <Image
            src={image1}
            alt="Frezka Logo"
            fill
            className="object-cover"
            />
        </div>
      </div>
    </section>
  );
}
