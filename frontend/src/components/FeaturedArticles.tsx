"use client";

import Image from "next/image";
import img1 from "../assets/blogs/img1.png";
import img2 from "../assets/blogs/img2.png";
import img3 from "../assets/blogs/img3.png";
import ava1 from "../assets/why/person1.png";

export default function FeaturedArticles() {
  return (
    <section className="pt-32 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Heading + Subscribe */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h1 className="text-5xl font-cormorant font-bold text-gray-900 mb-6 md:mb-0">
            Solora Blog
          </h1>

          {/* Subscribe Input */}
          <div className="flex w-full md:w-auto max-w-md border rounded-full overflow-hidden shadow-sm">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 text-lg font-cormorant px-4 py-2 outline-none text-gray-700"
            />
            <button className="bg-[#BC269B] text-lg font-cormorant text-white px-6 py-2 font-medium hover:bg-pink-700 transition">
              Subscribe
            </button>
          </div>
        </div>

        {/* Featured Article */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden">
            <Image
              src={img1}
              alt="Featured"
              width={600}
              height={400}
              className="rounded-2xl"
            />
          </div>

          {/* Text */}
          <div>
            <p className="text-sm font-poppins uppercase tracking-widest text-gray-500 mb-2">
              Featured Article
            </p>
            <h2 className="text-4xl font-cormorant font-bold text-gray-900 leading-tight">
              Introducing Automated Flows for personalized marketing
            </h2>
            <p className="mt-4 font-roboto text-gray-600 leading-relaxed">
              Create highly personalized sequences of emails and text messages
              to rebook clients, welcome first-time guests, encourage reviews,
              upsell memberships, and more.
            </p>

            <div className="mt-6 flex items-center space-x-3">
              <Image
                src={ava1}
                alt="Author"
                width={40}
                height={20}
                className="rounded-full"
              />
              <div>
                <p className="text-lg font-cormorant font-medium text-gray-900">
                  Abby Schmauz
                </p>
                <p className="text-xs font-roboto text-gray-500">
                  Product Marketing Manager
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Articles */}
        <div className="mt-20">
          <h3 className="text-4xl font-cormorant font-bold text-gray-900 mb-8">
            Popular Articles
          </h3>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Card 1 */}
            <div>
              <div className="rounded-2xl overflow-hidden shadow hover:shadow-lg transition">
                <Image
                  src={img2}
                  alt="Integrated Payroll"
                  width={600}
                  height={300}
                  className="rounded-2xl"
                />
              </div>
              <h4 className="mt-4 font-cormorant text-3xl font-semibold text-gray-900">
                Integrated Payroll Processing in Solora
              </h4>
              <p className="mt-2 font-roboto text-gray-600 text-sm">
                Ditch your third-party payroll provider and run payroll in
                minutes with Solora’s built-in solution for paying salon or spa
                staff.
              </p>
              <p className="mt-3 font-cormorant text-sm text-gray-500">
                By Abby Schmauz | June 26, 2025
              </p>
            </div>

            {/* Card 2 */}
            <div>
              <div className="rounded-2xl overflow-hidden shadow hover:shadow-lg transition">
                <Image
                  src={img3}
                  alt="Integrated Forms"
                  width={600}
                  height={300}
                  className="rounded-2xl"
                />
              </div>
              <h4 className="mt-4 font-cormorant text-3xl font-semibold text-gray-900">
                Introducing powerful Integrated Forms updates
              </h4>
              <p className="mt-2 font-roboto text-gray-600 text-sm">
                Save progress on forms for flexible charting and submit forms
                for review to streamline team collaboration and ensure
                compliance.
              </p>
              <p className="mt-3 font-cormorant text-sm text-gray-500">
                By Abby Schmauz | July 8, 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
