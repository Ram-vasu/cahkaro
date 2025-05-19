import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const coupons = [
  {
    title: "Amazon Rewards",
    logo: "https://asset20.ckassets.com/resources/image/stores/amazon-1586422650.png",
    offer: "Upto 80% Off",
    highlight: "Upto 6% Rewards",
    expiry: "31-5-2025",
    highlightColor: "#005ecb",
  },
  {
    title: "Flipkart Cashback",
    logo: "https://asset20.ckassets.com/resources/image/stores/flipkart.png",
    offer: "Upto 90% Off",
    highlight: "Upto 7% Cashback",
    expiry: "31-5-2025",
    highlightColor: "#005ecb",
  },
  {
    title: "Myntra Cashback",
    logo: "https://asset20.ckassets.com/resources/image/stores/myntra-1632828693.png",
    offer: "Upto 90% Off",
    highlight: "Upto 6% Cashback",
    expiry: "31-5-2025",
    highlightColor: "#005ecb",
  },
  {
    title: "Ajio Cashback",
    logo: "https://asset20.ckassets.com/resources/image/stores/ajio-coupons-test-1696504043.png",
    offer: "Upto 80% Off",
    highlight: "Upto 8% Cashback",
    expiry: "31-5-2025",
    highlightColor: "#005ecb",
  },
  {
    title: "Nykaa Cashback",
    logo: "https://asset20.ckassets.com/resources/image/stores/nykaa-1735636843.jpg",
    offer: "Upto 60% Off",
    highlight: "Upto 4% Cashback",
    expiry: "31-5-2025",
    highlightColor: "#005ecb",
  },
];

const EcomPlatformCoupon = ({ title, card }) => {
  const couponsData = card ? card : coupons;
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 640;
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    variableWidth: true,
  };
  return (
    <div className="w-full flex flex-col items-center py-10 px-2 relative">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-black">
        {title ? title : "Today's Top Coupon Codes"}
      </h2>
      {/* Mobile: Slider, Desktop: Flex Grid */}
      <div className="w-full">
        <div className="block sm:hidden top-coupon-slider">
          <Slider {...settings} className="review-slick-slider">
            {couponsData.map((c, i) => (
              <div key={i} className="flex justify-center">
                <div
                  className="bg-white rounded-2xl border border-gray-200 w-[90vw] max-w-[320px] flex flex-col items-center shadow-sm hover:shadow-md transition overflow-hidden min-h-[320px]"
                  style={{ minHeight: 320 }}
                >
                  <div
                    className="w-full flex flex-col items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(180deg, #0070d2 0%, #005ecb 100%)",
                      padding: "24px 0 32px 0",
                      color: "#fff",
                      borderBottomLeftRadius: 0,
                      borderBottomRightRadius: 0,
                    }}
                  >
                    <div className="font-bold text-lg mb-3 text-white text-center leading-tight">
                      {c.title}
                    </div>
                    <div
                      className="bg-white rounded-lg px-4 py-2 flex items-center justify-center mb-3"
                      style={{ minHeight: 44 }}
                    >
                      <img
                        src={c.logo}
                        alt={c.title}
                        className="h-12 w-auto max-w-[80px] object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center flex-1 px-4 py-4">
                    <div className="text-gray-700 text-base mb-2 text-center">
                      {c.offer}
                    </div>
                    <div
                      className="font-bold text-lg mb-2 text-center"
                      style={{ color: c.highlightColor }}
                    >
                      {c.highlight}
                    </div>
                    <div className="text-gray-400 text-xs mt-auto">
                      Expires: {c.expiry}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="hidden sm:flex flex-row flex-wrap gap-6 justify-center items-stretch">
          {couponsData.map((c, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-200 w-full sm:w-[220px] md:w-[180px] flex flex-col items-center shadow-sm hover:shadow-md transition overflow-hidden min-h-[320px] max-w-[260px]"
              style={{ minHeight: 320 }}
            >
              <div
                className="w-full flex flex-col items-center justify-center"
                style={{
                  background:
                    "linear-gradient(180deg, #0070d2 0%, #005ecb 100%)",
                  padding: "24px 0 32px 0",
                  color: "#fff",
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                }}
              >
                <div className="font-bold text-lg mb-3 text-white text-center leading-tight">
                  {c.title}
                </div>
                <div
                  className="bg-white rounded-lg px-4 py-2 flex items-center justify-center mb-3"
                  style={{ minHeight: 44 }}
                >
                  <img
                    src={c.logo}
                    alt={c.title}
                    className="h-12 w-auto max-w-[80px] object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center flex-1 px-4 py-4">
                <div className="text-gray-700 text-base mb-2 text-center">
                  {c.offer}
                </div>
                <div
                  className="font-bold text-lg mb-2 text-center"
                  style={{ color: c.highlightColor }}
                >
                  {c.highlight}
                </div>
                <div className="text-gray-400 text-xs mt-auto">
                  Expires: {c.expiry}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full shadow p-2 hover:bg-white hidden sm:block"
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
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full shadow p-2 hover:bg-white hidden sm:block"
        onClick={() => scroll(1)}
        aria-label="Next"
        style={{
          right: 0,
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
          <path d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default EcomPlatformCoupon;
