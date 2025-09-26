"use client";

import Image from "next/image";

export default function TrustedBy() {
  const ratingPlatforms = [
    { logo: "/logos/capterra.png", stars: 5 },
    { logo: "/logos/softwareadvice.png", stars: 5 },
    { logo: "/logos/g2.png", stars: 5 },
  ];

  const partnerLogos = [
    "/logos/logo1.png",
    "/logos/logo2.png",
    "/logos/logo3.png",
    "/logos/logo4.png",
    "/logos/logo5.png",
    "/logos/logo6.png",
  ];

  return (
    <div className="relative flex w-full items-center overflow-hidden bg-white py-24 pb-24">
      {/* Left column */}
      <div className="z-10 w-2/5 space-y-6 pl-24">
        <h2 className="text-2xl font-cormorant text-gray-900 leading-snug">
          #1 highest-rated by <br/>thousands of beauty & <br/>wellness professionals
        </h2>

        {/* Ratings in one row */}
        <div className="flex items-center gap-6 overflow-hidden">
          {ratingPlatforms.map((p, i) => (
            <div
              key={i}
              className="flex items-center space-x-2 min-w-[120px]"
            >
              <Image
                src={p.logo}
                alt="platform"
                width={80}
                height={24}
                className="object-contain"
              />
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
          {/* Row 1 */}
          <div className="flex space-x-8 animate-scroll">
            {partnerLogos.concat(partnerLogos).map((logo, i) => (
              <div
                key={i}
                className="min-w-[140px] h-20 flex items-center justify-center rounded-xl bg-gray-50 shadow"
              >
                <Image src={logo} alt="logo" width={100} height={50} />
              </div>
            ))}
          </div>
          {/* Row 2 */}
          <div className="flex space-x-8 animate-scroll delay-3000">
            {partnerLogos.concat(partnerLogos).map((logo, i) => (
              <div
                key={i}
                className="min-w-[140px] h-20 flex items-center justify-center rounded-xl bg-gray-50 shadow"
              >
                <Image src={logo} alt="logo" width={100} height={50} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 h-full w-3/5 bg-gradient-to-r from-white via-white/95 to-transparent"></div>
      {/* ⬇️ Widened & darker to hide logos earlier */}
      <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white via-white/90 to-transparent"></div>
    </div>
  );
}
