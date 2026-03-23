"use client";
import Image from "next/image";

export default function BusinessMigration() {
  return (
    <section className="flex flex-col items-center justify-center bg-gray-50 px-6 md:px-20 py-20 gap-12 text-center">
      {/* Text Section */}
      <div className="w-full md:w-3/4 space-y-6">
        <h3 className="text-sm font-semibold text-purple-600 uppercase tracking-wider">
          Seamless Migration Made Simple
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Move to Solora with zero disruption
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Our migration specialists handle the complete transfer process, including customer profiles, service histories, and product catalogs—ensuring you switch platforms without compromising any essential business data.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-3/4 flex justify-center">
        <Image
          src="/images/migration.png"
          alt="Migration Illustration"
          width={700}
          height={500}
          className="rounded-2xl shadow-lg w-full h-auto max-w-3xl"
        />
      </div>
    </section>
  );
}
