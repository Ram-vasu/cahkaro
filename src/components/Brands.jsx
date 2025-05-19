import React, { useRef } from "react";

const brands = [
  {
    logo: "https://asset20.ckassets.com/resources/image/stores/flipkart.png",
    label: "Sale Live Now",
    labelClass: "bg-[#FF4D6D]",
    timer: "Ends in 06 days",
    cashback: "Upto 7% Cashback",
    cashbackClass: "bg-[#0057FF]",
  },
  {
    logo: "https://asset20.ckassets.com/resources/image/stores/nykaa-ofy-1735636951.jpg",
    label: "Sale Live Now",
    labelClass: "bg-[#FF4D6D]",
    timer: "Ends in 06 days",
    cashback: "Flat 20% Cashback",
    cashbackClass: "bg-[#0057FF]",
  },
  {
    logo: "https://asset20.ckassets.com/resources/image/stores/mama-earth-ofy-1735628076.jpg",
    label: "Sale Live Now",
    labelClass: "bg-[#FF4D6D]",
    timer: "Ends in 06 days",
    cashback: "Flat 30% Cashback",
    cashbackClass: "bg-[#0057FF]",
  },
  {
    logo: "https://asset20.ckassets.com/resources/image/stores/buywow-ofy-1740393797.png",
    label: "Flat 20% Off",
    labelClass: "bg-[#FF4D6D]",
    timer: "Ends in 06 days",
    cashback: "Flat 50% Cashback",
    cashbackClass: "bg-[#0057FF]",
  },
  {
    logo: "https://asset20.ckassets.com/resources/image/stores/myntra-1735792893.jpg",
    label: "50% Off",
    labelClass: "bg-[#FF4D6D]",
    timer: "Ends in 06 days",
    cashback: "Upto 6% Cashback",
    cashbackClass: "bg-[#0057FF]",
  },
  {
    logo: "https://asset20.ckassets.com/resources/image/stores/shyaway-coupons-1735646185.jpg",
    label: "Sale Live Now",
    labelClass: "bg-[#FF4D6D]",
    timer: "Ends in 06 days",
    cashback: "Flat ₹300 Cashback",
    cashbackClass: "bg-[#0057FF]",
  },
  {
    logo: "https://asset20.ckassets.com/resources/image/stores/amazon-1735629515.jpg",
    label: "Sale Live Now",
    labelClass: "bg-[#FF4D6D]",
    timer: "Ends in 06 days",
    cashback: "Flat 20% Cashback",
    cashbackClass: "bg-[#0057FF]",
  },
  {
    logo: "https://asset20.ckassets.com/resources/image/stores/ajio-coupons-test-1696504043.png",
    label: "Sale Live Now",
    labelClass: "bg-[#FF4D6D]",
    timer: "Ends in 06 days",
    cashback: "Flat 30% Cashback",
    cashbackClass: "bg-[#0057FF]",
  },
  {
    logo: "https://asset20.ckassets.com/resources/image/stores/mcaffeine-ofy-1735629364.jpg",
    label: "Flat 20% Off",
    labelClass: "bg-[#FF4D6D]",
    timer: "Ends in 06 days",
    cashback: "Flat 50% Cashback",
    cashbackClass: "bg-[#0057FF]",
  },
  {
    logo: "https://asset20.ckassets.com/resources/image/stores/simply-click-sbi-card-1740289499.png",
    label: "50% Off",
    labelClass: "bg-[#FF4D6D]",
    timer: "Ends in 06 days",
    cashback: "Upto 6% Cashback",
    cashbackClass: "bg-[#0057FF]",
  },
  {
    logo: "https://asset20.ckassets.com/resources/image/stores/foxtale-coupons-1735635292.jpg",
    label: "Sale Live Now",
    labelClass: "bg-[#FF4D6D]",
    timer: "Ends in 06 days",
    cashback: "Flat ₹300 Cashback",
    cashbackClass: "bg-[#0057FF]",
  },
  {
    logo: "https://asset20.ckassets.com/resources/image/stores/xyxx-discount-code-1735643105.jpg",
    label: "Sale Live Now",
    labelClass: "bg-[#FF4D6D]",
    timer: "Ends in 06 days",
    cashback: "Flat 20% Cashback",
    cashbackClass: "bg-[#0057FF]",
  },
  {
    logo: "https://asset20.ckassets.com/resources/image/stores/indigo-hotels-coupons-1743593131.png",
    label: "Sale Live Now",
    labelClass: "bg-[#FF4D6D]",
    timer: "Ends in 06 days",
    cashback: "Flat 30% Cashback",
    cashbackClass: "bg-[#0057FF]",
  },
  {
    logo: "https://asset20.ckassets.com/resources/image/stores/samsung-offers-1735625656.jpg",
    label: "Flat 20% Off",
    labelClass: "bg-[#FF4D6D]",
    timer: "Ends in 06 days",
    cashback: "Flat 50% Cashback",
    cashbackClass: "bg-[#0057FF]",
  },
  {
    logo: "https://asset20.ckassets.com/resources/image/stores/nike-offers-1735646099.jpg",
    label: "50% Off",
    labelClass: "bg-[#FF4D6D]",
    timer: "Ends in 06 days",
    cashback: "Upto 6% Cashback",
    cashbackClass: "bg-[#0057FF]",
  },
  {
    logo: "https://asset20.ckassets.com/resources/image/stores/sbi-bpcl-credit-card-1740289456.png",
    label: "Sale Live Now",
    labelClass: "bg-[#FF4D6D]",
    timer: "Ends in 06 days",
    cashback: "Flat ₹300 Cashback",
    cashbackClass: "bg-[#0057FF]",
  },
  // ...add more brands as needed
];

