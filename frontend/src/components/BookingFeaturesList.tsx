"use client";

import Image from "next/image";
import siteBooking from "../assets/hero/image1.jpg";
import clientExperience from "../assets/hero/image1.jpg";
import customization from "../assets/hero/image1.jpg";
import multiGuest from "../assets/hero/image1.jpg";
import customAppointments from "../assets/hero/image1.jpg";

export default function BookingFeatures() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-24">

        {/* Feature 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image on Mobile Top */}
          <div className="w-full lg:w-1/2 order-1 lg:order-none flex justify-center">
            <Image
              src={siteBooking}
              alt="Direct Website Booking"
              className="rounded-2xl shadow-lg w-full max-w-md lg:max-w-lg"
            />
          </div>
          {/* Text */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#191E49]">
              Direct Website Booking
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Integrate Solora’s booking widget seamlessly into your website,
              letting clients schedule appointments instantly.
              <br /><br />
              Cut down on phone calls and administrative work with our
              user-friendly system that requires no sign-ups or passwords —
              just simple, direct booking.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          {/* Image */}
          <div className="w-full lg:w-1/2 order-1 lg:order-none flex justify-center">
            <Image
              src={clientExperience}
              alt="Outstanding Client Experience"
              className="rounded-2xl shadow-lg w-full max-w-md lg:max-w-lg"
            />
          </div>
          {/* Text */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#191E49]">
              Deliver an Outstanding Client Experience
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Create a seamless booking journey with Solora’s intuitive platform
              that works flawlessly across all devices.
              <br /><br />
              Your clients can book appointments instantly using just their
              name and contact information — no account setup required, no
              complicated steps, just effortless scheduling.
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <div className="w-full lg:w-1/2 order-1 lg:order-none flex justify-center">
            <Image
              src={customization}
              alt="Customization Control"
              className="rounded-2xl shadow-lg w-full max-w-md lg:max-w-lg"
            />
          </div>
          {/* Text */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#191E49]">
              Complete Customization Control
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Solora’s booking platform adapts to your business with extensive
              customization options designed for your unique needs.
              <br /><br />
              Choose which staff and services to display, control pricing
              options, set group appointment availability, manage seasonal
              promotions, and brand your booking interface with your logo and
              colors.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}