'use client';

import Image from "next/image";

import capterraLogo from "../assets/trusted/logo1.png";
import softwareAdviceLogo from "../assets/trusted/logo1.png";
import g2Logo from "../assets/trusted/logo1.png";

// Top row partner logos
import top1 from "../assets/trusted/logo1.png";
import top2 from "../assets/trusted/logo1.png";
import top3 from "../assets/trusted/logo1.png";
import top4 from "../assets/trusted/logo1.png";
import top5 from "../assets/trusted/logo1.png";
import top6 from "../assets/trusted/logo1.png";
import top7 from "../assets/trusted/logo1.png";
import top8 from "../assets/trusted/logo1.png";

// Bottom row partner logos
import bottom1 from "../assets/trusted/logo2.png";
import bottom2 from "../assets/trusted/logo2.png";
import bottom3 from "../assets/trusted/logo2.png";
import bottom4 from "../assets/trusted/logo2.png";
import bottom5 from "../assets/trusted/logo2.png";
import bottom6 from "../assets/trusted/logo2.png";
import bottom7 from "../assets/trusted/logo2.png";
import bottom8 from "../assets/trusted/logo2.png";

export default function TrustedBy() {
  const ratingPlatforms = [
    { logo: capterraLogo, stars: 5 },
    { logo: softwareAdviceLogo, stars: 5 },
    { logo: g2Logo, stars: 5 },
  ];

  const topRowLogos = [top1, top2, top3, top4, top5, top6, top7, top8];
  const bottomRowLogos = [bottom1, bottom2, bottom3, bottom4, bottom5, bottom6, bottom7, bottom8];

  return (
    <div className="relative flex w-full items-center overflow-hidden bg-white py-24">
      {/* Left column */}
      <div className="z-10 w-2/5 space-y-6 pl-24">
        <h2 className="text-2xl font-cormorant text-gray-900 leading-snug">
          #1 highest-rated by <br />
          thousands of beauty & <br />
          wellness professionals
        </h2>

        {/* Ratings */}
        <div className="flex items-center gap-6 overflow-hidden mt-4">
          {ratingPlatforms.map((p, i) => (
            <div key={i} className="flex items-center space-x-2 min-w-[120px]">
              <Image src={p.logo} alt="platform" width={80} height={24} className="object-contain" />
              <div className="flex space-x-0.5 text-orange-400 text-sm">
                {Array.from({ length: p.stars }).map((_, j) => (
                  <span key={j}>★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Logos scrolling */}
      <div className="absolute right-0 top-0 h-full w-full overflow-hidden">
        <div className="absolute inset-0 flex flex-col justify-center space-y-8">
          {/* Top row */}
          <div className="flex animate-scroll whitespace-nowrap">
            {topRowLogos.concat(topRowLogos).map((logo, i) => (
              <div
                key={i}
                className="inline-flex min-w-[140px] h-20 flex-shrink-0 items-center justify-center rounded-xl bg-gray-50 shadow-lg"
              >
                <Image
                  src={logo}
                  alt={`top-logo-${i}`}
                  className="object-contain w-full h-full p-2"
                />
              </div>
            ))}
          </div>

          {/* Bottom row */}
          <div className="ml-8 flex animate-scroll whitespace-nowrap">
            {bottomRowLogos.concat(bottomRowLogos).map((logo, i) => (
              <div
                key={i}
                className=" inline-flex min-w-[140px] h-20 flex-shrink-0 items-center justify-center rounded-xl bg-gray-50 shadow-lg"
              >
                <Image
                  src={logo}
                  alt={`bottom-logo-${i}`}
                  className="object-contain w-full h-full p-2"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 h-full w-[70%] bg-gradient-to-r from-white via-white/100 to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 h-full w-[5%] bg-gradient-to-l from-white via-white/90 to-transparent pointer-events-none"></div>

      {/* Scroll animation */}
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
          gap: 2rem;
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