const Brands = () => {
  const sliderRef = useRef(null);

  const scroll = (dir) => {
    if (sliderRef.current) {
      const height = sliderRef.current.offsetHeight / 2; // Show 2 cards vertically
      sliderRef.current.scrollBy({ top: dir * height, behavior: "smooth" });
    }
  };

  // Split brands into columns of 2 for vertical slider
  const columns = [];
  for (let i = 0; i < brands.length; i += 2) {
    columns.push([brands[i], brands[i + 1]].filter(Boolean));
  }

  return (
    <section className="w-full px-4 md:px-10 xl:px-[72px] mt-8 mb-0">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-black">
          Most Popular Brands
        </h2>
        <a
          href="#"
          className="text-[#0057FF] font-semibold text-base flex items-center gap-1 hover:underline"
        >
          View All <span className="text-lg">→</span>
        </a>
      </div>
      <div className="relative w-full max-w-full overflow-hidden">
        {/* Slider Controls */}
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full shadow p-2 hover:bg-white hidden lg:block"
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
            <path d="M8 15l4-4-4-4" />
          </svg>
        </button>
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full shadow p-2 hover:bg-white hidden lg:block"
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
            <path d="M16 9l-4 4 4 4" />
          </svg>
        </button>
        {/* Vertical Slider */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto lg:overflow-x-visible lg:overflow-y-auto h-[600px] lg:h-[600px]"
          style={{ scrollSnapType: "y mandatory" }}
        >
          {columns.map((col, colIdx) => (
            <div
              key={colIdx}
              className="flex flex-col gap-6 min-w-[288px] max-w-[320px] w-full"
            >
              {col.map((brand, idx) => (
                <div
                  key={idx}
                  className="store_card_main md:mx-2 mx-1 my-2 md:my-4 !mb-0 md:mb-4 mt-0 md:mt-0"
                >
                  {/* Top Card Section */}
                  <div className="h-[95px] md:h-[158px] border-ck-stroke-gray border border-b-0 rounded-lg md:rounded-[13px] relative bottom-[-1px] bg-white">
                    {/* Label */}
                    <div
                      className="h-8 flex h-8 justify-center"
                      id={`card_label_${brand.label.replace(
                        /\s/g,
                        "_"
                      )}_${colIdx}${idx}`}
                    >
                      <div className="h-[18px] w-auto md:max-w-[90%] md:h-[31px] bg-gradient-to-r from-[#FF4D6D] to-[#FF7E5F] rounded-b-lg md:rounded-b-[13px] flex justify-center items-center z-0 px-4">
                        <p className="text-white text-[9px] md:text-base line-clamp-1 font-semibold text-center">
                          {brand.label}
                        </p>
                      </div>
                    </div>
                    {/* Logo */}
                    <div className="mt-1 pb-5 md:mt-3 mx-auto w-[112px] h-[52px] md:w-auto md:h-[88px] flex justify-center items-center px-2 !px-0">
                      <button
                        type="button"
                        className="flex items-center cursor-pointer text-xs md:text-base font-semibold leading-4 md:leading-6 "
                      >
                        <img
                          alt="Brand Logo"
                          title="Brand Logo"
                          loading="lazy"
                          width="160"
                          height="80"
                          decoding="async"
                          data-nimg="1"
                          className="mx-auto md:w-[192px] md:h-[88px] w-[112px] h-[52px] object-contain"
                          style={{ color: "transparent" }}
                          src={brand.logo}
                        />
                      </button>
                    </div>
                    {/* Timer */}
                    <div className="w-[90%] md:w-[91%] h-5 md:h-[32px] absolute bottom-[-10px] m-auto left-0 right-0 flex justify-center items-center">
                      <div className="h-[20px] md:h-[32px] border border-ck-artBoard-gray rounded flex justify-center items-center">
                        <p className="text-[10px] md:text-sm lg:text-md text-ck-red font-semibold flex items-center gap-1 leading-4 whitespace-nowrap md:px-2">
                          <svg
                            width="16"
                            height="16"
                            fill="none"
                            stroke="#FF4D6D"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 6v6l4 2" />
                          </svg>
                          {brand.timer}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Bottom Card Section */}
                  <div className="h-[68px] md:h-[106px] border-ck-stroke-gray border border-t-0 rounded-lg md:rounded-[13px] -z-10 top-[-1px] flex justify-center items-center bg-white">
                    <div className="w-[85%] mx-auto flex justify-center items-center mt-1">
                      <button
                        type="button"
                        className="text-xs md:text-base font-semibold rounded-md md:rounded-xl bg-[#0057FF] hover:bg-blue-700 px-3 w-[122px] h-[36px] md:w-[208px] md:h-[64px] leading-[14px] md-leading-[22px] text-white line-clamp-2 md:w-full px-1 py-[5px] md:px-5 md:py-[10px] lineHgt_revert md:leading-[22px]"
                      >
                        {brand.cashback}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
