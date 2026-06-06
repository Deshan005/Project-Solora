"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import image1 from "../assets/hero/image1.png";
import image2 from "../assets/hero/image2.png";
import image3 from "../assets/hero/image3.png";
import image4 from "../assets/hero/image4.png";
import image5 from "../assets/hero/image5.png";

const images = [
  { id: "calendar", src: image1, name: "CALENDAR" },
  { id: "online-booking", src: image2, name: "ONLINE BOOKING" },
  { id: "sales-payments", src: image3, name: "SALES & PAYMENTS" },
  { id: "texting", src: image4, name: "TWO-WAY TEXTING" },
  { id: "marketing", src: image5, name: "MARKETING" }
];

const Features = () => {
  const [current, setCurrent] = useState(0);

  // const nextSlide = () => {
  //   setCurrent((prev) => (prev + 1) % images.length);
  // };

  // const prevSlide = () => {
  //   setCurrent((prev) => (prev - 1 + images.length) % images.length);
  // };

  // framer-motion slide animation
  const variants = {
    enter: (direction : number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      zIndex: 10,
      transition: { duration: 0.6 }
    },
    exit: (direction :number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      transition: { duration: 0.6 }
    })
  };

  return (
    <section id="features" className="py-12 bg-white">
      <div className="relative w-full max-w-7xl mx-auto px-4">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {images.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setCurrent(idx)}
              className={`px-6 py-3 rounded-full font-poppins transition-all ${
                current === idx
                  ? "bg-gray-400 text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Carousel */}
        <div className="relative h-[300px] sm:h-[450px] lg:h-[600px] flex items-center justify-center overflow-hidden">
          {/* Left preview */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[300px] h-[400px] opacity-40 pointer-events-none hidden lg:block">
            <Image
              src={images[(current - 1 + images.length) % images.length].src}
              alt="Previous Preview"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {/* Center image */}
          <div className="relative w-full max-w-[90%] sm:max-w-[80%] lg:w-[700px] h-[250px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl z-10">
            <AnimatePresence initial={false} custom={1}>
              <motion.div
                key={current}
                custom={1}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0"
              >
                <Image
                  src={images[current].src}
                  alt={images[current].name}
                  fill
                  className="object-cover rounded-2xl"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right preview */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] h-[400px] opacity-40 pointer-events-none hidden lg:block">
            <Image
              src={images[(current + 1) % images.length].src}
              alt="Next Preview"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Buttons */}
        {/* <div className="flex justify-center mt-8 gap-6">
          <button
            onClick={prevSlide}
            className="px-6 py-3 rounded-full bg-purple-600 text-white font-medium shadow-md hover:bg-purple-700 transition"
          >
            ⟨ Prev
          </button>

          <button
            onClick={nextSlide}
            className="px-6 py-3 rounded-full bg-purple-600 text-white font-medium shadow-md hover:bg-purple-700 transition"
          >
            Next ⟩
          </button>
        </div> */}

        {/* Dots */}
        {/* <div className="flex justify-center mt-5 gap-3">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full ${
                idx === current ? "bg-purple-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Features;
