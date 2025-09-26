"use client";

import { useState } from "react";
import Image from "next/image";
import image1 from "../assets/image1.jpg"
import image2 from "../assets/image2.jpg"
import image3 from "../assets/image3.jpg"
import image4 from "../assets/image4.jpg"
import image5 from "../assets/image5.jpg"

const Features = () => {
  const [activeTab, setActiveTab] = useState("calendar");

  const features = [
    { id: "calendar", name: "CALENDAR" },
    { id: "online-booking", name: "ONLINE BOOKING" },
    { id: "sales-payments", name: "SALES & PAYMENTS" },
    { id: "texting", name: "TWO-WAY TEXTING" },
    { id: "marketing", name: "MARKETING" }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto max-w-6xl px-6">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {features.map((feature) => (
            <button
              key={feature.id}
              onClick={() => setActiveTab(feature.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all font-roboto ${
                activeTab === feature.id
                  ? "bg-white-600 text-black shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {feature.name}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-gray-50 rounded-2xl p-8 min-h-[620px] text-center font-roboto relative overflow-hidden">
        {activeTab === "calendar" && (
            <Image
            src={image1}
            alt="Smart Calendar"
            fill
            className="object-cover rounded-2xl"
            priority
            />
        )}

        {activeTab === "online-booking" && (
            <Image
            src={image2}
            alt="Online Booking"
            fill
            className="object-cover rounded-2xl"
            priority
            />
        )}

        {activeTab === "sales-payments" && (
            <Image
            src={image3}
            alt="Sales and Payments"
            fill
            className="object-cover rounded-2xl"
            priority
            />
        )}

        {activeTab === "texting" && (
            <Image
            src={image4}
            alt="Text Communication"
            fill
            className="object-cover rounded-2xl"
            priority
            />
        )}

        {activeTab === "marketing" && (
            <Image
            src={image5}
            alt="Marketing Tools"
            fill
            className="object-cover rounded-2xl"
            priority
            />
        )}
        </div>
      </div>
    </section>
  );
};

export default Features;
