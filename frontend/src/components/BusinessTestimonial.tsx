"use client";

const testimonials = [
  {
    name: "Sarah Peterson",
    role: "Luxe Beauty Studio",
    quote:
      "Switching to Solora wasn’t about one feature, but a feeling—it felt great from the start. My salon has never run smoother.",
  },
  {
    name: "Robert Chen",
    role: "Serenity Spa",
    quote:
      "The fastest, best-designed software that runs our spa and keeps our clients booked for 6+ weeks out.",
  },
  {
    name: "David Lee",
    role: "Pure Aesthetics",
    quote:
      "From appointment booking to payment processing, Solora handles everything. My revenue increased 40% since switching.",
  },
];

export default function BusinessTestimonial() {
  return (
    <section className="bg-white py-20 px-6 md:px-24 text-center">
      <h3 className="text-sm font-semibold text-purple-600 uppercase tracking-wider">
        Trusted by leading salon professionals
      </h3>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
        See why they choose us
      </h2>
      <p className="text-gray-600 mt-3 mb-10 max-w-2xl mx-auto">
        Voted #1 in User Satisfaction, our platform combines an intuitive interface with powerful automations—and backs it all with five-star, US-based support.
      </p>

      <div className="flex justify-center mb-10">
        {"★★★★★".split("").map((s, i) => (
          <span key={i} className="text-yellow-400 text-2xl mx-1">{s}</span>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition"
          >
            <p className="text-gray-700 italic mb-6">“{t.quote}”</p>
            <div>
              <p className="font-semibold text-gray-900">{t.name}</p>
              <p className="text-gray-500 text-sm">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
