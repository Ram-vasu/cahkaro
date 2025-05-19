import React, { useRef, useState } from "react";

const deals = [
  {
    logo: "https://asset20.ckassets.com/resources/image/stores/clove-oral-care-coupons-1735634904.jpg", // Example logo URL
    title: "Diabetic care 1 month plan month plan",
    subtitle: "+ FREE Glucometer & 10 strips",
    price: "₹99",
    oldPrice: "₹999",
    discount: "70% off",
    image:
      "https://asset22.ckassets.com/resources/image/staticpage_images/cleevo-1747298880.png", // Example product image
    cta: "Grab deal",
  },
  {
    logo: "https://asset20.ckassets.com/resources/image/stores/bajaj-prime-coupons-1742820629.png",
    title: "Any 5 home & hygiene products",
    subtitle: "@ ₹196",
    price: "₹196",
    oldPrice: null,
    discount: "70% off",
    image:
      "https://asset22.ckassets.com/resources/image/staticpage_images/puer-1747038021.png",
    cta: "Grab deal",
  },
  {
    logo: "https://asset20.ckassets.com/resources/image/stores/colorsqueen-coupons-1732082250.png",
    title: "Any cosy hoodie for men",
    subtitle: null,
    price: "₹975",
    oldPrice: "₹2,599",
    discount: "70% off",
    image:
      "https://asset22.ckassets.com/resources/image/staticpage_images/colors%20queen-1747399684.png",
    cta: "Grab deal",
  },
  {
    logo: "https://asset20.ckassets.com/resources/image/stores/puer-coupon-codes-1735638968.jpg",
    title: "Annual gold membership",
    subtitle: null,
    price: "₹1,000",
    oldPrice: "₹2,400",
    discount: null,
    image:
      "https://asset22.ckassets.com/resources/image/staticpage_images/bajaj%20prime%201-1744884840.png",
    cta: "Grab deal",
  },
  {
    logo: "https://asset20.ckassets.com/resources/image/stores/cleevo-offers-1745231039.png",
    title: "Annual gold membership",
    subtitle: null,
    price: "₹1,000",
    oldPrice: "₹2,400",
    discount: null,
    image:
      "https://asset22.ckassets.com/resources/image/staticpage_images/CLOVE%2011%202%20(1)-1745507182.png",
    cta: "Grab deal",
  },
  {
    logo: "https://asset20.ckassets.com/resources/image/stores/clove-oral-care-coupons-1735634904.jpg",
    title:
      "Clove Oral Care: Buy Ultimate Mouthwash 250ml each worth Rs. 645 at Rs. 57 Only",
    subtitle: null,
    price: "₹57",
    oldPrice: "₹645",
    discount: "Lowest Price Ever",
    image:
      "https://asset22.ckassets.com/resources/image/staticpage_images/CLOVE%2011%202%20(1)-1745507182.png",
    cta: "Grab Deal",
    isFlash: true,
  },
  {
    logo: "https://asset20.ckassets.com/resources/image/stores/puer-coupon-codes-1735638968.jpg",
    title:
      "Puer: Buy Liquid Detergent 1000ml Pack of 2 worth Rs. 1000 at Rs. 296",
    subtitle: null,
    price: "₹296",
    oldPrice: "₹1,000",
    discount: "Completely Natural",
    image:
      "https://asset22.ckassets.com/resources/image/staticpage_images/puer-1747038021.png",
    cta: "Grab Deal",
    isFlash: true,
  },
];

