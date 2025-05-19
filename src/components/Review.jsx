import React, { useRef } from "react";

const reviews = [
  {
    img: "/public/31na34LxwmL._SL500_.jpg",
    text: "Whenever I shop for skincare or makeup on Nykaa, I use CashKaro. It’s an easy way to get some of my money back.",
    name: "Divya Painuilly",
  },
  {
    img: "/public/41-iSp68mZS._SL500_.jpg",
    text: "I shop on Amazon all the time, but ever since I started using CashKaro, I’ve been getting extra cashback on my...",
    name: "Priya Saxena",
  },
  {
    img: "/public/51F29WiGdLL._SL500_.jpg",
    text: "I was skeptical at first, but CashKaro actually gives cashback on Amazon orders. I’ve saved so much over the...",
    name: "Rohit Talsania",
  },
  {
    img: "/public/51J7qLhFWoL._SL500_.jpg",
    text: "Bought a laptop from Croma using CashKaro and got a solid cashback amount. Didn’t think it would actually wor...",
    name: "Amit Dey",
  },
  {
    img: "/public/51F29WiGdLL._SL500_.jpg",
    text: "I was skeptical at first, but CashKaro actually gives cashback on Amazon orders. I’ve saved so much over the...",
    name: "Rohit Talsania",
  },
  {
    img: "/public/51J7qLhFWoL._SL500_.jpg",
    text: "Bought a laptop from Croma using CashKaro and got a solid cashback amount. Didn’t think it would actually wor...",
    name: "Amit Dey",
  },
  {
    img: "/public/51F29WiGdLL._SL500_.jpg",
    text: "I was skeptical at first, but CashKaro actually gives cashback on Amazon orders. I’ve saved so much over the...",
    name: "Rohit Talsania",
  },
  {
    img: "/public/51J7qLhFWoL._SL500_.jpg",
    text: "Bought a laptop from Croma using CashKaro and got a solid cashback amount. Didn’t think it would actually wor...",
    name: "Amit Dey",
  },
];

const Review = () => {
  const sliderRef = useRef(null);

  const scroll = (dir) => {
    if (!sliderRef.current) return;
    const card = sliderRef.current.querySelector(".review-card");
    if (!card) return;
    const scrollAmount = card.offsetWidth + 32; // 32px gap
    sliderRef.current.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full bg-white py-16 px-2 md:px-0">
      <div className="max-w-8xl px-6 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
          Meet Our Superstars
        </h2>
        <div className="relative">
          {/* Slider Buttons */}
          <button
            aria-label="Previous"
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full w-12 h-12 items-center justify-center shadow hover:bg-gray-100 transition"
            style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}
            onClick={() => scroll("left")}
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="#222"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                d="M15 19l-7-7 7-7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            aria-label="Next"
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full w-12 h-12 items-center justify-center shadow hover:bg-gray-100 transition"
            style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}
            onClick={() => scroll("right")}
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="#222"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                d="M9 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          {/* Cards */}
          <div
            ref={sliderRef}
            className="flex overflow-x-auto gap-8 scrollbar-hide px-2 md:px-0"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {reviews.map((r, i) => (
              <div
                key={i}
                className="review-card flex-shrink-0 w-[320px] md:w-[360px] bg-white border border-gray-200 rounded-3xl p-8 flex flex-col items-center text-center shadow-sm transition-all duration-200"
                style={{ scrollSnapAlign: "start", minHeight: 370 }}
              >
                <img
                  src={r.img}
                  alt={r.name}
                  className="w-28 h-28 rounded-full object-cover mb-6 border-4 border-white shadow"
                  style={{ objectPosition: "center top" }}
                />
                <p className="text-base text-gray-800 mb-4 min-h-[72px]">
                  {r.text}
                </p>
                <span className="font-semibold text-black mb-2 cursor-pointer">
                  See more
                </span>
                <span className="font-bold text-lg text-gray-900 mt-2">
                  {r.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
