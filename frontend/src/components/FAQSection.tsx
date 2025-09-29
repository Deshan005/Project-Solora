"use client";
import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

const faqs = [
  {
    question: "How long does it take to set up the system?",
    answer:
      "Most businesses are up and running within 24-48 hours. Our team helps you with onboarding and migrating your data.",
  },
  {
    question: "Can I try the software before committing?",
    answer:
      "Yes! We offer a free trial so you can explore all the features before making a decision.",
  },
  {
    question: "Do you provide customer support?",
    answer:
      "Absolutely. Our support team is available 24/7 via chat, email, and phone to help you every step of the way.",
  },
  {
    question: "Is my data safe and secure?",
    answer:
      "Yes. We use industry-standard encryption and security practices to protect your business and customer data.",
  },
    {
    question: "Can I cancel anytime?",
    answer:
      "Yes. We use industry-standard encryption and security practices to protect your business and customer data.",
  },
    {
    question: "Are there any contracts or hidden fees?",
    answer:
      "Yes. We use industry-standard encryption and security practices to protect your business and customer data.",
  },
    {
    question: "Are there any fees for SMS/email appointment notifications?",
    answer:
      "Yes. We use industry-standard encryption and security practices to protect your business and customer data.",
  },
    {
    question: "Can I use my own credit card processor?",
    answer:
      "Yes. We use industry-standard encryption and security practices to protect your business and customer data.",
  },
    {
    question: "Do you offer one-on-one demos?",
    answer:
      "Yes. We use industry-standard encryption and security practices to protect your business and customer data.",
  },
    {
    question: "Can I transfer data from my old system?",
    answer:
      "Yes. We use industry-standard encryption and security practices to protect your business and customer data.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-cormorant font-bold text-center text-[#191E49] mb-8">
          Frequently Asked Questions
        </h2>

        {/* FAQ Rows */}
        <div className="divide-y divide-gray-200 font-poppins text-[#191E49]">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center py-4 text-left text-lg font-medium text-indigo-900 focus:outline-none"
              >
                {faq.question}
                <ChevronRight
                  className={`h-5 w-5 transform transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="pb-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