const FlashDeal = () => {
  const [current, setCurrent] = useState(0);
  const cardPerView = 3;
  const maxIndex = Math.max(0, deals.length - cardPerView);
  const sliderRef = useRef(null);
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 1 day in seconds

  React.useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  const handlePrev = () => {
    setCurrent((prev) => Math.max(0, prev - 1));
  };
  const handleNext = () => {
    setCurrent((prev) => Math.min(maxIndex, prev + 1));
  };

  const scroll = (dir) => {
    if (sliderRef.current) {
      // Use a data attribute for a valid selector
      const card = sliderRef.current.querySelector("[data-flash-card]");
      if (card) {
        const cardWidth = card.offsetWidth + 24; // 24px gap (gap-6)
        sliderRef.current.scrollBy({
          left: dir * cardWidth,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div
      style={{
        background:
          'url("https://asset22.ckassets.com/resources/image/dynamicpage_images/desktop-flash-admin-image-1745819383.png") center/cover',
        minHeight: 600,
        padding: "40px 0",
        position: "relative",
      }}
    >
      <div
        style={{
          textAlign: "center",
          color: "#fff",
          fontWeight: 700,
          fontSize: 48,
          letterSpacing: 1,
        }}
      >
        FLASH DEAL
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "24px 0" }}
      >
        <div
          style={{
            background: "#fff",
            borderRadius: 8,
            padding: "8px 24px",
            display: "flex",
            alignItems: "center",
            fontWeight: 500,
            fontSize: 18,
            color: "#000",
          }}
        >
          <i
            className="material-symbols-outlined mdi-schedule text-sm md:text-xl lg:text-2xl"
            aria-hidden="true"
          ></i>
          Deals ends in {formatTime(timeLeft)}
        </div>
      </div>
      <div style={{ position: "relative", width: "100%" }}>
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full shadow p-2 hover:bg-white hidden md:block"
          onClick={() => scroll(-1)}
          aria-label="Previous"
          style={{
            left: 0,
            top: "50%",
            position: "absolute",
            transform: "translateY(-50%)",
            zIndex: 99999,
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
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full shadow p-2 hover:bg-white hidden md:block"
          onClick={() => scroll(1)}
          aria-label="Next"
          style={{
            right: 0,
            top: "50%",
            position: "absolute",
            transform: "translateY(-50%)",
            zIndex: 9999,
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
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-4"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {deals.map((deal, idx) => (
            <div
              key={idx}
              data-flash-card
              className="w-[88vw] min-w-[88vw] max-w-[88vw] md:min-w-[500px] md:max-w-[520px] md:w-[500px] rounded-3xl shadow relative flex flex-col justify-between"
              style={{ scrollSnapAlign: "start", height: 380 }}
            >
              <div className="flex items-center justify-center overflow-hidden rounded-xl relative w-full h-full cursor-pointer">
                <div className="w-full h-full ">
                  <img
                    alt={deal.title}
                    loading="lazy"
                    width="302"
                    height="236"
                    decoding="async"
                    className="w-full h-full rounded-xl"
                    src={deal.image}
                    style={{ color: "transparent" }}
                  />
                </div>
                <div className="w-full absolute inset-0 z-10">
                  <div className="absolute top-[19%] md:top-[19%] left-2.5 flex items-center overflow-hidden lg:!top-[19%] ">
                    <img
                      alt={deal.title.split(":")[0]}
                      loading="lazy"
                      width="112"
                      height="56"
                      decoding="async"
                      className="!border-[1.5px] !border-[#F5F7F9] p-[2px] object-contain w-[72px] h-10 md:w-[84px] md:h-12 2xl:w-[108px] 2xl:h-[60px] mr-2 rounded-lg lg:rounded-xl overflow-hidden "
                      src={deal.logo}
                      style={{ color: "transparent" }}
                    />
                    <label className="text-ck-text-black text-[10px] md:text-xs font-normal w-20 text-left flex items-center border-l-[1px] border-ck-text-black pl-2 md:h-12">
                      {deal.title}
                    </label>
                  </div>
                  <button
                    type="button"
                    className="absolute bottom-2.5 2xl:bottom-3 right-2.5 2xl:right-3 bg-white border-none !rounded-lg tracking-tight !text-ck-blue !font-semibold !text-xs md:!text-sm lg:!text-base 2xl:!text-lg !px-4 !py-1.5 lg:!w-auto 2xl:!w-auto capitalize !max-w-[50%] truncate !bg-ck-blue !text-white stretched_link"
                  >
                    {deal.cta}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 32 }}>
        <button
          style={{
            background: "rgba(255,255,255,0.15)",
            color: "#fff",
            border: "1px solid #fff",
            borderRadius: 12,
            padding: "14px 60px",
            fontWeight: 600,
            fontSize: 20,
            cursor: "pointer",
            backdropFilter: "blur(2px)",
          }}
        >
          View all
        </button>
      </div>
    </div>
  );
};

export default FlashDeal;
