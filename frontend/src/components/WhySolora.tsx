'use client'

import Image from "next/image";
import image1 from "../assets/why/person1.png";
import image2 from "../assets/why/person2.png";
import image3 from "../assets/why/person3.png";

// components/WhySolora.tsx
export default function WhySolora() {
  return (
    <section
      className="bg-gradient-to-b from-[#FCFAFE] via-[#FCECF1] to-[#FCF5F0] py-20 text-center"
    >
      <div className="max-w-2xl mx-auto">
        <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
          Why Solora
        </p>
        <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mt-2">
          Quick Go Through <br /> About Solora
        </h2>
        <p className="text-gray-600 mt-4">
          We save your time, drive growth, and keep clients coming back.
          Here's how our platform boosts salon business success.
        </p>
        <button className="mt-6 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-medium font-cormorant shadow-lg hover:opacity-90 transition">
          Learn why we&apos;re different
        </button>
      </div>

      {/* Customer Stories Card */}
      <div className="mt-16 max-w-2xl mx-auto bg-[#1c1c3d] text-white rounded-3xl p-10 shadow-xl h-[800px] overflow-hidden relative">
        <p className="text-xs font-poppins uppercase tracking-wider mt-10 bg-gradient-to-r from-pink-400 to-orange-300 bg-clip-text text-transparent">
          Customer Stories
        </p>
        <h3 className="text-4xl font-serif mt-6 font-cormorant">
          Loved by thousands of salons and spas
        </h3>

        {/* Horizontal scrolling container */}
        <div className="mt-16 relative">
          <div className="flex gap-8 animate-scroll">
            {/* Card 1 */}
            <div className="flex flex-col items-center min-w-[300px] flex-shrink-0">
              <div className="rounded-2xl overflow-hidden bg-white text-gray-900 shadow w-[300px] h-[450px] flex-shrink-0">
                <Image
                  src={image1}
                  alt="Smart Calendar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 text-center">
                <p className="font-cormorant text-lg">Le Deguzman</p>
                <p className="font-poppins text-sm">Gold Dust</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center min-w-[300px] flex-shrink-0">
              <div className="rounded-2xl overflow-hidden bg-white text-gray-900 shadow w-[300px] h-[450px] flex-shrink-0">
                <Image
                  src={image2}
                  alt="Smart Calendar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 text-center">
                <p className="font-cormorant text-lg">Emily Katz</p>
                <p className="font-poppins text-sm">Bare Laser Medspa</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center min-w-[300px] flex-shrink-0">
              <div className="rounded-2xl overflow-hidden bg-white text-gray-900 shadow w-[300px] h-[450px] flex-shrink-0">
                <Image
                  src={image3}
                  alt="Smart Calendar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 text-center">
                <p className="font-cormorant text-lg">Monica DeAngelis</p>
                <p className="font-poppins text-sm">House of Aanuko</p>
              </div>
            </div>

            {/* Add other cards... */}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          gap: 1.5rem;
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
