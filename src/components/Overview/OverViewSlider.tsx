// src/components/CardCarousel.tsx
"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Card from "@/components/UI/Card";

export const sliderData = [
  {
    id: 1,
    title: "Early access",
    time: "3 mins read",
    avatar: "/images/avatars/5.png",
    status: "new",
    icon: "/images/icons/calendar.svg",
    backgroundImage: "linear-gradient(to bottom, #DEB2FF, #D49EFC)",
  },
  {
    id: 2,
    title: "Access use guidelines",
    time: "9 mins read",
    avatar: "/images/avatars/6.png",
    status: "hot",
    icon: "/images/icons/photo.svg",
    backgroundImage: "linear-gradient(to bottom, #FFE4B1, #FFCF75)",
  },
  {
    id: 3,
    title: "Exclusive downloads",
    time: "16 mins read",
    avatar: "/images/avatars/7.png",
    status: "new",
    icon: "/images/icons/download.svg",
    backgroundImage:
      "linear-gradient(to bottom, rgba(208, 242, 223, .7), #B5E4CA)",
  },
  {
    id: 4,
    title: "Life & work updates",
    time: "35 mins read",
    avatar: "/images/avatars/8.png",
    status: "hot",
    icon: "/images/icons/check-square.svg",
    backgroundImage: "linear-gradient(to bottom, #D2F4FF, #A1E0F5)",
  },
    {
    id: 4,
    title: "Life & work updates",
    time: "35 mins read",
    avatar: "/images/avatars/8.png",
    status: "hot",
    icon: "/images/icons/check-square.svg",
    backgroundImage: "linear-gradient(to bottom, #D2F4FF, #A1E0F5)",
  },
    {
    id: 4,
    title: "Life & work updates",
    time: "35 mins read",
    avatar: "/images/avatars/8.png",
    status: "hot",
    icon: "/images/icons/check-square.svg",
    backgroundImage: "linear-gradient(to bottom, #D2F4FF, #A1E0F5)",
  },
    {
    id: 4,
    title: "Life & work updates",
    time: "35 mins read",
    avatar: "/images/avatars/8.png",
    status: "hot",
    icon: "/images/icons/check-square.svg",
    backgroundImage: "linear-gradient(to bottom, #D2F4FF, #A1E0F5)",
  },
];

const CardCarousel: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="bg-surface2 rounded-2xl border border-color shadow-theme p-6 mt-10">
      {/* Header with custom arrows */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-bold">Featured</h3>
        <div className="flex gap-2">
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="p-2 rounded-full bg-surface3 hover:bg-surface4 border border-color shadow-sm"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="p-2 rounded-full bg-surface3 hover:bg-surface4 border border-color shadow-sm"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Card carousel */}
      <div className="max-w-3xl">
        <Slider ref={sliderRef} {...settings}>
          {sliderData.map((item) => (
            <div key={item.id} className="px-[10px]">
              <Card>
                <div
                  className="rounded-xl p-4 h-48 flex flex-col justify-between relative"
                  style={{ background: item.backgroundImage }}
                >
                  {/* Top-right icon */}
                  <img
                    src={item.icon}
                    alt="icon"
                    className="absolute top-3 left-3 w-10 h-10"
                  />

                  {/* Bottom section */}
                  <div className="mt-auto">
                    {/* Title */}
                    <div className="text-base font-bold mb-2">{item.title}</div>

                    {/* Avatar + Time + Status */}
                    <div className="flex items-center justify-between">
                      {/* Avatar + time */}
                      <div className="flex items-center gap-2">
                        <img
                          src={item.avatar}
                          alt="avatar"
                          className="w-6 h-6 rounded-full border border-white shadow-sm"
                        />
                        <span className="text-xs opacity-80">{item.time}</span>
                      </div>

                      {/* Status badge */}
                      <span
                        className={`px-2 py-1 text-xs font-semibold rounded-full shadow ${
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
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CardCarousel;
