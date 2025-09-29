import React from "react";
import Image from "next/image";

import img1 from "../assets/rated/1-badge.avif.png"
import img2 from "../assets/rated/2-badge.avif.png"
import img3 from "../assets/rated/3-badge.avif.png"
import img4 from "../assets/rated/4-badge.avif.png"
import img5 from "../assets/rated/5-badge.avif.png"


const awards = [
  { src: img1, alt: "Easiest to Use 2024" },
  { src: img2, alt: "Front Runners 2024" },
  { src: img3, alt: "GetApp Leaders 2024" },
  { src: img4, alt: "Best Value 2024" },
  { src: img5, alt: "Capterra Shortlist 2024" },
];

const AwardsSection = () => {
  return (
    <section className="w-full bg-[#faf8f9] py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-cormorant md:text-4xl font-bold text-[#191E49] mb-4">
          Rated #1 for customer experience
        </h2>
        <p className=" text-xl text-[#191E49] font-cormorant mb-10 max-w-2xl mx-auto">
          Salons and spas rave about our white-glove approach to customer
          onboarding and support. Making the switch has never been easier.
        </p>

        {/* Badges */}
        <div className="flex flex-wrap justify-center items-center gap-6">
          {awards.map((award, idx) => (
            <div key={idx} className="w-28 h-28 relative">
              <Image
                src={award.src}
                alt={award.alt}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
