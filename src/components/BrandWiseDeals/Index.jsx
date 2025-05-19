import React, { useRef, useState } from "react";

const BrandsWiseDeal = ({ key, brandName, deals }) => {
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
    <section className="w-full px-4 md:px-10 xl:px-[72px] mt-8">
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-black">
            {brandName}
          </h2>
          <a
            href="#"
            className="text-[#0057FF] font-semibold text-base flex items-center gap-1 hover:underline"
          >
            View All <span className="text-lg">→</span>
          </a>
        </div>
        <div style={{ position: "relative", width: "100%" }}>
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full shadow p-2 hover:bg-white hidden md:block text-black"
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
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full shadow p-2 hover:bg-white hidden md:block text-black"
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
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-4"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {deals.map((deal, idx) => (
              <>
                <div
                  key={idx}
                  data-flash-card
                  className="hidden min-w-[500px] max-w-[520px] w-[98vw] md:w-[500px] rounded-3xl shadow relative flex flex-col justify-between md:flex"
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
                {/* Mobile Card */}
                <div
                  key={`mobile-${idx}`}
                  data-flash-card
                  className="flex md:hidden min-w-[80vw] max-w-[88vw] w-[88vw] rounded-xl shadow relative flex-col justify-between"
                  style={{ scrollSnapAlign: "start", height: 220 }}
                >
                  <div className="flex items-center justify-center overflow-hidden rounded-lg relative w-full h-full cursor-pointer">
                    <div className="w-full h-full ">
                      <img
                        alt={deal.title}
                        loading="lazy"
                        width="180"
                        height="120"
                        decoding="async"
                        className="w-full h-full rounded-lg"
                        src={deal.image}
                        style={{ color: "transparent" }}
                      />
                    </div>
                    <div className="w-full absolute inset-0 z-10">
                      <div className="absolute top-[19%] left-2.5 flex items-center overflow-hidden">
                        <img
                          alt={deal.title.split(":")[0]}
                          loading="lazy"
                          width="48"
                          height="28"
                          decoding="async"
                          className="!border-[1.5px] !border-[#F5F7F9] p-[1px] object-contain w-[36px] h-7 mr-2 rounded-lg overflow-hidden "
                          src={deal.logo}
                          style={{ color: "transparent" }}
                        />
                        <label className="text-ck-text-black text-[9px] font-normal w-12 text-left flex items-center border-l-[1px] border-ck-text-black pl-2 h-7">
                          {deal.title}
                        </label>
                      </div>
                      <button
                        type="button"
                        className="absolute bottom-2 right-2 bg-white border-none rounded-lg tracking-tight text-ck-blue font-semibold text-xs px-2 py-1 capitalize max-w-[60%] truncate bg-ck-blue text-white"
                      >
                        {deal.cta}
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 32 }}
        >
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
    </section>
  );
};

export default BrandsWiseDeal;
