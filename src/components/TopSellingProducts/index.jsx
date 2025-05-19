import React, { useRef } from "react";

const products = [
  {
    brand: "Maybelline",
    title: "Maybelline New York Colossal Kajal, Black",
    image: "https://m.media-amazon.com/images/I/41Bnylq337S._SL500_.jpg",
    price: 139,
    oldPrice: 199,
    discount: "30% off",
    reward: 8,
    bestPrice: 131,
    rewardType: "Rewards",
  },
  {
    brand: "Parachute",
    title: "Parachute Advansed Aloe Vera Enriched Coconut Hair Oil...",
    image: "https://m.media-amazon.com/images/I/41ChbottBpL._SY450_.jpg",
    price: 157,
    oldPrice: 175,
    discount: "10% off",
    reward: 9,
    bestPrice: 148,
    rewardType: "Rewards",
  },
  {
    brand: "Livon",
    title: "Livon Shake and Spray Hair Serum, 100ml, Pack of 2",
    image: "https://m.media-amazon.com/images/I/51xfHbbDz2L._SX569_.jpg",
    price: 273,
    oldPrice: 630,
    discount: "57% off",
    reward: 16,
    bestPrice: 257,
    rewardType: "Rewards",
    pack: "2 pack",
  },
  {
    brand: "TRESemme",
    title: "Tresemme Hair Fall Defense Conditioner",
    image: "https://m.media-amazon.com/images/I/41DsJN2tH8L._SX522_.jpg",
    price: 102,
    oldPrice: 120,
    discount: "15% off",
    reward: 6,
    bestPrice: 96,
    rewardType: "Cashback",
  },
  {
    brand: "L'Oreal Paris",
    title: "LOreal Paris Instant Root Concealer Spray",
    image: "https://m.media-amazon.com/images/I/41XXjVSLyGL._SL500_.jpg",
    price: 258,
    oldPrice: 369,
    discount: "30% off",
    reward: 14,
    bestPrice: 244,
    rewardType: "Cashback",
  },
  {
    brand: "Parachute",
    title: "Parachute Advansed Jasmine Gold Coconut Hair Oil Wit...",
    image: "https://m.media-amazon.com/images/I/41d6XdhG51L._SL500_.jpg",
    price: 156,
    oldPrice: 315,
    discount: "50% off",
    reward: 9,
    bestPrice: 147,
    rewardType: "Rewards",
  },
];

const TopSellingProducts = () => {
  const sliderRef = useRef(null);

  const scroll = (dir) => {
    if (sliderRef.current) {
      const width = sliderRef.current.offsetWidth / 2; // Scroll by 2 cards
      sliderRef.current.scrollBy({ left: dir * width, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full px-2 md:px-6 lg:px-10 xl:px-16 py-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl md:text-3xl font-bold text-black">
          Amazon - Top Selling Offers
        </h2>
        <a
          href="#"
          className="text-blue-600 font-semibold flex items-center gap-1 hover:underline text-base md:text-lg"
        >
          View All <span className="text-xl">→</span>
        </a>
      </div>
      <div className="relative w-full">
        {/* Slider Controls */}
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full shadow p-2 hover:bg-white hidden md:block text-black"
          onClick={() => scroll(-1)}
          aria-label="Previous"
          style={{
            left: 0,
            top: "50%",
            position: "absolute",
            transform: "translateY(-50%)",
            zIndex: 10,
          }}
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full shadow p-2 hover:bg-white hidden md:block text-black"
          onClick={() => scroll(1)}
          aria-label="Next"
          style={{
            right: 0,
            top: "50%",
            position: "absolute",
            transform: "translateY(-50%)",
            zIndex: 10,
          }}
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
        <div
          ref={sliderRef}
          className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide scroll-smooth px-2"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {products.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-200 min-w-[260px] max-w-[280px] w-[90vw] flex-shrink-0 flex flex-col justify-between shadow-sm hover:shadow-md transition"
            >
              <div className="flex flex-col items-center pt-6 px-4 pb-2 min-h-[180px] relative">
                {p.pack && (
                  <span className="absolute top-2 right-2 bg-gray-100 text-gray-700 text-xs px-2 py-0.5 rounded-full border border-gray-200 font-medium">
                    {p.pack}
                  </span>
                )}
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-[110px] object-contain mb-2"
                  style={{ maxWidth: 110 }}
                />
              </div>
              <div className="border-t border-gray-100 px-4 pt-3 pb-4 flex flex-col flex-1">
                <div className="font-semibold text-gray-800 text-sm mb-0.5 line-clamp-1">
                  {p.brand}
                </div>
                <div className="text-gray-700 text-[15px] mb-2 line-clamp-2 min-h-[40px]">
                  {p.title}
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-bold text-gray-900 text-lg">
                    ₹{p.price}
                  </span>
                  <span className="text-gray-400 line-through text-base">
                    ₹{p.oldPrice}
                  </span>
                  <span className="text-blue-600 font-bold text-base">
                    ({p.discount})
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-1 text-gray-700 text-xs font-medium">
                    After {p.rewardType} of ₹{p.reward}
                  </span>
                </div>
                <div className="text-gray-500 text-xs mb-1">Best price</div>
                <div className="font-bold text-xl text-gray-900 mb-1">
                  ₹{p.bestPrice}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopSellingProducts;
