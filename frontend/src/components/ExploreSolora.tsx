// components/ExploreSolora.tsx
export default function ExploreSolora() {
  return (
    <section className="bg-gradient-to-b from-[#f8f0fb] to-white py-20 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-serif text-gray-900">
          Explore Solora by <span className="text-pink-500">business type...</span>
        </h2>

        {/* Business Types */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            "Hair Salons",
            "Beauty Studios",
            "Nail Salons",
            "Med Spas",
            "Massage Studios",
            "Barbershops",
            "IV Therapy",
            "Hair Removal",
            "Wellness Centers",
            "Skincare Studios",
            "Tattoo & Piercing",
            "Spas",
          ].map((item) => (
            <div
              key={item}
              className="px-4 py-3 bg-white rounded-lg shadow-sm border border-gray-100 text-gray-700 text-sm hover:shadow-md transition"
            >
              {item}
            </div>
          ))}
        </div>

        {/* Features */}
        <h3 className="text-xl md:text-2xl font-serif text-gray-900 mt-16">
          ...or learn more about our <span className="text-pink-500">features</span>
        </h3>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          {/* Booking & Scheduling */}
          <div>
            <h4 className="text-sm font-semibold text-gray-600 mb-3">
              Booking & Scheduling
            </h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="bg-white px-3 py-2 rounded-lg shadow-sm">📅 Appointment Booking</li>
              <li className="bg-white px-3 py-2 rounded-lg shadow-sm">🗓️ Staff Scheduling</li>
              <li className="bg-white px-3 py-2 rounded-lg shadow-sm">💳 Tiered Subscription Plans</li>
            </ul>
          </div>

          {/* Staff Management */}
          <div>
            <h4 className="text-sm font-semibold text-gray-600 mb-3">
              Staff Management
            </h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="bg-white px-3 py-2 rounded-lg shadow-sm">📊 Employee Performance Tracking</li>
              <li className="bg-white px-3 py-2 rounded-lg shadow-sm">💰 Staff Earnings Overview</li>
              <li className="bg-white px-3 py-2 rounded-lg shadow-sm">⭐ Earning Insights for Staff</li>
            </ul>
          </div>

          {/* Business Analytics */}
          <div>
            <h4 className="text-sm font-semibold text-gray-600 mb-3">
              Business Analytics
            </h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="bg-white px-3 py-2 rounded-lg shadow-sm">📈 Analytics and Reporting</li>
              <li className="bg-white px-3 py-2 rounded-lg shadow-sm">🔑 Subscription Analytics</li>
              <li className="bg-white px-3 py-2 rounded-lg shadow-sm">💵 Tax Management</li>
            </ul>
          </div>

          {/* Client Services & Operations */}
          <div>
            <h4 className="text-sm font-semibold text-gray-600 mb-3">
              Client Services & Operations
            </h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="bg-white px-3 py-2 rounded-lg shadow-sm">🏬 Multi-location Management</li>
              <li className="bg-white px-3 py-2 rounded-lg shadow-sm">🔄 Membership Renewal Insights</li>
              <li className="bg-white px-3 py-2 rounded-lg shadow-sm">⚙️ Service Management</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
