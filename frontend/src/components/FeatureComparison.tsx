'use client'

import React from "react";
import Link from "next/link";

const FeatureComparison = () => {
  return (
    <div className="w-full px-4 md:px-10 lg:px-20 py-12 bg-white mt-16">
      {/* Heading */}
      <h2 className="text-5xl font-cormorant font-bold text-center text-[#191E49] mb-6">
        Feature Comparison Plans
      </h2>
      <p className="text-center font-poppins text-lg text-gray-600 mb-10">
        Choose a plan that best fits your salon&apos;s needs. Start with a free trial,
        then pick a package that grows with your business.
      </p>

      {/* NOTE: we wrap each table in the same max-width container so they line up visually */}
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Pricing Table (main header reference) */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200 rounded-lg shadow-md mb-2 aligned-table">
            {/* colgroup - SAME for every table to keep columns aligned */}
            <colgroup>
              <col style={{ width: "40%" }} />
              <col style={{ width: "20%" }} />
              <col style={{ width: "20%" }} />
              <col style={{ width: "20%" }} />
            </colgroup>

            <thead>
              <tr className="bg-gradient-to-r from-purple-50 via-pink-50 to-orange-50 text-center">
                <th className="border border-gray-200 px-6 py-6 text-left"></th>
                <th className="border border-gray-200 px-6 py-6">
                  <p className="text-xl font-cormorant font-semibold text-indigo-900">Basic</p>
                  <p className="text-sm font-roboto text-gray-500">Small businesses</p>
                </th>
                <th className="border border-gray-200 px-6 py-6">
                  <p className="text-xl font-cormorant font-semibold text-indigo-900">Premium</p>
                  <p className="text-sm font-roboto text-gray-500">Medium businesses</p>
                </th>
                <th className="border border-gray-200 px-6 py-6">
                  <p className="text-xl font-cormorant font-semibold text-indigo-900">Standard</p>
                  <p className="text-sm font-roboto text-gray-500">Large businesses</p>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="text-center">
                <td className="border font-roboto border-gray-200 px-6 py-6 font-medium text-gray-700 text-left">
                  Monthly Price (USD)
                </td>
                <td className="border border-gray-200 font-cormorant px-6 py-6">
                  <span className="text-4xl font-bold text-indigo-900">$50</span>
                  <span className="text-sm text-gray-600"> /mo</span>
                </td>
                <td className="border border-gray-200 font-cormorant px-6 py-6">
                  <span className="text-4xl font-bold text-indigo-900">$100</span>
                  <span className="text-sm text-gray-600"> /mo</span>
                </td>
                <td className="border border-gray-200 font-cormorant px-6 py-6">
                  <span className="text-4xl font-bold text-indigo-900">$150</span>
                  <span className="text-sm text-gray-600"> /mo</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Features Table (aligned, no plan headers) */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200 rounded-lg shadow-md mb-2 aligned-table">
            <colgroup>
              <col style={{ width: "40%" }} />
              <col style={{ width: "20%" }} />
              <col style={{ width: "20%" }} />
              <col style={{ width: "20%" }} />
            </colgroup>

            <thead>
              <tr className="bg-gradient-to-r from-purple-50 via-pink-50 to-orange-50">
                <th className="border font-cormorant text-xl border-gray-200 px-6 py-3 font-semibold text-gray-700 text-left">
                  Features
                </th>
                {/* empty headers to line up with pricing table */}
                <th className="border border-gray-200 px-6 py-3"></th>
                <th className="border border-gray-200 px-6 py-3"></th>
                <th className="border border-gray-200 px-6 py-3"></th>
              </tr>
            </thead>

            <tbody className="text-gray-700 font-roboto">
              {[
                "Dashboard",
                "Calendar Bookings",
                "Branches",
                "Bookings",
                "Services",
                "Packages",
                "Customer Packages",
                "Staffs",
                "Customers",
                "Tax",
                "Staff Earnings",
                "Promotions",
                "Daily Bookings",
                "Overall Bookings",
                "Staffs Payouts",
                "Staffs Services",
                "Settings",
                "Pages",
                "Notifications",
                "App Banner",
                "Access Control",
                "Subscriptions",
                "Location",
              ].map((feature, idx) => (
                <tr key={idx}>
                  <td className="border border-gray-200 px-6 py-3 text-left">{feature}</td>
                  <td className="border text-[#BC269B] border-gray-200 text-center">✔</td>
                  <td className="border text-[#BC269B] border-gray-200 text-center">✔</td>
                  <td className="border text-[#BC269B] border-gray-200 text-center">✔</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Limits Table (aligned, no plan headers) */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200 rounded-lg shadow-md aligned-table">
            <colgroup>
              <col style={{ width: "40%" }} />
              <col style={{ width: "20%" }} />
              <col style={{ width: "20%" }} />
              <col style={{ width: "20%" }} />
            </colgroup>

            <thead>
              <tr className="bg-gradient-to-r from-purple-50 via-pink-50 to-orange-50">
                <th className="border font-cormorant text-lg border-gray-200 px-6 py-3 font-semibold text-gray-700 text-left">
                  Limits
                </th>
                <th className="border border-gray-200 px-6 py-3"></th>
                <th className="border border-gray-200 px-6 py-3"></th>
                <th className="border border-gray-200 px-6 py-3"></th>
              </tr>
            </thead>

            <tbody className="text-gray-700">
              <tr>
                <td className="border border-gray-200 px-6 py-3 text-left">Appointments</td>
                <td className="border border-gray-200 text-center">5</td>
                <td className="border border-gray-200 text-center">10</td>
                <td className="border border-gray-200 text-center">20</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-6 py-3 text-left">Branches</td>
                <td className="border border-gray-200 text-center">1</td>
                <td className="border border-gray-200 text-center">2</td>
                <td className="border border-gray-200 text-center">5</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-6 py-3 text-left">Services</td>
                <td className="border border-gray-200 text-center">2</td>
                <td className="border border-gray-200 text-center">10</td>
                <td className="border border-gray-200 text-center">25</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-6 py-3 text-left">Staff</td>
                <td className="border border-gray-200 text-center">2</td>
                <td className="border border-gray-200 text-center">10</td>
                <td className="border border-gray-200 text-center">50</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-6 py-3 text-left">Customers</td>
                <td className="border border-gray-200 text-center">5</td>
                <td className="border border-gray-200 text-center">5</td>
                <td className="border border-gray-200 text-center">15</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex justify-center space-x-6">
          <Link
            href="/register"
            className="rounded-full bg-white font-cormorant text-[18px] leading-[22.5px] tracking-[-0.02px] font-medium text-[#BC269B] px-6 py-3 border border-[#BC269B] hover:bg-[#BC269B] hover:text-white transition"
          >
            Book a Demo
          </Link>
          <Link
            href="/register"
            className="rounded-full bg-[#BC269B] font-cormorant text-[18px] leading-[22.5px] tracking-[-0.02px] font-medium text-white px-6 py-3 border border-[#BC269B] hover:bg-[#a02188] transition"
          >
            Try it Now
          </Link>
        </div>
      </div>

      {/* Scoped CSS to force fixed layout and nicer wrapping */}
      <style jsx>{`
        /* Use fixed layout so widths from colgroup are honored */
        .aligned-table {
          table-layout: fixed;
          word-break: break-word;
        }

        /* smaller devices: keep horizontal scrollable but maintain column widths */
        @media (max-width: 640px) {
          .aligned-table td,
          .aligned-table th {
            padding-left: 0.75rem;
            padding-right: 0.75rem;
          }
        }
      `}</style>
    </div>
  );
};

export default FeatureComparison;
