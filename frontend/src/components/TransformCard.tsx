// components/TransformCard.tsx
export default function TransformCard() {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row items-center">
        
        {/* Left Text Content */}
        <div className="w-full md:w-1/2 p-10 text-left">
          <h2 className="text-2xl md:text-3xl font-serif text-gray-900">
            Ready to transform your salon experience?
          </h2>
          <p className="text-gray-600 mt-4 text-sm md:text-base leading-relaxed">
            Start today with a free trial and discover how easy salon
            management can be. No credit card required.
          </p>

          <div className="mt-6 flex items-center gap-4">
            <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-medium shadow-lg hover:opacity-90 transition">
              Start your free trial
            </button>
            <button className="flex items-center text-gray-700 hover:text-gray-900 text-sm">
              ▶ Watch a video tour
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/images/salon-woman.jpg"
            alt="Salon Experience"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
