import React, { useRef } from "react";

const bannerImages = [
  // Replace these URLs with your actual banner image URLs
  "https://asset20.ckassets.com/resources/image/slider_images/ck-storepage-v2/segment/desktop-slider9-1747136801.png",
  "https://asset20.ckassets.com/resources/image/slider_images/ck-storepage-v2/segment/desktop-slider4-1747374776.png",
  "https://asset20.ckassets.com/resources/image/slider_images/ck-storepage-v2/segment/desktop-slider5-1747543386.png",
  "https://asset20.ckassets.com/resources/image/slider_images/ck-storepage-v2/segment/desktop-slider9-1747136801.png",
  "https://asset20.ckassets.com/resources/image/slider_images/ck-storepage-v2/segment/desktop-slider1-1746783595.png",
  "https://asset20.ckassets.com/resources/image/slider_images/ck-storepage-v2/segment/desktop-slider2-1747417416.png",
  // Add more images as needed
];

const Banner = () => {
  const sliderRef = useRef(null);

  const scroll = (dir) => {
    if (sliderRef.current) {
      const width = sliderRef.current.offsetWidth / 3; // Show 3 banners on large screens
      sliderRef.current.scrollBy({ left: dir * width, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full overflow-x-hidden bg-white pt-0 py-4 mb-0 md:py-8 px-5">
      <section className="homePgeBnr">
        {/* Slider Controls (desktop only) */}
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full shadow p-2 hover:bg-white hidden md:block text-black"
          onClick={() => scroll(-1)}
          aria-label="Previous"
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
        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth px-2 md:gap-6 md:px-4"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {bannerImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Banner ${idx + 1}`}
              className="w-[92vw] min-w-[92vw] max-w-[92vw] md:w-[32vw] md:min-w-[32vw] md:max-w-[32vw] rounded-3xl object-cover"
              style={{
                scrollSnapAlign: "start",
                height: 260, // increased from 220
                maxHeight: "56vw",
                minHeight: 180, // increased from 160
              }}
            />
          ))}
        </div>
        {/* Dots (mobile only) */}
        <div className="flex justify-center items-center gap-2 mt-4 md:hidden">
          {bannerImages.map((_, idx) => (
            <span
              key={idx}
              className="w-2 h-2 rounded-full bg-gray-300 inline-block"
            ></span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Banner;
