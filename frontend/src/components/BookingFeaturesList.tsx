"use client";

import Image from "next/image";
import img1 from "../assets/features/img1.png";
import img2 from "../assets/features/img2.png";
import img3 from "../assets/features/img3.png";
import img4 from "../assets/features/img4.png";
import img5 from "../assets/features/img5.png";
import img6 from "../assets/features/img6.png";
import img7 from "../assets/features/img7.png";
import img8 from "../assets/features/img8.png";
import img9 from "../assets/features/img9.png";
import img10 from "../assets/features/img10.png";
import img11 from "../assets/features/img11.png";
import img12 from "../assets/features/img12.png";

const features = [
  {
    id: 1,
    title: "Direct Website Booking",
    description: `Integrate Solora’s booking widget seamlessly into your website,
      letting clients schedule appointments instantly.

      Cut down on phone calls and administrative work with our
      user-friendly system that requires no sign-ups or passwords —
      just simple, direct booking.`,
    image: img1,
  },
  {
    id: 2,
    title: "Deliver an Outstanding Client Experience",
    description: `Create a seamless booking journey with Solora’s intuitive platform
      that works flawlessly across all devices.

      Your clients can book appointments instantly using just their
      name and contact information — no account setup required, no
      complicated steps, just effortless scheduling.`,
    image: img2,
  },
  {
    id: 3,
    title: "Complete Customization Control",
    description: `Solora’s booking platform adapts to your business with extensive
      customization options designed for your unique needs.

      Choose which staff and services to display, control pricing
      options, set group appointment availability, manage seasonal
      promotions, and brand your booking interface with your logo and
      colors.`,
    image: img3,
  },
  {
    id: 4,
    title: "Direct Website Booking",
    description: `Integrate Solora’s booking widget seamlessly into your website,
      letting clients schedule appointments instantly.

      Cut down on phone calls and administrative work with our
      user-friendly system that requires no sign-ups or passwords —
      just simple, direct booking.`,
    image: img4,
  },
  {
    id: 5,
    title: "Deliver an Outstanding Client Experience",
    description: `Create a seamless booking journey with Solora’s intuitive platform
      that works flawlessly across all devices.

      Your clients can book appointments instantly using just their
      name and contact information — no account setup required, no
      complicated steps, just effortless scheduling.`,
    image: img5,
  },
  {
    id: 6,
    title: "Complete Customization Control",
    description: `Solora’s booking platform adapts to your business with extensive
      customization options designed for your unique needs.

      Choose which staff and services to display, control pricing
      options, set group appointment availability, manage seasonal
      promotions, and brand your booking interface with your logo and
      colors.`,
    image: img6,
  },
  {
    id: 7,
    title: "Direct Website Booking",
    description: `Integrate Solora’s booking widget seamlessly into your website,
      letting clients schedule appointments instantly.

      Cut down on phone calls and administrative work with our
      user-friendly system that requires no sign-ups or passwords —
      just simple, direct booking.`,
    image: img7,
  },
  {
    id: 8,
    title: "Deliver an Outstanding Client Experience",
    description: `Create a seamless booking journey with Solora’s intuitive platform
      that works flawlessly across all devices.

      Your clients can book appointments instantly using just their
      name and contact information — no account setup required, no
      complicated steps, just effortless scheduling.`,
    image: img8,
  },
  {
    id: 9,
    title: "Complete Customization Control",
    description: `Solora’s booking platform adapts to your business with extensive
      customization options designed for your unique needs.

      Choose which staff and services to display, control pricing
      options, set group appointment availability, manage seasonal
      promotions, and brand your booking interface with your logo and
      colors.`,
    image: img9,
  },
  {
    id: 10,
    title: "Direct Website Booking",
    description: `Integrate Solora’s booking widget seamlessly into your website,
      letting clients schedule appointments instantly.

      Cut down on phone calls and administrative work with our
      user-friendly system that requires no sign-ups or passwords —
      just simple, direct booking.`,
    image: img10,
  },
  {
    id: 11,
    title: "Deliver an Outstanding Client Experience",
    description: `Create a seamless booking journey with Solora’s intuitive platform
      that works flawlessly across all devices.

      Your clients can book appointments instantly using just their
      name and contact information — no account setup required, no
      complicated steps, just effortless scheduling.`,
    image: img11,
  },
  {
    id: 12,
    title: "Complete Customization Control",
    description: `Solora’s booking platform adapts to your business with extensive
      customization options designed for your unique needs.

      Choose which staff and services to display, control pricing
      options, set group appointment availability, manage seasonal
      promotions, and brand your booking interface with your logo and
      colors.`,
    image: img12,
  },
];

export default function BookingFeatures() {
  return (
    <section className="py-28 bg-white">
      {/* Consistent left & right margins */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 space-y-20">
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-4 items-center`}
          >
            {/* Text */}
            <div
              className={`space-y-6 ${
                index % 2 !== 0 ? "lg:order-2 lg:pl-8" : "lg:pr-8"
              }`}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-[#191E49]">
                {feature.title}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed whitespace-pre-line text-justify">
                {feature.description}
              </p>
            </div>

            {/* Image */}
            <div
              className={`flex justify-center ${
                index % 2 !== 0 ? "lg:order-1 lg:pr-8" : "lg:pl-8"
              }`}
            >
              <div className="bg-white rounded-3xl shadow-md border border-gray-200 p-3 max-w-md w-full">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={600}
                  height={400}
                  className="rounded-2xl object-cover w-full h-auto"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
