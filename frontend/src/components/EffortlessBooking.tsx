"use client";

import Image from "next/image";
import bookingImg from "../assets/blogs/img1.png"; 
import bookingUi from "../assets/blogs/img1.png";
import bookingCard from "../assets/blogs/img1.png";

export default function EffortlessBooking() {
  return (
    <section className="relative bg-gradient-to-b from-purple-50 via-white to-pink-50 pt-40 pb-12 px-4 sm:px-6 md:px-8 lg:pt-40 lg:pb-0">
      <div className="max-w-5xl mx-auto text-center">
        {/* Text */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4 sm:mb-6">
          Effortless Booking for Your Clients
        </h2>
        <p className="text-gray-600 leading-relaxed mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-2 sm:px-0">
          Give your clients the smoothest, most user-friendly appointment booking
          experience designed specifically for today's salons and spas. With Solora's
          intuitive platform, scheduling becomes simple and stress-free.
        </p>

        {/* Main Image */}
        <div className="relative w-full max-w-4xl mx-auto mb-8 sm:mb-0">
          <Image
            src={bookingImg}
            alt="Client booking"
            className="rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl w-full h-auto object-cover"
            priority
          />
          
          {/* Floating UI cards - Mobile adjusted positions and sizes */}
          <div className="absolute -top-3 left-2 sm:-top-6 sm:left-4 md:-top-8 md:left-6 lg:-top-8 lg:left-6 w-24 sm:w-36 md:w-52 lg:w-64">
            <Image 
              src={bookingUi} 
              alt="Booking UI" 
              className="rounded-md sm:rounded-lg shadow-md sm:shadow-lg w-full h-auto object-cover" 
            />
          </div>
          
          <div className="absolute -bottom-3 right-2 sm:-bottom-6 sm:right-4 md:-bottom-8 md:right-6 lg:-bottom-10 lg:right-6 w-28 sm:w-40 md:w-56 lg:w-72">
            <Image 
              src={bookingCard} 
              alt="Booking Payment" 
              className="rounded-md sm:rounded-lg shadow-md sm:shadow-lg w-full h-auto object-cover" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}