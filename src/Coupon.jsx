import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const features = [
  {
    image:
      "https://asset22.ckassets.com/resources/image/staticpage_images/img1-1742381529.png",
    alt: "Highest Cashback Rated",
    label: "Highest Cashback Rated",
  },
  {
    image:
      "https://asset22.ckassets.com/resources/image/staticpage_images/img2-1742381556.png",
    alt: "Trusted by 2 Crore+ Indians",
    label: "Trusted by 2 Crore+ Indians",
  },
  {
    image:
      "https://asset22.ckassets.com/resources/image/staticpage_images/img3-1742381572.png",
    alt: "₹1000 Crore Cashback Paid",
    label: "₹1000 Crore Cashback Paid",
  },
];

const Coupon = ({ title, card }) => {
  const featuresData = card ? card : features;
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
    <div className="w-full flex flex-col items-center py-8 px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-black">
        {title ? title : "India's Best Cashback & Coupons Site"}
      </h2>
      {/* Slider for <=700px, grid for >700px */}
      <div className="w-full flex justify-center overflow-x-hidden">
        <div
          className="block md:hidden w-full max-w-full"
          style={{ maxWidth: 700, margin: "0 auto" }}
        >
          <Slider {...settings} className="review-slick-slider">
            {featuresData.map((f, i) => (
              <div key={i} className="flex justify-center">
                <div className="bg-white rounded-3xl overflow-hidden flex flex-col items-center justify-end shadow-md w-[90vw] max-w-[320px] min-w-[220px] h-[220px] sm:h-[320px] mx-auto">
                  <img
                    src={f.image}
                    alt={f.alt}
                    className="w-full h-full object-contain object-center p-4"
                  />
                  <span className="block text-center text-base font-semibold text-gray-700 mt-2 mb-4 px-2 truncate w-full">
                    {f.label}
                  </span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="hidden md:flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center items-center w-full max-w-5xl mx-auto">
          {featuresData.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl overflow-hidden flex flex-col items-center justify-end shadow-md w-full max-w-[320px] min-w-[220px] h-[220px] sm:h-[320px] mx-auto"
            >
              <img
                src={f.image}
                alt={f.alt}
                className="w-full h-full object-contain object-center p-4"
              />
              <span className="block text-center text-base font-semibold text-gray-700 mt-2 mb-4 px-2 truncate w-full">
                {f.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Coupon;
