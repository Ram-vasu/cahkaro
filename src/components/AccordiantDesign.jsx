import React, { useState } from "react";

const stores = [
  ["Amazon", "Flipkart", "Myntra", "Ajio", "Nykaa"],
  ["Booking.com", "MamaEarth", "Truemeds", "XYXX Crew", "The Derma Co"],
  ["Croma", "OnePlus", "Samsung", "Cleartrip", "Mcaffeine"],
  ["Dot and Key", "Plum Goodness", "Boat", "WoW", "Adidas"],
  ["Minimalist", "GoDaddy", "Tata CLiQ", "Hostinger", "GIVA"],
  ["Times Prime", "Muscleblaze", "Lenskart", "Healthkart", "Udemy"],
  ["Snitch", "Pepperfry", "Fern N Petals", "Dell", "Bella Vita"],
  ["Bombay Shaving Company", "Clovia", "Earth Rhythm", "Shyaway", ""],
];

const categories = [
  [
    "Lingerie",
    "Home Appliances",
    "Kitchen Appliances",
    "Baby Grooming",
    "Washing Machines",
  ],
  [
    "Refrigerators",
    "Baby Bath Products",
    "Fragrances",
    "Skin Care Products",
    "Hair Care Products",
  ],
  [
    "Beard Shaving",
    "Air Conditioners",
    "Baby Skin Care",
    "Air Purifiers",
    "Electronics Products",
  ],
  ["Fashion Accessories", "Personal Care Appliances", "", "", ""],
];

const AccordionSection = ({ title, children, open, onClick }) => (
  <div className="w-full">
    <button
      className="flex items-center justify-center mx-auto text-2xl font-bold mb-6 focus:outline-none text-black"
      onClick={onClick}
      aria-expanded={open}
      style={{ gap: 8 }}
    >
      {title}
      <svg
        className={`ml-2 transition-transform duration-200 ${
          open ? "rotate-180" : "rotate-0"
        }`}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 10l5 5 5-5"
          stroke="#222"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
    <div
      className={`transition-all duration-300 ${
        open ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
      } overflow-hidden`}
    >
      {children}
    </div>
  </div>
);

const AccordiantDesign = () => {
  const [open, setOpen] = useState(0); // 0: stores, 1: categories

  return (
    <div className="w-full bg-white border-t border-b border-gray-200 py-12 px-2 md:px-0">
      <div className="max-w-8xl mx-auto flex flex-col md:flex-col md:space-x-0 space-y-12 md:space-y-0 justify-center items-center">
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <AccordionSection
            title="Popular Stores"
            open={open === 0}
            onClick={() => setOpen(open === 0 ? -1 : 0)}
            className="text-black"
            style={{ color: "black" }}
          >
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-y-4 gap-x-0 px-2 md:px-0">
              {stores[0].map((_, colIdx) => (
                <div key={colIdx} className="flex flex-col space-y-4">
                  {stores.map((row, rowIdx) =>
                    row[colIdx] ? (
                      <span
                        key={rowIdx}
                        className="text-base text-gray-900 text-left"
                      >
                        {row[colIdx]}
                      </span>
                    ) : null
                  )}
                </div>
              ))}
            </div>
          </AccordionSection>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <AccordionSection
            title="Popular Categories"
            open={open === 1}
            onClick={() => setOpen(open === 1 ? -1 : 1)}
            className="text-black"
            style={{ color: "black" }}
          >
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-y-4 gap-x-0 px-2 md:px-0">
              {categories[0].map((_, colIdx) => (
                <div key={colIdx} className="flex flex-col space-y-4">
                  {categories.map((row, rowIdx) =>
                    row[colIdx] ? (
                      <span
                        key={rowIdx}
                        className="text-base text-gray-900 text-left"
                      >
                        {row[colIdx]}
                      </span>
                    ) : null
                  )}
                </div>
              ))}
            </div>
          </AccordionSection>
        </div>
      </div>
    </div>
  );
};

export default AccordiantDesign;
