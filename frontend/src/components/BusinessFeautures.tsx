"use client";
import Image from "next/image";

interface Feature {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  linkText: string;
  linkUrl: string;
}

const features: Feature[] = [
  {
    id: 1,
    title: "Quick Booking & Client Management",
    subtitle: "Confirm clients in moments",
    description:
      "Simplify your salon’s booking process. Let clients confirm instantly with an automated message system that saves time and boosts satisfaction.",
    image: "/images/feature1.png",
    linkText: "Explore booking system →",
    linkUrl: "#",
  },
  {
    id: 2,
    title: "Stay in charge of your salon’s day",
    subtitle: "Schedule with ease, anytime",
    description:
      "Keep your calendar fully organized with real-time updates and smart notifications that prevent double-booking and missed appointments.",
    image: "/images/feature2.png",
    linkText: "Learn about scheduling →",
    linkUrl: "#",
  },
  {
    id: 3,
    title: "Intelligent Inventory Control",
    subtitle: "Manage your products effortlessly",
    description:
      "Track your salon’s inventory in real time with automated low-stock alerts, purchase tracking, and reorder reminders—all in one dashboard.",
    image: "/images/feature3.png",
    linkText: "See inventory tools →",
    linkUrl: "#",
  },
];

export default function BusinessFeature() {
  return (
    <section className="bg-white py-16 px-4 sm:px-8 md:px-16 space-y-20">
      {features.map((feature) => (
        <div
          key={feature.id}
          className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-4 md:ml-20"
        >
          {/* Image on Left */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <Image
              src={feature.image}
              alt={feature.subtitle}
              width={550}
              height={400}
              className="rounded-2xl shadow-lg w-full max-w-md sm:max-w-lg object-contain"
            />
          </div>

          {/* Text on Right */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-4 sm:space-y-5">
            <h3 className="text-sm font-semibold text-purple-600 uppercase tracking-wider">
              {feature.title}
            </h3>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              {feature.subtitle}
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg">
              {feature.description}
            </p>
            <a
              href={feature.linkUrl}
              className="inline-block text-purple-600 font-medium hover:underline"
            >
              {feature.linkText}
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}
