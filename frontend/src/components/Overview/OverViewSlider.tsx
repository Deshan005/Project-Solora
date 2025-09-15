// src/components/CardCarousel.tsx
"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const sliderData = [
  {
    id: 1,
    title: "Early access",
    time: "3 mins read",
    status: "new",
    backgroundImage: "linear-gradient(to bottom, #DEB2FF, #D49EFC)",
  },
  {
    id: 2,
    title: "Access use guidelines",
    time: "9 mins read",
    status: "hot",
    backgroundImage: "linear-gradient(to bottom, #FFE4B1, #FFCF75)",
  },
  {
    id: 3,
    title: "Exclusive downloads",
    time: "16 mins read",
    status: "new",
    backgroundImage: "linear-gradient(to bottom, rgba(208, 242, 223, .7), #B5E4CA)",
  },
  {
    id: 4,
    title: "Life & work updates",
    time: "35 mins read",
    status: "hot",
    backgroundImage: "linear-gradient(to bottom, #D2F4FF, #A1E0F5)",
  },
  {
    id: 5,
    title: "Product updates",
    time: "12 mins read",
    status: "new",
    backgroundImage: "linear-gradient(to bottom, #FFD6E0, #FFB8C9)",
  },
  {
    id: 6,
    title: "Community highlights",
    time: "7 mins read",
    status: "hot",
    backgroundImage: "linear-gradient(to bottom, #C5F0FF, #9AE2FF)",
  },
];

const CardCarousel: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // lg screens
        settings: {
          slidesToShow: 2.5,
        }
      },
      {
        breakpoint: 768, // md screens
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640, // sm screens
        settings: {
          slidesToShow: 1.5,
        }
      },
      {
        breakpoint: 480, // xs screens
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="bg-surface2 rounded-2xl border border-color shadow-theme p-4 lg:p-6 mt-6 lg:mt-10">
      {/* Header with custom arrows */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl lg:text-2xl font-bold">Slider</h3>
        <div className="flex gap-2">
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="p-2 rounded-full bg-surface3 hover:bg-surface4 border border-color shadow-sm"
          >
            <ChevronLeft className="w-4 h-4 lg:w-5 lg:h-5" />
          </button>
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="p-2 rounded-full bg-surface3 hover:bg-surface4 border border-color shadow-sm"
          >
            <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5" />
          </button>
        </div>
      </div>

      {/* Card carousel */}
      <div className="max-w-3xl">
        <Slider ref={sliderRef} {...settings}>
          {sliderData.map((item) => (
            <div key={item.id} className="px-1 sm:px-2">
              {/* Compact card design */}
              <div
                className="rounded-xl p-4 h-64 lg:h-60 flex flex-col justify-between relative overflow-hidden shadow-sm w-50 lg:w-60"
                style={{ background: item.backgroundImage }}
              >
                {/* Content */}
                <div className="flex flex-col justify-between h-full">
                  {/* Title */}
                  <div className="text-sm lg:text-base font-semibold mb-2 line-clamp-2">
                    {item.title}
                  </div>

                  {/* Bottom section */}
                  <div className="flex items-center justify-between mt-auto">
                    {/* Time */}
                    <span className="text-xs opacity-80">{item.time}</span>

                    {/* Status badge */}
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        item.status === "new"
                          ? "bg-green-500 text-white"
                          : "bg-red-500 text-white"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CardCarousel;