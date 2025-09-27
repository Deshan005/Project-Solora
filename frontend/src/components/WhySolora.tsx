'use client'
// components/WhySolora.tsx
export default function WhySolora() {
  return (
    
    <section className="bg-gradient-to-b from-white via-white to-[#f8f0fb] py-20 text-center">
      <div className="max-w-2xl mx-auto">
        <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
          Why Solora
        </p>
        <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mt-2">
          Quick Go Through <br /> About Solora
        </h2>
        <p className="text-gray-600 mt-4">
          We save your time, drive growth, and keep clients coming back.
          Here's how our platform boosts salon business success.
        </p>
        <button className="mt-6 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-medium shadow-lg hover:opacity-90 transition">
          Learn why we&apos;re different
        </button>
      </div>

    {/* Customer Stories Card */}
    <div className="mt-16 max-w-2xl mx-auto bg-[#1c1c3d] text-white rounded-3xl p-10 shadow-xl h-[600px] overflow-hidden relative">
    <p className="text-xs uppercase tracking-wider text-gray-400">
        Customer Stories
    </p>
    <h3 className="text-2xl font-serif mt-2">
        Loved by thousands of salons and spas
    </h3>

    {/* Horizontal scrolling container */}
    <div className="mt-8 overflow-x-hidden relative h-[500px]">
        <div className="flex gap-6 animate-scroll">
        <div className="rounded-2xl overflow-hidden bg-white text-gray-900 shadow min-w-[250px] h-[400px] flex-shrink-0">
            <img
            src="/images/person1.jpg"
            alt="Customer 1"
            className="w-full h-72 object-cover"
            />
            <div className="p-4 text-sm">
            <p className="font-medium">Alic Degerman</p>
            <p className="text-gray-500">CEO, House of Angels</p>
            </div>
        </div>

        <div className="rounded-2xl overflow-hidden bg-white text-gray-900 shadow min-w-[250px] h-[400px] flex-shrink-0">
            <img
            src="/images/person2.jpg"
            alt="Customer 2"
            className="w-full h-72 object-cover"
            />
            <div className="p-4 text-sm">
            <p className="font-medium">Emily Kane</p>
            <p className="text-gray-500">Resident Stylist</p>
            </div>
        </div>

        <div className="rounded-2xl overflow-hidden bg-white text-gray-900 shadow min-w-[250px] h-[400px] flex-shrink-0">
            <img
            src="/images/person3.jpg"
            alt="Customer 3"
            className="w-full h-72 object-cover"
            />
            <div className="p-4 text-sm">
            <p className="font-medium">Monica DeAngelis</p>
            <p className="text-gray-500">Barber Lady Mentor</p>
            </div>
        </div>

        {/* Duplicate cards for continuous scroll */}
        <div className="rounded-2xl overflow-hidden bg-white text-gray-900 shadow min-w-[250px] h-[400px] flex-shrink-0">
            <img
            src="/images/person1.jpg"
            alt="Customer 1"
            className="w-full h-72 object-cover"
            />
            <div className="p-4 text-sm">
            <p className="font-medium">Alic Degerman</p>
            <p className="text-gray-500">CEO, House of Angels</p>
            </div>
        </div>
        <div className="rounded-2xl overflow-hidden bg-white text-gray-900 shadow min-w-[250px] h-[480px] flex-shrink-0">
            <img
            src="/images/person2.jpg"
            alt="Customer 2"
            className="w-full h-72 object-cover"
            />
            <div className="p-4 text-sm">
            <p className="font-medium">Emily Kane</p>
            <p className="text-gray-500">Resident Stylist</p>
            </div>
        </div>
        </div>
    </div>
    </div>
    <style jsx>{`
    @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
    }

    .animate-scroll {
        display: flex;
        gap: 1.5rem;
        animation: scroll 30s linear infinite;
    }
    `}</style>
    </section>
  );
}
