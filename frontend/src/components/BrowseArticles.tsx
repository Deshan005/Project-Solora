"use client";

import Image from "next/image";

import img1 from "../assets/blogs/browse/img1.png";
import img2 from "../assets/blogs/browse/img2.png";
import img3 from "../assets/blogs/browse/img3.png";
import img4 from "../assets/blogs/browse/img4.png";
import img5 from "../assets/blogs/browse/img5.png";
import img6 from "../assets/blogs/browse/img6.png";
import EmailMarketingFeature from "./MarketingFeature";

// ✅ Dummy extra articles
const extraArticles = Array.from({ length: 24 }, (_, i) => ({
  id: i + 7,
  category: i % 2 === 0 ? "Guides" : "Features",
  title: `Extra Article ${i + 7}`,
  author: i % 2 === 0 ? "John Doe" : "Jane Doe",
  date: "September 10, 2025",
  image: [img1, img2, img3, img4, img5, img6][i % 6],
}));

// ✅ Combine all articles
const articles = [
  {
    id: 1,
    category: "Guides",
    title: "8 Must-Have Salon Software Features for 2025",
    author: "Emily Holter",
    date: "August 30, 2025",
    image: img1,
  },
  {
    id: 2,
    category: "Features",
    title: "14 Must-Have Med Spa Features for 2025",
    author: "Emily Holter",
    date: "August 20, 2025",
    image: img2,
  },
  {
    id: 3,
    category: "Industry",
    title: "How House of Aanuko leveled up their barbershop with Mangomint",
    author: "Josephine Schultz",
    date: "August 12, 2025",
    image: img3,
  },
  {
    id: 4,
    category: "Industry",
    title: "How Solora keeps Pure Beauty Aesthetics glowing",
    author: "Josephine Schultz",
    date: "July 17, 2025",
    image: img4,
  },
  {
    id: 5,
    category: "Company",
    title: "Solora’s ranked as the #1 salon and spa software (again!)",
    author: "Josephine Schultz",
    date: "July 22, 2025",
    image: img5,
  },
  {
    id: 6,
    category: "Industry",
    title: "How Pony Studios built a thriving salon",
    author: "Josephine Schultz",
    date: "July 31, 2025",
    image: img6,
  },
  ...extraArticles,
];

export default function BrowseArticles() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-cormorant font-bold text-gray-900 text-left mb-6">
          Browse Articles
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-left gap-4 mb-14">
          <button className="px-4 py-2 font-poppins text-xs bg-gray-600 text-white rounded-full hover:bg-gray-500 transition">
            See All
          </button>
          <button className="px-4 py-2 font-poppins text-xs border border-gray-300 text-gray-700 rounded-full hover:bg-gray-100 transition">
            Features
          </button>
          <button className="px-4 py-2 font-poppins text-xs border border-gray-300 text-gray-700 rounded-full hover:bg-gray-100 transition">
            Guides
          </button>
          <button className="px-4 py-2 font-poppins text-xs border border-gray-300 text-gray-700 rounded-full hover:bg-gray-100 transition">
            Industry
          </button>
          <button className="px-4 py-2 font-poppins text-xs border border-gray-300 text-gray-700 rounded-full hover:bg-gray-100 transition">
            Company
          </button>
          <button className="px-4 py-2 font-poppins text-xs border border-gray-300 text-gray-700 rounded-full hover:bg-gray-100 transition">
            Tools
          </button>
        </div>

        {/* Articles with marketing blocks inserted */}
        <div className="space-y-16">
          {/* First 6 articles */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 font-cormorant text-[#191E49]">
            {articles.slice(0, 6).map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>

          {/* Marketing Component */}
          <div className="-mx-36">
            <EmailMarketingFeature />
          </div>

          {/* Next 6 articles */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 font-cormorant text-[#191E49]">
            {articles.slice(6, 12).map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>

          {/* Marketing Component again */}
          <div className="-mx-36">
            <EmailMarketingFeature />
          </div>

          {/* Rest of articles */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 font-cormorant text-[#191E49]">
            {articles.slice(12).map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ✅ Extracted ArticleCard for cleaner structure
function ArticleCard({ article }: { article: any }) {
  return (
    <div className="group">
      <div className="rounded-xl overflow-hidden shadow hover:shadow-lg transition">
        <Image
          src={article.image}
          alt={article.title}
          width={400}
          height={300}
          className="w-full h-[240px] object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <p className="mt-3 font-poppins text-xs uppercase tracking-widest text-[#191E49] font-medium">
        {article.category}
      </p>
      <h3 className="text-3xl font-cormorant font-semibold text-gray-900 mt-1 group-hover:text-[#191E49] transition">
        {article.title}
      </h3>
      <p className="text-sm text-gray-500 mt-1">
        By {article.author} • {article.date}
      </p>
    </div>
  );
}
