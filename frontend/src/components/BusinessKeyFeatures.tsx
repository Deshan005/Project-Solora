"use client";

export default function BusinessKeyFeatures() {
  const features = [
    "Personalized staff service options",
    "Smart inventory and product tracking",
    "Simplified payroll & staff management",
    "Quick online booking for clients",
    "Automated text reminders with SMS",
    "Built-in easy client rebooking",
    "Easy client tipping & secure card storage",
    "Contactless checkout",
    "Colors can send application photos",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-cormorant font-bold text-[#191E49] mb-12">
          Key Features for Hair Salons
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
          {features.map((feature, i) => (
            <div key={i} className="flex items-start space-x-3">
              <span className="text-[#7B4DFF] font-bold text-lg">✔</span>
              <p className="text-gray-700 text-sm sm:text-base">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
