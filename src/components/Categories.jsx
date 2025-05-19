import React from "react";

const categories = [
  {
    name: "Credit Cards",
    img: "https://asset20.ckassets.com/resources/image/category/banking-finance-offers-4684-17455848681.png",
  },
  {
    name: "Biggest Sales",
    img: "https://asset20.ckassets.com/resources/image/category/biggest-sales-5257-17352940050.png",
  },
  {
    name: "Loans",
    img: "https://asset20.ckassets.com/resources/image/category/loans-offers-5376-17455651671.png",
  },
  {
    name: "Fashion",
    img: "https://asset20.ckassets.com/resources/image/category/fashion-offers-4199-17352129510.png",
  },
  {
    name: "Pharmacy",
    img: "https://asset20.ckassets.com/resources/image/category/health-medicine-offers-4203-17352130130.png",
  },
  {
    name: "Mobiles",
    img: "https://asset20.ckassets.com/resources/image/category/mobiles-phones-offers-4200-17352851830.png",
  },
  {
    name: "Electronics",
    img: "https://asset20.ckassets.com/resources/image/category/electronics-offers-4205-17352127230.png",
  },
  {
    name: "New on CashKaro",
    img: "https://asset20.ckassets.com/resources/image/category/new-on-ck-4908-17352852140.png",
  },
  {
    name: "Beauty & Grooming",
    img: "https://asset20.ckassets.com/resources/image/category/beauty-personal-care-offers-4206-17352128850.png",
  },
  {
    name: "Health & Wellness",
    img: "https://asset20.ckassets.com/resources/image/category/health-and-wellness-4900-17352129720.png",
  },
  {
    name: "Pharmacy",
    img: "https://asset20.ckassets.com/resources/image/category/food-and-grocery-4901-17352860840.png",
  },
  {
    name: "Mobiles",
    img: "https://asset20.ckassets.com/resources/image/category/departmental-offers-4204-17352129310.png",
  },
  {
    name: "Electronics",
    img: "https://asset20.ckassets.com/resources/image/category/electronics-offers-4205-17352127230.png",
  },
  {
    name: "New on CashKaro",
    img: "https://asset20.ckassets.com/resources/image/category/new-on-ck-4908-17352852140.png",
  },
  {
    name: "Beauty & Grooming",
    img: "https://asset20.ckassets.com/resources/image/category/beauty-personal-care-offers-4206-17352128850.png",
  },
  {
    name: "Health & Wellness",
    img: "https://asset20.ckassets.com/resources/image/category/health-and-wellness-4900-17352129720.png",
  },
];

const Categories = () => {
  const sliderRef = React.useRef(null);

  const scroll = (dir) => {
    if (sliderRef.current) {
      const width = sliderRef.current.offsetWidth / 5; // Show 5 at a time on large screens
      sliderRef.current.scrollBy({ left: dir * width, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full  xl:px-10 mt-8 topCategoryMain py-4 md:py-8">
      <h2 className="px-4 md:px-0 mb-[14px] md:mb-8 text-base md:text-2xl font-extrabold md:font-bold !leading-6 max-sm:line-clamp-1 md:!mb-5 mb-[4px]   text-black">
        Top Categories
      </h2>
      <div className="relative">
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full shadow p-2 hover:bg-white hidden md:block"
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
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full shadow p-2 hover:bg-white hidden md:block"
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
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-2 px-8"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="flex items-center cursor-pointer text-xs md:text-base font-semibold leading-4 md:leading-6 flex-col items-center w-full h-full justify-center text-center gap-2 lg:gap-4 text-base md:text-lg font-semibold leading-4 md:leading-[22px] md:pt-3 pt-[10px] text-ck-text-inactive hover:text-ck-text-black group"
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="lg:w-[136px] lg:h-[136px] w-[73px] h-[73px] rounded-full group-hover:shadow-[0px_0px_10px_8px_rgba(0,0,0,0.06)] group-hover:border-[#DDDCE7] group-hover:border ease-in duration-300 overflow-hidden flex items-center justify-center">
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="object-contain w-20 h-20 md:w-24 md:h-24"
                  draggable="false"
                />
              </div>
              <span className="line-clamp-2 text-center text-gray-700 font-semibold text-base md:text-lg leading-tight">
                {cat.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
