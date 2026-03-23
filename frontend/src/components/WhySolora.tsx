'use client'

import Image from "next/image";
import image1 from "../assets/why/person1.png";
import image2 from "../assets/why/person2.png";
import image3 from "../assets/why/person3.png";

export default function WhySolora() {
  const cards = [
    { image: image1, name: "Le Deguzman", company: "Gold Dust" },
    { image: image2, name: "Emily Katz", company: "Bare Laser Medspa" },
    { image: image3, name: "Monica DeAngelis", company: "House of Aanuko" },
  ];

  return (
    <section className="bg-gradient-to-b from-[#FCFAFE] via-[#FCECF1] to-[#FCF5F0] py-20 text-center">
      <div className="max-w-2xl mx-auto">
        <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
          Why Solora
        </p>
        <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mt-2">
          Quick Go Through <br /> About Solora
        </h2>
        <p className="text-gray-600 mt-4">
          We save your time, drive growth, and keep clients coming back.
          Here&apos;s how our platform boosts salon business success.
        </p>
        <button className="mt-6 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-medium font-cormorant shadow-lg hover:opacity-90 transition">
          Learn why we&apos;re different
        </button>
      </div>

      {/* Desktop Customer Stories */}
      <div className="hidden md:block mt-16 max-w-2xl mx-auto bg-[#1c1c3d] text-white rounded-3xl p-10 shadow-xl h-[800px] overflow-hidden relative">
        <p className="text-xs font-poppins uppercase tracking-wider mt-10 bg-gradient-to-r from-pink-400 to-orange-300 bg-clip-text text-transparent">
          Customer Stories
        </p>
        <h3 className="text-4xl font-serif mt-6 font-cormorant">
          Loved by thousands of salons and spas
        </h3>

        {/* Desktop cards stay unchanged */}
        <div className="mt-16 relative">
          <div className="flex gap-8 animate-scroll">
            {cards.map((card, idx) => (
              <div key={idx} className="flex flex-col items-center min-w-[300px] flex-shrink-0">
                <div className="rounded-2xl overflow-hidden bg-white text-gray-900 shadow w-[300px] h-[450px] flex-shrink-0">
                  <Image
                    src={card.image}
                    alt={card.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-4 text-center">
                  <p className="font-cormorant text-lg">{card.name}</p>
                  <p className="font-poppins text-sm">{card.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Customer Stories */}
      <div className="md:hidden mt-16 bg-[#1c1c3d] text-white rounded-3xl p-6 shadow-xl overflow-hidden ">
        <p className="text-xs font-poppins uppercase tracking-wider mb-4 bg-gradient-to-r from-pink-400 to-orange-300 bg-clip-text text-transparent">
          Customer Stories
        </p>
        <h3 className="text-2xl font-serif mb-6 font-cormorant">
          Loved by thousands of salons and spas
        </h3>

        {/* Mobile horizontal scroll, showing one card at a time */}
        <div className="overflow-hidden relative">
          <div className="flex animate-scroll gap-4">
            {cards.concat(cards).map((card, idx) => (
              <div key={idx} className="flex flex-col items-center min-w-[80%] flex-shrink-0">
                <div className="rounded-2xl overflow-hidden bg-white text-gray-900 shadow w-full h-[400px] flex-shrink-0">
                  <Image
                    src={card.image}
                    alt={card.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-4 text-center">
                  <p className="font-cormorant text-lg">{card.name}</p>
                  <p className="font-poppins text-sm">{card.company}</p>
                </div>
              </div>
            ))}
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
          animation: scroll 25s linear infinite;
        }
      `}</style>
    </section>
  );
}
