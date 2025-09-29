"use client";

import { useState } from "react";
import { FaCheck } from "react-icons/fa";

export default function Packages() {
  const [billing, setBilling] = useState("monthly");

  const plans = [
    {
      name: "Basic",
      price: { monthly: 50, yearly: 500 },
      period: "/ month",
      description: "For small teams",
      features: [
        "2 to 10 service providers",
        "Unlimited SMS & email notifications",
        "Add-on integrations available",
      ],
      color: "text-indigo-700 font-cormorant text-2xl",
      checkColor: "text-purple-500",
    },
    {
      name: "Premium",
      price: { monthly: 100, yearly: 1000 },
      period: "/ 2 months",
      description: "For growing businesses",
      features: [
        "Up to 20 service providers",
        "Advanced features: Express Booking™, Virtual Waiting Room, Memberships",
        "Standard integrations included",
      ],
      color: "text-pink-700 font-cormorant text-2xl",
      checkColor: "text-pink-500 ",
      badge: "Most Popular",
    },
    {
      name: "Standard",
      price: { monthly: 150, yearly: 1500 },
      period: "/ 3 months",
      description: "For large businesses",
      features: [
        "Unlimited service providers",
        "All essentials, plus advanced features",
        "Shopify and other integrations included. Custom APIs available",
      ],
      color: "text-orange-600 font-cormorant text-2xl",
      checkColor: "text-orange-500",
    },
  ];

  return (
    <section className="pt-40 pb-20 bg-gradient-to-b from-white via-purple-50/20 to-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-cormorant text-[#191E49] font-bold">
          Choose a plan that suits your needs
        </h2>
        <p className="text-gray-500 md:text-xl mt-4 font-poppins">
          Free data import & 1:1 onboarding assistance. Cancel anytime.
        </p>

        {/* Billing Toggle */}
        <div className="mt-8 flex justify-center">
          <div className="bg-white border border-purple-300 rounded-full p-1 flex font-cormorant text-lg">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-6 py-2 rounded-full transition ${
                billing === "monthly"
                  ? "bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow"
                  : "text-gray-700 hover:text-purple-600"
              }`}
            >
              Pay Monthly
            </button>
            <button
              onClick={() => setBilling("yearly")}
              className={`px-6 py-2 rounded-full transition ${
                billing === "yearly"
                  ? "bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow"
                  : "text-gray-700 hover:text-purple-600"
              }`}
            >
              Pay Yearly
            </button>
          </div>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {plans.map((plan, i) => (
            <div
              key={i}
              className="relative bg-white rounded-3xl shadow-lg px-6 py-10 flex flex-col text-left hover:shadow-2xl transition"
            >
              {/* Badge */}
              {plan.badge && (
                <span className="absolute font-poppins top-10 right-6 text-xs font-medium tracking-wide bg-gray-100 border border-gray-300 text-gray-700 rounded-full px-3 py-1 shadow-sm">
                  {plan.badge}
                </span>
              )}

              {/* Title */}
              <h3 className={`text-lg font-semibold ${plan.color}`}>
                {plan.name}
              </h3>

              {/* Price */}
              <p className="text-5xl font-bold mt-3 font-cormorant text-[#191E49]">
                ${billing === "monthly" ? plan.price.monthly : plan.price.yearly}
                <span className="text-lg font-normal text-[#191E49] ml-1">
                  {plan.period}
                </span>
              </p>

              {/* Description */}
              <p className="mt-2 text-[#191E49] font-roboto text-sm">{plan.description}</p>

              {/* Divider */}
              <div className="h-px bg-gray-200 my-6" />

              {/* Features */}
              <ul className="space-y-4">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex font-roboto text-sm items-start gap-3 text-gray-700">
                    <FaCheck className={`${plan.checkColor} mt-1`} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
