import React from "react";

const steps = [
  {
    title: (
      <>
        Visit CashKaro <br /> app first
      </>
    ),
    desc: "before you shop online",
    img: "https://asset22.ckassets.com/wp/wp-content/themes/CashKaro_WP_V1/img/select-brand.png",
    imgAlt: "Visit CashKaro",
  },
  {
    title: (
      <>
        Select the brand you <br /> want to shop on
      </>
    ),
    desc: "and you will be re-directed to their site/app",
    img: "https://asset22.ckassets.com/wp/wp-content/themes/CashKaro_WP_V1/img/shop-pay.png",
  },
  {
    title: (
      <>
        Shop & pay <br /> as usual on the site
      </>
    ),
    desc: "you are shopping normally, no difference",
    img: "https://asset22.ckassets.com/wp/wp-content/themes/CashKaro_WP_V1/img/ck-order.png",
  },
  {
    title: (
      <>
        Get Cashback <br /> on your order
      </>
    ),
    desc: "in your CashKaro account",
    img: "https://asset22.ckassets.com/wp/wp-content/themes/CashKaro_WP_V1/img/ck-upi.png",
  },
  {
    title: (
      <>
        Transfer your <br /> Cashback
      </>
    ),
    desc: "to your Bank, UPI or take as Amazon / Flipkart Gift Cards",
    img: "https://asset22.ckassets.com/wp/wp-content/themes/CashKaro_WP_V1/img/select-brand.png",
  },
];

const CashkaroWorks = () => {
  return (
    <div className="w-full bg-white py-8 px-2 md:px-8">
      <h2
        className="text-2xl md:text-3xl font-bold text-center mb-8 text-black"
        style={{ fontFamily: "Inter", fontWeight: 700 }}
      >
        How CashKaro Works
      </h2>
      <div className="relative">
        {/* Slider Controls (desktop only) */}
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full shadow p-2 hover:bg-white hidden md:block text-black"
          style={{ left: "-32px" }}
          onClick={() => {
            const container = document.getElementById("ck-works-slider");
            if (container) {
              container.scrollBy({ left: -350, behavior: "smooth" });
            }
          }}
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
          style={{ right: "-32px" }}
          onClick={() => {
            const container = document.getElementById("ck-works-slider");
            if (container) {
              container.scrollBy({ left: 350, behavior: "smooth" });
            }
          }}
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
        <div
          id="ck-works-slider"
          className="flex flex-row items-stretch gap-6 max-w-8xl mx-auto overflow-x-auto scrollbar-hide px-2"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            overflowX: "auto",
            justifyContent: "flex-start", // Ensure items start from the left
          }}
          tabIndex={0}
        >
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 bg-[#FFF8F3] border-2 border-[#FF6F1A] rounded-[24px] flex flex-row items-center min-w-[320px] max-w-[420px] h-[170px] md:h-[210px] p-4 md:p-8 justify-between shadow-none"
              style={{ scrollSnapAlign: "start", visibility: "visible" }}
            >
              <div className="flex flex-col justify-center flex-1 min-w-0">
                <p
                  className="font-bold text-[20px] md:text-[28px] leading-[26px] md:leading-[34px] text-[#FF6F1A] mb-2 hwCkWorks_header"
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 700,
                    wordBreak: "break-word",
                  }}
                >
                  {step.title}
                </p>
                <p
                  className="text-[#232B39] text-[15px] md:text-[18px] font-medium hwCkWorks_txt"
                  style={{ fontFamily: "Inter", fontWeight: 500 }}
                >
                  {step.desc}
                </p>
              </div>
              <img
                src={step.img}
                alt={step.imgAlt || "step"}
                className="w-[70px] h-[70px] md:w-[126px] md:h-[126px] object-contain ml-4 flex-shrink-0"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CashkaroWorks;
